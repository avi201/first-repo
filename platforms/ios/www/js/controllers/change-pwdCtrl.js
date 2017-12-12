app.controller('change-pwdCtrl', function($scope,$state, $ionicSideMenuDelegate, $ionicHistory,$ionicPopup,serviceXamarin,$ionicLoading) {
  $scope.$on('$ionicView.beforeEnter', function() {
  $scope.myfrm={};
    
  
});
      $scope.changePwd=function(){
                  $ionicLoading.show({
                    content: 'Loading',
                    animation: 'fade-in',
                    showBackdrop: true,
                    maxWidth: 200,
                    showDelay: 0
                      });

          var data = {
                      old_password:$scope.myfrm.oldP,
                      password:$scope.myfrm.newpwd,
                      password_confirmation:$scope.myfrm.cpwd
               }
           
        serviceXamarin.change_passwordPost(data)
            .then(function(objS){
                      $ionicLoading.hide();
                      console.log('change_password Status Success:--->>'+JSON.stringify(objS));
             
                      if(objS.data.response_code== 500){
                           
                        var alertPopup = $ionicPopup.alert({
                                              title: 'Change Password',
                                              template: objS.data.response_message
                                              });

                                                     //console.log("DATA For acces--->>"+JSON.stringify(objS.data.user));

                      }else if(objS.data.response_code== 400) {
                        var alertPopup = $ionicPopup.alert({
                                              title: 'Change Password',
                                              template: objS.data.response_message
                                              });

                      }
                      else if(objS.data.response_code== 401) {
                        var alertPopup = $ionicPopup.alert({
                                              title: 'Change Password',
                                              template: objS.data.response_message
                                              });

                      }
                      else{
                        var alertPopup = $ionicPopup.alert({
                                              title: 'Change Password',
                                              template: objS.data.response_message
                                              });
                         $state.go('login');

                      }
                      },function(objE){
                      $ionicLoading.hide();
                      console.log('loginPost Error:-    '+JSON.stringify(objE));
                      });
             
   
     
}
    
     $scope.goback=function(){
    $ionicHistory.goBack();
  }
     $scope.myfrm={};
  $scope.tc=function(){
	$state.go("tc");	
	}
});
  

