const transactionResolver = {
    Query: {
        transactionByUsername: async (_, { username }, { dataSources, userIdToken }) => {
            usernameToken = (await dataSources.authAPI.getUser(userIdToken)).username
            if (username == usernameToken)
                return dataSources.accountAPI.transactionByUsername(username)
            else
                return null
        }
    },
    Mutation: {
        createTransaction: async (_, { transaction }, { dataSources, userIdToken }) => {
            usernameToken = (await dataSources.authAPI.getUser(userIdToken)).username
            if (transaction.usernameOrigin == usernameToken)
                return dataSources.accountAPI.createTransaction(transaction)
            else
                return null
        },
        deleteTransactionById: (_, { id }, { dataSources }) => {
            return dataSources.accountAPI.deleteTransaction(id);
        }
    }
};
module.exports = transactionResolver;