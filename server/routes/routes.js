// Importing Libraries
const express = require("express");
const router = express.Router();

// Importing Controllers
const controller = require("../controllers/controller");

// Contact Routes
router.post("/add", controller.add_contact);
router.get("/", controller.get_all_contacts);
router.get("/details/:id", controller.get_one_contact);
router.patch("/edit/:id", controller.update_contact);
router.delete("/delete/:id", controller.delete_contact);

// Export Routes
module.exports = router;
