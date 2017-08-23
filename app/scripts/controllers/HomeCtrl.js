(function() {
    function HomeCtrl($scope, $cookies, Firebase, Room, $uibModal, $firebaseArray, Message, CookieCtrl) {
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

        $scope.sendMessage = function() {
          /*var ref = firebase.database().ref().child("messages");
          var  username = $cookies.username,
               timeStamp = Firebase.database.ServerValue.TIMESTAMP,
               chatRoom = roomId.$id,
               messages = $firebaseArray(ref.orderByChild('roomId').equalTo('room')); */

          $scope.send = Message.send(this.msg, $scope.activeRoom);
            $scope.msg = "";
        };

    };

    angular
      .module('frontPorch')
      .controller('HomeCtrl', ['$scope', '$cookies', 'Firebase', 'Room', '$uibModal', '$firebaseArray', 'Message', HomeCtrl]);
})();
