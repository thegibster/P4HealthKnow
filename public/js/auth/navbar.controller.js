(function() {
  "use strict";

  angular
    .module("healthKnowIt")
    .controller("NavbarController", NavbarController);

  NavbarController.$inject = ["$log", "authService"];

  function NavbarController($log, authService) {
    var vm = this;

    vm.authService = authService;
    vm.getUserId = getUserId;

    function getUserId() {
      return authService.isLoggedIn() && authService.loggedInUser()._id;
    }

    $log.info("NavbarController loaded!");
  }
})();
