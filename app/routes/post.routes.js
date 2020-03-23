module.exports = app => {
    const posts = require("../controllers/post.controller.js");

    let router = require("express").Router();

    // Create a new post
    router.post("/", posts.create);

    // Retrieve all posts
    router.get("/", posts.findAll);

    // Retrieve published posts
    router.get("/published", posts.findAllPublished);

    // Retrieve single post
    router.get("/:id", posts.findOne);

    // Update post
    router.put("/:id", posts.update);

    // Delete single post
    router.delete("/:id", posts.delete);

    // Delete all posts
    router.delete("/", posts.deleteAll);

    app.use("/api/posts", router);
}