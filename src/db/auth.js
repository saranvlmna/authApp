const { User } = require('../models');

module.exports = {

    create: async (data) => {
        const result = await User.create(data)
        return {
            data: result
        }
    },
    
    findOne: async (data) => { 
        const user = await User.findOne(data)
        return {
            data: user
        }
    },

    list: async () => {
        const data = await User.find()
        return {
            data: data
        }
    },
}