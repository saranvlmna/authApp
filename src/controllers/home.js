const { StatusCodes } = require('http-status-codes')
const { homeService } = require('../service');
module.exports = {
    
    listUsers: async (req, res, next) => {
        try {
            const user = await homeService.listUsers();
            return res.status(StatusCodes.OK).json({
                message: "Users fetched successfully",
                data: user,
            })
        } catch (error) {
            next(error)
        }
    },
}