(function() {
    function ModalCtrl(Room, $uibModal) {
        this.rooms = Room;
        this.addRoom = function(roomName) {
          this.roomName='';
            Room.add(roomName);
          };

          this.cancel = function() {
            $uibModalInstance.dismiss('cancel');
          };
      }


      angular
          .module('frontPorch')
          .controller('ModalCtrl', ['Room', '$uibModal', ModalCtrl]);
})();
