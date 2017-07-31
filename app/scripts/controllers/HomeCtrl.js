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
        /* this breaks shit but is in the right direction
        this.openModal.result.then = function(Room) {
            $uibModalInstance.close({});
        } */
    };

    angular
      .module('frontPorch')
      .controller('HomeCtrl', ['Room', '$uibModal', HomeCtrl]);
})();
