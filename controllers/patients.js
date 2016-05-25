var Patient = require('../models/patient');

module.exports = {
  index: index,
  show: show,
  create: create,
  update: update,
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
  var newPatient = new Patient(req.body);

  newPatient.save(function(err, savedPatient) {
    if (err) next(err);

    res.json(savedPatient);
  });

}

function update(req, res, next) {
  var id = req.params.id;
  console.log(id + "the id ");
  var i = 0;
  Patient.findById(id, function(err, patient) {
    if (err) next(err);
    console.log(patient + "this the server patient");
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
   console.log(patient + "supposed new one");
   patient.save(function(err, updatedPatient) {
    if (err) next(err);

    res.json(updatedPatient);
    console.log(updatedPatient);
    console.log("checking if passed right");
  });

 });
}

function destroy(req, res, next) {
  var id = req.params.id;
  Patient.remove({_id:id}, function(err) {
    if (err) next(err);

    res.json({message: 'Patient successfully deleted'});
  });
}
