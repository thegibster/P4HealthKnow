var mongoose = require('mongoose');

var patientSchema = mongoose.Schema({
  bloodtype: String,
  checkups:{last:Date,
    previous:[{
      name:String,
      result:String,
      date_of_physical:{type:Date, required:true}
    }]
  },
  dental_history: [{visitType:String,date:{type:Date ,required: true}}],
  dob: Date,
  email: { type: String, required: true, unique: true },
  first_name: String,
  gender:String,
  insurance_info:{insurer:String,policyId:String},
  last_name: String,
  phone_number:String,
  prescriptions: {
    drugs:[{name:String}],
    glasses:[{prescription:String,manufacture:String}]
  },
  primary_health_provider:{hospital:String,name:String},
  procedures : [{nameOfOperation:String,lengthOfRec:String}],
  test: [{nameOfTest:String,dateOf:{type:Date,required: true},results:String}],
  vaccinations:[{nameOfVacc:String,dateOf:{type:Date, required: true}}]
});

// add bcrypt hashing to model (works on a password field)!
patientSchema.plugin(require('mongoose-bcrypt'));

// Add a "transformation" to the model's toJson function that
// stops the password field (even in digest format) from being
// returned in any response.
patientSchema.options.toJSON = {
  transform: function(document, returnedObject, options) {
    delete returnedObject.password;
    return returnedObject;
  }
};


//Break the prodecure down like the airplane lab  for double scheme

var Patient = mongoose.model('Patient', patientSchema)

module.exports = Patient;
