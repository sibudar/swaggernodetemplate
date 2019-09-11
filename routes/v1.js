const express = require("express");
const router = express.Router();


/**
 * @swagger
 * /api/users:
 *   get:
 *     tags:
 *       - users
 *     description: Returns all users
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of users
 *         schema:
 *           $ref: '#/definitions/users'
 * 
 * 
 * 
 */
router.get("/", async function (req, res) {
    res.status(200).send({res:"hellow"});
    

})


module.exports = router