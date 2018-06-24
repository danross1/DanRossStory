var express = require('express');
var router = express.Router();
const pool = require('../pool');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id/:likes', function (req, res) {
    const galleryId = req.params.id;
    const itemLikes = parseInt(req.params.likes) + 1;
    console.log('itemLikes:', itemLikes);
    
    let queryText = 'UPDATE gallery SET likes=$1 WHERE id=$2';
    pool.query(queryText, [itemLikes, galleryId])
        .then(results => {
            // console.log('results:', results);
            res.sendStatus(200);
        }).catch(err => {
            console.log('err:', err);
            res.sendStatus(500);
        })
}); // END PUT Route

// GET Route
router.get('/', function (req, res) {
    let queryText = 'SELECT * FROM gallery ORDER BY id';
    pool.query(queryText)
        .then(results => {
            // console.log('results:', results);
            res.send(results);
        }).catch(err => {
            console.log('err:', err);
            res.sendStatus(500);
        })
}); // END GET Route

module.exports = router;