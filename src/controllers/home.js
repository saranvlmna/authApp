const { StatusCodes } = require('http-status-codes')
const { homeService } = require('../service');

module.exports = {

    listUsers: async (req, res, next) => {
        try {
            if (req.session.user) {
                const user = req.session.user;
                var users = await homeService.listUsers()
                if (res.status(StatusCodes.OK)) {
                    return res.render('home', { users, user })
                }
            } else {
                return res.render('login')
            }
        } catch (error) {
            next(error)
        }
    },
}