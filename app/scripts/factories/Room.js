(function() {
    function Room($firebaseArray) {
        var Room = {};
        var ref = firebase.database().ref().child("rooms");
        var rooms = $firebaseArray(ref);

        Room.all = rooms;
        console.log(rooms);

        return Room;

    }

    angular
      .module('frontPorch')
      .factory('Room', ['$firebaseArray', Room]);

})();