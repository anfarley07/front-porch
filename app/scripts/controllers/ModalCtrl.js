(function() {
    function ModalCtrl(Room, $uibModal, $uibModalInstance) {
        this.rooms = Room;
        this.addRoom = function(roomName) {
            this.roomName='';
            Room.add(roomName);
            $uibModalInstance.close(this.addRoom);

        };

        this.cancel = function() {
            $uibModalInstance.close(this.cancel);
        };


    }


      angular
          .module('frontPorch')
          .controller('ModalCtrl', ['Room', '$uibModal', '$uibModalInstance', ModalCtrl]);
})();
