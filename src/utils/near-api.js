import * as nearAPI from "near-api-js";

const { keyStores, connect, Contract } = nearAPI;
const myKeyStore = new keyStores.BrowserLocalStorageKeyStore();
const connectionConfig = {
    networkId: "testnet",
    keyStore: myKeyStore, 
    nodeUrl: "https://rpc.testnet.near.org",
    walletUrl: "https://wallet.testnet.near.org",
    helperUrl: "https://helper.testnet.near.org",
    explorerUrl: "https://explorer.testnet.near.org",
};

class NearController {
    async connection() {
        return await connect(connectionConfig);
    }

    createContract(accountId, contractId, viewMethods = [], changeMethods = []) {
        const methodOptions = {
            viewMethods, changeMethods
        }

        const contract = new Contract(
            accountId,
            contractId,
            methodOptions
        );
    
        return contract;
    }

    async getAccount(accountId) {
        let connection = this.connection();
        return await connection.account(accountId);
    }
}

export default new NearController();