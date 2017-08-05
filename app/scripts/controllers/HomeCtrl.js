(function() {
    function HomeCtrl(Room, $uibModal, $firebaseArray, Message) {
        this.roomsData = Room.all;

        //attempt to store active room

        /*this.activeRoom = Room; */

        this.openModal = function(Room) {
            $uibModal.open({
                    animation: true,
                    templateUrl: 'templates/roomModalContent.html',
                    controller: 'ModalCtrl as modal',
                    backdrop: 'static'
                    });

        };

    };

    angular
      .module('frontPorch')
      .controller('HomeCtrl', ['Room', '$uibModal', '$firebaseArray', 'Message', HomeCtrl]);
})();
