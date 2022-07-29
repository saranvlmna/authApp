const { authService } = require('../service');

module.exports = {

    signup: async (req, res, next) => {
        try {
            const user = await authService.signup(req.body);
            req.session.user = user.data
            if (user) {
                res.redirect('/')
            }
        } catch (error) {
            res.render('signup', { logInError: error.message });
        }
    },

    login: async (req, res, next) => {
        try {
            const user = await authService.login(req.body);
            req.session.user = user
            if (user) {
                res.redirect('/')
            }
        } catch (error) {
            res.render('login', { logInError: error.message });
        }
    },

    signupForm: (req, res) => {
        res.render('signup')
    },

    loginForm: (req, res) => {
        res.render('login')
    },

    logout: (req, res) => {
        req.session.destroy();
        res.redirect('/')
    }

}

