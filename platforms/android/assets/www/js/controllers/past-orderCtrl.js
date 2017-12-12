app.controller('past-orderCtrl', function($scope,$state, $ionicSideMenuDelegate, $ionicHistory,serviceXamarin,$ionicLoading) {
     $scope.goback=function(){
    $ionicHistory.goBack();
  }
  $scope.tc=function(){
	$state.go("tc");	
	}

	$scope.$on('$ionicView.beforeEnter', function() {
$ionicLoading.show({
    content: 'Loading',
    animation: 'fade-in',
    showBackdrop: true,
    maxWidth: 200,
    showDelay: 0
      });
   
      serviceXamarin.pastOrderGet().then(function(objS){
                $ionicLoading.hide();                          
                $scope.orderList = objS.data.products;
               console.log(JSON.stringify($scope.orderList));

                      },function(objE){
                      $ionicLoading.hide();
                      console.log('eventGet Error:-    '+JSON.stringify(objE));
                      });

       $scope.total=function(){
                      var tot=0;
                      if($scope.orderList!=undefined){
                     for(var i=0;i<$scope.orderList.length;i++){
                           console.log("product list total_price "+$scope.orderList[i].total_price);
                           if($scope.orderList[i].total_price!=null){
                         tot=tot+parseInt($scope.orderList[i].total_price);
                       }
                      }
                      console.log('total : '+tot)
                      return tot;
                    }
                    else{  return 0;}
                }


    });
});
  

