const express = require("express")
const app = express()
const port = process.env.PORT || 3000

const movieRouter = require("./routers/movieRouter.js")

//Middlewares
app.use(express.static("public"))
app.use("/api/movies", movieRouter)



app.get("/", (req, res) => {
    res.send("Root")
})


app.listen(port, () => {
    console.log(`Server port: ${port}`)
})