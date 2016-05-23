(function() {
  angular.module('healthKnowIt')
    .controller("PatientController", PatientController)
    .controller("PatientPatientController", PatientPatientController)
    .controller("PatientNewController", PatientNewController)
    .controller("PatientEditController", PatientEditController);

    PatientController.$inject = ['PatientResource'];
    PatientPatientController.$inject = ['PatientResource', '$stateParams'];
    PatientNewController.$inject = ['PatientResource', '$state'];
    PatientEditController.$inject = ['PatientResource', '$stateParams', '$state'];

    function PatientController(PatientResource) {
      var vm = this;
      vm.patients = [];
      vm.destroy = destroy;

      PatientResource.query().$promise.then(function(patients) {
        vm.patients = patients;
      });

      function destroy(patientToDelete) {
        PatientResource.delete({id: patientToDelete._id}).$promise.then(function (response) {
          console.log(response.message);
          vm.patients = vm.patients.filter(function(patient) {
            return patient != patientToDelete;
          });
        });
      }
    }

    function PatientPatientController(PatientResource, $stateParams) {
      var vm = this;
      vm.patient = {};

      PatientResource.get({id: $stateParams.id}).$promise.then(function(jsonPatient) {
          console.log(jsonPatient);
          vm.patient = jsonPatient;
      });
    }

    function PatientNewController(PatientResource, $state) {
      var vm = this;
      vm.newPatient = {};
      vm.addPatient = addPatient;

      function addPatient() {
        PatientResource.save(vm.newPatient).$promise.then(function(jsonPatient) {
          vm.newPatient = {};
          $state.go('patientPatient', {id: jsonPatient._id});
        });
      }
    }

    function PatientEditController(PatientResource, $stateParams, $state) {
      var vm = this;
      vm.patient = {};
      vm.editPatient = editPatient;

      PatientResource.get({id: $stateParams.id}).$promise.then(function(jsonPatient) {
          vm.patient = jsonPatient;
      });

      function editPatient() {
        PatientResource.update({id: vm.patient._id}, vm.patient).$promise.then(function(updatedPatient) {
          vm.patient = updatedPatient;
          $state.go('patientPatient', {id: updatedPatient._id});
        });
      }
    }

})();
