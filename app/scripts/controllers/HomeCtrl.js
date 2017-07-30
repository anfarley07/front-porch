(function() {
    function HomeCtrl(Room, $uibModal) {
        this.roomsData = Room.all;

        this.openModal = function(Room) {
            $uibModal.open({
                    animation: true,
                    templateUrl: 'templates/roomModalContent.html',
                    controller: 'ModalCtrl',
                    backdrop: 'static'
                    });
        };

        /* this code doesn't work but I think there's something like 'result.then'
        that needs to be used to dismiss the modal once submit has been clicked
        this.openModal.result.then = function(Room) {
            $uibModalInstance.close({});
        } */
    };

    angular
      .module('frontPorch')
      .controller('HomeCtrl', ['Room', '$uibModal', HomeCtrl]);
})();
