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
      .state('patientPatient', {
        url: '/patients/:id',
        templateUrl: 'js/patients/patient-show.html',
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
      })
      // .state('findDrug', {
      //   url: '/patients/:id/findDrug',
      //   templateUrl: 'js/patients/drug-show.html',
      //   controller: 'PatientPatientController',
      //   controllerAs: 'patientPatientVm'
      // })
      .state("signin", {
        url:          "/signin",
        templateUrl:  "/js/auth/signin.html",
        controller:   "SignInController",
        controllerAs: "vm"
      });;

    $urlRouterProvider.otherwise('/');
  }
})();
