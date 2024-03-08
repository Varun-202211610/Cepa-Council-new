require('dotenv').config()

const config = {
    PORT: process.env.PORT || 3002,
    API_URL: process.env.API_URL || ""
}


module.exports = config