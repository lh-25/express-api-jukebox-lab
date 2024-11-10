const mongoose = require('mongoose')

const trackSchema = mongoose.Schema({
  title: {type: String, require: true},
  artist: {type: String, require: true},
  album: {type: String, require: true},
  duration: {type: String, require: true},
  release_year: {type: Number, require: true},
  song_image: {type: String, require: true},

})

const Track = mongoose.model('Track', trackSchema)

module.exports = Track