const { Router } = require("express")
const prompts = require("../../models/prompts")
const Posts = require("../../models/posts")

const router = Router()



//Index, User Home Page --> Daily Writing Prompt
router.get("/user", (req, res) => {
    Posts.find({}, (error, allPosts)=>{
        res.render("gen/userHomePage.jsx", 
        {posts: allPosts, prompts}, 
    )})
    // res.render("gen/userHomePage.jsx", {prompts})
})

//New, User writes for Daily Writing Prompt
//Create, User posts what they've written
router.get("/write", (req, res) => {
    // res.send("2 working")
    res.render("gen/write.jsx")
})

router.post("/user/", (req, res) => {
    Posts.create(req.body, (error, createdPosts)=>{
        res.redirect("/gen/user")
    })
})


//Show, User can view their post
router.get("/post", (req, res) => {
    // res.render("gen/show.jsx", {
    //     posts: Posts[req.params.index],
    //     index: req.params.index,
// })
    Posts.find({}, (error, allPosts) => {
        res.render("gen/show.jsx",
            { posts: allPosts, prompts },
        )
    })
    
})


//Edit, User can edit what they've written
router.get("/edit", (req, res) => {
    // res.send("4 working")
    res.render("gen/edit.jsx")
})

//Edit
router.get("/:index/edit", (req, res) => {
    res.render("todo/edit.jsx", {
        index: req.params.index,
        todo: todos[req.params.index]
    })
})

//Update - takes info from form and updates tood
router.put("/:index", (req, res) => {
    todos[req.params.index] = req.body;
    res.redirect("/todo/")
})

//Delete, User can delete their post
router.get("/delete", (req, res) => {
    // res.send("5 working")
})

module.exports = router