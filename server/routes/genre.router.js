const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/details/:id', (req, res) => {
  // Add query to get all genres
  console.log('req.params', req.params);
    
  const query = `SELECT genres.name FROM movies JOIN movies_genres ON movies.id = movies_genres.movie_id
    JOIN genres ON genres.id = movies_genres.genre_id WHERE movies.id = ${req.params.id}`;
  pool.query(query)
    .then( result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR: Get one movie', err);
      res.sendStatus(500)
    })
  
});


module.exports = router;