'use strict';

app.controller('LoginController', function($scope,$localStorage,$http,
    sessionService, tokenFactory, $state,qService, ToasterTool,BASE_URL) {

  $scope.accountCharacter = 'TEACHER';
  $scope.login_name = "";
  $scope.login_password = "";
  $scope.autoLogin = false;

  //登录方法
  $scope.login = function() {

    $scope.message = "";

    var _n = $scope.login_name;
    var _p = $scope.login_password;

    if (_n == undefined || _n == "" || _p == undefined || _p == "") {
      $scope.errorMsg = '用户名/密码不能为空!';
      return;
    }
    
    // tokenFactory.login({
    //   'X-Username': _n,
    //   'X-Password': _p
    // }).post({},
    //   function success(data, headers) {
    //     $http.get(base_Url+'/api/predictData/gdpRawData/list',
    //       {headers:{'x-auth-token':headers()['x-auth-token']}})
    //     .success(function(rc){
    //       sessionService.saveCurrSemeter(rc.data);
    //     }).error(function(error){
    //       ToasterTool.error('未知错误发生!','');
    //     });
    //   },
    //   function error(data) {
    //     ToasterTool.error('登录失败','用户名或密码错误');
    //   });
    $http({
        method:'POST',
        url:BASE_URL+'/account/authentication',
        headers:{
          'X-Username': _n,
          'X-Password': _p
        }
    })
    .success(function(data){
      $state.go("app.index.economy.gdp");
    })
    .error(function(error){
      if (error!=null) {
        $scope.errorMsg =error.message;
      }
    })
    
  };

  $scope.forgotPassword = function(){
    ToasterTool.info('请联系管理员');
  };

});
