const { User } = require("../db")
module.exports = {

    listUsers: async () => {
        const result = await User.list()
        const users = []
        result.data.map(async (item) => {
            const joinedDate = await toDate(item.createdAt)
            users.push({
                name: item.name,
                email: item.email,
                joinedDate: joinedDate
            })
        })
        return users
    }
}

toDate = (date) => {
    const d = new Date(date)
    const day = d.getDate()
    const month = d.getMonth() + 1
    const year = d.getFullYear()
    return day + "/" + month + "/" + year
}