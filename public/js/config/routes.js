(function() {
  angular.module('healthKnowIt')
    .config(MainRouter);

  MainRouter.$inject = ['$stateProvider', '$urlRouterProvider'];

  function MainRouter($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'home.html'
      })
      .state('patientList', {
        url: '/patients/list',
        templateUrl: "js/patients/patient-list.html",
        controller: 'PatientController',
        controllerAs: 'patientListVm'
      })
      .state('patientPatient', {
        url: '/patients/patient/:id',
        templateUrl: 'js/patients/patient-patient.html',
        controller: 'PatientPatientController',
        controllerAs: 'patientPatientVm'
      })
      .state('patientNew', {
        url: '/patients/new',
        templateUrl: 'js/patients/patient-new.html',
        controller: 'PatientNewController',
        controllerAs: 'patientNewVm'
      })
      .state('patientEdit', {
        url: '/patients/edit/:id',
        templateUrl: 'js/patients/patient-edit.html',
        controller: 'PatientEditController',
        controllerAs: 'patientEditVm'
      });

    $urlRouterProvider.otherwise('/');
  }
})();
