(function () {
    function Message($firebaseArray) {
      var Message = {};
      var ref = firebase.database().ref.child('messages');

      var messages = $firebaseArray(ref);

      Message.getByRoomID = function(roomId) {

      };

      return Message;

    }

    angular
      .module('frontPorch')
      .factory('Message', ['$firebaseArray', Message]);

})();
