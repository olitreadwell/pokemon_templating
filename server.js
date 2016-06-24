'use strict';

const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

const path = require('path');

const pokemonList = require('./utils/pokemon_list');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/pokemon', (_req, res) => {
  res.render('pages/index2', {
    title: 'Starter Pokemon Evolutions',
    data: pokemonList
  });
});

app.get('/pokemon/:id', (req, res, next) => {
  let id = Number.parseInt(req.params.id);

  if (Number.isNaN(id) || id < 0) {
    next();
  }

  let pokemonToRender = 0;
  for (const pokemon of pokemonList) {
    if (id === pokemon.id) {
      pokemonToRender = pokemon;
      break;
    }
  }

  if (!pokemonToRender) {
    next();
  }

  res.render('pages/profile2', {
    title: pokemonToRender.name,
    data: pokemonToRender
  });
});

app.use(function(_req, res, next) {
  var err = new Error('This is not the Pokemon you were looking for');
  err.status = 404;
  next(err);
});

app.use(function(err, _req, res, _next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: err
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}, yo!`);
});
