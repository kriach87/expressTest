const { ObjectID } = require('mongodb');
const Note = require('../model/notes');

// title, date, author, text
module.exports = function (app) {
  app.get('/notes/:id', (req, res) => {
    const { id } = req.params;
    const details = { _id: new ObjectID(id) };
    Note.find(details, (err, item) => {
      if (err) {
        res.send({ error: err });
      } else {
        res.send(item);
      }
    });
  });

  app.get('/notes', (req, res) => {
    Note.find({}, (err, items) => {
      if (err) {
        res.send({ error: err });
      } else {
        res.send(items);
      }
    });
  });

  app.post('/notes', (req, res) => {
    const note = new Note({
      title: req.body.title,
      date: req.body.date,
      author: req.body.author,
      text: req.body.text,
    });
    Note.create(note, (err, result) => {
      if (err) {
        res.send({ error: err });
      } else {
        res.send(result);
      }
    });
  });
  app.delete('/notes/:id', (req, res) => {
    const { id } = req.params;
    const details = { _id: new ObjectID(id) };
    Note.deleteOne(details, (err) => {
      if (err) {
        res.send({ error: err });
      } else {
        res.send('Note deleted!');
      }
    });
  });
  app.put('/notes/:id', (req, res) => {
    const { id } = req.params;
    const details = { _id: new ObjectID(id) };
    const note = {
      title: req.body.title,
      date: req.body.date,
      author: req.body.author,
      text: req.body.text,
    };
    Note.findByIdAndUpdate(details, note, (err, result) => {
      if (err) {
        res.send({ error: err });
      } else {
        res.send(result);
      }
    });
  });
};
