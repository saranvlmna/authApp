const { User } = require("../db")
module.exports = {

    listUsers: async () => {
        return await User.list()
    }
}