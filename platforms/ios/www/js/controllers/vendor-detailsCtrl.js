app.controller('vendor-detailsCtrl', function($scope,$state, $ionicSideMenuDelegate, $ionicHistory,$ionicPopup,$timeout,$stateParams,vendorService,serviceXamarin,$ionicLoading) {

$scope.$on('$ionicView.beforeEnter', function() {
  $ionicLoading.show({
    content: 'Loading',
    animation: 'fade-in',
    showBackdrop: true,
    maxWidth: 200,
    showDelay: 0
      });

  serviceXamarin.mycartGet().then(function(objS){
                $ionicLoading.hide();                          
                //eventService.eventList = (objS.data);
                $scope.productList = objS.data.all_products;
                //console.log("after"+JSON.stringify((objS.data.all_products)));
                if($scope.productList==undefined){
                   $scope.items=0;
               }
                else{  $scope.items=$scope.productList.length;}
                //console.log("all products "+ JSON.stringify($scope.productList));

                      },function(objE){alert("err")
                      $ionicLoading.hide();
                      //console.log('eventGet Error:-    '+JSON.stringify(objE));
                      });

});





   $scope.vendor=vendorService.vendorList;
  console.log('name_of_business:-------'+$scope.vendor.name_of_business);
 

      var data1 = {
          
                vendor_id:$scope.vendor.id

                 }
         
      serviceXamarin.getproductPost(data1).then(function(objS){
        $ionicLoading.hide();
                                           
                $scope.productsList=objS.data.vendor_products;
                console.log("all products "+ JSON.stringify($scope.productsList));

                      },function(objE){
                        $ionicLoading.hide();
                      console.log('getproductPost Error:-    '+JSON.stringify(objE));
                      });


$scope.add=function(product_id){
  $ionicLoading.show({
    content: 'Loading',
    animation: 'fade-in',
    showBackdrop: true,
    maxWidth: 200,
    showDelay: 0
      });

      var data2 = {
          
                product_id:product_id

                 }
         
      serviceXamarin.add_to_cartPost(data2).then(function(objS){
                        $ionicLoading.hide();                   
               // $scope.productsList=objS.data.vendor_products;
                console.log("products added "+ JSON.stringify(objS));
                     if(objS.data.response_code== 500){
                           
                        var alertPopup = $ionicPopup.alert({
                                              title: 'Vendor Details',
                                              template: objS.data.response_message
                                              });
                           
                           console.log("DATA For acces--->>"+JSON.stringify(objS.data.user));
                           $state.reload();

                      }
                      if(objS.data.response_code== 200){
                           
                        var alertPopup = $ionicPopup.alert({
                                              title: 'Vendor Details',
                                              template: objS.data.responseMessage
                                              });
                           console.log("DATA For acces--->>"+JSON.stringify(objS.data.user));
                           $state.reload();

                      }
                
                       // if(objS.data.response_code== 400){
                           
                       //  var alertPopup = $ionicPopup.alert({
                       //                        title: 'Xamarin',
                       //                        template: objS.data.response_message
                       //                        });

                       //     console.log("DATA For acces--->>"+JSON.stringify(objS.data.user));
                       //     $state.reload();

                      //}
                      else{
                        var alertPopup = $ionicPopup.alert({
                                              title: 'Vendor Details',
                                              template: objS.data.responseMessage
                                              });
                        $state.reload();

                      }

                      },function(objE){
                      $ionicLoading.hide();
                      console.log('getproductPost Error:-    '+JSON.stringify(objE));
                      });

}


  
});
  

