(function() {
    function ModalCtrl(Room, $uibModal) {

        ModalCtrl.addRoom = function($scope, $uibModalInstance) {
          $scope.roomName='';
          $scope.ok = function() {
            alert('Your room name is ' + $scope.roomName);
            Room.add(room);
            $uibModalInstance.close($scope.roomName);;
          };

          $scope.cancel = function() {
            $uibModalInstance.dismiss('cancel');
          };
      };
    }
      angular
          .module('frontPorch')
          .controller('ModalCtrl', ['Room', '$uibModalInstance']);
})();
