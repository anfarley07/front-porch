(function() {
    function HomeCtrl(Room) {
        var roomsData = Room.all;
        console.log(roomsData);
    }

    angular
      .module('frontPorch')
      .controller('HomeCtrl', ['Room', HomeCtrl]);

})();
