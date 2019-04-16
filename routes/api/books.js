const router = require("express").Router();
const booksController = require("../../controllers/booksController");

// Matches with "/api/books"
router.route("/saved")
  .get(booksController.findAll);


  
// add book to router
router.route("/add")  
.post(booksController.create);

// delete book from list
router.route("/delete/:id")
  .delete(booksController.remove);

module.exports = router;
