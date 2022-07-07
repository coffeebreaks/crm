const express = require("express")
const router = express.Router()


router.use((req,res,next)=> {
    console.log("index")
    next()
})

router.route("/")
.get((req,res)=> {
    res.send("Root") 
    console.log("root")
})

module.exports = router
