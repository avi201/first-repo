
app.service('valueService',function(){
         var self=this;
         self.loginData;
})

app.service('eventService',function(){
         var self=this;
         self.eventList;

})
app.service('vendorService',function(){
         var self=this;
         self.vendorList;
})


app.service('profileService',function(){
         var self=this;
         self.profile_data;
         
})

app.service('eventDetails',function(){
         var self=this;
         self.details;
         
})

app.service('locationService',function(){
         var self=this;
         self.eventList;
         
})
 
app.service('serviceXamarin',function($q,$http,errorHandler,$ionicLoading,$cordovaDatePicker,valueService,$cordovaDevice){
          


    var baseUrl="https://xamarin-app.herokuapp.com/";
    //var url = "http://172.16.6.55:3000/api/survey_members/";
    //http://172.16.6.55:3000



    
    var self=this;
    localStorage.setItem('loadcount','0');
    localStorage.setItem('loadcounter','0');
    
    this.isRegistered=function(){
        var deff=$q.defer();
        $http({
           method:"GET",
           url:baseUrl+"Verify/IsRegistered"
        })
        .then(function(objS){
                 deff.resolve(objS);
        },function(objE){
            errorHandler.serverErrorhandler(objE);
            deff.reject("server Error");
        });
        return deff.promise;
    }
    
    this.signUpPost=function(registerInfo){
        var deff=$q.defer();
        $http({
           method:"POST",
           url:baseUrl+"signup.json",
           data:registerInfo,

        })
        .then(function(objS){
                 deff.resolve(objS);
        },function(objE){
            errorHandler.serverErrorhandler(objE);
            deff.reject("server Error");
        });
        return deff.promise;
    }


     
     this.loginPost=function(registerInfo){
     var deff=$q.defer();
     $http({
           method:"POST",
           url:baseUrl+"login.json",
           data:registerInfo,
           })
     .then(function(objS){
         if(objS.data.response_code == 200 || objS.data.response_code == "200"){
            localStorage.access_token=objS.data.user.access_token;
            localStorage.userId=objS.data.user.id;           
        }
           deff.resolve(objS);
           },function(objE){
           errorHandler.serverErrorhandler(objE);
           deff.reject("server Error");
           });
     return deff.promise;
     }


       
    this.logoutPost=function(registerInfo){
        var uuid = $cordovaDevice.getUUID();
        var deff=$q.defer();
        $http({
           method:"POST",
           url:baseUrl+"logout.json",
           data:registerInfo,
        })
        
        .then(function(objS){
            localStorage.removeItem("access_token");
            localStorage.removeItem("userId")
                 deff.resolve(objS);
        },function(objE){
            errorHandler.serverErrorhandler(objE);
            deff.reject("server Error");
        });
        return deff.promise;
    }
    
  this.alleventGet=function(registerInfo){
     var deff=$q.defer();
     $http({
           method:"GET",
           url:baseUrl+"all_events.json",
           data:registerInfo,
//         headers:{
//                USERID:valueService.loginData.data.user.id,
//                ACCESSTOKEN:valueService.loginData.data.user.access_token
//            }
           })
     .then(function(objS){
           deff.resolve(objS);
           },function(objE){
           errorHandler.serverErrorhandler(objE);
           deff.reject("server Error");
           });
     return deff.promise;
     }
   
    this.forgotPost=function(registerInfo){
        var uuid = $cordovaDevice.getUUID();
        var deff=$q.defer();
        $http({
           method:"POST",
           url:baseUrl+"forget_password.json",
           data:registerInfo,
//            headers:{
//                USERID:valueService.loginData.data.user.id,
//                ACCESSTOKEN:valueService.loginData.data.user.access_token,
//                 device:{"device_id":uuid}
//            }


        })
        
        .then(function(objS){
          
            //console.log("fogot"+JSON.stringify(objS));
                 deff.resolve(objS);
        },function(objE){
          
            errorHandler.serverErrorhandler(objE);
            deff.reject("server Error");
        });
        return deff.promise;
    }
    
    
        this.editProfile=function(registerInfo){
        var uuid = $cordovaDevice.getUUID();
        var deff=$q.defer();
        $http({
           method:"POST",
           url:baseUrl+"edit_profile.json",
           data:registerInfo,
          
        })
        
        .then(function(objS){
                 deff.resolve(objS);
        },function(objE){
            errorHandler.serverErrorhandler(objE);
            deff.reject("server Error");
        });
        return deff.promise;
    }





 this.showProfile=function(registerInfo){
        var uuid = $cordovaDevice.getUUID();
        var deff=$q.defer();
        $http({
           method:"GET",
           url:baseUrl+"view_profile.json"
          // data:registerInfo,
          
        })
        
        .then(function(objS){
                 deff.resolve(objS);
        },function(objE){
            errorHandler.serverErrorhandler(objE);
            deff.reject("server Error");
        });
        return deff.promise;
    }
        
    this.all_vendorsPost=function(registerInfo){
        var uuid = $cordovaDevice.getUUID();
        var deff=$q.defer();
        $http({
           method:"POST",
           url:baseUrl+"all_vendors.json",
           data:registerInfo,
//            headers:{
//                USERID:valueService.loginData.data.user.id,
//                ACCESSTOKEN:valueService.loginData.data.user.access_token,
//                 device:{"device_id":uuid}
//            }

        })
        
        .then(function(objS){
                 deff.resolve(objS);
        },function(objE){
            errorHandler.serverErrorhandler(objE);
            deff.reject("server Error");
        });
        return deff.promise;
    }


    this.geteventPost=function(registerInfo){
        var uuid = $cordovaDevice.getUUID();
        var deff=$q.defer();
        $http({
           method:"POST",
           url:baseUrl+"get_event.json",
           data:registerInfo

        })
        
        .then(function(objS){
                 deff.resolve(objS);
        },function(objE){
            errorHandler.serverErrorhandler(objE);
            deff.reject("server Error");
        });
        return deff.promise;
    }
 
  this.getproductPost=function(registerInfo){
        var uuid = $cordovaDevice.getUUID();
        var deff=$q.defer();
        $http({
           method:"POST",
           url:baseUrl+"get_vendor.json",
           data:registerInfo

        })
        
        .then(function(objS){
                 deff.resolve(objS);
        },function(objE){
            errorHandler.serverErrorhandler(objE);
            deff.reject("server Error");
        });
        return deff.promise;
    }
 
   this.add_to_cartPost=function(registerInfo){
        var uuid = $cordovaDevice.getUUID();
        var deff=$q.defer();
        $http({
           method:"POST",
           url:baseUrl+"add_to_cart.json",
           data:registerInfo

        })
        
        .then(function(objS){
                 deff.resolve(objS);
        },function(objE){
            errorHandler.serverErrorhandler(objE);
            deff.reject("server Error");
        });
        return deff.promise;
    }

    this.mycartGet=function(registerInfo){
     var deff=$q.defer();
     $http({
           method:"GET",
           url:baseUrl+"check_out_products.json",
           data:registerInfo
           })
     .then(function(objS){
           deff.resolve(objS);
           },function(objE){
           errorHandler.serverErrorhandler(objE);
           deff.reject("server Error");
           });
     return deff.promise;
     }

this.remove_form_cartPost=function(registerInfo){
        var uuid = $cordovaDevice.getUUID();
        var deff=$q.defer();
        $http({
           method:"POST",
           url:baseUrl+"remove_form_cart.json",
           data:registerInfo

        })
        
        .then(function(objS){
                 deff.resolve(objS);
        },function(objE){
            errorHandler.serverErrorhandler(objE);
            deff.reject("server Error");
        });
        return deff.promise;
    }

 this.product_orderPost=function(registerInfo){
        var uuid = $cordovaDevice.getUUID();
        var deff=$q.defer();
        $http({
           method:"POST",
           url:baseUrl+"product_order.json",
           data:registerInfo

        })
        
        .then(function(objS){
                 deff.resolve(objS);
        },function(objE){
            errorHandler.serverErrorhandler(objE);
            deff.reject("server Error");
        });
        return deff.promise;
    }
    this.change_passwordPost=function(registerInfo){
        var uuid = $cordovaDevice.getUUID();
        var deff=$q.defer();
        $http({
           method:"POST",
           url:baseUrl+"change_password.json",
           data:registerInfo

        })
        
        .then(function(objS){
                 deff.resolve(objS);
        },function(objE){
            errorHandler.serverErrorhandler(objE);
            deff.reject("server Error");
        });
        return deff.promise;
    }
    this.staticPost=function(registerInfo){
        var uuid = $cordovaDevice.getUUID();
        var deff=$q.defer();
        $http({
           method:"POST",
           url:baseUrl+"content.json",
           data:registerInfo

        })
        
        .then(function(objS){
                 deff.resolve(objS);
        },function(objE){
            errorHandler.serverErrorhandler(objE);
            deff.reject("server Error");
        });
        return deff.promise;
    }

    this.crntOrderGet=function(registerInfo){
        var uuid = $cordovaDevice.getUUID();
        var deff=$q.defer();
        $http({
           method:"GET",
           url:baseUrl+"customer_current_order.json",
           data:registerInfo

        })
        
        .then(function(objS){
                 deff.resolve(objS);
        },function(objE){
            errorHandler.serverErrorhandler(objE);
            deff.reject("server Error");
        });
        return deff.promise;
    }
 this.pastOrderGet=function(registerInfo){
        var uuid = $cordovaDevice.getUUID();
        var deff=$q.defer();
        $http({
           method:"GET",
           url:baseUrl+"customer_past_order.json",
           data:registerInfo

        })
        
        .then(function(objS){
                 deff.resolve(objS);
        },function(objE){
            errorHandler.serverErrorhandler(objE);
            deff.reject("server Error");
        });
        return deff.promise;
    }

    this.findlocationPost=function(registerInfo){
        var uuid = $cordovaDevice.getUUID();
        var deff=$q.defer();
        $http({
           method:"POST",
           url:baseUrl+"find_events_by_location.json",
           data:registerInfo

        })
        
        .then(function(objS){
                 deff.resolve(objS);
        },function(objE){
            errorHandler.serverErrorhandler(objE);
            deff.reject("server Error");
        });
        return deff.promise;
    }

})


app.service('errorHandler',function($q){
    this.serverErrorhandler=function(error){
    console.log("ERROR ::"+JSON.stringify(error));
    };
})




app.factory('httpModifier',function($location){
     return{
         request:function(config){
             var token=localStorage.access_token==undefined?"":localStorage.access_token;
             var userId=localStorage.access_token==undefined?"":localStorage.userId;
             // USERID:valueService.loginData.data.user.id,
             config.headers={
                        'ACCESSTOKEN': token,
                        'content-type': 'application/json',
                        'USERID':userId
                    }
             return config;
         },
         requestError:function(config){
             return config;
         },
         response:function(config){
             return config;
         },
         responseError:function(config){
             if(config.status==403)
                 $location.path('login')
                 
                 return config;
         }
         
     }
 })