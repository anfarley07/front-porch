(function() {
    function HomeCtrl(Room, ModalCtrl) {
        this.roomsData = Room.all;

        HomeCtrl.openModal = function($scope, $uibModal){
            $scope.open = function(size, template) {
                $uibModal.open({
                    animation: true,
                    templateUrl: template || 'roomModalContent.html',
                    controller: 'ModalCtrl',
                    backdrop: 'static'
                });
            };
       };
    

    angular
      .module('frontPorch', ['ui.bootstrap'])
      .controller('HomeCtrl', ['Room', 'Modal', HomeCtrl]);
})();
