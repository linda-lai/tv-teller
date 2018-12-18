const mongoose = require('mongoose');

const episodeSchema = new mongoose.Schema({
  episode: Number,
  title: String
});

const seasonSchema = new mongoose.Schema({
  series: Number,
  episodes: [episodeSchema]
});

const showSchema = new mongoose.Schema({
  id: Number,
  name: String,
  creator: [String],
  cast: [String],
  url: String,
  seasons: [seasonSchema]
});

module.exports = mongoose.model('Show', showSchema);