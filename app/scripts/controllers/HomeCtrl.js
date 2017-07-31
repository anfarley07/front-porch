(function() {
    function HomeCtrl(Room, $uibModal) {
        this.roomsData = Room.all;

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
      .controller('HomeCtrl', ['Room', '$uibModal', HomeCtrl]);
})();
