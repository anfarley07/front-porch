(function() {
    function HomeCtrl(Room, $uibModal) {
        this.roomsData = Room.all;

        this.openModal = function() {
            $uibModal.open({
                    animation: true,
                    templateUrl: 'templates/roomModalContent.html',
                    controller: 'ModalCtrl',
                    backdrop: 'static'
                    });
        };
       };

    angular
      .module('frontPorch')
      .controller('HomeCtrl', ['Room', '$uibModal', HomeCtrl]);
})();
