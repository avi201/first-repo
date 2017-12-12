app.controller('loginCtrl', function($scope,$state,serviceXamarin,valueService,$ionicPopup,$cordovaDevice,httpModifier, $ionicLoading) {
  $scope.$on('$ionicView.beforeEnter', function() {
  $scope.loginFrm={};
     $scope.loginFrm.email = localStorage.username;
     $scope.loginFrm.password = localStorage.pass;
     if( localStorage.username==null || localStorage.username =='' || localStorage.username===undefined){
        $scope.item.checked=false;
          $scope.flag=true;  
     }
     else{
        $scope.item.checked=true;
        $scope.flag=false;

     }
   $scope.isEntryInvalid=false;
   $scope.isPwdInvalid=false;
   $scope.invalidMobile=false;
   //$scope.isChecked=false;
   });

    var spaceRegex =/^$|\s+/;
  $scope.$watch('loginFrm.email',function(){
  	console.log("dasdasd")
  	$scope.isEntryInvalid=false;
  	$scope.invalidMobile=false;
  	//$scope.loginFrm.email=$scope.loginFrm.email;
  });
   
  $scope.reset=function(){
  
  	$scope.isEntryInvalid=false;
  	$scope.invalidMobile=false;
    $scope.isPwdInvalid=false;
    $scope.isSpaceInvalid=false;
       $scope.flag=true;  
      
  }



   $scope.itemChange = function() {
   console.log('remember ', $scope.item.checked);
 };
 
 $scope.item = { checked: false };

  
		$scope.validateEmailNumber=function(){
       
       
        console.log(spaceRegex.test($scope.loginFrm.email));
        var spCharRegex= /^([a-zA-Z0-9]+(\.[_a-zA-Z0-9]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*(\.[a-zA-Z]{2,5}))|\d+$/;
		var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		if(isNaN($scope.loginFrm.email) && !re.test($scope.loginFrm.email) ){
			$scope.isEntryInvalid=true;
            
        }
   
		if(!isNaN($scope.loginFrm.email) && $scope.loginFrm.email.length!=10 ){
			$scope.invalidMobile=true;
            
        
        if(isNaN($scope.loginFrm.email) && ( !spCharRegex.test($scope.loginFrm.email)|| spaceRegex.test($scope.loginFrm.email)) ){
			$scope.isEntryInvalid=true;
             
		}
         if($scope.loginFrm.email!='' && $scope.loginFrm.password!='' && $scope.isEntryInvalid==false && $scope.invalidMobile==false && $scope.isEntryInvalid==false && $scope.isPwdInvalid==false ){
          $scope.flag=false;}
       
	}
}
 $scope.validatePassword=function(){
      
    var pwdRegex =/^.{8,16}$/;
    if(!pwdRegex.test($scope.loginFrm.password)){
      $scope.isPwdInvalid=true;
        
    }
      if($scope.loginFrm.email!='' && $scope.loginFrm.password!='' && $scope.isEntryInvalid==false && $scope.invalidMobile==false && $scope.isEntryInvalid==false && $scope.isPwdInvalid==false ){
         $scope.flag=false;}
  }


 
    
    $scope.login=function(){

      $ionicLoading.show({
    content: 'Loading',
    animation: 'fade-in',
    showBackdrop: true,
    maxWidth: 200,
    showDelay: 0
      });
          var device = $cordovaDevice.getDevice().platform;
          console.log("device type"+device);

         if($scope.item.checked==true){
           localStorage.username=$scope.loginFrm.email;
           localStorage.pass=$scope.loginFrm.password;

         }
         else{

           localStorage.username='';
           localStorage.pass='';


         }
   
         var uuid = $cordovaDevice.getUUID();
          var platform = $cordovaDevice.getPlatform();
         console.log("Device id---->>>"+JSON.stringify(uuid))
           var data = {
        username:$scope.loginFrm.email,
        password:$scope.loginFrm.password,
          device:{"device_id":uuid,"device_type":platform}
    }
           
        serviceXamarin.loginPost(data)
            .then(function(objS){
                      $ionicLoading.hide();
                      console.log('Login Status Success:--->>'+JSON.stringify(objS));
             
                      if(objS.data.response_code== 200){
                           
                        var alertPopup = $ionicPopup.alert({
                                              title: 'Login',
                                              template: objS.data.response_message
                                              });

                          valueService.loginData = (objS);
                           console.log("DATA For acces--->>"+JSON.stringify(objS.data.user));

                           $state.go('menu.home')

                      }else{
                        var alertPopup = $ionicPopup.alert({
                                              title: 'Login',
                                              template: objS.data.response_message
                                              });

                      }
                      },function(objE){
                      $ionicLoading.hide();
                      console.log('loginPost Error:-    '+JSON.stringify(objE));
                      });
                     
       }
 

});
  