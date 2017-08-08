(function() {
    function HomeCtrl($scope, Room, $uibModal, $firebaseArray, Message) {
        this.roomsData = Room.all;

        $scope.activeRoom = null;
        //attempt to store active room
        $scope.setActiveRoom = function(room) {
            $scope.activeRoom = this.room;
            $scope.getByRoomId($scope.activeRoom.$id);
        }

        $scope.getByRoomId = function(room) {
            $scope.messages = Message.getByRoomId(room);
        }


        console.log($scope.activeRoom);

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
      .controller('HomeCtrl', ['$scope','Room', '$uibModal', '$firebaseArray', 'Message', HomeCtrl]);
})();
