(function() {
    function HomeCtrl(Room, $uibModal, Message) {
        this.roomsData = Room.all;

        //attempt to store active room
        $scope.activeRoom = function(roomName) {
            rooms.$indexFor(id);

        }

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
      .controller('HomeCtrl', ['Room', '$uibModal', 'Message', HomeCtrl]);
})();
