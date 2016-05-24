require('dotenv').load();
var mongoose = require('./database');

// var Book = require('../models/book');
// var Game = require('../models/game');
// var Show = require('../models/show');
// var Todo = require('../models/todo');
var Patient = require('../models/patient');

var patients = [{
  bloodtype: 'O+',
  checkups:{last:new Date('2014-12-08'),
  previous:[{
    name:'Physical',
    result:'Normal blood work.',
    date_of_physical:new Date('2015-10-05')
  }]
  },
dental_history: [{visitType:'General Checkup',date: new Date('2002-09-09')
}],
dob: new Date('1970-05-01'),
first_name: 'Marlon',
gender:'M',
insurance_info:{insurer:'Aetna',policyId:'#143Hd13'},
last_name: 'Bakers',
phone_number:'673-9812-7813',
prescriptions: {
  drugs:[{name:'aspirin'},{name:'metformin'}],
  glasses:[{prescription:'10/20',manufacture:'Bez Glasses'}]
},
primary_health_provider:{hospital:'Kaiser',name:'Dr.Uncles'},
procedures : [{nameOfOperation:'Hysterectomy',lengthOfRec:'5 Months'}],
test: [{nameOfTest:'Blood Count',dateOf:new Date('2000-6-11'),results:'Low t count.'}],
vaccinations:[{nameOfVacc:'HPV',dateOf:new Date('2000-05-01')},
{nameOfVacc:'Influenza',dateOf: new Date('2001-06-05')},
{nameOfVacc:'Measles',dateOf: new Date('1990-08-12')}]
},

{
  bloodtype: 'O+',
  checkups:{last:new Date('2014-12-08'),
  previous:[{
    name:'Allergy Test',
    result:'Normal blood work.',
    date_of_physical:new Date('2015-10-05')
  }]
  },
dental_history: [{visitType:'General Checkup',date: new Date('2002-09-09')
}],
dob: new Date('1970-05-01'),
first_name: 'Marlon',
gender:'M',
insurance_info:{insurer:'Aetna',policyId:'#143Hd13'},
last_name: 'Bakers',
phone_number:'673-9812-7813',
prescriptions: {
  drugs:[{name:'aspirin'},{name:'metformin'}],
  glasses:[{prescription:'10/20',manufacture:'Bez Glasses'}]
},
primary_health_provider:{hospital:'Kaiser',name:'Dr.Uncles'},
procedures : [{nameOfOperation:'Hysterectomy',lengthOfRec:'5 Months'}],
test: [{nameOfTest:'Blood Count',dateOf: new Date('2000-6-11'),results:'Low t count.'}],
vaccinations:[{nameOfVacc:'HPV',dateOf: new Date('2000-05-01')},
{nameOfVacc:'Influenza',dateOf: new Date('2001-06-05')},
{nameOfVacc:'Measles',dateOf: new Date('1990-08-12')}]
}
];


Patient.remove({}, function(err) {
  if (err) console.log(err);
  Patient.create(patients, function(err, patients) {
    if (err) {
      console.log(err);
    } else {
      console.log("Database seeded with " + patients.length + " patients.");
      mongoose.connection.close();
    }
    process.exit();
  });
});


