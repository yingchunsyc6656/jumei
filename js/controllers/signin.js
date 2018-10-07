'use strict';

/* Controllers */
  // signin controller
app.controller('SigninFormController', ['$scope', '$http', '$state','$location', function($scope, $http, $state,$location) {
    $scope.user = {};
    $scope.authError = null;
    $scope.login = function() {
      $scope.authError = null;
      // Try to login
      $http.post($scope.app.host+'login', {username: $scope.user.username, password: $scope.user.password})
      .then(function(response) {
          if(response.data.status=="200"){
              if (response.data.loginstatus=="0") {
                  $scope.authError = response.data.msg;
              }else if(response.data.loginstatus=="1"){
                  var session=response.data.token;
                  sessionStorage.setItem("session",session); //把用户的session传递
                  sessionStorage.setItem("station",response.data.station); //所属岗位传递
                  sessionStorage.setItem("department",response.data.department);  //所属部门传递
                  sessionStorage.setItem("userName",response.data.userName); //用户传递
                  if(response.data.station=='1' && response.data.department=='1'){
                    $state.go("app.home");  //前台
                  }else if(response.data.station=='1' && response.data.department=='2'){
                    $state.go("app.designer");  //设计师
                  }else if(response.data.station=='1' && response.data.department=='3'){
                    $state.go("app.financial");  //财务-收银
                  }else if(response.data.station=='2' && response.data.department=='3'){
                    $state.go('app.business.translist');  //财务-出纳
                  }else if(response.data.station=='1' && response.data.department=='4'){
                    $state.go('app.nurse');  //护士
                  }else if(response.data.station=='1' && response.data.department=='5'){
                    $state.go('app.service');  //客服
                  }else if(response.data.station=='1' && response.data.department=='6'){
                    $state.go('app.room.warehouse');  //仓管
                  }else if(response.data.station=='0' && response.data.department=='0'){
                    $state.go("app.home");    //超级管理员
                  }
                }
            }else if(response.data.status=="800"){
              $scope.authError = response.data.msg;
          }
      }, function(x) {
        $scope.authError = 'Server Error';
      });
    };
  }])
;