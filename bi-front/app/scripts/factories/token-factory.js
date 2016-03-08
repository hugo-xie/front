'use strict';

angular.module('nevermore').factory('tokenFactory', function($resource) {
	this.login = function(headers) {
		return $resource(base_Url+'/account/authentication', null, {
			'post': {
				method: 'POST',
				headers: headers
			}
		});
	};
	this.isLogin = function(headers) {
		return $resource(base_Url+'/api/token/isLogin', null, {
			'get': {
				method: 'GET',
				headers: headers
			}
		});
	};
  return this;
});
