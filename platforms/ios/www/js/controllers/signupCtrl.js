app.controller('signupCtrl', function($scope,$state, $ionicSideMenuDelegate, $ionicLoading, $ionicHistory,$cordovaCamera,$ionicActionSheet,serviceXamarin,valueService,$ionicPopup,$cordovaDevice) {
     
     $scope.$on('$ionicView.beforeEnter', function() {
    $scope.signfrm={};
    $scope.signfrm.firstname='';
    $scope.signfrm.lastname=''; 
    $scope.signfrm.mnumber=''; 
    $scope.signfrm.email=''; 
    $scope.signfrm.password=''; 
    $scope.signfrm.cpwd='';    
    $scope.isFirstNameInvalid=false;
    $scope.isLastNameInvalid=false;
    $scope.isEmailInvalid=false;
    $scope.isNumberInvalid=false;
    $scope.isPwdInvalid=false;
   });
    $scope.img1='iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTExIDc5LjE1ODMyNSwgMjAxNS8wOS8xMC0wMToxMDoyMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjYxNjlDRjkyM0FBOTExRTY4QTM2OTAzMzQwRjY0OUVCIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjYxNjlDRjkzM0FBOTExRTY4QTM2OTAzMzQwRjY0OUVCIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NjE2OUNGOTAzQUE5MTFFNjhBMzY5MDMzNDBGNjQ5RUIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NjE2OUNGOTEzQUE5MTFFNjhBMzY5MDMzNDBGNjQ5RUIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/iAC1AAA+J0lEQVR42uzd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';

   $scope.img='img/logo.png';
    $scope.imgCopy=$scope.img;
     var nameRegex = /^[a-zA-Z][a-zA-Z ]*$/;
     var PwdRegex= /^[A-Za-z0-9!@#$%^&*()_]{8,20}$/;
     var numberregx =  (/^\d*$/);
     var spaceRegex =/^$|\s+/;
     var numberRegex=/^([^0-9]*)$/;
     var emailRegex = /^\w+@[a-zA-Z]+?\.[a-zA-Z]{2,3}$/;
     var emailRegex1 = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i;
     var pwdRegex =  /^[a-zA-Z_\- ]+$/;
     var spCharRegex= /^([a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,5}))|\d+$/;
   
	  $scope.goback=function(){
       $ionicHistory.goBack();
      }
     
	
	 $scope.tc=function(){
	$state.go("tc");	
	}
    
  $scope.reset=function(){
  	$scope.isFirstNameInvalid=false;
    $scope.isLastNameInvalid=false;
    $scope.isEmailInvalid=false;
    $scope.isPwdInvalid=false;
    $scope.isNumberInvalid=false;
    // $scope.isSpaceInvalid=false;
 
   
  }
 

	

  $scope.validateFirstName=function(){
    
    console.log(spaceRegex.test($scope.signfrm.email));
    if(!nameRegex.test($scope.signfrm.firstname)){
      $scope.isFirstNameInvalid=true;
    }
  }
    $scope.validateLastName=function(){
     if (!nameRegex.test($scope.signfrm.lastname)){
      $scope.isLastNameInvalid=true;
   
      }
    }    
     $scope.validateNumber=function(){
       var numberRegex="^\d{10}$";
     if (numberRegex.match($scope.signfrm.mnumber)){
      $scope.isNumberInvalid=true;
   
      }
    }   
      $scope.validateEmail=function(){
      console.log(spCharRegex.test($scope.signfrm.email));
      if(spaceRegex.test($scope.signfrm.email)  || (!spCharRegex.test($scope.signfrm.email) && !emailRegex.test($scope.signfrm.email))){ 
      $scope.isEmailInvalid=true;
       
             }
      }
  $scope.validatePassword=function(){
   
    var pwdRegex = /^.{8,16}$/;
    if(!pwdRegex.test($scope.signfrm.password)){
      $scope.isPwdInvalid=true;
    }
     
  }
     
     
     
	    $scope.start = function(){
          
  

      var ShareSheet= $ionicActionSheet.show({
           buttons: [
                    { text: '<div class="gallery-s">Choose existing</div>' },
                    { text: '<div class="camera-s"> Take from camera</div>'},
                    ],
                    cancelText: '<div class="cancel-s">Cancel</div>',
                    buttonClicked: function(index) {
                    ShareSheet();
                  
                       if(index=='0'||index=='0'){
 														
                              ShareSheet();
                          var options = {
                             quality: 50,
                         destinationType: Camera.DestinationType.DATA_URL,
                          sourceType:Camera.PictureSourceType.PHOTOLIBRARY,
                               allowEdit: true,
                               encodingType:0,
                          encodingType: Camera.EncodingType.JPEG,
                                targetWidth: 120,
                                targetHeight: 120,
                            popoverOptions: CameraPopoverOptions,
                              saveToPhotoAlbum: false,
                                     correctOrientation:true
                                              };
                                                                        
                  $cordovaCamera.getPicture(options).then(function(imageData) {
                                                                                                                
                       $scope.img = "data:image/jpeg;base64," + imageData;
                  
                                                                                                               
                              }, function(err) {
                                                                        //  error 
									});
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                        
                                                                    
                                                    }
                                   if(index=='1'||index=='1'){
                                                                         ShareSheet();
                                                                         var options = {
                                                                         quality: 50,
                                                                         destinationType:Camera.DestinationType.DATA_URL,
                                                                         sourceType:Camera.PictureSourceType.CAMERA,
                                                                         allowEdit: true,
                                                                         encodingType:0,
                                                                         encodingType: Camera.EncodingType.JPEG,
                                                                         targetWidth: 120,
                                                                         targetHeight: 120,
                                                                         popoverOptions: CameraPopoverOptions,
                                                                         saveToPhotoAlbum: false,
                                                                         correctOrientation:true
                                                                         };
                                                                        
                                                                         $cordovaCamera.getPicture(options).then(function(imageData) {
                             $scope.img = "data:image/jpeg;base64," + imageData;
                                                                                                                
                                                                                                                 //image.src = "data:image/jpeg;base64," + imageData;
                                                                                                                 }, function(err) {
                                                                                                                 // error
                                                                                                                 });
                                                                        
                                                                        
                                                                         }
                                                                         }
                                                                         });


  



    
    }
        
        
        
         $scope.signup=function(){

     $ionicLoading.show({
     content: 'Loading',
     animation: 'fade-in',
     showBackdrop: true,
     maxWidth: 200,
     showDelay: 0
      });


             var uuid = $cordovaDevice.getUUID();
             var platform = $cordovaDevice.getPlatform();
             console.log("Device id---->>>"+JSON.stringify(uuid))
           var data = {
                        first_name:$scope.signfrm.firstname,
                        last_name:$scope.signfrm.lastname,
                        mobile_no:$scope.signfrm.mnumber,
                        email:$scope.signfrm.email,
                        password:$scope.signfrm.newpwd,
                        password_confirmation:$scope.signfrm.cpwd,
                        image: $scope.img.substr(22),
                        device:{"device_id":uuid,"device_type":platform},
                        role:"customer"
                    }

     if($scope.img == $scope.imgCopy){
                  data.image = $scope.img1;
              }else{
                  data.image = $scope.img.substr(22);
              }

        serviceXamarin.signUpPost(data).then(function(objS){
            //alert(hello)
            console.log("Data====>>>"+JSON.stringify(data))
                       $ionicLoading.hide();
                        if(objS.data.response_code== 200){
                        var alertPopup = $ionicPopup.alert({
                                               title: 'SignUp',
                                               template: objS.data.response_message
                                               });
                       // navigator.notification.alert(objS.data.response_message,function(){},'Nutrition','OK');
                       console.log('signUpPost:-  '+JSON.stringify(objS));
                      valueService.loginData = objS.data;
                       $state.go('login');
                   }else{
                    var alertPopup = $ionicPopup.alert({
                                               title: 'SignUp',
                                               template: objS.data.response_message
                                               });
                       console.log("error=====>>>"+JSON.stringify(objS.data.response_message))
                   }
                       
                       },function(objE){
                       $ionicLoading.hide();
                       console.log('signUpPost Error:-    '+JSON.stringify(objE));
                       });
  }
  
});







                              
 

                              