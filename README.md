# Express.js App with JWT and Mongoose

This is a basic Express.js application that demonstrates user authentication using JSON Web Tokens (JWT) and MongoDB via Mongoose. The app includes middleware for enhancing security and handling incoming requests, along with routes for user registration and authentication.

## Features

- User registration with MongoDB storage
- User login with JWT-based authentication
- Protected routes accessible only with valid JWT

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed.
- MongoDB server or a MongoDB Atlas account for database storage.

## Installation

1. Clone this repository:

   ```bash
   git clone <repository_url>
   cd express-jwt-mongoose

   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up your environment variables: Create a .env file in the root directory with the following content:

   ```bash
   PORT=<port_number>
   DB_CONNECTION_STRING=<mongodb_connection_string>
   JWT_SECRET=<jwt_secret_key>
   ```

Replace <port_number> with the desired port number (e.g., 3000), <mongodb_connection_string> with your MongoDB connection string, and <jwt_secret_key> with a secret key for JWT token encryption.

# Usage

1. Start the server:

   ```bash
   npm start
   ```

# Contributing

Contributions are welcome! If you find any issues or would like to enhance the app, feel free to create a pull request.

# License

This project is licensed under the MIT License - see the LICENSE file for details.
