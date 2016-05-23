(function() {
  angular.module('healthKnowIt')
    .factory("PatientResource", PatientResource);

  PatientResource.$inject = ['$resource'];

  function PatientResource($resource) {
    return $resource(
      "/api/patients/:id",
      {id: '@id'}, {
        'update': { method: 'PUT'}
      }
    );
  }
})();
