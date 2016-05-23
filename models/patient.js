var mongoose = require('mongoose');

var patientSchema = mongoose.Schema({
  bloodtype: String,
  checkups:{last:Date,
    physical:{
      results:String,
      date_of_physical:Date
    }
  },
  dental_history: [{visitType:String,date:Date required: true}],
  dob: Date,
  first_name: Number,
  gender:String;
  insurance_info:{insurer:String,policyId:String},
  last_name: Number,
  phone_number:String,
  prescriptions: {
    drugs:[{name:String}],
    glasses:[{prescription:String,manufacture:String}]
  },
  primary_health_provider:{hospita:String,name:String},
  procedures : [{nameOfOperation:String,lengthOfRec:String}],
  test: [{nameOfTest:String,dateOf:Date required: true,results:String}],
  vaccinations:[{nameOfVacc:String,dateOf:Date required: true}]
});

//Break the prodecure down like the airplane lab  for double scheme

var Patient = mongoose.model('Patient', patientSchema)

module.exports = Patient;
