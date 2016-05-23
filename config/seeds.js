require('dotenv').load();
var mongoose = require('./database');

// var Book = require('../models/book');
// var Game = require('../models/game');
var Show = require('../models/show');
// var Todo = require('../models/todo');

var books = [
  { title: "Twilight",
    author: "Stephenie Meyer",
    type: "Vampires"
  },
  {
    title: "Design Patterns",
    author: "Gang of Four",
    type: "Programming"
  }
];

var games = [
  { title: "Overwatch",
    platform: "PC",
    type: "First-person shooter"
  },
  {
    title: "NBA 2K16",
    platform: "PS4",
    type: "Sports"
  }
];

var shows = [
  {
    title: "New Girl",
    length: 30,
    source: "Hulu"
  },
  {
    title: "Game of Thrones",
    length: 60,
    source: "HBO Go"
  }
];

var todos = [
  {
    task: "Get off your lazy ass and exercise."
  },
  {
    task: "Stop stealing other people's lessons and create your own for once."
  },
  {
    task: "Go interact with other human beings, IN PERSON!!"
  }
]

// Book.remove({}, function(err) {
//   if (err) console.log(err);
//   Book.create(books, function(err, books) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("Database seeded with " + books.length + " books.");
//     }
//   });
// });

// Game.remove({}, function(err) {
//   if (err) console.log(err);
//   Game.create(games, function(err, games) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("Database seeded with " + games.length + " games.");
//     }
//   });
// });

Show.remove({}, function(err) {
  if (err) console.log(err);
  Show.create(shows, function(err, shows) {
    if (err) {
      console.log(err);
    } else {
      console.log("Database seeded with " + shows.length + " shows.");
      mongoose.connection.close();
    }
    process.exit();
  });
});

// Todo.remove({}, function(err) {
//   if (err) console.log(err);
//   Todo.create(todos, function(err, todos) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("Database seeded with " + todos.length + " books.");
//       mongoose.connection.close();
//     }
//     process.exit();
//   });
// });
