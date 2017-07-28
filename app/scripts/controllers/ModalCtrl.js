angular.module('frontPorch').controller('ModalCtrl', function($scope, $uibModalInstance) {
    $scope.searchterm='';
    $scope.ok = function() {
      alert('Your room name is ' + $scope.searchTerm);
      Room.add;
      $uibModalInstance.close($scope.searchTerm);;
    };

    $scope.cancel = function() {
      $uibModalInstance.dismiss('cancel');
    }
})
