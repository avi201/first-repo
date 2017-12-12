app.controller('select-eventCtrl', function($scope,$state, $ionicSideMenuDelegate, $ionicHistory,locationService,eventDetails) {
     $scope.goback=function(){
    $ionicHistory.goBack();
  }
 
 $scope.eventList=locationService.eventList;
 console.log(JSON.stringify($scope.eventList));


      // var location=new Array();
      // for(i=0;i<$scope.eventList.length;i++){
      // 	location.push()

                // var img=new Array();

                //           for(i=0;i<$scope.eventList.length;i++){
                //               if($scope.eventList[i].images.length!=0){
                //              img.push({"img_url":$scope.eventList[i].images[0].picture.url});  
                //            }
                //              else {
                //                img.push({"img_url":" "});  
                //              }
                //            }
                // $scope.image=img;
                // console.log("imge url"+  JSON.stringify( $scope.image));






											setTimeout(function(){
												 $scope.eventList=locationService.eventList;
												  var map = new google.maps.Map(document.getElementById('map'), {
												      zoom: 10,
												      center: new google.maps.LatLng(28.5603, 77.2913),
												      mapTypeId: google.maps.MapTypeId.ROADMAP
												    });

												    var infowindow = new google.maps.InfoWindow();

												    var marker, i;

												    for (i = 0; i < $scope.eventList.length; i++) {  
												        marker = new google.maps.Marker({
												        position: new google.maps.LatLng( $scope.eventList[i].latitude,$scope.eventList[i].longitude),
												        map: map
												      });
												         // marker.setMap(map);
                                                      // console.log("marker>>>>>>>>>>>>>"+position);
												      google.maps.event.addListener(marker, 'click', (function(marker, i) {
												        return function() {
												          infowindow.setContent($scope.eventList[i].name);
												          infowindow.open(map, marker);
												           eventDetails.details=$scope.eventList[i];
												           $state.go("event-details");
												           console.log("Location data......."+eventDetails.details);
												        }
												      })(marker, i));
												    }
												}, 500);





});
  
