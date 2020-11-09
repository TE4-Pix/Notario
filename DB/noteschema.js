const mongoose = require('mongoose');

const mongoString = "mongodb+srv://NotarioAdmin:pix123@notariocluster.vqbs6.mongodb.net/notario?retryWrites=true&w=majority";

mongoose.connect(mongoString, {useNewUrlParser: true,  useUnifiedTopology: true });

mongoose.connection.on("error", function(error) {
  console.log(error)
});

mongoose.connection.on("open", function() {
  console.log("Connected to MongoDB database.")

  var NoteSchema = mongoose.Schema({
      title: String,
      content: String
  });

  var Note = mongoose.model('Note', NoteSchema, 'NoteCollection');

  var note1 = new Note({title: 'Choms', content: 'najs'});

  var note2 = new Note({title: 'lorem ipsum', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'});

  var note3 = new Note({title: 'epic gamer moment', content:'Number 15: Burger king foot lettuce. The last thing youd want in your Burger King burger is someones foot fungus. But as it turns out, that might be what you get. A 4channer uploaded a photo anonymously to the site showcasing his feet in a plastic bin of lettuce. With the statement: This is the lettuce you eat at Burger King. Admittedly, he had shoes on. But thats even worse.'});
  note1.save(function (err, note) {
    if (err) return console.error(err);
    console.log(note.title + " saved to note collection.");
  });

  note2.save(function (err, note) {
    if (err) return console.error(err);
    console.log(note.title + " saved to note collection.");
  });

  note3.save(function (err, note) {
    if (err) return console.error(err);
    console.log(note.title + " saved to note collection.");
  });


});