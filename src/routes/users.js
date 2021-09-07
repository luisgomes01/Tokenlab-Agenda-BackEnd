const knex = require('../db/knex')
const router = require("express").Router()


router.get('/', async (req, res) => {
    const users = await knex('user')
    return res.json(users)
})

router.post('/', async (req, res) =>{
    const {name, username, password } = req.body;
    if (!name||!username||!password ) {
        return res.status(400).json({message: 'There are a few fields missing.'})
    }
    const [id] = await knex('user').insert({name, username, password});
    const user = await knex("user").where('id',id).first();
    return res.json(user);
}) 


router.get('/:id', async (req, res) =>{
    const {id} = req.params;
    
    const user = await knex("user").where('id',id).first();
    return res.json(user);
}) 

router.put('/:id', async (req, res) => {
    const {name, username, password } = req.body;
    const {id} = req.params;

    await knex("user").where('id',id).update({name,username,password})
    const user = await knex("user").where('id',id).first();
    
    return res.json(user)
})

router.delete('/:id',  async (req, res) =>{
    const {id} = req.params;
    await knex("user").where('id',id).del();
    
    return res.status(201).send();
}) 

module.exports = router