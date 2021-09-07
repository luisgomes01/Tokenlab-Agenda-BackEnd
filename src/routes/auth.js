const knex = require('../db/knex')
const router = require("express").Router()


router.post('/', async (req, res) => {
    const {username, password} = req.body;
    
    const user = await knex("user").where('username', username).first();
    if (!user) {
        return res.status(400).json({message: 'user not found.'});
    }
    if (user.password !== password) {
        return res.status(400).json({message: 'password is not correct.'});
    }
    return res.json(user)
})


module.exports = router;