// DEPENDENCIES
const express = require('express');
const Joi = require('joi');
const mongoose = require('mongoose');
// const cors = require('cors')

// APP & ENVIRONMENT INSTANCES
const app = express();
const port = process.env.PORT || 5000;

// DATABASE
mongoose.connect('mongodb://localhost:27017/tvTeller')
const Show = require('./models/Show');

// MIDDLEWARE
app.use(express.json());
// app.use(cors());

// REQUESTS
// 'GET' REQUEST: '/'
app.get('/', (req, res) => {
  return res.send(`Hello React! I'm the Express/Mongoose API for TV Teller!`);
});

// 'GET' REQUEST: '/shows'
app.get('/shows', (req, res) => {
  Show.find({})
    .then(docs => res.send(docs));
});

// app.get('/shows', (req, res) => {
//   return res.send(tvArray)
// });

// 'GET' REQUEST: '/shows/:id'
app.get('/shows/:id', (req, res) => {
  const { id } = req.params;
  const tvShow = Show.findOne({id})
    .then(doc => res.send(doc));
});

// app.get('/shows/:id', (req, res) => {
//   const id = parseInt(req.params.id)
//   const tvShow = tvArray.find( tvShow => tvShow.id === id);

//   if (!tvShow) {
//     return res.send('TV show not found!')
//   }

//   return res.send(tvShow);
// });

// // 'POST' REQUEST: '/shows/'
app.post('/shows', (req, res) => {
  const { id, name, creator, cast, url, seasons } = req.body;
  const newTvShow = new Show({ id, name, creator, cast, url, seasons })
  newTvShow.save()
    .then(doc => res.send(doc))
});

// app.post('/shows', (req, res) => {
//   const { id, name, creator, cast, url, seasons } = req.body;
//   const newShow = { id, name, creator, cast, url, seasons };

//   const { error } = validateShow(newShow);
//   if (error) return res.status(400).send(error.details[0].message);

//   tvArray.push(newShow);
//   return res.send(newShow);

// })

// // 'PUT' REQUEST: '/shows/:id'
app.put('/shows/:id', (req, res) => {
  const { id } = req.params;
  const { name, creator, cast, url, seasons } = req.body;

  Show.findOneAndUpdate(
    { id },
    { name, creator, cast, url, seasons },
    {
      new: true,
      runValidators: true
    }
  )
    .then(doc => res.send(doc));

});

// app.put('/shows/:id', (req, res) => {
//   const id = parseInt(req.params.id)
//   const tvShow = tvArray.find(tvShow => tvShow.id === id);

//   if (!tvShow) {
//     res.status(404).send('Show not found!')
//   }

//   const { error } = validateShow(req.body);
//   if (error) return res.status(400).send(error.details[0].message);
  
//   tvShow.id = req.body.id;
//   tvShow.name = req.body.name;
//   tvShow.creator = req.body.creator;
//   tvShow.cast = req.body.cast;
//   tvShow.url = req.body.url;
//   tvShow.seasons = req.body.seasons;

//   res.send(tvShow);

// });

// // 'DELETE' REQUEST: '/shows/:id'
app.delete('/shows/:id', (req, res) => {
  const { id } = req.params;

  Show.findOneAndRemove({ id })
    .then(deletedDoc => res.send(deletedDoc))
});

// app.delete('/shows/:id', (req, res) => {
//   const id = parseInt(req.params.id)
//   const tvShow = tvArray.find(tvShow => tvShow.id === parseInt(id));
//   if (!tvShow) {
//     return res.status(404).send('Show not found!')
//   }
//   const index = tvArray.indexOf(tvShow);
//   tvArray.splice(index, 1);
//   return res.send(tvArray)
// });

// // VALIDATION
// function validateShow(tvShow) {
//   const schema = {
//     id: Joi.number().required(),
//     name: Joi.string().required(),
//     creator: Joi.array().required(),
//     cast: Joi.array().required(),
//     url: Joi.string().required(),
//     seasons: Joi.array().required(),
//   };
//   return Joi.validate(tvShow, schema);
// }

// PORT
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
})