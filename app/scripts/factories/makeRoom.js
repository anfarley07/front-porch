makeRoom.factory(Room, Room.add({
        Room.push(room);
    }

});

angular
  .module('frontPorch')
  .factory('makeRoom', ['$firebaseArray', 'Room', 'makeRoom']);

})();
