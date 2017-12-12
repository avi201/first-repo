app.controller('menuCtrl', function($scope,$state, valueService,$ionicSideMenuDelegate, $ionicHistory,profileService, $ionicPopup,$cordovaDevice,serviceXamarin,httpModifier) {
    

      $scope.$on('$ionicView.beforeEnter', function() {
    serviceXamarin.showProfile().then(function(objS){
              
                    $scope.profile_data=objS.data.user;
                     $scope.img= $scope.profile_data.image.url;
                     if( $scope.img==null || $scope.img=="" ||$scope.img===undefined){ $scope.img="img/logo.png";}
                  profileService.profile_data=$scope.profile_data
                    console.log("show menu datga"+JSON.stringify(profileService.profile_data));
                       
                       },function(objE){s
                  
                       console.log('showProfle Get Error:---'+JSON.stringify(objE));
                       });
       
});

 $scope.goback=function(){
    $ionicHistory.goBack();
  }
     
 $scope.logoutPopup=function(){

     var confirmPopup = $ionicPopup.confirm({
    title: 'Logout',
    template: 'Are you sure you want to logout of the application?',
    cancelText: 'No',
    cancelType: 'none',
    okText: 'Yes',
    okType: 'none',
    cssClass: ''
  });

  confirmPopup.then(function(res) {
    if(res) {
              var uuid = $cordovaDevice.getUUID();
              var platform = $cordovaDevice.getPlatform();
              var data = {
    
                   device:{"device_id":uuid,"device_type":platform}
            }
     
         
               serviceXamarin.logoutPost(data)
                  .then(function(objS){
                     
                      if(objS.data.response_code== 200){
                         
                        var alertPopup = $ionicPopup.alert({
                                              title: 'LogOut',
                                              template: objS.data.response_message
                                              });


                           $state.go('login');

                      }else{
                        var alertPopup = $ionicPopup.alert({
                                              title: 'LogOut',
                                              template: objS.data.response_message
                                              });

                      }
                      },function(objE){alert("err")
              
                      console.log('signUpPost Error:-    '+JSON.stringify(objE));
                      });
          }else {
         console.log('You are not sure');
   }
                  
   });
}
 
});

  
  
  

  