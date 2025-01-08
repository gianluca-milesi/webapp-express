const express = require("express")
const app = express()
const port = process.env.PORT || 3000




app.get("/", (req, res) => {
    res.send("Root")
})


app.listen(port, () => {
    console.log(`Server port: ${port}`)
})