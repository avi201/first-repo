app.controller('event-detailsCtrl', function($scope,$state,eventDetails, $ionicSideMenuDelegate, $ionicHistory,eventService,$stateParams,valueService,serviceXamarin,$ionicLoading) {
   $ionicLoading.show({
    content: 'Loading',
    animation: 'fade-in',
    showBackdrop: true,
    maxWidth: 200,
    showDelay: 0
      });



     $scope.goback=function(){
      if( localStorage.back == 1){
           $state.go('menu.home')
      }else{
          $ionicHistory.goBack();
      }
  }
    //$scope.user = {};

         $scope.event=eventDetails.details;
         $scope.event_img=JSON.stringify($scope.event);
          console.log("event images"+( $scope.event_img));
          console.log("image url"+ $scope.event_img.images);
          //console.log("ddd"+JSON.stringify($scope.event));
      
    eventService.eventList = $scope.event;
    var data = {
                USERID:valueService.loginData.data.user.id,
                ACCESSTOKEN:valueService.loginData.data.user.access_token,
                event_id:$scope.event.id

                 }
         
      serviceXamarin.geteventPost(data).then(function(objS){
                    $ionicLoading.hide();                       
                $scope.events=objS.data.event;
                console.log("event "+ JSON.stringify(eventService.eventList ));

                      },function(objE){
                        $ionicLoading.hide();
                      console.log('eventGet Error:-    '+JSON.stringify(objE));
                      });
});
  

