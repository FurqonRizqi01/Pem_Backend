// import Student Controller
const StudentController = require("../controllers/StudentController");

// import express
const express = require("express");
const students = require("../data/students");

// make an object router
const router = express.Router();

// make home routing
router.get("/", (req, res) => {
    res.send("Hi, Muhammad Furqon Rizqi");
});

// Routing for Students
router.get("/students", StudentController.index);
router.post("/students", StudentController.store);
router.put("/students/:id", StudentController.update);
router.delete("/students/:id", StudentController.destroy);

// export routing
module.exports = router;