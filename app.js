const express = require("express")
const app = express()
const port = process.env.PORT || 3000
const cors = require("cors")

const movieRouter = require("./routers/movieRouter.js")

//Middlewares
app.use(
    cors({
        origin: process.env.CORS_ORIGIN
    })
)
const notFound = require("./middlewares/notFound.js")
const errorsHandler = require('./middlewares/errorsHandler')
app.use(express.static("public"))


app.get("/", (req, res) => {
    res.send("Root")
})

app.use("/api/movies", movieRouter)

app.use(errorsHandler)
app.use(notFound)

app.listen(port, () => {
    console.log(`Server port: ${port}`)
})