app.controller('search-menuCtrl', function($scope,$state, $ionicSideMenuDelegate, $ionicHistory,eventService,serviceXamarin,$ionicLoading,vendorService) {
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
        $scope.event=eventService.eventList;
      console.log("servfgfgfg>>>>>"+eventService.eventList.id)
   var data = {
                event_id:eventService.eventList.id,
              }
         console.log("Data"+JSON.stringify(data))
      serviceXamarin.all_vendorsPost(data).then(function(objS){
        $ionicLoading.hide();
          console.log("se>>>>>"+JSON.stringify(objS))
                 $scope.vendorList = objS.data.vendors; 

                  console.log("all vendors "+ JSON.stringify($scope.vendorList));


                      },function(objE){
                      $ionicLoading.hide();
                      console.log('all_vendorsPost Error:-    '+JSON.stringify(objE));
                      });


      $scope.vendors=function(vendor){
        vendorService.vendorList=vendor;
        console.log(vendorService.vendorList);
      $state.go('vendor-details');
      }
      
      
     
});
  

