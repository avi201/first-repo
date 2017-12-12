
app.controller('notificationCtrl', function($scope,$state, $ionicSideMenuDelegate, $ionicHistory) {
    $scope.goback=function(){
        $state.go("menu.home");
    $ionicHistory.goBack();
  }
  
});
  