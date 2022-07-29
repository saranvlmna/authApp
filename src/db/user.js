const { User } = require('../models');

module.exports = {

    create: async (data) => {
        const result = await User.create(data)
        return {
            data: result
        }
    },
    
    findByEmail: async (email) => {
        return await User.findOne({ email });
    },

    findByMobile: async (phone) => {
        return await User.findOne({ phone })
    },

    list: async () => {
        const data = await User.find()
        return {
            data: data
        }
    },
}

