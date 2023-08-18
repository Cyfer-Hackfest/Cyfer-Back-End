import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

import User from "../models/user.js";

const JWT_SECRET = process.env.JWT_SECRET;
class UserController {
    //POST - /register
    async register(req, res) {
        req.method = "POST";
        const { username, password } = req.body;
        const characterTypeRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{8,}$/;
        
        if (!username || !password || !characterTypeRegex.test(password)) {
            res.status(400).send("Bad request");
        }
        
        // Check account wallet có chính xác...
        
        const existedUser = await User.findOne({ username });
        if (existedUser) return res.status(400).send("Existing an user");

        let hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ username, password: hashedPassword });
        try {
            const savedUser = await user.save();
            res.send(savedUser);
        } catch (err) {
            res.status(400).send(err);
        }
    }

    //POST - /login
    async login(req, res) {
        req.method = "POST";
        const { username, password } = req.body;
        try {
            const user = await User.findOne({ username });
            if (!user) return res.status(400).send("User not found");

            const isCorrectPassword = await bcrypt.compare(password, user.password);
            if (!isCorrectPassword)
            return res.status(400).send("Invalid password");

            const token = jwt.sign({ _id: user._id }, JWT_SECRET);
            res.header("auth-token", token).send(token);
        } catch (err) {
            res.status(400).send(err);
        }
    }
}

export default new UserController();