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

    }

    angular
        .module('frontPorch', ['ui.router','ui.bootstrap','firebase'])
        .config(config);

})();
