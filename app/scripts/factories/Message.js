(function () {
    function Message($firebaseArray) {
      var Message = {};
      var ref = firebase.database().ref().child("messages");

      var messages = $firebaseArray(ref);

      Message.getByRoomID = function(roomId) {
        ref.orderByChild("messages").equalTo("-KqL9rhi_HXiIPRc5XxK");
      };

      return Message;

    }

    angular
      .module('frontPorch')
      .factory('Message', ['$firebaseArray', Message]);

})();
