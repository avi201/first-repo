app.controller('privacy-policyCtrl', function($scope,$state, $ionicSideMenuDelegate, $ionicHistory,serviceXamarin,$ionicLoading) {
     $scope.goback=function(){
    $ionicHistory.goBack();
  }
 

      $ionicLoading.show({
    content: 'Loading',
    animation: 'fade-in',
    showBackdrop: true,
    maxWidth: 200,
    showDelay: 0
      });

                 var data = {
       
                         title:"Privacy Policy"

                         }
           
        serviceXamarin.staticPost(data).then(function(objS){
                      $ionicLoading.hide();
                      $scope.privacy_policy=objS.data.content;
                      console.log('Private Policy:--->>'+JSON.stringify($scope.privacy_policy));
             
                      },function(objE){
                      $ionicLoading.hide();
                      console.log('PolicyPost Error:---->>'+JSON.stringify(objE));
                      });



});
  

