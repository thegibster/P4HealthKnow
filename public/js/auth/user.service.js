(function () {
  'use strict';

  angular
    .module('healthKnowIt')
    .factory("userService", userService);

  userService.$inject = ["$log", "$http"];

  function userService($log, $http) {
    $log.info("Patient service loaded!");

    var service = {
      create: create
    };
    return service;

    function create(data) {
      var promise = $http({
        method: 'POST',
        url:    '/api/patients',
        data:   data
      });

      return promise;
    }
  }

})();
