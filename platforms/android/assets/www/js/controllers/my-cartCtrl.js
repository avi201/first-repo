app.controller('my-cartCtrl', function($scope,$state,$ionicSideMenuDelegate, $ionicHistory,$ionicPopup,$timeout,$ionicLoading,serviceXamarin) {
         

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
                console.log("cart--------------->>"+JSON.stringify( $scope.productList));
                if(objS.data.all_products!=undefined){
               for(var i=0;i<objS.data.all_products.length;i++){
                  objS.data.all_products[i].qty=1;

               }}
                //$scope.productList = objS.data.all_products;
               
                console.log(JSON.stringify($scope.productList))
                if($scope.productList==undefined){
                   $scope.items=0;
               }
                else{  $scope.items=$scope.productList.length;}
                console.log("all events "+ JSON.stringify($scope.productList));

                      },function(objE){alert("err")
                      $ionicLoading.hide();
                      console.log('eventGet Error:-    '+JSON.stringify(objE));
                      });

});


 $scope.total=function(){
                      var tot=0;
                      if($scope.productList!=undefined){
                     for(var i=0;i<$scope.productList.length;i++){
                           console.log("product list qty "+$scope.productList[i].qty);
                           if($scope.productList[i].qty!=null){
                         tot=tot+parseInt($scope.productList[i].qty)*parseInt($scope.productList[i].price);
                       }
                      }
                      console.log('total : '+tot)
                      return tot;
                    }
                    else{  return 0;}
                }


     

     $scope.goback=function(){
    $ionicHistory.goBack();
  }
  $scope.tc=function(){
	$state.go("tc");	
	}


  $scope.cancel=function(product_id){
  $ionicLoading.show({
    content: 'Loading',
    animation: 'fade-in',
    showBackdrop: true,
    maxWidth: 200,
    showDelay: 0
      });

      var data = {
          
                product_id:product_id

                 }
         
      serviceXamarin.remove_form_cartPost(data).then(function(objS){
                        $ionicLoading.hide();                   
               // $scope.productsList=objS.data.vendor_products;
                console.log("products removed "+ JSON.stringify(objS));

                if(objS.data.renderCode== 200){
                           
                        var alertPopup = $ionicPopup.alert({
                                              title: 'My Cart',
                                              template: objS.data.render_message
                                              });
                           console.log("DATA For acces--->>"+JSON.stringify(objS.data.user));

                          //$state.go($state.current, {}, {reload: true}); 
                          $state.reload();


                      }else{
                        var alertPopup = $ionicPopup.alert({
                                              title: 'My Cart',
                                              template: objS.data.response_message
                                              });

                      }

                      },function(objE){
                      $ionicLoading.hide();
                      console.log('getproductPost Error:-    '+JSON.stringify(objE));
                      });

}

  
  $scope.order=function(){

var product=new Array();
  
  if($scope.productList!=undefined){

for(i=0;i<$scope.productList.length;i++){

   product.push({"product_id":$scope.productList[i].id,"product_quantity":$scope.productList[i].qty});

}
}
console.log("require data"+JSON.stringify(product));

   console.log($scope.total()+"    list : "+JSON.stringify($scope.productList)); 
       var data = {
          
                total_price:$scope.total(),
                product_list:product

              
            }
         console.log("place order======>>>>"+JSON.stringify(data))
      serviceXamarin.product_orderPost(data).then(function(objS){
                        $ionicLoading.hide();                   
               // $scope.productsList=objS.data.vendor_products;
                console.log("products order "+ JSON.stringify(objS));

                if(objS.data.response_code== 200){
                           
                        var alertPopup = $ionicPopup.alert({
                                              title: 'My Cart',
                                              template: objS.data.response_message
                                              });
                           console.log("DATA For acces--->>"+JSON.stringify(objS.data));

                          //$state.go($state.current, {}, {reload: true}); 
                          $state.reload();


                      }else{
                        var alertPopup = $ionicPopup.alert({
                                              title: 'My Cart',
                                              template: objS.data.response_message
                                              });
                        console.log("DATA For acces--->>"+JSON.stringify(objS.data));
                       $state.reload();

                      }

                      },function(objE){
                      $ionicLoading.hide();
                      console.log('getproductPost Error:-    '+JSON.stringify(objE));
                      });





  // var confirmPopup = $ionicPopup.alert({
  //    template: '<p class="alrt">Your order has been placed</p><p class="alrt">Thank you.</p>'
  //  });

 
  //     $timeout(function() {
  //    confirmPopup.close(); //close the popup after 3 seconds for some reason
  // }, 3000);


}


  
});
  



// var product_list=new Array();

// for(i=0;i<product_list.product_list.length;i++){

//    product_list.push({"product_id":product_list.product_list[i].id,"product_quantity":product_list.product_list[i].qty});

// }