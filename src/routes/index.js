const router = require("express").Router()
const eventRoutes = require("./events")
const userRoutes = require('./users')
const authRoutes = require('./auth')

router.use("/events", eventRoutes)
router.use("/users", userRoutes)
router.use("/auth", authRoutes)

module.exports = router