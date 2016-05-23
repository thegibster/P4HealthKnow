(function() {
  angular.module('wsmdApp')
    .factory("ShowResource", ShowResource);

  ShowResource.$inject = ['$resource'];

  function ShowResource($resource) {
    return $resource(
      "/api/shows/:id",
      {id: '@id'}, {
        'update': { method: 'PUT'}
      }
    );
  }
})();
