app.controller('homeCtrl', function($scope, $state, $ionicSideMenuDelegate,$interval, eventDetails,$ionicHistory,eventService,valueService,serviceXamarin,$ionicPopup,$ionicLoading) {
  $scope.$on('$ionicView.beforeEnter', function() {
     localStorage.back = 0;
$ionicLoading.show({
    content: 'Loading',
    animation: 'fade-in',
    showBackdrop: true,
    maxWidth: 200,
    showDelay: 0
      });


     $scope.goback=function(){
    $ionicHistory.goBack();
  }
      $interval( function(){ 
         
      serviceXamarin.alleventGet().then(function(objS){
                $ionicLoading.hide();                          
                //eventService.eventList = (objS.data);
                $scope.eventList = objS.data.events_list;
                var img=new Array();

                          for(i=0;i<$scope.eventList.length;i++){
                              if($scope.eventList[i].images.length!=0){
                             img.push({"img_url":$scope.eventList[i].images[0].picture.url});  
                           }
                             else {
                               img.push({"img_url":" "});  
                             }
                           }
                $scope.image=img;
                console.log("imge url"+  JSON.stringify( $scope.image));
               //$scope.img=$scope.eventList[8].images[0].picture.url;
               // console.log("url of image"+  $scope.eventList[4].images[0].picture.url);
                //console.log("all events "+ JSON.stringify(eventService.eventList ));
               // console.log("all img "+ JSON.stringify($scope.img)); event.events_list[$index].images[0].picture.url

                      },function(objE){
                      $ionicLoading.hide();
                      console.log('eventGet Error:-    '+JSON.stringify(objE));
                      });
  
    }, 20000);
    
    });

   $scope.eventData=function(details){
    localStorage.back = 1;
    eventDetails.details=details;
     $state.go('event-details');
    console.log("prticular event data"+eventDetails.details);
    console.log("prticular event data"+JSON.stringify(eventDetails.details));
  }

});




