const { RESTDataSource } = require('apollo-datasource-rest');
const serverConfig = require('../server');

class AccountAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = serverConfig.account_api_url;
    }
    async createAccount(account) {
        account = new Object(JSON.parse(JSON.stringify(account)));
        return await this.post('/accounts', account);
    }
    async accountByUsername(username) {
        return await this.get(`/account/${username}`);
    }
    async createTransaction(transaction) {
        transaction = new Object(JSON.parse(JSON.stringify(transaction)));
        return await this.post('/transaction', transaction);
    }
    async transactionByUsername(username) {
        return await this.get(`/transactions/${username}`);
    }
}
module.exports = AccountAPI;