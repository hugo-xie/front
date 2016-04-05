'use strict';

angular.module('nevermore')
  .factory('rawFactory', function($resource, BASE_URL) {

	this.query = function(headers) {
		return $resource(BASE_URL + '/rawData/:tableName/list', {
			tableName: '@tableName'
		}, {
			'get': {
				method: 'GET',
				headers: headers
			}
		});
	};

	return this;

	})

 	.factory('rawFactory_weather', function($resource, BASE_URL) {

	this.query = function(headers) {
		return $resource('http://apis.baidu.com/apistore/weatherservice/recentweathers?cityid=101190408', {
			'get': {
				method: 'GET',
				headers: 'apikey=8a2ea9c51525a5332967ae13c1454deb'
			}
		});
	};

	return this;

	});