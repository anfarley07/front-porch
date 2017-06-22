(function() {
    function RoomCtrl(Room) {
      $scope.chatRooms = Room.all;
      $stateProvider
          .state('home', {
              url: '/',
              controller: 'HomeCtrl as home',
              templateUrl: '/templates/home.html'
          });

    }
    angular
      .module('frontPorch')
      .factory('RoomCtrl', ['Room', 'home', RoomCtrl]);

})();
