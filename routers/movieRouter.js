const express = require("express")
const router = express.Router()

const movieController = require("../controllers/movieController.js")


//Index
router.get("/", movieController.index)

//Show
router.get("/:id", movieController.show)

//Store
router.post("/:id/reviews", movieController.storeReview)


module.exports = router