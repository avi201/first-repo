app.controller('editProfileCtrl', function($scope,$state, $ionicSideMenuDelegate, $ionicHistory,$cordovaCamera,$ionicActionSheet,profileService,$cordovaDevice,serviceXamarin,$ionicPopup,$ionicLoading) {

      $scope.$on('$ionicView.beforeEnter', function() {
    $scope.editfrm={};
    $scope.editfrm.firstname=profileService.profile_data.first_name;
    $scope.editfrm.lastname=profileService.profile_data.last_name; 
//    $scope.editfrm.mnumber=parseInt(profileService.profile_data.mobile_no); 
//    $scope.editfrm.email=profileService.profile_data.email;
     $scope.img=profileService.profile_data.image.url;
    $scope.imgCopy = profileService.profile_data.image.url;
      if( $scope.img==null || $scope.img=="" ||$scope.img===undefined){ $scope.img="img/logo.png";}

    $scope.isFirstNameInvalid=false;
    $scope.isLastNameInvalid=false;
    $scope.isEmailInvalid=false;
    $scope.isNumberInvalid=false;
   $scope.isNobInvalid=false;
   $scope.isAddressInvalid=false;
});
    
    $scope.goback=function(){
         $state.go("menu.profile");
  }
		 $scope.save=function(){
         $state.go("menu.profile");
  }
            
   
    //$scope.img='img/logo.png';
     var begSpaceRegex=/^\S/;
     var nameRegex = /^[a-zA-Z][a-zA-Z ]*$/;
     var PwdRegex= /^[A-Za-z0-9!@#$%^&*()_]{8,20}$/;
     var numberregx =  (/^\d*$/);//(/[0-9]/);  /^\S*$/;
     var spaceRegex =/^$|\s+/;
     var numberRegex=/^([^0-9]*)$/;
     // var numberregx1 = /^\S*(\+\d{1,3}[- ]?)?\d{10}$/;
     var emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    var emailRegex1 = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i;
    var pwdRegex =  /^[a-zA-Z_\- ]+$/;

  $scope.reset=function(){
  	$scope.isFirstNameInvalid=false;
    $scope.isLastNameInvalid=false;
    $scope.isEmailInvalid=false;
    $scope.isPwdInvalid=false;
    $scope.isNumberInvalid=false;
   $scope.isNobInvalid=false;
   $scope.isAddressInvalid=false;
 
   
  }
 

	

  $scope.validateFirstName=function(){
     if(!nameRegex.test($scope.editfrm.firstname)){
      $scope.isFirstNameInvalid=true;
    }
  }
    $scope.validateLastName=function(){
     if (!nameRegex.test($scope.editfrm.lastname)){
      $scope.isLastNameInvalid=true;
   
      }
    }    
     $scope.validateNumber=function(){
       var numberRegex="^\d{10}$";
     if (numberRegex.match($scope.editfrm.mnumber)){
      $scope.isNumberInvalid=true;
   
      }
    }   
      $scope.validateEmail=function(){
      if(spaceRegex.test($scope.editfrm.email) || !emailRegex.test($scope.editfrm.email)){ 
      $scope.isEmailInvalid=true;
       
             }
      }
  $scope.validateNob=function(){
  if(!nameRegex.test($scope.editfrm.nob)){
      $scope.isNobInvalid=true;
    }
  }
  $scope.validateAddress=function(){
  if (!begSpaceRegex.test($scope.editfrm.address)){
      $scope.isAddressInvalid=true;
   
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
                                                                         destinationType:                Camera.DestinationType.DATA_URL,
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
  
  
    $scope.save=function(){

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
                        first_name:$scope.editfrm.firstname,
                        last_name:$scope.editfrm.lastname,
//                        mobile_no:$scope.editfrm.mnumber,
//                        email:$scope.editfrm.email,
                        image: $scope.img.substr(22),
                        device:{"device_id":uuid}
                        
                    }
                      if($scope.img == $scope.imgCopy){
                  data.image = "";
              }else{
                  data.image = $scope.img.substr(22);
              }
        serviceXamarin.editProfile(data).then(function(objS){
           $ionicLoading.hide();
         
            console.log("Data====>>>"+JSON.stringify(data))
                       
                        if(objS.data.response_code== 200){
                        var alertPopup = $ionicPopup.alert({
                                               title: 'Edit Profile',
                                               template: objS.data.response_message
                                               });
                       
                       console.log('signUpPost:-  '+JSON.stringify(objS));
                     
                       $state.go('menu.profile');
                   }else{
                    var alertPopup = $ionicPopup.alert({
                                               title: 'Edit Profile',
                                               template: objS.data.response_message
                                               });
                       console.log("error=====>>>"+JSON.stringify(objS.data.response_message))
                   }
                       
                       },function(objE){
                       $ionicLoading.hide();
                       console.log('signUpPost Error:---'+JSON.stringify(objE));
                       });
  }
  
});
  