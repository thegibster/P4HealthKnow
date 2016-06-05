(function() {
    angular.module('healthKnowIt')
        .controller("PatientController", PatientController)
        .controller("PatientPatientController", PatientPatientController)
        .controller("PatientNewController", PatientNewController)
        .controller("PatientEditController", PatientEditController);

    PatientController.$inject = ['PatientResource'];
    PatientPatientController.$inject = ['PatientResource', '$stateParams', '$http'];
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
            PatientResource.delete({
                id: patientToDelete._id
            }).$promise.then(function(response) {
                console.log(response.message);
                vm.patients = vm.patients.filter(function(patient) {
                    return patient != patientToDelete;
                });
            });
        }
    }

    function PatientPatientController(PatientResource, $stateParams, $http) {
        var vm = this;
        vm.patient = {};
        vm.showPill = '';

        PatientResource.get({
            id: $stateParams.id
        }).$promise.then(function(jsonPatient) {
            console.log(jsonPatient);
            vm.patient = jsonPatient;

        });
        vm.findPill = function(pill) {

            // $http.get("http://pillbox.nlm.nih.gov/PHP/pillboxAPIService.php?key=F2IWKICTOM&imprint=p24hr")
            //    .then(function(response) {
            //       console.log(response);
            //    });
            console.log(pill + " this is pill");
            $http.put('/sillytest', {
                "imprint": pill
            }).success(function(data) {
                vm.showPill = data;
                console.log(data + "success");
            });

            // $http({
            //   method: "GET",
            //   uri: "http://pillbox.nlm.nih.gov/PHP/pillboxAPIService.php",
            //   qs: {
            //     key: "F2IWKICTOM",
            //         imprint: pill
            //       }
            //     })
            //     // .then(response => console.log(response))
            //     .then(function(response) {
            //       console.log(response + " 1");
            //     })
            //     .catch(err => console.log(err));

        }
    }



    function PatientNewController(PatientResource, $state) {
        var vm = this;
        vm.newPatient = {};
        vm.addPatient = addPatient;

        function addPatient() {
            PatientResource.save(vm.newPatient).$promise.then(function(jsonPatient) {
                vm.newPatient = {};
                $state.go('patientPatient', {
                    id: jsonPatient._id
                });
            });
        }
    }

    function PatientEditController(PatientResource, $stateParams, $state) {
        var vm = this;
        vm.patient = {};
        vm.editPatient = editPatient;

        PatientResource.get({
            id: $stateParams.id
        }).$promise.then(function(jsonPatient) {
            vm.patient = jsonPatient;
            vm.patient.dob = new Date(vm.patient.dob);
            vm.patient.checkups.last = new Date(vm.patient.checkups.last);
            for (var x in vm.patient.checkups.previous) {
                console.log()
                vm.patient.checkups.previous[x].date_of_physical = new Date(vm.patient.checkups.previous[x].date_of_physical)
            }
            for (var x in vm.patient.vaccinations) {
                console.log()
                vm.patient.vaccinations[x].dateOf = new Date(vm.patient.vaccinations[x].dateOf)
            }
            for (var x in vm.patient.dental_history) {

                vm.patient.dental_history[x].date = new Date(vm.patient.dental_history[x].date)
            }

            for (var x in vm.patient.procedures) {
                vm.patient.procedures[x].nameOfOperation = vm.patient.procedures[x].nameOfOperation
                vm.patient.procedures[x].lengthOfRec = parseInt(vm.patient.procedures[x].lengthOfRec)
            }
            for (var x in vm.patient.test) {

                vm.patient.test[x].dateOf = new Date(vm.patient.test[x].dateOf)
            }
        });

        function editPatient() {
            PatientResource.update({
                id: vm.patient._id
            }, vm.patient).$promise.then(function(updatedPatient) {
                vm.patient = updatedPatient;
                $state.go('patientPatient', {
                    id: updatedPatient._id
                }); // need the id to be passed for proper function
            });
        }
    }

})();
