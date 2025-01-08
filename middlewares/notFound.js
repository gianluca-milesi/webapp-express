function notFound(req, res, next){
    res.json({
        error: "Page not found",
        message: "Pagina non trovata"
    })
}

module.exports = notFound