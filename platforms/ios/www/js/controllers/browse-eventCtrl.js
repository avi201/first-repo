app.controller('browse-eventCtrl', function($scope,$state, $ionicSideMenuDelegate, $ionicHistory, serviceXamarin, $ionicLoading,$ionicPopup,locationService) {
     $scope.goback=function(){
    $state.go("menu.home");
  }
  $scope.event={};
  



  $scope.search=function(){
  

   var data = {

              location:$scope.event.location

              }
         console.log("LOCATION====>>"+JSON.stringify(data));  
        serviceXamarin.findlocationPost(data).then(function(objS){
                      $ionicLoading.hide();
                      console.log('Location Status Success:--->>'+JSON.stringify(objS));
             
                                 if(objS.data.renderCode== 200){
                           
                                               var alertPopup = $ionicPopup.alert({
                                              title: 'Browse Event',
                                              template: objS.data.renderMessage
                                              });

                                               locationService.eventList = (objS.data.events_list);
                                               console.log("Location For acces--->>"+JSON.stringify(locationService.eventList));

                                              $state.go("select-event");

                                         }
                             else  if(objS.data.responseCode== 400){
                                   
                                var alertPopup = $ionicPopup.alert({
                                                      title: 'Browse Event',
                                                      template: objS.data.responseMessage
                                                      });


                            }else{
                              var alertPopup = $ionicPopup.alert({
                                                    title: 'Browse Event',
                                                    template: objS.data.responseMessage
                                                    });

                            }
                            },function(objE){
                            $ionicLoading.hide();
                            console.log('findlocationPost Error:-    '+JSON.stringify(objE));
                            });
      	
	}
});
  

