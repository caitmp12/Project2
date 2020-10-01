const mongoose = require("mongoose")

const postsSchema = new mongoose.Schema({
    title: { type: String, required: true },
    post: { type: String, required: true },
})

const Posts = mongoose.model("Posts", postsSchema)

module.exports = Posts