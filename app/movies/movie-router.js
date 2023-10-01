const express = require("express");
const { movieSearch,addRemoveFav } = require("./movie-controller");
const { movieSearchDto,addRemoveFavDto } = require("../../utils/validator");
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
 *     responses:
 *       200:
 *         description: The list of movies.
 *         content:
 *           application/json: 
 *       500:
 *         description: Some server error
 *       400:
 *         description: Payload Validation error
 *
 */
router.get('/search',validator.query(movieSearchDto),movieSearch)

/**
 * @swagger 
 * /api/movies/favourite:
 *   post:
 *     summary: Add / Remove movies to/from favourite list
 *     tags: [Movies] 
 *     requestBody:
 *         required: true
 *         content:
 *          application/json:
 *         schema: 
 *          type: object
 *          required:
 *             - imdbId
 *             - action 
 *          properties:
 *              imdbId:
 *                  type: string
 *              action:
 *                  type: string
 *                  description: add or remove to/from favourite list
 *          example:
 *              action:add
 *              imdbId:123m34df
 *     responses:
 *       200:
 *         description: Success of add or remove movies from favourite list.
 *         content:
 *           application/json: 
 *       500:
 *         description: Some server error
 *       400:
 *         description: Payload Validation error
 *
 */
router.post("/favourite",validator.body(addRemoveFavDto),addRemoveFav);

module.exports = router;