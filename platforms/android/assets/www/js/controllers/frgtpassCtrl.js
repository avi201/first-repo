app.controller('frgtpassCtrl', function($scope,$state, $ionicSideMenuDelegate, $ionicHistory,$ionicPopup,serviceXamarin,$cordovaDevice,$ionicLoading) {
    
  $scope.$on('$ionicView.beforeEnter', function() {
   $scope.fgtFrm={};
   $scope.fgtFrm.email = '';
    $scope.isEmailInvalid=false;
   $scope.flag=true;
  
});
    
     var nameRegex = /^[a-zA-Z][a-zA-Z ]*$/;
     var PwdRegex= /^[A-Za-z0-9!@#$%^&*()_]{8,20}$/;
     var numberregx =  (/^\d*$/);
     var spaceRegex =/^$|\s+/;
     var numberRegex=/^([^0-9]*)$/;
     var emailRegex = /^\w+@[a-zA-Z]+?\.[a-zA-Z]{2,3}$/;
     var emailRegex1 = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i;
     var pwdRegex =  /^[a-zA-Z_\- ]+$/;
    var spCharRegex= /^([a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,5}))|\d+$/;
     $scope.flag=true;
     
    $scope.goback=function(){
        $state.go('login')
    $ionicHistory.goBack();
   }
  
		 $scope.forgot=function(){
     $ionicLoading.show({
    content: 'Loading',
    animation: 'fade-in',
    showBackdrop: true,
    maxWidth: 200,
    showDelay: 0
      });
        var uuid = $cordovaDevice.getUUID();
         console.log("Device id---->>>"+JSON.stringify(uuid))
           var data = {
        email:$scope.fgtFrm.email,
        //
        device:{"device_id":uuid}
    }
           //console.log("Data--->>"+JSON.stringify(data))
        serviceXamarin.forgotPost(data)
            .then(function(objS){
                      $ionicLoading.hide();
                     console.log('fogot Status Success:--->>'+JSON.stringify(objS));
             
                      if(objS.data.response_code== 200){
                           // valueService.loginData = objS.data;
                        var alertPopup = $ionicPopup.alert({
                                              title: 'Forgot Password',
                                              template: objS.data.response_message
                                              });

//                          valueService.loginData = (objS);
                           console.log("DATA For acces--->>"+JSON.stringify(objS.data.user));

                           $state.go('login')

                      }
                        else if(objS.data.status == 500){
                        var alertPopup = $ionicPopup.alert({
                                              title: 'Forgot Password',
                                              template: ' Server error'
                                              });

                      }

                      else{
                        var alertPopup = $ionicPopup.alert({
                                              title: 'Forgot Password',
                                              template: objS.data.response_message
                                              });

                      }
                      },function(objE){alert("err")
                      $ionicLoading.hide();
                      console.log('forgotPost Error:-    '+JSON.stringify(objE));
                      });
                     
             
	
     
}
          $scope.reset=function(){
           
            $scope.isEmailInvalid=false;
            $scope.flag=true;
              
        };
         
         
        $scope.validateEmail=function(){
             $scope.flag=false;
      console.log(spCharRegex.test($scope.fgtFrm.email));
      if(spaceRegex.test($scope.fgtFrm.email) || (!emailRegex.test($scope.fgtFrm.email) && !spCharRegex.test($scope.fgtFrm.email))){ 
      $scope.isEmailInvalid=true;
          $scope.flag=true;
       
             }
      }
});
  