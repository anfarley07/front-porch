(function() {
  function CookieCtrl($scope, $cookies, $uibModalInstance) {
    $scope.username = '';

    $scope.submitForm = function(isValid) {
      $scope.submitted = true;
      isValid = true;
        if (isValid) {
          $cookies.put("frontPorchCurrentUser", $scope.username) = $scope.username;

          } else {
              console.log('wrong')
          }
          $uibModalInstance.close('closed');
        };
      };


  angular
    .module('frontPorch')
    .controller('CookieCtrl', ['$scope', '$cookies', '$uibModalInstance', CookieCtrl])

})();
