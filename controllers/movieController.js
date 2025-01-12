const connection = require('../data/db.js')

//Index
function index(req, res) {
    const sql = `SELECT * FROM movies`

    connection.query(sql, (err, results) => {
        if (err) return res.status(500).json({ message: err.message })
        //riscrivere la proprietà image per far combaciare il path per il forntend
        results.forEach((movie) => {
            movie.image = `${process.env.BE_HOST}/images/movies_cover/${movie.image}`
        })

        res.json(results)
    })
}

//Show
function show(req, res) {
    const id = req.params.id

    const sql = `
        SELECT movies.*, AVG(vote) AS avg_vote
        FROM movies
        JOIN reviews
        ON movies.id = reviews.movie_id 
        WHERE movies.id = ?
        GROUP BY movies.id;
    `

    connection.query(sql, [id], (err, results) => {
        if (err) return res.status(500).json({ message: err.message })
        if (results.length === 0)
            return res.status(400).json({
                error: "Not found",
                message: "Movie not found"
            })


        const movie = results[0]
        movie.image = `${process.env.BE_HOST}/images/movies_cover/${movie.image}`

        const sql = `SELECT * FROM reviews WHERE movie_id = ?`

        connection.query(sql, [id], (err, results) => {
            if (err) return res.status(500).json({ message: err.message })
            movie.reviews = results

            res.json(movie)
        })
    })
}


module.exports = { index, show }