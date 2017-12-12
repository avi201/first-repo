app.controller('orderDetails2Ctrl', function($scope,$state, $ionicSideMenuDelegate, $ionicHistory) {
     $scope.goback=function(){
         $state.go("menu.orderHistory")
    $ionicHistory.goBack();
  }
  
});
  