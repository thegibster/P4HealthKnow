var mongoose = require('mongoose');

var patientSchema = mongoose.Schema({
  bloodtype: String,
  checkups:{last:Date,
    physical:{
      results:String,
      date_of_physical:Date
    }
  },
  dental_history: {},
  dob: Date,
  first_name: Number,
  insurance_info:{},
  last_name: Number,
  prescriptions: {
    drugs:{},
    glasses:{}
  },
  primary_health_provider:{},
  procedures : {},
  test: {},
  vaccinations:{}
});

//Break the prodecure down like the airplane lab  for double scheme

var Patient = mongoose.model('Patient', patientSchema)

module.exports = Patient;
