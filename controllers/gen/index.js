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



router.get("/post/:id", (req, res) => {
    Posts.findById(req.params.id, (error, newPost) => {
        res.render("gen/show", {
            posts: newPost
        })
    })
})

//Edit, User can edit what they've written
//Update, User can update post with edits made
router.get("/edit/:id", (req, res) => {
    Posts.findById(req.params.id, (error, newPost) => {
        res.render("gen/edit", {
            posts: newPost
        })
    })
})

router.put("/edit/:id", (req, res) => {
    Posts.findOneAndUpdate(req.params.id, req.body, (error, updatedPost) => {
        res.redirect("/gen/user")
    })
})


//Delete, User can delete their post
 router.delete("/post/:id", (req, res) => {
     Posts.findByIdAndRemove(req.params.id, (err, data)=>{
         res.redirect("/gen/user")
     })
 })



module.exports = router