var Patient = require('../models/patient');

module.exports = {
  index: index,
  patient: patient,
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

function patient(req, res, next) {
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

  Patient.findById(id, function(err, patient) {
    if (err) next(err);

    patient.title = req.body.title;
    patient.length = req.body.length;
    patient.source = req.body.source;

    patient.save(function(err, updatedPatient) {
      if (err) next(err);

      res.json(updatedPatient);
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
