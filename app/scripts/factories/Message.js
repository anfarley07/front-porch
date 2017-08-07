(function () {
    function Message($firebaseArray) {
      var Message = {};
      var ref = firebase.database().ref().child("messages");

      var messages = $firebaseArray(ref);

      Message.getByRoomId = function(room) {
        return $firebaseArray(ref.orderByChild("messages").equalTo(roomId));
        /*for (var i = 0; i <=  messages.length; i++) {
          return messages.content && messages.username;
        }*/
      }

      return Message;

    }

    angular
      .module('frontPorch')
      .factory('Message', ['$firebaseArray', Message]);

})();
