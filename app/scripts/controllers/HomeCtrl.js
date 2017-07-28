(function() {
    function HomeCtrl(Room) {
        this.roomsData = Room.all;
        Room.add;
    }

    angular
      .module('frontPorch')
      .controller('HomeCtrl', ['Room', HomeCtrl]);

})();
