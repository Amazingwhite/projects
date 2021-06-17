const jwt = require('jsonwebtoken')
<<<<<<< HEAD
const config = require('config')
=======
<<<<<<< HEAD
const config = require('config')
=======
>>>>>>> 80168492fb305515cc60284b8f378c2c2fecccd7
>>>>>>> 9ef91c50d3980fa45e9c320d0beec77d979362ce

module.exports = (req, res, next) => {
    if (req.method === 'OPTIONS') {
        return next()
    }

    try {
        const token = req.headers.authorization.split(' ')[1]
<<<<<<< HEAD

        if (!token) {
=======
<<<<<<< HEAD

        if (!token) {
=======
        console.log(token)
        console.log(req.headers)

        if (!token) {
            console.log('No token')
>>>>>>> 80168492fb305515cc60284b8f378c2c2fecccd7
>>>>>>> 9ef91c50d3980fa45e9c320d0beec77d979362ce
            return res.status(401).json({ message: 'Нет авторизации' });
            
        }

        const decoded = jwt.verify(token, config.get('jwtSecret'))
        req.user = decoded
        next()
    } catch (e) {
        res.status(401).json({ message: 'Нет авторизации' });
    }
}