const { Router } = require("express")
const prompts = require("../../models/prompts")

const router = Router()

//Index, User Home Page --> Daily Writing Prompt
router.get("/user", (req, res) => {
    res.render("gen/userHomePage.jsx", {prompts})
})

//New, User writes for Daily Writing Prompt
//Create, User posts what they've written
router.get("/write", (req, res) => {
    // res.send("2 working")
    res.render("gen/write.jsx")
})

//Show, User can view their post
router.get("/posts", (req, res) => {
    // res.send("3 working")
    res.render("gen/show.jsx")
})

//Edit, User can edit what they've written
router.get("/edit", (req, res) => {
    // res.send("4 working")
    res.render("gen/edit.jsx")
})

//Delete, User can delete their post
router.get("/delete", (req, res) => {
    // res.send("5 working")
})

module.exports = router