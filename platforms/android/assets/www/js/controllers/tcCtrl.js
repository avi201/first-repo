app.controller('tcCtrl', function($scope,$state, $ionicSideMenuDelegate, $ionicHistory,$ionicLoading,serviceXamarin) {
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
       
                        title:"Terms Of Use"


                         }
           
        serviceXamarin.staticPost(data).then(function(objS){
                      $ionicLoading.hide();
                      console.log("term of Use "+JSON.stringify(objS));
                      $scope.tc=objS.data.content;
                      console.log('Terms Of Use:--->>'+JSON.stringify($scope.tc));
             
                      },function(objE){
                      $ionicLoading.hide();
                      console.log('Terms Of UsePost Error:-    '+JSON.stringify(objE));
                      });
});
  

