const { User } = require('../db');
const  PasswordService =require('./password')
module.exports = {

    signup: async (data) => {
        data.password = await PasswordService.encrypt(data.password)
        return await User.create(data);
    },
    
    login: async (data) => { 
        const Users = await User.findOne({email: data.email});
        if (!Users.data) {
            throw new Error('User not found');
        }
        const isValid = await PasswordService.compare(data.password, Users.data.password);
        if (!isValid) {
            throw new Error('Invalid password');
        }
        return Users;
    }
}