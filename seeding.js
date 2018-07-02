const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const Note = require('./app/model/notes');
const db = require('./config/db');

Note.collection.drop();

mongoose.connect(db.url, {});
Note.create([{
  title: 'title1',
  date: '12-30-2018',
  author: 'me',
  text: 'sample1',
}, {
  title: 'title2',
  date: '12-31-2018',
  author: 'metoo',
  text: 'sample2',
}])
  .then((note) => {
    console.log(`${note.length} notes created`);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    mongoose.connection.close();
  });
