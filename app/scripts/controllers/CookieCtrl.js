(function() {
  function CookieCtrl($scope, $cookies, $uibModal) {
    $scope.user = {};

    $scope.submitForm = function(isValid) {
      $scope.submitted = true;
        if (isValid) {
          $uibModal.close('closed');
          $cookies.username = $scope.user.username;

          } else {
              console.log('wrong')
          }
        }
      }

    }


  angular
    .module('frontPorch')
    .controller('CookieCtrl', ['$scope', '$cookies', '$uibModal', CookieCtrl])

})();
