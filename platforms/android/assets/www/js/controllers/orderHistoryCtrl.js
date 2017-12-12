app.controller('orderHistoryCtrl', function($scope, $ionicSideMenuDelegate, $ionicHistory) {
     $scope.goback=function(){
    $ionicHistory.goBack();
  }
  
});
  