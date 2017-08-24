(function () {
    function Message($firebaseArray, Firebase, $cookies) {
      var Message = {};
      var ref = firebase.database().ref().child("messages");

      var messages = $firebaseArray(ref);

      Message.getByRoomId = function(room) {
        /*var roomId = ref.child("roomId");*/
        return $firebaseArray(ref.orderByChild("roomId").equalTo(room))
      };

      Message.send = function(newMessage, roomId) {
        var  username = $cookies.get("frontPorchCurrentUser"),
             timeStamp = Firebase.database.ServerValue.TIMESTAMP,
             chatRoom = roomId.$id,
             messages = $firebaseArray(ref.orderByChild('roomId').equalTo('room'));
             console.log(username);
             messages.$add({
                 username: username,
                 content: newMessage,
                 sentAt: timeStamp,
                 roomId: chatRoom
             })

      };

      return Message;

    }

    angular
      .module('frontPorch')
      .factory('Message', ['$firebaseArray', 'Firebase', '$cookies', Message]);

})();
