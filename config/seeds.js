require('dotenv').load();
var mongoose = require('./database');

// var Book = require('../models/book');
// var Game = require('../models/game');
var Show = require('../models/show');
// var Todo = require('../models/todo');
var Patient = require('../models/patient');

var patients = [
{     bloodtype: 'O+',
  checkups:{last:Date('2014-12-08'),
    physical:{
      result:'Normal blood work.',
      date_of_physical:Date('2015-10-05')
    }
  },
  dental_history: {

  },
  dob: Date('1980-05-01'),
  first_name: 'Donald',
  insurance_info:{},
  last_name: 'Bakers',
  phone_number:'673-9812-7813',
  prescriptions: {
    drugs:[{name:'aspirin'}],
    glasses:[{prescription:'10/20',manufacture:'Bez Glasses'}]
  },
  primary_health_provider:{hostpital:'Kaiser',name:'Dr.Uncles'},
  procedures : [{nameOfOperation:'Hysterectomy',lengthOfRec:'5 Months'}],
  test: [{nameOfTest:'Blood Count',dateOf:Date('2000-6-11'),results:'Low t count.'}],
  vaccinations:[{nameOfVacc:'HPV',dateOf:Date('2000-05-01')},
  {nameOfVacc:'Influenza',dateOf: Date('2001-06-05')},
  {nameOfVacc:'Measles',dateOf: Date('1990-08-12')}]

}
];


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
