const knex = require("../db/knex");

const router = require("express").Router()

router.get('/', async (req, res) => {
    const events = await knex('event')
    return res.json(events)
});

router.post('/', async (req, res) => {
    const { date, start, end, description, user_id } = req.body;
    if (!date||!start||!end||!description||!user_id) {
        return res.status(400).json({message: 'There are a few fields missing.'})
    }
    const [id] = await knex('event').insert({ date, start, end, description, user_id});
    const event = await knex('event').where('id', id). first();
    return res.json(event);
});

router.get('/user/:user_id', async (req, res) => {
    const {user_id} = req.params;
    const events = await knex('event').where('user_id', user_id)
    return res.json(events)
});

router.get('/day/:date', async (req, res) => {
    const {date} = req.params;
    const events = await knex('event').where('date', date);
    return res.json(events)
})

router.put('/:id', async (req, res) => {
    const { date, start, end, description, user_id } = req.body;
    if (!date||!start||!end||!description||!user_id) {
        return res.status(400).json({message: 'There are a few fields missing.'})
    }
    const {id} = req.params

    await knex('event').where('id', id).update({date, start, end, description, user_id})
    const event = await knex('event').where('id', id).first();

    return res.json(event)
});

router.delete('/:id',  async (req, res) =>{
    const {id} = req.params;
    await knex("event").where('id',id).del();
    return res.status(201).send();
}) 

module.exports = router