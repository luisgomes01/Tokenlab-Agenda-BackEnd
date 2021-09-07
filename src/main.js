const cors = require("cors")

const express = require("express")
const routes = require("./routes")
const App = express()

App.use(express.json())
App.use(cors())
App.use(routes)

App.listen("3001", () => {
    console.log("Running")
})

