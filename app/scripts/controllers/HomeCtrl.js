(function() {
    function HomeCtrl(Room) {
        var roomsData = Room;
    }

    angular
      .module('frontPorch')
      .controller('HomeCtrl', ['Room', HomeCtrl]);

})();
