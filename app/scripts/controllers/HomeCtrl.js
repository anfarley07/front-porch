(function() {
    function HomeCtrl(Room) {
        this.roomsData = Room.all;

    }

    angular
      .module('frontPorch')
      .controller('HomeCtrl', ['Room', HomeCtrl]);

})();
