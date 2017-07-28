(function() {
    function HomeCtrl(Room) {
        this.roomsData = Room.all;
        Room.add;
    }

    angular
      .module('frontPorch', ['ui.bootstrap'])
      .controller('HomeCtrl', ['Room', HomeCtrl], function($scope, $uibModal){
          $scope.open = function(size, template) {
              $uibModal.open({
                  animation: true,
                  templateUrl: template || 'roomModalContent.html',
                  controller: 'ModalCtrl',
                  backdrop: 'static'
              });
          };

})();
