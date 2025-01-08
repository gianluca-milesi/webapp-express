const express = require("express")
const app = express()
const port = process.env.PORT || 3000

const movieRouter = require("./routers/movieRouter.js")
const notFound = require("./middlewares/notFound.js")

app.use(express.static("public"))





app.get("/", (req, res) => {
    res.send("Root")
})

app.use("/api/movies", movieRouter)
app.use(notFound)


app.listen(port, () => {
    console.log(`Server port: ${port}`)
})