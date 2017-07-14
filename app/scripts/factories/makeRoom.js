makeRoom.factory(Room, $firebaseArray) {
    var Room = {};
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);

    this.Room.add(room){
        Room.push(this.room);
    }

}

angular
  .module('frontPorch')
  .factory('makeRoom', ['$firebaseArray', 'Room', 'makeRoom']);

})();
