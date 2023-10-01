const express = require("express");
const { movieSearch,addRemoveFav } = require("./movie-controller");
const { movieSearchDto } = require("../../utils/validator");
const router = express.Router(); 
const validator = require("express-joi-validation").createValidator()

/**
 * @swagger
 * tags:
 *   name: Movies
 *   description: The Movies managing API
 * /api/movies/search:
 *   get:
 *     summary: Search Movie title
 *     tags: [Movies] 
 *     parameters:
 *         in: query
 *         name: q
 *         schema: 
 *          type:string
 *          required:true  
 *     responses:
 *       200:
 *         description: The list of movies.
 *         content:
 *           application/json: 
 *       500:
 *         description: Some server error
 *
 */
router.get('/search',validator.query(movieSearchDto),movieSearch)

router.post("/favourite",addRemoveFav);

module.exports = router;