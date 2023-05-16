const router = require("express").Router()

const bikesRoutes = require("./bikes.routes")
router.use("/bikes", bikesRoutes)

module.exports = router