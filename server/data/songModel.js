const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MONGO_URI = 'mongodb+srv://kushal:kushal@cluster0.islaj.mongodb.net/garuda?retryWrites=true&w=majority';

mongoose.connect(MONGO_URI, {
  // options for the connect method to parse the URI
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // sets the name of the DB that our collections are part of
  dbName: 'garuda'
})
  .then(() => console.log('Connected to Mongo DB.'))
  .catch(err => console.log(err));


const tuneSchema = new Schema ({
  //song title
  title: {type: String, required: true},
  //composer
  composer: {type: String},
  //keys
  keys: [String],
  //recording
  recording: {type: String, default: ''}
});

const Tune = mongoose.model('tunes', tuneSchema);
const Key = mongoose.model('keys', tuneSchema)
module.exports = Tune;
