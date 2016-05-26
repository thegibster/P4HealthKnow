var mongoose = require('mongoose'),
    debug    = require('debug')('app:models');

var patientSchema = mongoose.Schema({
  bloodtype: String,
  checkups:{last:{type:Date, required:true,default: Date.now},
    previous:[{
      name:{type:String, default: null},
      result:{type:String, default: null},
      date_of_physical:{type:Date, required:true,default: Date.now}
    }]
  },
  dental_history: [{visitType:String,date:{type:Date ,required: true,default: Date.now}}],
  dob: {type:Date, required:true,default: Date.now},
  email: { type: String, required: true, unique: true },
  first_name: {type:String, default: null},
  gender:String,
  insurance_info:{insurer:String,policyId:String},
  last_name: {type:String, default: null},
  phone_number:String,
  prescriptions: {
    drugs:[{name:{type:String, default: null}}],
    glasses:[{prescription:{type:String, default: null},manufacture:{type:String, default: null}}]
  },
  primary_health_provider:{hospital:{type:String, default: null},name:{type:String, default: null}},
  procedures : [{nameOfOperation:String,lengthOfRec:String}],
  test: [{nameOfTest:{type:String, default: null},dateOf:{type:Date,required: true,default: Date.now},results:String}],
  vaccinations:[{nameOfVacc:{type:String, default: null},dateOf:{type:Date, required: true,default: Date.now}}]
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
