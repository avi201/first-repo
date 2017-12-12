var app = angular.module('XAMARIN', ['ionic','ngCordova'])
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      //Comment out this line if you want the next and previous buttons
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(false);
    }
    if(window.StatusBar) {
      // Set the statusbar to use the default style, tweak this to
      // remove the status bar on iOS or change it to use white instead of dark colors.
      StatusBar.styleDefault();
    }
  });
})
    app.config(function($stateProvider, $urlRouterProvider,$ionicConfigProvider,$httpProvider) {
        $ionicConfigProvider.views.swipeBackEnabled(false);

        $stateProvider
        
            .state('menu', {
                 url: '/menu',
            abstract: true,
            templateUrl: 'templates/menu.html',
					controller:'menuCtrl'
             })
         
          .state('login', {
                url : '/login',
                templateUrl : 'templates/login.html',
                controller : 'loginCtrl'
            })
        .state('signup', {
                url : '/signup',
                templateUrl : 'templates/signup.html',
                controller : 'signupCtrl'
            })
         .state('frgtpass', {
                url : '/frgtpass',
                templateUrl : 'templates/frgtpass.html',
                controller : 'frgtpassCtrl'
            })  
        .state('tc', {
                url : '/tc',
                templateUrl : 'templates/tc.html',
                controller : 'tcCtrl'
            })
        .state('details', {
                url : '/details',
                 templateUrl : 'templates/details.html',
                  controller : 'detailsCtrl'
               })  
        .state('menu.home', {
                url : '/home',
               views: {
       'menuContent': {
        templateUrl : 'templates/home.html',
         controller : 'homeCtrl'
                   }
                }
            })
        .state('menu.my-order', {
                url : '/my-order',
                 views: {
       'menuContent': {
        templateUrl : 'templates/my-order.html',
             controller : 'my-orderCtrl'
                }
              }
            })
         .state('menu.past-order', {
                url : '/past-order',
                 views: {
       'menuContent': {
       templateUrl : 'templates/past-order.html',
             controller : 'past-orderCtrl'
                }
              }
            })
        .state('menu.profile', {
                url : '/profile',
                 views: {
       'menuContent': {
        templateUrl : 'templates/profile.html',
         controller : 'profileCtrl'
                }
              }
            })
        	.state('menu.privacy-policy', {
                url : '/privacy-policy',
            views: {
       'menuContent': {
             templateUrl : 'templates/privacy-policy.html',
             controller : 'privacy-policyCtrl'
            }
            }
          })
        .state('notification', {
                url : '/notification',
             templateUrl : 'templates/notification.html',
             controller : 'notificationCtrl'
            }) 
      
        .state('editProfile', {
                url : '/editProfile',
             templateUrl : 'templates/editProfile.html',
             controller : 'editProfileCtrl'
            }) 

			.state('browse-event', {
                url : '/browse-event',
             templateUrl : 'templates/browse-event.html',
             controller : 'browse-eventCtrl'
            })
			.state('select-event', {
                url : '/select-event',
             templateUrl : 'templates/select-event.html',
             controller : 'select-eventCtrl'
            })
			.state('event-list', {
                url : '/event-list',
             templateUrl : 'templates/event-list.html',
             controller : 'event-listCtrl'
            })
			.state('event-details', {
                url : '/event-details',
             templateUrl : 'templates/event-details.html',
             controller : 'event-detailsCtrl'
            })
			.state('search-menu', {
                url : '/search-menu/:user.event',
             templateUrl : 'templates/search-menu.html',
             controller : 'search-menuCtrl'
            })
			.state('vendor-details', {
                url : '/vendor-details',
             templateUrl : 'templates/vendor-details.html',
             controller : 'vendor-detailsCtrl'
            })
             
			.state('my-cart', {
                url : '/my-cart',
             templateUrl : 'templates/my-cart.html',
             controller : 'my-cartCtrl'
            })
		
			.state('change-pwd', {
                url : '/change-pwd',
             templateUrl : 'templates/change-pwd.html',
             controller : 'change-pwdCtrl'
            })
			
			
        $urlRouterProvider.otherwise('login');
        $httpProvider.interceptors.push('httpModifier');
    });
  
//  app.directive('map', function() {
//      return {
//         restrict: 'A',
//         link:function(scope, element, attrs){

//           var zValue = scope.$eval(attrs.zoom);
//           var lat = scope.$eval(attrs.lat);
//           var lng = scope.$eval(attrs.lng);


//           var myLatlng = new google.maps.LatLng(lat,lng),
//           mapOptions = {
//               zoom: zValue,
//               center: myLatlng
//           },
//           map = new google.maps.Map(element[0],mapOptions),
//           marker = new google.maps.Marker({
//                 position: myLatlng,
//                 map: map,
//                 draggable:true
//           });


//         }
//     };
// });
   
   
   
    
  