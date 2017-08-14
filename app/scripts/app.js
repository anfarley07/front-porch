(function() {
    function config($locationProvider, $stateProvider) {
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
            });

        $stateProvider
            .state('home', {
                url: '/',
                controller: 'HomeCtrl as home',
                templateUrl: '/templates/home.html'
            });

        $stateProvider
            .state('modal', {
                url: '/addRoom',
                controller: 'ModalCtrl as modal',
                templateUrl: '/templates/roomModalContent.html'
            });

        $stateProvider
          .state('cookies', {
            url: '/cookies',
            controller: 'CookieCtrl as cookies',
            templateUrl: '/templates/cookieModal.html'
          })
      }

        function FrontPorchCookies($cookies, $uibModal) {
            var currentUser = $cookies.get('frontPorchCurrentUser');
            if (!currentUser || currentUser === '') {
                $uibModal.open({
                  animation: true,
                  controller: 'CookieCtrl as cookies',
                  templateUrl: '/templates/cookieModal.html',
                  backdrop: 'static'
                });
            }

    }

    angular
        .module('frontPorch', ['ui.router','ui.bootstrap','firebase','ngCookies'])
        .config(config)
        .run(['$cookies','$uibModal', FrontPorchCookies]);

})();
