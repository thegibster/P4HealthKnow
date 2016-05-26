var Patient = require('../models/patient');

module.exports = {
  index: index,
  show: show,
  create: create,
  update: update,
  create: create,
  me:     me,
  destroy: destroy
}

function index(req, res, next) {
  Patient.find({}, function(err, patients) {
    //Maybe add a check to see which user is logged in to show thier personal stuff
    if (err) next(err);

    res.json(patients);
  });
}

function show(req, res, next) {
  var id = req.params.id;

  Patient.findById(id, function(err, patient) {
    if (err) next(err);

    res.json(patient);
  });
}

function create(req, res, next) {
  if (!req.body.password) {
    return res.status(422).send('Missing required fields');
  }
  // var newPatient = new Patient(req.body);

  // newPatient.save(function(err, savedPatient) {
  //   if (err) next(err);

  //   res.json(savedPatient);
  // });

  Patient
  .create(req.body)
  .then(function(patient) {
    res.json({
      success: true,
      message: 'Successfully created patient.',
      data: {
        email: patient.email,
        id:     patient._id
      }
    });
  }).catch(function(err) {
    if (err.message.match(/E11000/)) {
      err.status = 409;
    } else {
      err.status = 422;
    }
    next(err);
  });
};

function update(req, res, next) {
  var id = req.params.id;
  console.log(id + "the id ");
  var i = 0;

  var promise = Patient.findById(id).exec();

  promise.then(function(patient) {
   patient.bloodtype = req.body.bloodtype;
   patient.last_name = req.body.last_name;
   patient.first_name = req.body.first_name;
   patient.gender = req.body.gender;
   patient.phone_number = req.body.phone_number;
   patient.dob = req.body.dob;
   patient.primary_health_provider.name = req.body.primary_health_provider.name;
   patient.primary_health_provider.hospital = req.body.primary_health_provider.hospital;
   while(i < req.body.checkups.previous.length){
     patient.checkups.previous[i].name = req.body.checkups.previous[i].name
     patient.checkups.previous[i].results = req.body.checkups.previous[i].results
     patient.checkups.previous[i].date_of_physical = req.body.checkups.previous[i].date_of_physical
     i++;
   }
   while(i < req.body.dental_history.length){
     patient.dental_history[i].visitType = req.body.dental_history[i].visitType
     patient.dental_history[i].date = req.body.dental_history[i].date
     i++;

   }
   while(i< req.body.prescriptions.drugs.length){
     patient.prescriptions.drugs[i].name= req.body.prescriptions.drugs[i].name;
     i++;
   }
   while(i< req.body.prescriptions.glasses.length){
     patient.prescriptions.glasses[i].prescription= req.body.prescriptions.glasses[i].prescription;
     patient.prescriptions.glasses[i].manufacture= req.body.prescriptions.glasses[i].manufacture;
     i++;
   }
   while(i < req.body.procedures.length){
     patient.procedures[i].nameOfOperation = req.body.procedures[i].nameOfOperation;
     patient.procedures[i].lengthOfRec = req.body.procedures[i].lengthOfRec;
     i++;
   }
   while(i < req.body.vaccinations.length){
    patient.vaccinations[i].nameOfVacc = req.body.vaccinations[i].nameOfVacc;
    patient.vaccinations[i].dateOf = req.body.vaccinations[i].dateOf;
    i++;
  }
  patient.insurance_info.insurer = req.body.insurance_info.insurer;
  patient.insurance_info.policyId = req.body.insurance_info.policyId;


    return patient.save(); // returns a promise
  })
  .then(function(patient) {
    console.log('updated patient: ' + patient.first_name + " "+patient.last_name );
    res.json(patient);
    // do something with updated user
  })
  .catch(function(err){
    // just need one of these
    console.log('error:', err);
  });
}



function destroy(req, res, next) {
  var id = req.params.id;
  Patient.remove({_id:id}, function(err) {
    if (err) next(err);

    res.json({message: 'Patient successfully deleted'});
  });
}

function me(req, res, next) {
  console.log("LOOK HERE: ", req)
  User
  .findOne({_id: req.decoded._id}).exec()
  .then(function(user) {
    res.json({
      success: true,
      message: 'Successfully retrieved user data.',
      data: user
    });
  })
  .catch(function(err) {
    next(err);
  });
};

