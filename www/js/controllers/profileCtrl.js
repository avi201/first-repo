app.controller('profileCtrl', function($scope, $ionicSideMenuDelegate,profileService,$ionicLoading, $ionicHistory,serviceXamarin) {
     $scope.$on('$ionicView.beforeEnter', function() {
          $ionicLoading.show({
    content: 'Loading',
    animation: 'fade-in',
    showBackdrop: true,
    maxWidth: 200,
    showDelay: 0
      });

//scope.img="img/logo.png";
      console.log("show profile datafdsfs");
   
        serviceXamarin.showProfile().then(function(objS){
                 
                    $scope.profile_data=objS.data.user;
                    $scope.img= $scope.profile_data.image.url;
                  profileService.profile_data=$scope.profile_data;
                   if( $scope.img==null || $scope.img=="" ||$scope.img===undefined){ $scope.img="img/logo.png";}
                  
                    console.log("show profile data"+profileService.profile_data);
                       $ionicLoading.hide();
                       },function(objE){  
                          $ionicLoading.hide();
                       console.log('showProfle Get Error:---'+JSON.stringify(objE));
                       });
                  
  
       
});


     $scope.goback=function(){
    $ionicHistory.goBack();
  }
 
  
  
  
});
  