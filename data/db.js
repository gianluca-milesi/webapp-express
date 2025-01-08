const mysql = require("mysql2")

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: "root",
    password: "Boolean_db",
    database: "movies_db"
})

connection.connect((err) => {
    if (err) throw err

    console.log("Connessione riuscita")
})

module.exports = connection