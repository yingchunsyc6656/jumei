'use strict';

// signup controller
app.controller('ForgotPwdController', ['$scope', '$http', '$state', function($scope, $http, $state) {
    $scope.user = {};
    $scope.authError = null;
    /**-验证码登录-**/
    /**短信验证码倒计时**/
    $scope.codeMsg = "获取验证码";
    $scope.disable = true;
    $scope.sendCode = function() {
        if(isEmpty($scope.user.phone)){
            $scope.authError = "请输入手机号码";
            return false;
        }
        if(checkIsMobile($scope.user.phone)){
            var flag = true;
            var time = 60;
            if ($scope.disable==true) {
                $http.post($scope.app.host+'getAuthCode',{phone:$scope.user.phone}).success(function(response) {
                    if(response.status=="200"){
                        if(response.auchstatus=="0"){
                            //TODO 点击过了
                            flag = false;
                            $scope.authError =response.msg;
                        }else if(response.auchstatus=="1"){
                            $scope.disable = false;
                            var timer = setInterval(function() {
                                if (time > 0) {
                                    time--;
                                    $scope.$apply(function() {
                                        $scope.codeMsg = time + '秒后再发送';
                                        $scope.disable = false;
                                    });
                                } else {
                                    $scope.$apply(function() {
                                        $scope.codeMsg = "获取验证码";
                                        $scope.disable = true;
                                    });
                                    clearInterval(timer);
                                }
                            }, 1000);
                        }
                    }
                    //$scope.authError =response.msg;
                });
            }
        }else{
            $scope.authError = "手机号码格式错误";
        }
    }
/*    $scope.sendLogin=function(){
        var sendUrl=$rootScope.URL_ROOT+"/user/login/";
        $http.post(sendUrl,$scope.user).success(function(response) {
            if(response.status=="200"){
                var session=response.data.session;
                sessionStorage.setItem("session",session); //把用户的session传递
                $scope.goInvite();
            }else{
                $rootScope.Ui.turnOn('showinfo');
                $scope.title = "信息提示：";
                $scope.msg =response.message;
            }
        });
    }

    }*/

/*
    $scope.change=function(){
        console.log($scope.user.department);
    }
*/

    $scope.forgotpwd = function() {
      $scope.authError = null;
      //Try to create
      //判断是否密码一致
        if($scope.user.password != $scope.user.secPassword){
            $scope.authError = "请查看输入的密码是否一致";
            return false;
        }else{
            $http.post($scope.app.host+'modifyPwd', {username: $scope.user.username, department: $scope.user.department, password: $scope.user.password,phone:$scope.user.phone,authCode:$scope.user.authCode})
                .then(function(response) {
                 if(response.status == "200"){
                      if(response.updatestatus == "0"){
                            $scope.authError = response.data.msg;
                        }else if(response.updatestatus == "1"){
                            $state.go('access.signin');
                        }
                 }
                }, function(x) {
                    $scope.authError = 'Server Error';
                });
        }
    };
  }])
 ;