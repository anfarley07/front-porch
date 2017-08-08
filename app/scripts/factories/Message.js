(function () {
    function Message($firebaseArray) {
      var Message = {};
      var ref = firebase.database().ref().child("messages");

      var messages = $firebaseArray(ref);

      Message.getByRoomId = function(room) {
        /*var roomId = ref.child("roomId");*/
        return $firebaseArray(ref.orderByChild("roomId").equalTo(room));
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
