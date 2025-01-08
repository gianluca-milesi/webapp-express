function notFound(req, res){
    res.json({
        error: "Page not found",
        message: "Pagina non trovata"
    })
}

module.exports = notFound