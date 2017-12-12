app.controller('event-listCtrl', function($scope,$state, $ionicSideMenuDelegate, $ionicHistory,locationService,eventDetails) {
     $scope.goback=function(){
    $ionicHistory.goBack();
  }
 


 $scope.eventList=locationService.eventList;
 // var img=new Array();

 //                          for(i=0;i<$scope.eventList.length;i++){
 //                              if($scope.eventList[i].images.length!=0){
 //                             img.push({"img_url":$scope.eventList[i].images[0].picture.url});  
 //                           }
 //                             else {
 //                               img.push({"img_url":" "});  
 //                             }
 //                           }
 //                $scope.image=img;
 //                console.log("imge url"+  JSON.stringify( $scope.image));

 $scope.eventData=function(details){
    eventDetails.details=details;
     $state.go('event-details');
    console.log("prticular event data"+eventDetails.details);
    console.log("prticular event data"+JSON.stringify(eventDetails.details));
  }

});
  

