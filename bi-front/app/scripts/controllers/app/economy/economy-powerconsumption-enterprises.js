'use strict';
app.controller('EconomyPowerConsumptionOfEnterprisesCtrl', 
    ['$scope','$stateParams','qService','forecastFactory_Power', function($scope, $stateParams,qService,forecastFactory_Power) {

  	$scope.title = $stateParams.title;
var promise = qService.tokenHttpGet(forecastFactory_Power.query,{tableName:'powerGdpCorrelationEnterpriseSoloData'});

promise.then(function(result) {

  $scope.getData = result.data;

    //new地图对象
  	$scope.map = new AMap.Map('consumptionbyenterprise',{
          zoom: 12,
          center: [121.127511,31.598285],
          resizeEnable: true,
      });

    //调节侧栏
    $scope.map.setMapStyle('fresh');
  	AMap.plugin(['AMap.ToolBar','AMap.Scale'],function(){
  	    var toolBar = new AMap.ToolBar();
  	    var scale = new AMap.Scale();
  	    $scope.map.addControl(toolBar);
  	    $scope.map.addControl(scale);
  	});
    
  //企业数据  
  $scope.industriesdata = {
    total:{
        years:[2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018],
    },    

    5001:{
        title:'太仓振辉化纤有限公司',
        yeardata:{
          gdpdata: $scope.getData[5001][0],                                                                             
          powerdata: $scope.getData[5001][1],
        },
        _2018:{
            season:
                {
                    gdpdata: $scope.getData[5001][2][2018][0],                                                                             
                    powerdata: $scope.getData[5001][2][2018][1],
                },
        },
        _2017:{
            season:
                {
                    gdpdata: $scope.getData[5001][2][2017][0],                                                                             
                    powerdata: $scope.getData[5001][2][2017][1],
                },
        },
        _2016:{
            season:
                {
                    gdpdata: $scope.getData[5001][2][2016][0],                                                                             
                    powerdata: $scope.getData[5001][2][2016][1],
                },
        },
        _2015:{
            season:
                {
                    gdpdata: $scope.getData[5001][2][2015][0],                                                                             
                    powerdata: $scope.getData[5001][2][2015][1],
                },
        },
        _2014:{
            season:
                {
                    gdpdata: $scope.getData[5001][2][2014][0],                                                                             
                    powerdata: $scope.getData[5001][2][2014][1],
                },
        },
        _2013:{
            season:
                {
                    gdpdata: $scope.getData[5001][2][2013][0],                                                                             
                    powerdata: $scope.getData[5001][2][2013][1],
                },
        },
        _2012:{
            season:
                {
                    gdpdata: $scope.getData[5001][2][2012][0],                                                                             
                    powerdata: $scope.getData[5001][2][2012][1],
                },
        },
        _2011:{
            season:
                {
                    gdpdata: $scope.getData[5001][2][2011][0],                                                                             
                    powerdata: $scope.getData[5001][2][2011][1],
                },
        },
        _2010:{
            season:
                {
                    gdpdata: $scope.getData[5001][2][2010][0],                                                                             
                    powerdata: $scope.getData[5001][2][2010][1],
                },
        },
        _2009:{
            season:
                {
                    gdpdata: $scope.getData[5001][2][2009][0],                                                                             
                    powerdata: $scope.getData[5001][2][2009][1],
                },
        },
        _2008:{
            season:
                {
                    gdpdata: $scope.getData[5001][2][2008][0],                                                                             
                    powerdata: $scope.getData[5001][2][2008][1],
                },
        },
        _2007:{
            season:
                {
                    gdpdata: $scope.getData[5001][2][2007][0],                                                                             
                    powerdata: $scope.getData[5001][2][2007][1],
                },
        },
        _2006:{
            season:
                {
                    gdpdata: $scope.getData[5001][2][2006][0],                                                                             
                    powerdata: $scope.getData[5001][2][2006][1],
                },
        },
    },
    5002:{
        title:'苏州达诺铸造有限公司',
        yeardata:{
          gdpdata: $scope.getData[5002][0],                                                                             
          powerdata: $scope.getData[5002][1],
        },
        _2018:{
            season:
                {
                    gdpdata: $scope.getData[5002][2][2018][0],                                                                             
                    powerdata: $scope.getData[5002][2][2018][1],
                },
        },
        _2017:{
            season:
                {
                    gdpdata: $scope.getData[5002][2][2017][0],                                                                             
                    powerdata: $scope.getData[5002][2][2017][1],
                },
        },
        _2016:{
            season:
                {
                    gdpdata: $scope.getData[5002][2][2016][0],                                                                             
                    powerdata: $scope.getData[5002][2][2016][1],
                },
        },
        _2015:{
            season:
                {
                    gdpdata: $scope.getData[5002][2][2015][0],                                                                             
                    powerdata: $scope.getData[5002][2][2015][1],
                },
        },
        _2014:{
            season:
                {
                    gdpdata: $scope.getData[5002][2][2014][0],                                                                             
                    powerdata: $scope.getData[5002][2][2014][1],
                },
        },
        _2013:{
            season:
                {
                    gdpdata: $scope.getData[5002][2][2013][0],                                                                             
                    powerdata: $scope.getData[5002][2][2013][1],
                },
        },
        _2012:{
            season:
                {
                    gdpdata: $scope.getData[5002][2][2012][0],                                                                             
                    powerdata: $scope.getData[5002][2][2012][1],
                },
        },
        _2011:{
            season:
                {
                    gdpdata: $scope.getData[5002][2][2011][0],                                                                             
                    powerdata: $scope.getData[5002][2][2011][1],
                },
        },
        _2010:{
            season:
                {
                    gdpdata: $scope.getData[5002][2][2010][0],                                                                             
                    powerdata: $scope.getData[5002][2][2010][1],
                },
        },
        _2009:{
            season:
                {
                    gdpdata: $scope.getData[5002][2][2009][0],                                                                             
                    powerdata: $scope.getData[5002][2][2009][1],
                },
        },
        _2008:{
            season:
                {
                    gdpdata: $scope.getData[5002][2][2008][0],                                                                             
                    powerdata: $scope.getData[5002][2][2008][1],
                },
        },
        _2007:{
            season:
                {
                    gdpdata: $scope.getData[5002][2][2007][0],                                                                             
                    powerdata: $scope.getData[5002][2][2007][1],
                },
        },
        _2006:{
            season:
                {
                    gdpdata: $scope.getData[5002][2][2006][0],                                                                             
                    powerdata: $scope.getData[5002][2][2006][1],
                },
        },
    },
    5003:{
        title:'申久化纤有限公司',
        yeardata:{
          gdpdata: $scope.getData[5003][0],                                                                             
          powerdata: $scope.getData[5003][1],
        },
        _2018:{
            season:
                {
                    gdpdata: $scope.getData[5003][2][2018][0],                                                                             
                    powerdata: $scope.getData[5003][2][2018][1],
                },
        },
        _2017:{
            season:
                {
                    gdpdata: $scope.getData[5003][2][2017][0],                                                                             
                    powerdata: $scope.getData[5003][2][2017][1],
                },
        },
        _2016:{
            season:
                {
                    gdpdata: $scope.getData[5003][2][2016][0],                                                                             
                    powerdata: $scope.getData[5003][2][2016][1],
                },
        },
        _2015:{
            season:
                {
                    gdpdata: $scope.getData[5003][2][2015][0],                                                                             
                    powerdata: $scope.getData[5003][2][2015][1],
                },
        },
        _2014:{
            season:
                {
                    gdpdata: $scope.getData[5003][2][2014][0],                                                                             
                    powerdata: $scope.getData[5003][2][2014][1],
                },
        },
        _2013:{
            season:
                {
                    gdpdata: $scope.getData[5003][2][2013][0],                                                                             
                    powerdata: $scope.getData[5003][2][2013][1],
                },
        },
        _2012:{
            season:
                {
                    gdpdata: $scope.getData[5003][2][2012][0],                                                                             
                    powerdata: $scope.getData[5003][2][2012][1],
                },
        },
        _2011:{
            season:
                {
                    gdpdata: $scope.getData[5003][2][2011][0],                                                                             
                    powerdata: $scope.getData[5003][2][2011][1],
                },
        },
        _2010:{
            season:
                {
                    gdpdata: $scope.getData[5003][2][2010][0],                                                                             
                    powerdata: $scope.getData[5003][2][2010][1],
                },
        },
        _2009:{
            season:
                {
                    gdpdata: $scope.getData[5003][2][2009][0],                                                                             
                    powerdata: $scope.getData[5003][2][2009][1],
                },
        },
        _2008:{
            season:
                {
                    gdpdata: $scope.getData[5003][2][2008][0],                                                                             
                    powerdata: $scope.getData[5003][2][2008][1],
                },
        },
        _2007:{
            season:
                {
                    gdpdata: $scope.getData[5003][2][2007][0],                                                                             
                    powerdata: $scope.getData[5003][2][2007][1],
                },
        },
        _2006:{
            season:
                {
                    gdpdata: $scope.getData[5003][2][2006][0],                                                                             
                    powerdata: $scope.getData[5003][2][2006][1],
                },
        },
    },
    5004:{
        title:'太仓协鑫光伏科技有限公司',
        yeardata:{
          gdpdata: $scope.getData[5004][0],                                                                             
          powerdata: $scope.getData[5004][1], 
          //年数据应该是有季度数据按公式计算得到的
        },
        _2018:{
            season:
                {
                    gdpdata: $scope.getData[5004][2][2018][0],                                                                             
                    powerdata: $scope.getData[5004][2][2018][1],
                },
        },
        _2017:{
            season:
                {
                    gdpdata: $scope.getData[5004][2][2017][0],                                                                             
                    powerdata: $scope.getData[5004][2][2017][1],
                },
        },
        _2016:{
            season:
                {
                    gdpdata: $scope.getData[5004][2][2016][0],                                                                             
                    powerdata: $scope.getData[5004][2][2016][1],
                },
        },
        _2015:{
            season:
                {
                    gdpdata: $scope.getData[5004][2][2015][0],                                                                             
                    powerdata: $scope.getData[5004][2][2015][1],
                },
        },
        _2014:{
            season:
                {
                    gdpdata: $scope.getData[5004][2][2014][0],                                                                             
                    powerdata: $scope.getData[5004][2][2014][1],
                },
        },
        _2013:{
            season:
                {
                    gdpdata: $scope.getData[5004][2][2013][0],                                                                             
                    powerdata: $scope.getData[5004][2][2013][1],
                },
        },
        _2012:{
            season:
                {
                    gdpdata: $scope.getData[5004][2][2012][0],                                                                             
                    powerdata: $scope.getData[5004][2][2012][1],
                },
        },
        _2011:{
            season:
                {
                    gdpdata: $scope.getData[5004][2][2011][0],                                                                             
                    powerdata: $scope.getData[5004][2][2011][1],
                },
        },
        _2010:{
            season:
                {
                    gdpdata: $scope.getData[5004][2][2010][0],                                                                             
                    powerdata: $scope.getData[5004][2][2010][1],
                },
        },
        _2009:{
            season:
                {
                    gdpdata: $scope.getData[5004][2][2009][0],                                                                             
                    powerdata: $scope.getData[5004][2][2009][1],
                },
        },
        _2008:{
            season:
                {
                    gdpdata: $scope.getData[5004][2][2008][0],                                                                             
                    powerdata: $scope.getData[5004][2][2008][1],
                },
        },
        _2007:{
            season:
                {
                    gdpdata: $scope.getData[5004][2][2007][0],                                                                             
                    powerdata: $scope.getData[5004][2][2007][1],
                },
        },
        _2006:{
            season:
                {
                    gdpdata: $scope.getData[5004][2][2006][0],                                                                             
                    powerdata: $scope.getData[5004][2][2006][1],
                },
        },
    },
    5005:{
        title:'舍弗勒(中国)有限公司',
        yeardata:{
          gdpdata: $scope.getData[5005][0],                                                                             
          powerdata: $scope.getData[5005][1],
        },
        _2018:{
            season:
                {
                    gdpdata: $scope.getData[5005][2][2018][0],                                                                             
                    powerdata: $scope.getData[5005][2][2018][1],
                },
        },
        _2017:{
            season:
                {
                    gdpdata: $scope.getData[5005][2][2017][0],                                                                             
                    powerdata: $scope.getData[5005][2][2017][1],
                },
        },
        _2016:{
            season:
                {
                    gdpdata: $scope.getData[5005][2][2016][0],                                                                             
                    powerdata: $scope.getData[5005][2][2016][1],
                },
        },
        _2015:{
            season:
                {
                    gdpdata: $scope.getData[5005][2][2015][0],                                                                             
                    powerdata: $scope.getData[5005][2][2015][1],
                },
        },
        _2014:{
            season:
                {
                    gdpdata: $scope.getData[5005][2][2014][0],                                                                             
                    powerdata: $scope.getData[5005][2][2014][1],
                },
        },
        _2013:{
            season:
                {
                    gdpdata: $scope.getData[5005][2][2013][0],                                                                             
                    powerdata: $scope.getData[5005][2][2013][1],
                },
        },
        _2012:{
            season:
                {
                    gdpdata: $scope.getData[5005][2][2012][0],                                                                             
                    powerdata: $scope.getData[5005][2][2012][1],
                },
        },
        _2011:{
            season:
                {
                    gdpdata: $scope.getData[5005][2][2011][0],                                                                             
                    powerdata: $scope.getData[5005][2][2011][1],
                },
        },
        _2010:{
            season:
                {
                    gdpdata: $scope.getData[5005][2][2010][0],                                                                             
                    powerdata: $scope.getData[5005][2][2010][1],
                },
        },
        _2009:{
            season:
                {
                    gdpdata: $scope.getData[5005][2][2009][0],                                                                             
                    powerdata: $scope.getData[5005][2][2009][1],
                },
        },
        _2008:{
            season:
                {
                    gdpdata: $scope.getData[5005][2][2008][0],                                                                             
                    powerdata: $scope.getData[5005][2][2008][1],
                },
        },
        _2007:{
            season:
                {
                    gdpdata: $scope.getData[5005][2][2007][0],                                                                             
                    powerdata: $scope.getData[5005][2][2007][1],
                },
        },
        _2006:{
            season:
                {
                    gdpdata: $scope.getData[5005][2][2006][0],                                                                             
                    powerdata: $scope.getData[5005][2][2006][1],
                },
        },
    },
    5006:{
        title:'江苏长乐纤维科技有限公司',
        yeardata:{
          gdpdata: [null,null,null,null,null,10.1,9.56,9.35,8.45,9.88,10.45,6.71,7.48],                                                                             
          powerdata: [null,null,null,null,null,15.1,9.56,12.35,11.45,9.88,10.45,11.71,12.48],
        },
        _2018:{
            season:
                {
                    gdpdata: $scope.getData[5006][2][2018][0],                                                                             
                    powerdata: $scope.getData[5006][2][2018][1],
                },
        },
        _2017:{
            season:
                {
                    gdpdata: $scope.getData[5006][2][2017][0],                                                                             
                    powerdata: $scope.getData[5006][2][2017][1],
                },
        },
        _2016:{
            season:
                {
                    gdpdata: $scope.getData[5006][2][2016][0],                                                                             
                    powerdata: $scope.getData[5006][2][2016][1],
                },
        },
        _2015:{
            season:
                {
                    gdpdata: $scope.getData[5006][2][2015][0],                                                                             
                    powerdata: $scope.getData[5006][2][2015][1],
                },
        },
        _2014:{
            season:
                {
                    gdpdata: $scope.getData[5006][2][2014][0],                                                                             
                    powerdata: $scope.getData[5006][2][2014][1],
                },
        },
        _2013:{
            season:
                {
                    gdpdata: $scope.getData[5006][2][2013][0],                                                                             
                    powerdata: $scope.getData[5006][2][2013][1],
                },
        },
        _2012:{
            season:
                {
                    gdpdata: $scope.getData[5006][2][2012][0],                                                                             
                    powerdata: $scope.getData[5006][2][2012][1],
                },
        },
        _2011:{
            season:
                {
                    gdpdata: $scope.getData[5006][2][2011][0],                                                                             
                    powerdata: $scope.getData[5006][2][2011][1],
                },
        },
        _2010:{
            season:
                {
                    gdpdata: $scope.getData[5006][2][2010][0],                                                                             
                    powerdata: $scope.getData[5006][2][2010][1],
                },
        },
        _2009:{
            season:
                {
                    gdpdata: $scope.getData[5006][2][2009][0],                                                                             
                    powerdata: $scope.getData[5006][2][2009][1],
                },
        },
        _2008:{
            season:
                {
                    gdpdata: $scope.getData[5006][2][2008][0],                                                                             
                    powerdata: $scope.getData[5006][2][2008][1],
                },
        },
        _2007:{
            season:
                {
                    gdpdata: $scope.getData[5006][2][2007][0],                                                                             
                    powerdata: $scope.getData[5006][2][2007][1],
                },
        },
        _2006:{
            season:
                {
                    gdpdata: $scope.getData[5006][2][2006][0],                                                                             
                    powerdata: $scope.getData[5006][2][2006][1],
                },
        },
    },
    5007:{
        title:'太仓海螺水泥有限公司',
        yeardata:{
          gdpdata: $scope.getData[5007][0],                                                                             
          powerdata: $scope.getData[5007][1],
        },
        _2018:{
            season:
                {
                    gdpdata: $scope.getData[5007][2][2018][0],                                                                             
                    powerdata: $scope.getData[5007][2][2018][1],
                },
        },
        _2017:{
            season:
                {
                    gdpdata: $scope.getData[5007][2][2017][0],                                                                             
                    powerdata: $scope.getData[5007][2][2017][1],
                },
        },
        _2016:{
            season:
                {
                    gdpdata: $scope.getData[5007][2][2016][0],                                                                             
                    powerdata: $scope.getData[5007][2][2016][1],
                },
        },
        _2015:{
            season:
                {
                    gdpdata: $scope.getData[5007][2][2015][0],                                                                             
                    powerdata: $scope.getData[5007][2][2015][1],
                },
        },
        _2014:{
            season:
                {
                    gdpdata: $scope.getData[5007][2][2014][0],                                                                             
                    powerdata: $scope.getData[5007][2][2014][1],
                },
        },
        _2013:{
            season:
                {
                    gdpdata: $scope.getData[5007][2][2013][0],                                                                             
                    powerdata: $scope.getData[5007][2][2013][1],
                },
        },
        _2012:{
            season:
                {
                    gdpdata: $scope.getData[5007][2][2012][0],                                                                             
                    powerdata: $scope.getData[5007][2][2012][1],
                },
        },
        _2011:{
            season:
                {
                    gdpdata: $scope.getData[5007][2][2011][0],                                                                             
                    powerdata: $scope.getData[5007][2][2011][1],
                },
        },
        _2010:{
            season:
                {
                    gdpdata: $scope.getData[5007][2][2010][0],                                                                             
                    powerdata: $scope.getData[5007][2][2010][1],
                },
        },
        _2009:{
            season:
                {
                    gdpdata: $scope.getData[5007][2][2009][0],                                                                             
                    powerdata: $scope.getData[5007][2][2009][1],
                },
        },
        _2008:{
            season:
                {
                    gdpdata: $scope.getData[5007][2][2008][0],                                                                             
                    powerdata: $scope.getData[5007][2][2008][1],
                },
        },
        _2007:{
            season:
                {
                    gdpdata: $scope.getData[5007][2][2007][0],                                                                             
                    powerdata: $scope.getData[5007][2][2007][1],
                },
        },
        _2006:{
            season:
                {
                    gdpdata: $scope.getData[5007][2][2006][0],                                                                             
                    powerdata: $scope.getData[5007][2][2006][1],
                },
        },
    },
    5008:{
        title:'太仓中化环保化工有限公司',
        yeardata:{
          gdpdata: $scope.getData[5008][0],                                                                             
          powerdata: $scope.getData[5008][1],
        },
       _2018:{
            season:
                {
                    gdpdata: $scope.getData[5008][2][2018][0],                                                                             
                    powerdata: $scope.getData[5008][2][2018][1],
                },
        },
        _2017:{
            season:
                {
                    gdpdata: $scope.getData[5008][2][2017][0],                                                                             
                    powerdata: $scope.getData[5008][2][2017][1],
                },
        },
        _2016:{
            season:
                {
                    gdpdata: $scope.getData[5008][2][2016][0],                                                                             
                    powerdata: $scope.getData[5008][2][2016][1],
                },
        },
        _2015:{
            season:
                {
                    gdpdata: $scope.getData[5008][2][2015][0],                                                                             
                    powerdata: $scope.getData[5008][2][2015][1],
                },
        },
        _2014:{
            season:
                {
                    gdpdata: $scope.getData[5008][2][2014][0],                                                                             
                    powerdata: $scope.getData[5008][2][2014][1],
                },
        },
        _2013:{
            season:
                {
                    gdpdata: $scope.getData[5008][2][2013][0],                                                                             
                    powerdata: $scope.getData[5008][2][2013][1],
                },
        },
        _2012:{
            season:
                {
                    gdpdata: $scope.getData[5008][2][2012][0],                                                                             
                    powerdata: $scope.getData[5008][2][2012][1],
                },
        },
        _2011:{
            season:
                {
                    gdpdata: $scope.getData[5008][2][2011][0],                                                                             
                    powerdata: $scope.getData[5008][2][2011][1],
                },
        },
        _2010:{
            season:
                {
                    gdpdata: $scope.getData[5008][2][2010][0],                                                                             
                    powerdata: $scope.getData[5008][2][2010][1],
                },
        },
        _2009:{
            season:
                {
                    gdpdata: $scope.getData[5008][2][2009][0],                                                                             
                    powerdata: $scope.getData[5008][2][2009][1],
                },
        },
        _2008:{
            season:
                {
                    gdpdata: $scope.getData[5008][2][2008][0],                                                                             
                    powerdata: $scope.getData[5008][2][2008][1],
                },
        },
        _2007:{
            season:
                {
                    gdpdata: $scope.getData[5008][2][2007][0],                                                                             
                    powerdata: $scope.getData[5008][2][2007][1],
                },
        },
        _2006:{
            season:
                {
                    gdpdata: $scope.getData[5008][2][2006][0],                                                                             
                    powerdata: $scope.getData[5008][2][2006][1],
                },
        },
    },
    5009:{
        title:'奥特斯维能源(太仓)有限公司',
        yeardata:{
          gdpdata: $scope.getData[5009][0],                                                                             
          powerdata: $scope.getData[5009][1],
        },
       _2018:{
            season:
                {
                    gdpdata: $scope.getData[5009][2][2018][0],                                                                             
                    powerdata: $scope.getData[5009][2][2018][1],
                },
        },
        _2017:{
            season:
                {
                    gdpdata: $scope.getData[5009][2][2017][0],                                                                             
                    powerdata: $scope.getData[5009][2][2017][1],
                },
        },
        _2016:{
            season:
                {
                    gdpdata: $scope.getData[5009][2][2016][0],                                                                             
                    powerdata: $scope.getData[5009][2][2016][1],
                },
        },
        _2015:{
            season:
                {
                    gdpdata: $scope.getData[5009][2][2015][0],                                                                             
                    powerdata: $scope.getData[5009][2][2015][1],
                },
        },
        _2014:{
            season:
                {
                    gdpdata: $scope.getData[5009][2][2014][0],                                                                             
                    powerdata: $scope.getData[5009][2][2014][1],
                },
        },
        _2013:{
            season:
                {
                    gdpdata: $scope.getData[5009][2][2013][0],                                                                             
                    powerdata: $scope.getData[5009][2][2013][1],
                },
        },
        _2012:{
            season:
                {
                    gdpdata: $scope.getData[5009][2][2012][0],                                                                             
                    powerdata: $scope.getData[5009][2][2012][1],
                },
        },
        _2011:{
            season:
                {
                    gdpdata: $scope.getData[5009][2][2011][0],                                                                             
                    powerdata: $scope.getData[5009][2][2011][1],
                },
        },
        _2010:{
            season:
                {
                    gdpdata: $scope.getData[5009][2][2010][0],                                                                             
                    powerdata: $scope.getData[5009][2][2010][1],
                },
        },
        _2009:{
            season:
                {
                    gdpdata: $scope.getData[5009][2][2009][0],                                                                             
                    powerdata: $scope.getData[5009][2][2009][1],
                },
        },
        _2008:{
            season:
                {
                    gdpdata: $scope.getData[5009][2][2008][0],                                                                             
                    powerdata: $scope.getData[5009][2][2008][1],
                },
        },
        _2007:{
            season:
                {
                    gdpdata: $scope.getData[5009][2][2007][0],                                                                             
                    powerdata: $scope.getData[5009][2][2007][1],
                },
        },
        _2006:{
            season:
                {
                    gdpdata: $scope.getData[5009][2][2006][0],                                                                             
                    powerdata: $scope.getData[5009][2][2006][1],
                },
        },
    },
    5010:{
        title:'太仓利泰纺织厂有限公司',
        yeardata:{
          gdpdata: $scope.getData[5010][0],                                                                             
          powerdata: $scope.getData[5010][1],
        },
       _2018:{
            season:
                {
                    gdpdata: $scope.getData[5010][2][2018][0],                                                                             
                    powerdata: $scope.getData[5010][2][2018][1],
                },
        },
        _2017:{
            season:
                {
                    gdpdata: $scope.getData[5010][2][2017][0],                                                                             
                    powerdata: $scope.getData[5010][2][2017][1],
                },
        },
        _2016:{
            season:
                {
                    gdpdata: $scope.getData[5010][2][2016][0],                                                                             
                    powerdata: $scope.getData[5010][2][2016][1],
                },
        },
        _2015:{
            season:
                {
                    gdpdata: $scope.getData[5010][2][2015][0],                                                                             
                    powerdata: $scope.getData[5010][2][2015][1],
                },
        },
        _2014:{
            season:
                {
                    gdpdata: $scope.getData[5010][2][2014][0],                                                                             
                    powerdata: $scope.getData[5010][2][2014][1],
                },
        },
        _2013:{
            season:
                {
                    gdpdata: $scope.getData[5010][2][2013][0],                                                                             
                    powerdata: $scope.getData[5010][2][2013][1],
                },
        },
        _2012:{
            season:
                {
                    gdpdata: $scope.getData[5010][2][2012][0],                                                                             
                    powerdata: $scope.getData[5010][2][2012][1],
                },
        },
        _2011:{
            season:
                {
                    gdpdata: $scope.getData[5010][2][2011][0],                                                                             
                    powerdata: $scope.getData[5010][2][2011][1],
                },
        },
        _2010:{
            season:
                {
                    gdpdata: $scope.getData[5010][2][2010][0],                                                                             
                    powerdata: $scope.getData[5010][2][2010][1],
                },
        },
        _2009:{
            season:
                {
                    gdpdata: $scope.getData[5010][2][2009][0],                                                                             
                    powerdata: $scope.getData[5010][2][2009][1],
                },
        },
        _2008:{
            season:
                {
                    gdpdata: $scope.getData[5010][2][2008][0],                                                                             
                    powerdata: $scope.getData[5010][2][2008][1],
                },
        },
        _2007:{
            season:
                {
                    gdpdata: $scope.getData[5010][2][2007][0],                                                                             
                    powerdata: $scope.getData[5010][2][2007][1],
                },
        },
        _2006:{
            season:
                {
                    gdpdata: $scope.getData[5010][2][2006][0],                                                                             
                    powerdata: $scope.getData[5010][2][2006][1],
                },
        },
    },
  };
  $scope.isShowYearTable = false;
  $scope.showTables = function(){
    $scope.isShowYearTable = !$scope.isShowYearTable;
  }
  //界面初始化时展示5001的数据
  $scope.temptable = {
    selectedyear:'2015',
    selectedindustry:$scope.industriesdata[5001].title,
    year:{
      gdp:$scope.industriesdata[5001].yeardata.gdpdata,
      power:$scope.industriesdata[5001].yeardata.powerdata,
    },
    season:{
      gdp:$scope.industriesdata[5001]._2015.season.gdpdata,
      power:$scope.industriesdata[5001]._2015.season.powerdata,
    }
  }

  $scope.changeStyle = function(param){
    switch(param){
      case 1:{
        $scope.SingleVocationChartByYear.options.chart.type = 'spline';
      };break;
      case 2:{
        $scope.SingleVocationChartByYear.options.chart.type = 'column';
      };break;
      case 3:{
        $scope.SingleVocationChartByYear.options.chart.type = 'area';
      };break;
    }
  }

  //标记当前选择的企业
  $scope.industrymark = 5001;
  //选择年份函数
  $scope.changeForcastArea = function(param){
    switch(param) {
        case 6: $scope.SingleVocationChart.xAxis.plotBands[0].from = 8;break;
        case 7: $scope.SingleVocationChart.xAxis.plotBands[0].from = 8;break;
        case 8: $scope.SingleVocationChart.xAxis.plotBands[0].from = 8;break;
        case 9: $scope.SingleVocationChart.xAxis.plotBands[0].from = 8;break;
        case 10: $scope.SingleVocationChart.xAxis.plotBands[0].from = 8;break;
        case 11: $scope.SingleVocationChart.xAxis.plotBands[0].from = 8;break;
        case 12: $scope.SingleVocationChart.xAxis.plotBands[0].from = 8;break;
        case 13: $scope.SingleVocationChart.xAxis.plotBands[0].from = 8;break;
        case 14: $scope.SingleVocationChart.xAxis.plotBands[0].from = 8;break;
        case 15: $scope.SingleVocationChart.xAxis.plotBands[0].from = 8;break;
        case 16: $scope.SingleVocationChart.xAxis.plotBands[0].from = -0.5;break;
        case 17: $scope.SingleVocationChart.xAxis.plotBands[0].from = -0.5;break;
        case 18: $scope.SingleVocationChart.xAxis.plotBands[0].from = -0.5;break;
    }
  }
  $scope.changeYear = function(param){
    switch($scope.industrymark){
      case 5001:{
        switch(param){
          case 6:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata[5001]._2006.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata[5001]._2006.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5001]._2006.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5001]._2006.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5001]._2006.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5001]._2006.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5001]._2006.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5001]._2006.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5001]._2006.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5001]._2006.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata[5001]._2006.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata[5001]._2006.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2006年度';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2006年度';
              $scope.SingleVocationChart.subtitle.text = '2006年度';
              $scope.temptable.selectedyear = '2006';
          };break;
          case 7:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata[5001]._2007.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata[5001]._2007.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5001]._2007.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5001]._2007.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5001]._2007.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5001]._2007.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5001]._2007.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5001]._2007.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5001]._2007.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5001]._2007.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata[5001]._2007.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata[5001]._2007.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2007年度';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2007年度';
              $scope.SingleVocationChart.subtitle.text = '2007年度';
              $scope.temptable.selectedyear = '2007';
          };break;
          case 8:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata[5001]._2008.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata[5001]._2008.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5001]._2008.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5001]._2008.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5001]._2008.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5001]._2008.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5001]._2008.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5001]._2008.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5001]._2008.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5001]._2008.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata[5001]._2008.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata[5001]._2008.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2008年度';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2008年度';
              $scope.SingleVocationChart.subtitle.text = '2008年度';
              $scope.temptable.selectedyear = '2008';
          };break;
          case 9:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata[5001]._2009.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata[5001]._2009.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5001]._2009.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5001]._2009.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5001]._2009.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5001]._2009.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5001]._2009.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5001]._2009.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5001]._2009.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5001]._2009.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata[5001]._2009.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata[5001]._2009.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2009年度';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2009年度';
              $scope.SingleVocationChart.subtitle.text = '2009年度';
              $scope.temptable.selectedyear = '2009';
            
          };break;
          case 10:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata[5001]._2010.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata[5001]._2010.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5001]._2010.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5001]._2010.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5001]._2010.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5001]._2010.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5001]._2010.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5001]._2010.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5001]._2010.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5001]._2010.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata[5001]._2010.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata[5001]._2010.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2010年度';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2010年度';
              $scope.SingleVocationChart.subtitle.text = '2010年度';
              $scope.temptable.selectedyear = '2010';
            
          };break;
          case 11:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata[5001]._2011.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata[5001]._2011.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5001]._2011.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5001]._2011.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5001]._2011.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5001]._2011.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5001]._2011.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5001]._2011.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5001]._2011.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5001]._2011.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata[5001]._2011.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata[5001]._2011.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2011年度';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2011年度';
              $scope.SingleVocationChart.subtitle.text = '2011年度';
              $scope.temptable.selectedyear = '2011';
          };break;
          case 12:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata[5001]._2012.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata[5001]._2012.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5001]._2012.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5001]._2012.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5001]._2012.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5001]._2012.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5001]._2012.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5001]._2012.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5001]._2012.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5001]._2012.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata[5001]._2012.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata[5001]._2012.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2012年度';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2012年度';
              $scope.SingleVocationChart.subtitle.text = '2012年度';
              $scope.temptable.selectedyear = '2012';
            
          };break;
          case 13:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata[5001]._2013.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata[5001]._2013.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5001]._2013.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5001]._2013.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5001]._2013.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5001]._2013.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5001]._2013.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5001]._2013.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5001]._2013.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5001]._2013.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata[5001]._2013.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata[5001]._2013.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2013年度';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2013年度';
              $scope.SingleVocationChart.subtitle.text = '2013年度';
              $scope.temptable.selectedyear = '2013';
            
          };break;
          case 14:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata[5001]._2014.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata[5001]._2014.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5001]._2014.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5001]._2014.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5001]._2014.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5001]._2014.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5001]._2014.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5001]._2014.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5001]._2014.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5001]._2014.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata[5001]._2014.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata[5001]._2014.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2014年度';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2014年度';
              $scope.SingleVocationChart.subtitle.text = '2014年度';
              $scope.temptable.selectedyear = '2014';
          };break;
          case 15:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata[5001]._2015.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata[5001]._2015.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5001]._2015.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5001]._2015.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5001]._2015.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5001]._2015.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5001]._2015.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5001]._2015.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5001]._2015.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5001]._2015.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata[5001]._2015.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata[5001]._2015.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2015年度';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2015年度';
              $scope.SingleVocationChart.subtitle.text = '2015年度';
              $scope.temptable.selectedyear = '2015';
          };break;
          case 16:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata[5001]._2016.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata[5001]._2016.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5001]._2016.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5001]._2016.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5001]._2016.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5001]._2016.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5001]._2016.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5001]._2016.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5001]._2016.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5001]._2016.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata[5001]._2016.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata[5001]._2016.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2016年度 预测值';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2016年度 预测值';
              $scope.SingleVocationChart.subtitle.text = '2016年度 预测值';
              $scope.temptable.selectedyear = '2016';
          };break;
          case 17:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata[5001]._2017.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata[5001]._2017.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5001]._2017.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5001]._2017.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5001]._2017.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5001]._2017.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5001]._2017.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5001]._2017.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5001]._2017.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5001]._2017.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata[5001]._2017.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata[5001]._2017.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2017年度 预测值';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2017年度 预测值';
              $scope.SingleVocationChart.subtitle.text = '2017年度 预测值';
              $scope.temptable.selectedyear = '2017';
          };break;
          case 18:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata[5001]._2018.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata[5001]._2018.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5001]._2018.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5001]._2018.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5001]._2018.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5001]._2018.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5001]._2018.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5001]._2018.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5001]._2018.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5001]._2018.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata[5001]._2018.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata[5001]._2018.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2018年度 预测值';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2018年度 预测值';
              $scope.SingleVocationChart.subtitle.text = '2018年度 预测值';
              $scope.temptable.selectedyear = '2018';
          };break;
        }
      }break;
      case 5002:{
        switch(param){
          case 6:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata[5002]._2006.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata[5002]._2006.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5002]._2006.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5002]._2006.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5002]._2006.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5002]._2006.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5002]._2006.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5002]._2006.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5002]._2006.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5002]._2006.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata[5002]._2006.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata[5002]._2006.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2006年度';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2006年度';
              $scope.SingleVocationChart.subtitle.text = '2006年度';
              $scope.temptable.selectedyear = '2006';
          };break;
          case 7:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata[5002]._2007.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata[5002]._2007.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5002]._2007.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5002]._2007.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5002]._2007.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5002]._2007.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5002]._2007.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5002]._2007.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5002]._2007.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5002]._2007.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata[5002]._2007.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata[5002]._2007.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2007年度';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2007年度';
              $scope.SingleVocationChart.subtitle.text = '2007年度';
              $scope.temptable.selectedyear = '2007';
          };break;
          case 8:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata[5002]._2008.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata[5002]._2008.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5002]._2008.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5002]._2008.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5002]._2008.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5002]._2008.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5002]._2008.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5002]._2008.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5002]._2008.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5002]._2008.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata[5002]._2008.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata[5002]._2008.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2008年度';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2008年度';
              $scope.SingleVocationChart.subtitle.text = '2008年度';
              $scope.temptable.selectedyear = '2008';
          };break;
          case 9:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata[5002]._2009.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata[5002]._2009.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5002]._2009.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5002]._2009.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5002]._2009.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5002]._2009.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5002]._2009.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5002]._2009.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5002]._2009.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5002]._2009.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata[5002]._2009.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata[5002]._2009.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2009年度';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2009年度';
              $scope.SingleVocationChart.subtitle.text = '2009年度';
              $scope.temptable.selectedyear = '2009';
            
          };break;
          case 10:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata[5002]._2010.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata[5002]._2010.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5002]._2010.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5002]._2010.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5002]._2010.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5002]._2010.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5002]._2010.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5002]._2010.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5002]._2010.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5002]._2010.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata[5002]._2010.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata[5002]._2010.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2010年度';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2010年度';
              $scope.SingleVocationChart.subtitle.text = '2010年度';
              $scope.temptable.selectedyear = '2010';
            
          };break;
          case 11:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata[5002]._2011.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata[5002]._2011.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5002]._2011.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5002]._2011.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5002]._2011.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5002]._2011.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5002]._2011.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5002]._2011.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5002]._2011.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5002]._2011.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata[5002]._2011.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata[5002]._2011.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2011年度';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2011年度';
              $scope.SingleVocationChart.subtitle.text = '2011年度';
              $scope.temptable.selectedyear = '2011';
          };break;
          case 12:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata[5002]._2012.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata[5002]._2012.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5002]._2012.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5002]._2012.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5002]._2012.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5002]._2012.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5002]._2012.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5002]._2012.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5002]._2012.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5002]._2012.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata[5002]._2012.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata[5002]._2012.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2012年度';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2012年度';
              $scope.SingleVocationChart.subtitle.text = '2012年度';
              $scope.temptable.selectedyear = '2012';
            
          };break;
          case 13:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata[5002]._2013.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata[5002]._2013.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5002]._2013.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5002]._2013.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5002]._2013.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5002]._2013.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5002]._2013.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5002]._2013.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5002]._2013.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5002]._2013.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata[5002]._2013.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata[5002]._2013.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2013年度';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2013年度';
              $scope.SingleVocationChart.subtitle.text = '2013年度';
              $scope.temptable.selectedyear = '2013';
            
          };break;
          case 14:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata[5002]._2014.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata[5002]._2014.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5002]._2014.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5002]._2014.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5002]._2014.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5002]._2014.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5002]._2014.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5002]._2014.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5002]._2014.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5002]._2014.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata[5002]._2014.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata[5002]._2014.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2014年度';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2014年度';
              $scope.SingleVocationChart.subtitle.text = '2014年度';
              $scope.temptable.selectedyear = '2014';
          };break;
          case 15:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata[5002]._2015.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata[5002]._2015.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5002]._2015.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5002]._2015.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5002]._2015.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5002]._2015.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5002]._2015.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5002]._2015.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5002]._2015.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5002]._2015.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata[5002]._2015.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata[5002]._2015.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2015年度';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2015年度';
              $scope.SingleVocationChart.subtitle.text = '2015年度';
              $scope.temptable.selectedyear = '2015';
          };break;
          case 16:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata[5002]._2016.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata[5002]._2016.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5002]._2016.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5002]._2016.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5002]._2016.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5002]._2016.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5002]._2016.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5002]._2016.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5002]._2016.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5002]._2016.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata[5002]._2016.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata[5002]._2016.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2016年度 预测值';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2016年度 预测值';
              $scope.SingleVocationChart.subtitle.text = '2016年度 预测值';
              $scope.temptable.selectedyear = '2016';
          };break;
          case 17:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata[5002]._2017.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata[5002]._2017.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5002]._2017.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5002]._2017.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5002]._2017.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5002]._2017.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5002]._2017.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5002]._2017.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5002]._2017.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5002]._2017.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata[5002]._2017.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata[5002]._2017.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2017年度 预测值';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2017年度 预测值';
              $scope.SingleVocationChart.subtitle.text = '2017年度 预测值';
              $scope.temptable.selectedyear = '2017';
          };break;
          case 18:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata[5002]._2018.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata[5002]._2018.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5002]._2018.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5002]._2018.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5002]._2018.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5002]._2018.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5002]._2018.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5002]._2018.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5002]._2018.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5002]._2018.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata[5002]._2018.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata[5002]._2018.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2018年度 预测值';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2018年度 预测值';
              $scope.SingleVocationChart.subtitle.text = '2018年度 预测值';
              $scope.temptable.selectedyear = '2018';
          };break;
        }
      }break;
      case 5003:{
        switch(param){
          case 6:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata[5003]._2006.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata[5003]._2006.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5003]._2006.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5003]._2006.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5003]._2006.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5003]._2006.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5003]._2006.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5003]._2006.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5003]._2006.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5003]._2006.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata[5003]._2006.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata[5003]._2006.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2006年度';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2006年度';
              $scope.SingleVocationChart.subtitle.text = '2006年度';
              $scope.temptable.selectedyear = '2006';
          };break;
          case 7:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata[5003]._2007.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata[5003]._2007.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5003]._2007.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5003]._2007.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5003]._2007.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5003]._2007.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5003]._2007.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5003]._2007.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5003]._2007.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5003]._2007.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata[5003]._2007.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata[5003]._2007.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2007年度';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2007年度';
              $scope.SingleVocationChart.subtitle.text = '2007年度';
              $scope.temptable.selectedyear = '2007';
          };break;
          case 8:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata[5003]._2008.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata[5003]._2008.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5003]._2008.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5003]._2008.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5003]._2008.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5003]._2008.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5003]._2008.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5003]._2008.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5003]._2008.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5003]._2008.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata[5003]._2008.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata[5003]._2008.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2008年度';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2008年度';
              $scope.SingleVocationChart.subtitle.text = '2008年度';
              $scope.temptable.selectedyear = '2008';
          };break;
          case 9:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata[5003]._2009.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata[5003]._2009.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5003]._2009.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5003]._2009.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5003]._2009.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5003]._2009.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5003]._2009.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5003]._2009.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5003]._2009.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5003]._2009.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata[5003]._2009.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata[5003]._2009.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2009年度';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2009年度';
              $scope.SingleVocationChart.subtitle.text = '2009年度';
              $scope.temptable.selectedyear = '2009';
            
          };break;
          case 10:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata[5003]._2010.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata[5003]._2010.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5003]._2010.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5003]._2010.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5003]._2010.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5003]._2010.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5003]._2010.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5003]._2010.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5003]._2010.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5003]._2010.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata[5003]._2010.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata[5003]._2010.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2010年度';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2010年度';
              $scope.SingleVocationChart.subtitle.text = '2010年度';
              $scope.temptable.selectedyear = '2010';
            
          };break;
          case 11:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata[5003]._2011.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata[5003]._2011.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5003]._2011.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5003]._2011.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5003]._2011.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5003]._2011.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5003]._2011.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5003]._2011.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5003]._2011.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5003]._2011.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata[5003]._2011.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata[5003]._2011.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2011年度';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2011年度';
              $scope.SingleVocationChart.subtitle.text = '2011年度';
              $scope.temptable.selectedyear = '2011';
          };break;
          case 12:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata[5003]._2012.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata[5003]._2012.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5003]._2012.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5003]._2012.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5003]._2012.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5003]._2012.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5003]._2012.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5003]._2012.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5003]._2012.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5003]._2012.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata[5003]._2012.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata[5003]._2012.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2012年度';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2012年度';
              $scope.SingleVocationChart.subtitle.text = '2012年度';
              $scope.temptable.selectedyear = '2012';
            
          };break;
          case 13:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata[5003]._2013.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata[5003]._2013.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5003]._2013.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5003]._2013.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5003]._2013.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5003]._2013.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5003]._2013.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5003]._2013.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5003]._2013.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5003]._2013.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata[5003]._2013.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata[5003]._2013.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2013年度';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2013年度';
              $scope.SingleVocationChart.subtitle.text = '2013年度';
              $scope.temptable.selectedyear = '2013';
            
          };break;
          case 14:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata[5003]._2014.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata[5003]._2014.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5003]._2014.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5003]._2014.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5003]._2014.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5003]._2014.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5003]._2014.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5003]._2014.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5003]._2014.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5003]._2014.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata[5003]._2014.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata[5003]._2014.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2014年度';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2014年度';
              $scope.SingleVocationChart.subtitle.text = '2014年度';
              $scope.temptable.selectedyear = '2014';
          };break;
          case 15:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata[5003]._2015.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata[5003]._2015.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5003]._2015.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5003]._2015.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5003]._2015.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5003]._2015.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5003]._2015.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5003]._2015.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5003]._2015.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5003]._2015.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata[5003]._2015.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata[5003]._2015.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2015年度';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2015年度';
              $scope.SingleVocationChart.subtitle.text = '2015年度';
              $scope.temptable.selectedyear = '2015';
          };break;
          case 16:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata[5003]._2016.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata[5003]._2016.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5003]._2016.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5003]._2016.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5003]._2016.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5003]._2016.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5003]._2016.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5003]._2016.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5003]._2016.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5003]._2016.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata[5003]._2016.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata[5003]._2016.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2016年度 预测值';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2016年度 预测值';
              $scope.SingleVocationChart.subtitle.text = '2016年度 预测值';
              $scope.temptable.selectedyear = '2016';
          };break;
          case 17:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata[5003]._2017.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata[5003]._2017.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5003]._2017.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5003]._2017.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5003]._2017.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5003]._2017.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5003]._2017.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5003]._2017.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5003]._2017.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5003]._2017.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata[5003]._2017.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata[5003]._2017.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2017年度 预测值';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2017年度 预测值';
              $scope.SingleVocationChart.subtitle.text = '2017年度 预测值';
              $scope.temptable.selectedyear = '2017';
          };break;
          case 18:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata[5003]._2018.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata[5003]._2018.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5003]._2018.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5003]._2018.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5003]._2018.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5003]._2018.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5003]._2018.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5003]._2018.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5003]._2018.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5003]._2018.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata[5003]._2018.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata[5003]._2018.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2018年度 预测值';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2018年度 预测值';
              $scope.SingleVocationChart.subtitle.text = '2018年度 预测值';
              $scope.temptable.selectedyear = '2018';
          };break;
        }
      }break;
      case 5004:{
        switch(param){
          case 6:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata[5004]._2006.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata[5004]._2006.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5004]._2006.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5004]._2006.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5004]._2006.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5004]._2006.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5004]._2006.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5004]._2006.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5004]._2006.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5004]._2006.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata[5004]._2006.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata[5004]._2006.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2006年度';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2006年度';
              $scope.SingleVocationChart.subtitle.text = '2006年度';
              $scope.temptable.selectedyear = '2006';
          };break;
          case 7:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata[5004]._2007.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata[5004]._2007.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5004]._2007.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5004]._2007.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5004]._2007.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5004]._2007.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5004]._2007.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5004]._2007.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5004]._2007.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5004]._2007.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata[5004]._2007.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata[5004]._2007.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2007年度';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2007年度';
              $scope.SingleVocationChart.subtitle.text = '2007年度';
              $scope.temptable.selectedyear = '2007';
          };break;
          case 8:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata[5004]._2008.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata[5004]._2008.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5004]._2008.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5004]._2008.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5004]._2008.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5004]._2008.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5004]._2008.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5004]._2008.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5004]._2008.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5004]._2008.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata[5004]._2008.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata[5004]._2008.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2008年度';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2008年度';
              $scope.SingleVocationChart.subtitle.text = '2008年度';
              $scope.temptable.selectedyear = '2008';
          };break;
          case 9:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata[5004]._2009.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata[5004]._2009.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5004]._2009.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5004]._2009.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5004]._2009.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5004]._2009.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5004]._2009.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5004]._2009.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5004]._2009.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5004]._2009.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata[5004]._2009.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata[5004]._2009.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2009年度';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2009年度';
              $scope.SingleVocationChart.subtitle.text = '2009年度';
              $scope.temptable.selectedyear = '2009';
            
          };break;
          case 10:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata[5004]._2010.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata[5004]._2010.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5004]._2010.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5004]._2010.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5004]._2010.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5004]._2010.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5004]._2010.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5004]._2010.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5004]._2010.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5004]._2010.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata[5004]._2010.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata[5004]._2010.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2010年度';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2010年度';
              $scope.SingleVocationChart.subtitle.text = '2010年度';
              $scope.temptable.selectedyear = '2010';
            
          };break;
          case 11:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata[5004]._2011.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata[5004]._2011.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5004]._2011.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5004]._2011.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5004]._2011.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5004]._2011.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5004]._2011.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5004]._2011.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5004]._2011.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5004]._2011.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata[5004]._2011.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata[5004]._2011.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2011年度';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2011年度';
              $scope.SingleVocationChart.subtitle.text = '2011年度';
              $scope.temptable.selectedyear = '2011';
          };break;
          case 12:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata[5004]._2012.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata[5004]._2012.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5004]._2012.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5004]._2012.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5004]._2012.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5004]._2012.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5004]._2012.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5004]._2012.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5004]._2012.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5004]._2012.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata[5004]._2012.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata[5004]._2012.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2012年度';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2012年度';
              $scope.SingleVocationChart.subtitle.text = '2012年度';
              $scope.temptable.selectedyear = '2012';
            
          };break;
          case 13:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata[5004]._2013.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata[5004]._2013.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5004]._2013.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5004]._2013.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5004]._2013.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5004]._2013.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5004]._2013.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5004]._2013.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5004]._2013.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5004]._2013.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata[5004]._2013.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata[5004]._2013.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2013年度';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2013年度';
              $scope.SingleVocationChart.subtitle.text = '2013年度';
              $scope.temptable.selectedyear = '2013';
            
          };break;
          case 14:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata[5004]._2014.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata[5004]._2014.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5004]._2014.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5004]._2014.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5004]._2014.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5004]._2014.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5004]._2014.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5004]._2014.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5004]._2014.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5004]._2014.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata[5004]._2014.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata[5004]._2014.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2014年度';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2014年度';
              $scope.SingleVocationChart.subtitle.text = '2014年度';
              $scope.temptable.selectedyear = '2014';
          };break;
          case 15:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata[5004]._2015.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata[5004]._2015.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5004]._2015.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5004]._2015.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5004]._2015.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5004]._2015.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5004]._2015.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5004]._2015.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5004]._2015.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5004]._2015.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata[5004]._2015.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata[5004]._2015.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2015年度';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2015年度';
              $scope.SingleVocationChart.subtitle.text = '2015年度';
              $scope.temptable.selectedyear = '2015';
          };break;
          case 16:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata[5004]._2016.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata[5004]._2016.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5004]._2016.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5004]._2016.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5004]._2016.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5004]._2016.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5004]._2016.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5004]._2016.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5004]._2016.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5004]._2016.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata[5004]._2016.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata[5004]._2016.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2016年度 预测值';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2016年度 预测值';
              $scope.SingleVocationChart.subtitle.text = '2016年度 预测值';
              $scope.temptable.selectedyear = '2016';
          };break;
          case 17:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata[5004]._2017.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata[5004]._2017.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5004]._2017.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5004]._2017.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5004]._2017.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5004]._2017.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5004]._2017.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5004]._2017.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5004]._2017.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5004]._2017.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata[5004]._2017.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata[5004]._2017.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2017年度 预测值';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2017年度 预测值';
              $scope.SingleVocationChart.subtitle.text = '2017年度 预测值';
              $scope.temptable.selectedyear = '2017';
          };break;
          case 18:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata[5004]._2018.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata[5004]._2018.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5004]._2018.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5004]._2018.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5004]._2018.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5004]._2018.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5004]._2018.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5004]._2018.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5004]._2018.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5004]._2018.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata[5004]._2018.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata[5004]._2018.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2018年度 预测值';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2018年度 预测值';
              $scope.SingleVocationChart.subtitle.text = '2018年度 预测值';
              $scope.temptable.selectedyear = '2018';
          };break;
        }
      }break;
      case 5005:{
        switch(param){
          case 6:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata[5005]._2006.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata[5005]._2006.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5005]._2006.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5005]._2006.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5005]._2006.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5005]._2006.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5005]._2006.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5005]._2006.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5005]._2006.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5005]._2006.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata[5005]._2006.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata[5005]._2006.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2006年度';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2006年度';
              $scope.SingleVocationChart.subtitle.text = '2006年度';
              $scope.temptable.selectedyear = '2006';
          };break;
          case 7:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata[5005]._2007.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata[5005]._2007.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5005]._2007.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5005]._2007.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5005]._2007.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5005]._2007.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5005]._2007.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5005]._2007.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5005]._2007.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5005]._2007.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata[5005]._2007.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata[5005]._2007.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2007年度';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2007年度';
              $scope.SingleVocationChart.subtitle.text = '2007年度';
              $scope.temptable.selectedyear = '2007';
          };break;
          case 8:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata[5005]._2008.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata[5005]._2008.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5005]._2008.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5005]._2008.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5005]._2008.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5005]._2008.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5005]._2008.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5005]._2008.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5005]._2008.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5005]._2008.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata[5005]._2008.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata[5005]._2008.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2008年度';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2008年度';
              $scope.SingleVocationChart.subtitle.text = '2008年度';
              $scope.temptable.selectedyear = '2008';
          };break;
          case 9:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata[5005]._2009.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata[5005]._2009.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5005]._2009.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5005]._2009.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5005]._2009.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5005]._2009.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5005]._2009.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5005]._2009.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5005]._2009.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5005]._2009.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata[5005]._2009.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata[5005]._2009.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2009年度';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2009年度';
              $scope.SingleVocationChart.subtitle.text = '2009年度';
              $scope.temptable.selectedyear = '2009';
            
          };break;
          case 10:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata[5005]._2010.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata[5005]._2010.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5005]._2010.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5005]._2010.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5005]._2010.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5005]._2010.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5005]._2010.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5005]._2010.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5005]._2010.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5005]._2010.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata[5005]._2010.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata[5005]._2010.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2010年度';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2010年度';
              $scope.SingleVocationChart.subtitle.text = '2010年度';
              $scope.temptable.selectedyear = '2010';
            
          };break;
          case 11:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata[5005]._2011.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata[5005]._2011.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5005]._2011.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5005]._2011.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5005]._2011.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5005]._2011.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5005]._2011.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5005]._2011.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5005]._2011.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5005]._2011.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata[5005]._2011.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata[5005]._2011.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2011年度';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2011年度';
              $scope.SingleVocationChart.subtitle.text = '2011年度';
              $scope.temptable.selectedyear = '2011';
          };break;
          case 12:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata[5005]._2012.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata[5005]._2012.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5005]._2012.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5005]._2012.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5005]._2012.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5005]._2012.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5005]._2012.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5005]._2012.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5005]._2012.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5005]._2012.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata[5005]._2012.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata[5005]._2012.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2012年度';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2012年度';
              $scope.SingleVocationChart.subtitle.text = '2012年度';
              $scope.temptable.selectedyear = '2012';
            
          };break;
          case 13:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata[5005]._2013.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata[5005]._2013.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5005]._2013.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5005]._2013.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5005]._2013.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5005]._2013.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5005]._2013.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5005]._2013.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5005]._2013.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5005]._2013.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata[5005]._2013.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata[5005]._2013.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2013年度';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2013年度';
              $scope.SingleVocationChart.subtitle.text = '2013年度';
              $scope.temptable.selectedyear = '2013';
            
          };break;
          case 14:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata[5005]._2014.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata[5005]._2014.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5005]._2014.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5005]._2014.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5005]._2014.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5005]._2014.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5005]._2014.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5005]._2014.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5005]._2014.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5005]._2014.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata[5005]._2014.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata[5005]._2014.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2014年度';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2014年度';
              $scope.SingleVocationChart.subtitle.text = '2014年度';
              $scope.temptable.selectedyear = '2014';
          };break;
          case 15:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata[5005]._2015.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata[5005]._2015.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5005]._2015.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5005]._2015.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5005]._2015.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5005]._2015.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5005]._2015.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5005]._2015.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5005]._2015.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5005]._2015.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata[5005]._2015.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata[5005]._2015.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2015年度';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2015年度';
              $scope.SingleVocationChart.subtitle.text = '2015年度';
              $scope.temptable.selectedyear = '2015';
          };break;
          case 16:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata[5005]._2016.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata[5005]._2016.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5005]._2016.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5005]._2016.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5005]._2016.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5005]._2016.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5005]._2016.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5005]._2016.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5005]._2016.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5005]._2016.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata[5005]._2016.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata[5005]._2016.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2016年度 预测值';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2016年度 预测值';
              $scope.SingleVocationChart.subtitle.text = '2016年度 预测值';
              $scope.temptable.selectedyear = '2016';
          };break;
          case 17:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata[5005]._2017.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata[5005]._2017.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5005]._2017.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5005]._2017.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5005]._2017.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5005]._2017.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5005]._2017.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5005]._2017.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5005]._2017.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5005]._2017.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata[5005]._2017.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata[5005]._2017.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2017年度 预测值';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2017年度 预测值';
              $scope.SingleVocationChart.subtitle.text = '2017年度 预测值';
              $scope.temptable.selectedyear = '2017';
          };break;
          case 18:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata[5005]._2018.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata[5005]._2018.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5005]._2018.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5005]._2018.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5005]._2018.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5005]._2018.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5005]._2018.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5005]._2018.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5005]._2018.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5005]._2018.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata[5005]._2018.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata[5005]._2018.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2018年度 预测值';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2018年度 预测值';
              $scope.SingleVocationChart.subtitle.text = '2018年度 预测值';
              $scope.temptable.selectedyear = '2018';
          };break;
        }
      }break;
      case 5006:{
        switch(param){
          case 6:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata[5006]._2006.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata[5006]._2006.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5006]._2006.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5006]._2006.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5006]._2006.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5006]._2006.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5006]._2006.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5006]._2006.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5006]._2006.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5006]._2006.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata[5006]._2006.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata[5006]._2006.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2006年度';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2006年度';
              $scope.SingleVocationChart.subtitle.text = '2006年度';
              $scope.temptable.selectedyear = '2006';
          };break;
          case 7:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata[5006]._2007.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata[5006]._2007.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5006]._2007.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5006]._2007.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5006]._2007.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5006]._2007.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5006]._2007.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5006]._2007.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5006]._2007.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5006]._2007.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata[5006]._2007.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata[5006]._2007.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2007年度';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2007年度';
              $scope.SingleVocationChart.subtitle.text = '2007年度';
              $scope.temptable.selectedyear = '2007';
          };break;
          case 8:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata[5006]._2008.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata[5006]._2008.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5006]._2008.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5006]._2008.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5006]._2008.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5006]._2008.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5006]._2008.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5006]._2008.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5006]._2008.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5006]._2008.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata[5006]._2008.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata[5006]._2008.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2008年度';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2008年度';
              $scope.SingleVocationChart.subtitle.text = '2008年度';
              $scope.temptable.selectedyear = '2008';
          };break;
          case 9:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata[5006]._2009.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata[5006]._2009.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5006]._2009.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5006]._2009.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5006]._2009.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5006]._2009.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5006]._2009.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5006]._2009.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5006]._2009.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5006]._2009.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata[5006]._2009.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata[5006]._2009.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2009年度';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2009年度';
              $scope.SingleVocationChart.subtitle.text = '2009年度';
              $scope.temptable.selectedyear = '2009';
            
          };break;
          case 10:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata[5006]._2010.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata[5006]._2010.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5006]._2010.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5006]._2010.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5006]._2010.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5006]._2010.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5006]._2010.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5006]._2010.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5006]._2010.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5006]._2010.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata[5006]._2010.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata[5006]._2010.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2010年度';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2010年度';
              $scope.SingleVocationChart.subtitle.text = '2010年度';
              $scope.temptable.selectedyear = '2010';
            
          };break;
          case 11:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata[5006]._2011.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata[5006]._2011.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5006]._2011.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5006]._2011.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5006]._2011.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5006]._2011.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5006]._2011.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5006]._2011.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5006]._2011.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5006]._2011.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata[5006]._2011.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata[5006]._2011.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2011年度';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2011年度';
              $scope.SingleVocationChart.subtitle.text = '2011年度';
              $scope.temptable.selectedyear = '2011';
          };break;
          case 12:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata[5006]._2012.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata[5006]._2012.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5006]._2012.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5006]._2012.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5006]._2012.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5006]._2012.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5006]._2012.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5006]._2012.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5006]._2012.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5006]._2012.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata[5006]._2012.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata[5006]._2012.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2012年度';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2012年度';
              $scope.SingleVocationChart.subtitle.text = '2012年度';
              $scope.temptable.selectedyear = '2012';
            
          };break;
          case 13:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata[5006]._2013.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata[5006]._2013.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5006]._2013.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5006]._2013.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5006]._2013.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5006]._2013.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5006]._2013.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5006]._2013.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5006]._2013.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5006]._2013.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata[5006]._2013.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata[5006]._2013.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2013年度';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2013年度';
              $scope.SingleVocationChart.subtitle.text = '2013年度';
              $scope.temptable.selectedyear = '2013';
            
          };break;
          case 14:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata[5006]._2014.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata[5006]._2014.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5006]._2014.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5006]._2014.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5006]._2014.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5006]._2014.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5006]._2014.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5006]._2014.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5006]._2014.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5006]._2014.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata[5006]._2014.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata[5006]._2014.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2014年度';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2014年度';
              $scope.SingleVocationChart.subtitle.text = '2014年度';
              $scope.temptable.selectedyear = '2014';
          };break;
          case 15:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata[5006]._2015.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata[5006]._2015.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5006]._2015.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5006]._2015.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5006]._2015.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5006]._2015.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5006]._2015.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5006]._2015.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5006]._2015.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5006]._2015.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata[5006]._2015.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata[5006]._2015.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2015年度';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2015年度';
              $scope.SingleVocationChart.subtitle.text = '2015年度';
              $scope.temptable.selectedyear = '2015';
          };break;
          case 16:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata[5006]._2016.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata[5006]._2016.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5006]._2016.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5006]._2016.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5006]._2016.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5006]._2016.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5006]._2016.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5006]._2016.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5006]._2016.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5006]._2016.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata[5006]._2016.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata[5006]._2016.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2016年度 预测值';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2016年度 预测值';
              $scope.SingleVocationChart.subtitle.text = '2016年度 预测值';
              $scope.temptable.selectedyear = '2016';
          };break;
          case 17:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata[5006]._2017.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata[5006]._2017.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5006]._2017.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5006]._2017.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5006]._2017.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5006]._2017.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5006]._2017.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5006]._2017.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5006]._2017.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5006]._2017.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata[5006]._2017.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata[5006]._2017.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2017年度 预测值';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2017年度 预测值';
              $scope.SingleVocationChart.subtitle.text = '2017年度 预测值';
              $scope.temptable.selectedyear = '2017';
          };break;
          case 18:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata[5006]._2018.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata[5006]._2018.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5006]._2018.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5006]._2018.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5006]._2018.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5006]._2018.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5006]._2018.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5006]._2018.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5006]._2018.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5006]._2018.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata[5006]._2018.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata[5006]._2018.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2018年度 预测值';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2018年度 预测值';
              $scope.SingleVocationChart.subtitle.text = '2018年度 预测值';
              $scope.temptable.selectedyear = '2018';
          };break;
        }
      }break;
      case 5007:{
        switch(param){
          case 6:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata[5007]._2006.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata[5007]._2006.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5007]._2006.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5007]._2006.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5007]._2006.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5007]._2006.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5007]._2006.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5007]._2006.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5007]._2006.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5007]._2006.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata[5007]._2006.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata[5007]._2006.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2006年度';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2006年度';
              $scope.SingleVocationChart.subtitle.text = '2006年度';
              $scope.temptable.selectedyear = '2006';
          };break;
          case 7:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata[5007]._2007.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata[5007]._2007.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5007]._2007.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5007]._2007.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5007]._2007.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5007]._2007.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5007]._2007.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5007]._2007.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5007]._2007.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5007]._2007.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata[5007]._2007.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata[5007]._2007.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2007年度';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2007年度';
              $scope.SingleVocationChart.subtitle.text = '2007年度';
              $scope.temptable.selectedyear = '2007';
          };break;
          case 8:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata[5007]._2008.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata[5007]._2008.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5007]._2008.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5007]._2008.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5007]._2008.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5007]._2008.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5007]._2008.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5007]._2008.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5007]._2008.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5007]._2008.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata[5007]._2008.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata[5007]._2008.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2008年度';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2008年度';
              $scope.SingleVocationChart.subtitle.text = '2008年度';
              $scope.temptable.selectedyear = '2008';
          };break;
          case 9:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata[5007]._2009.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata[5007]._2009.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5007]._2009.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5007]._2009.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5007]._2009.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5007]._2009.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5007]._2009.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5007]._2009.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5007]._2009.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5007]._2009.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata[5007]._2009.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata[5007]._2009.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2009年度';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2009年度';
              $scope.SingleVocationChart.subtitle.text = '2009年度';
              $scope.temptable.selectedyear = '2009';
            
          };break;
          case 10:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata[5007]._2010.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata[5007]._2010.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5007]._2010.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5007]._2010.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5007]._2010.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5007]._2010.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5007]._2010.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5007]._2010.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5007]._2010.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5007]._2010.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata[5007]._2010.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata[5007]._2010.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2010年度';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2010年度';
              $scope.SingleVocationChart.subtitle.text = '2010年度';
              $scope.temptable.selectedyear = '2010';
            
          };break;
          case 11:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata[5007]._2011.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata[5007]._2011.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5007]._2011.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5007]._2011.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5007]._2011.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5007]._2011.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5007]._2011.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5007]._2011.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5007]._2011.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5007]._2011.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata[5007]._2011.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata[5007]._2011.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2011年度';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2011年度';
              $scope.SingleVocationChart.subtitle.text = '2011年度';
              $scope.temptable.selectedyear = '2011';
          };break;
          case 12:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata[5007]._2012.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata[5007]._2012.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5007]._2012.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5007]._2012.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5007]._2012.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5007]._2012.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5007]._2012.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5007]._2012.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5007]._2012.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5007]._2012.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata[5007]._2012.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata[5007]._2012.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2012年度';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2012年度';
              $scope.SingleVocationChart.subtitle.text = '2012年度';
              $scope.temptable.selectedyear = '2012';
            
          };break;
          case 13:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata[5007]._2013.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata[5007]._2013.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5007]._2013.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5007]._2013.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5007]._2013.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5007]._2013.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5007]._2013.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5007]._2013.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5007]._2013.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5007]._2013.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata[5007]._2013.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata[5007]._2013.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2013年度';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2013年度';
              $scope.SingleVocationChart.subtitle.text = '2013年度';
              $scope.temptable.selectedyear = '2013';
            
          };break;
          case 14:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata[5007]._2014.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata[5007]._2014.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5007]._2014.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5007]._2014.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5007]._2014.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5007]._2014.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5007]._2014.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5007]._2014.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5007]._2014.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5007]._2014.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata[5007]._2014.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata[5007]._2014.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2014年度';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2014年度';
              $scope.SingleVocationChart.subtitle.text = '2014年度';
              $scope.temptable.selectedyear = '2014';
          };break;
          case 15:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata[5007]._2015.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata[5007]._2015.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5007]._2015.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5007]._2015.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5007]._2015.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5007]._2015.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5007]._2015.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5007]._2015.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5007]._2015.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5007]._2015.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata[5007]._2015.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata[5007]._2015.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2015年度';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2015年度';
              $scope.SingleVocationChart.subtitle.text = '2015年度';
              $scope.temptable.selectedyear = '2015';
          };break;
          case 16:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata[5007]._2016.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata[5007]._2016.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5007]._2016.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5007]._2016.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5007]._2016.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5007]._2016.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5007]._2016.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5007]._2016.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5007]._2016.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5007]._2016.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata[5007]._2016.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata[5007]._2016.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2016年度 预测值';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2016年度 预测值';
              $scope.SingleVocationChart.subtitle.text = '2016年度 预测值';
              $scope.temptable.selectedyear = '2016';
          };break;
          case 17:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata[5007]._2017.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata[5007]._2017.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5007]._2017.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5007]._2017.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5007]._2017.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5007]._2017.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5007]._2017.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5007]._2017.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5007]._2017.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5007]._2017.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata[5007]._2017.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata[5007]._2017.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2017年度 预测值';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2017年度 预测值';
              $scope.SingleVocationChart.subtitle.text = '2017年度 预测值';
              $scope.temptable.selectedyear = '2017';
          };break;
          case 18:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata[5007]._2018.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata[5007]._2018.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5007]._2018.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5007]._2018.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5007]._2018.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5007]._2018.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5007]._2018.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5007]._2018.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5007]._2018.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5007]._2018.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata[5007]._2018.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata[5007]._2018.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2018年度 预测值';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2018年度 预测值';
              $scope.SingleVocationChart.subtitle.text = '2018年度 预测值';
              $scope.temptable.selectedyear = '2018';
          };break;
        }
      }break;
      case 5008:{
        switch(param){
          case 6:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata[5008]._2006.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata[5008]._2006.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5008]._2006.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5008]._2006.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5008]._2006.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5008]._2006.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5008]._2006.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5008]._2006.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5008]._2006.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5008]._2006.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata[5008]._2006.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata[5008]._2006.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2006年度';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2006年度';
              $scope.SingleVocationChart.subtitle.text = '2006年度';
              $scope.temptable.selectedyear = '2006';
          };break;
          case 7:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata[5008]._2007.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata[5008]._2007.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5008]._2007.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5008]._2007.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5008]._2007.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5008]._2007.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5008]._2007.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5008]._2007.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5008]._2007.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5008]._2007.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata[5008]._2007.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata[5008]._2007.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2007年度';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2007年度';
              $scope.SingleVocationChart.subtitle.text = '2007年度';
              $scope.temptable.selectedyear = '2007';
          };break;
          case 8:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata[5008]._2008.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata[5008]._2008.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5008]._2008.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5008]._2008.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5008]._2008.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5008]._2008.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5008]._2008.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5008]._2008.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5008]._2008.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5008]._2008.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata[5008]._2008.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata[5008]._2008.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2008年度';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2008年度';
              $scope.SingleVocationChart.subtitle.text = '2008年度';
              $scope.temptable.selectedyear = '2008';
          };break;
          case 9:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata[5008]._2009.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata[5008]._2009.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5008]._2009.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5008]._2009.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5008]._2009.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5008]._2009.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5008]._2009.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5008]._2009.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5008]._2009.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5008]._2009.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata[5008]._2009.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata[5008]._2009.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2009年度';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2009年度';
              $scope.SingleVocationChart.subtitle.text = '2009年度';
              $scope.temptable.selectedyear = '2009';
            
          };break;
          case 10:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata[5008]._2010.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata[5008]._2010.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5008]._2010.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5008]._2010.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5008]._2010.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5008]._2010.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5008]._2010.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5008]._2010.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5008]._2010.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5008]._2010.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata[5008]._2010.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata[5008]._2010.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2010年度';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2010年度';
              $scope.SingleVocationChart.subtitle.text = '2010年度';
              $scope.temptable.selectedyear = '2010';
            
          };break;
          case 11:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata[5008]._2011.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata[5008]._2011.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5008]._2011.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5008]._2011.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5008]._2011.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5008]._2011.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5008]._2011.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5008]._2011.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5008]._2011.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5008]._2011.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata[5008]._2011.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata[5008]._2011.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2011年度';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2011年度';
              $scope.SingleVocationChart.subtitle.text = '2011年度';
              $scope.temptable.selectedyear = '2011';
          };break;
          case 12:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata[5008]._2012.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata[5008]._2012.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5008]._2012.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5008]._2012.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5008]._2012.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5008]._2012.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5008]._2012.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5008]._2012.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5008]._2012.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5008]._2012.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata[5008]._2012.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata[5008]._2012.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2012年度';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2012年度';
              $scope.SingleVocationChart.subtitle.text = '2012年度';
              $scope.temptable.selectedyear = '2012';
            
          };break;
          case 13:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata[5008]._2013.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata[5008]._2013.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5008]._2013.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5008]._2013.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5008]._2013.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5008]._2013.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5008]._2013.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5008]._2013.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5008]._2013.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5008]._2013.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata[5008]._2013.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata[5008]._2013.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2013年度';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2013年度';
              $scope.SingleVocationChart.subtitle.text = '2013年度';
              $scope.temptable.selectedyear = '2013';
            
          };break;
          case 14:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata[5008]._2014.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata[5008]._2014.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5008]._2014.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5008]._2014.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5008]._2014.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5008]._2014.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5008]._2014.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5008]._2014.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5008]._2014.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5008]._2014.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata[5008]._2014.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata[5008]._2014.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2014年度';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2014年度';
              $scope.SingleVocationChart.subtitle.text = '2014年度';
              $scope.temptable.selectedyear = '2014';
          };break;
          case 15:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata[5008]._2015.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata[5008]._2015.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5008]._2015.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5008]._2015.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5008]._2015.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5008]._2015.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5008]._2015.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5008]._2015.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5008]._2015.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5008]._2015.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata[5008]._2015.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata[5008]._2015.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2015年度';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2015年度';
              $scope.SingleVocationChart.subtitle.text = '2015年度';
              $scope.temptable.selectedyear = '2015';
          };break;
          case 16:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata[5008]._2016.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata[5008]._2016.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5008]._2016.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5008]._2016.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5008]._2016.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5008]._2016.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5008]._2016.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5008]._2016.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5008]._2016.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5008]._2016.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata[5008]._2016.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata[5008]._2016.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2016年度 预测值';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2016年度 预测值';
              $scope.SingleVocationChart.subtitle.text = '2016年度 预测值';
              $scope.temptable.selectedyear = '2016';
          };break;
          case 17:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata[5008]._2017.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata[5008]._2017.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5008]._2017.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5008]._2017.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5008]._2017.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5008]._2017.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5008]._2017.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5008]._2017.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5008]._2017.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5008]._2017.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata[5008]._2017.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata[5008]._2017.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2017年度 预测值';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2017年度 预测值';
              $scope.SingleVocationChart.subtitle.text = '2017年度 预测值';
              $scope.temptable.selectedyear = '2017';
          };break;
          case 18:{
              $scope.SingleVocationChart.series[0].data = $scope.industriesdata[5008]._2018.season.powerdata;
              $scope.SingleVocationChart.series[1].data = $scope.industriesdata[5008]._2018.season.gdpdata;
              $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5008]._2018.season.gdpdata[0];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5008]._2018.season.gdpdata[1];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5008]._2018.season.gdpdata[2];
              $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5008]._2018.season.gdpdata[3];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5008]._2018.season.powerdata[0];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5008]._2018.season.powerdata[1];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5008]._2018.season.powerdata[2];
              $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5008]._2018.season.powerdata[3];
              $scope.temptable.season.gdp = $scope.industriesdata[5008]._2018.season.gdpdata;
              $scope.temptable.season.power = $scope.industriesdata[5008]._2018.season.powerdata;
              $scope.IndustryPowerChartBySeasonPie.subtitle.text = '2018年度 预测值';
              $scope.IndustryGdpChartBySeasonPie.subtitle.text = '2018年度 预测值';
              $scope.SingleVocationChart.subtitle.text = '2018年度 预测值';
              $scope.temptable.selectedyear = '2018';
          };break;
        }
      }break;
    }   
  }

  //选择企业函数
  $scope.changeIndustry = function(param){
    switch(param){
      case 5001:{
        $scope.SingleVocationChartByYear.title.text = $scope.industriesdata[5001].title;
        $scope.SingleVocationChartByYear.series[0].data = $scope.industriesdata[5001].yeardata.powerdata;
        $scope.SingleVocationChartByYear.series[1].data = $scope.industriesdata[5001].yeardata.gdpdata;
        $scope.SingleVocationChart.title.text = $scope.industriesdata[5001].title;
        $scope.SingleVocationChart.series[0].data = $scope.industriesdata[5001]._2015.season.powerdata;
        $scope.SingleVocationChart.series[1].data = $scope.industriesdata[5001]._2015.season.gdpdata;
        $scope.IndustryGdpChartBySeasonPie.title.text = $scope.industriesdata[5001].title+'产值同比增速对比';
        $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5001]._2015.season.gdpdata[0];
        $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5001]._2015.season.gdpdata[1];
        $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5001]._2015.season.gdpdata[2];
        $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5001]._2015.season.gdpdata[3];
        $scope.IndustryPowerChartBySeasonPie.title.text = $scope.industriesdata[5001].title+'用电量同比增速对比';
        $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5001]._2015.season.powerdata[0];
        $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5001]._2015.season.powerdata[1];
        $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5001]._2015.season.powerdata[2];
        $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5001]._2015.season.powerdata[3];
        $scope.temptable.year.gdp = $scope.industriesdata[5001].yeardata.gdpdata;
        $scope.temptable.year.power = $scope.industriesdata[5001].yeardata.powerdata;
        $scope.temptable.season.gdp = $scope.industriesdata[5001]._2015.season.gdpdata;
        $scope.temptable.season.power = $scope.industriesdata[5001]._2015.season.powerdata;
        $scope.temptable.selectedindustry = $scope.industriesdata[5001].title;
        $scope.industrymark = param;
      };break;
      case 5002:{
        $scope.SingleVocationChartByYear.title.text = $scope.industriesdata[5002].title;
        $scope.SingleVocationChartByYear.series[0].data = $scope.industriesdata[5002].yeardata.powerdata;
        $scope.SingleVocationChartByYear.series[1].data = $scope.industriesdata[5002].yeardata.gdpdata;
        $scope.SingleVocationChart.title.text = $scope.industriesdata[5002].title;
        $scope.SingleVocationChart.series[0].data = $scope.industriesdata[5002]._2015.season.powerdata;
        $scope.SingleVocationChart.series[1].data = $scope.industriesdata[5002]._2015.season.gdpdata;
        $scope.IndustryGdpChartBySeasonPie.title.text = $scope.industriesdata[5002].title+'产值同比增速对比';
        $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5002]._2015.season.gdpdata[0];
        $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5002]._2015.season.gdpdata[1];
        $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5002]._2015.season.gdpdata[2];
        $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5002]._2015.season.gdpdata[3];
        $scope.IndustryPowerChartBySeasonPie.title.text = $scope.industriesdata[5002].title+'用电量同比增速对比';
        $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5002]._2015.season.powerdata[0];
        $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5002]._2015.season.powerdata[1];
        $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5002]._2015.season.powerdata[2];
        $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5002]._2015.season.powerdata[3];
        $scope.temptable.year.gdp = $scope.industriesdata[5002].yeardata.gdpdata;
        $scope.temptable.year.power = $scope.industriesdata[5002].yeardata.powerdata;
        $scope.temptable.season.gdp = $scope.industriesdata[5002]._2015.season.gdpdata;
        $scope.temptable.season.power = $scope.industriesdata[5002]._2015.season.powerdata;
        $scope.temptable.selectedindustry = $scope.industriesdata[5002].title;
        $scope.industrymark = param;
      };break;
      case 5003:{
        $scope.SingleVocationChartByYear.title.text = $scope.industriesdata[5003].title;
        $scope.SingleVocationChartByYear.series[0].data = $scope.industriesdata[5003].yeardata.powerdata;
        $scope.SingleVocationChartByYear.series[1].data = $scope.industriesdata[5003].yeardata.gdpdata;
        $scope.SingleVocationChart.title.text = $scope.industriesdata[5003].title;
        $scope.SingleVocationChart.series[0].data = $scope.industriesdata[5003]._2015.season.powerdata;
        $scope.SingleVocationChart.series[1].data = $scope.industriesdata[5003]._2015.season.gdpdata;
        $scope.IndustryGdpChartBySeasonPie.title.text = $scope.industriesdata[5003].title+'产值同比增速对比';
        $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5003]._2015.season.gdpdata[0];
        $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5003]._2015.season.gdpdata[1];
        $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5003]._2015.season.gdpdata[2];
        $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5003]._2015.season.gdpdata[3];
        $scope.IndustryPowerChartBySeasonPie.title.text = $scope.industriesdata[5003].title+'用电量同比增速对比';
        $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5003]._2015.season.powerdata[0];
        $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5003]._2015.season.powerdata[1];
        $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5003]._2015.season.powerdata[2];
        $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5003]._2015.season.powerdata[3];
        $scope.temptable.year.gdp = $scope.industriesdata[5003].yeardata.gdpdata;
        $scope.temptable.year.power = $scope.industriesdata[5003].yeardata.powerdata;
        $scope.temptable.season.gdp = $scope.industriesdata[5003]._2015.season.gdpdata;
        $scope.temptable.season.power = $scope.industriesdata[5003]._2015.season.powerdata;
        $scope.temptable.selectedindustry = $scope.industriesdata[5003].title;
        $scope.industrymark = param;
      };break;
      case 5004:{
        $scope.SingleVocationChartByYear.title.text = $scope.industriesdata[5004].title;
        $scope.SingleVocationChartByYear.series[0].data = $scope.industriesdata[5004].yeardata.powerdata;
        $scope.SingleVocationChartByYear.series[1].data = $scope.industriesdata[5004].yeardata.gdpdata;
        $scope.SingleVocationChart.title.text = $scope.industriesdata[5004].title;
        $scope.SingleVocationChart.series[0].data = $scope.industriesdata[5004]._2015.season.powerdata;
        $scope.SingleVocationChart.series[1].data = $scope.industriesdata[5004]._2015.season.gdpdata;
        $scope.IndustryGdpChartBySeasonPie.title.text = $scope.industriesdata[5004].title+'产值同比增速对比';
        $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5004]._2015.season.gdpdata[0];
        $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5004]._2015.season.gdpdata[1];
        $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5004]._2015.season.gdpdata[2];
        $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5004]._2015.season.gdpdata[3];
        $scope.IndustryPowerChartBySeasonPie.title.text = $scope.industriesdata[5004].title+'用电量同比增速对比';
        $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5004]._2015.season.powerdata[0];
        $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5004]._2015.season.powerdata[1];
        $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5004]._2015.season.powerdata[2];
        $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5004]._2015.season.powerdata[3];
        $scope.temptable.year.gdp = $scope.industriesdata[5004].yeardata.gdpdata;
        $scope.temptable.year.power = $scope.industriesdata[5004].yeardata.powerdata;
        $scope.temptable.season.gdp = $scope.industriesdata[5004]._2015.season.gdpdata;
        $scope.temptable.season.power = $scope.industriesdata[5004]._2015.season.powerdata;
        $scope.temptable.selectedindustry = $scope.industriesdata[5004].title;
        $scope.industrymark = param;
      };break;
      case 5005:{
        $scope.SingleVocationChartByYear.title.text = $scope.industriesdata[5005].title;
        $scope.SingleVocationChartByYear.series[0].data = $scope.industriesdata[5005].yeardata.powerdata;
        $scope.SingleVocationChartByYear.series[1].data = $scope.industriesdata[5005].yeardata.gdpdata;
        $scope.SingleVocationChart.title.text = $scope.industriesdata[5005].title;
        $scope.SingleVocationChart.series[0].data = $scope.industriesdata[5005]._2015.season.powerdata;
        $scope.SingleVocationChart.series[1].data = $scope.industriesdata[5005]._2015.season.gdpdata;
        $scope.IndustryGdpChartBySeasonPie.title.text = $scope.industriesdata[5005].title+'产值同比增速对比';
        $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5005]._2015.season.gdpdata[0];
        $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5005]._2015.season.gdpdata[1];
        $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5005]._2015.season.gdpdata[2];
        $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5005]._2015.season.gdpdata[3];
        $scope.IndustryPowerChartBySeasonPie.title.text = $scope.industriesdata[5005].title+'用电量同比增速对比';
        $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5005]._2015.season.powerdata[0];
        $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5005]._2015.season.powerdata[1];
        $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5005]._2015.season.powerdata[2];
        $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5005]._2015.season.powerdata[3];
        $scope.temptable.year.gdp = $scope.industriesdata[5005].yeardata.gdpdata;
        $scope.temptable.year.power = $scope.industriesdata[5005].yeardata.powerdata;
        $scope.temptable.season.gdp = $scope.industriesdata[5005]._2015.season.gdpdata;
        $scope.temptable.season.power = $scope.industriesdata[5005]._2015.season.powerdata;
        $scope.temptable.selectedindustry = $scope.industriesdata[5005].title;
        $scope.industrymark = param;
      };break;
      case 5006:{
        $scope.SingleVocationChartByYear.title.text = $scope.industriesdata[5006].title;
        $scope.SingleVocationChartByYear.series[0].data = $scope.industriesdata[5006].yeardata.powerdata;
        $scope.SingleVocationChartByYear.series[1].data = $scope.industriesdata[5006].yeardata.gdpdata;
        $scope.SingleVocationChart.title.text = $scope.industriesdata[5006].title;
        $scope.SingleVocationChart.series[0].data = $scope.industriesdata[5006]._2015.season.powerdata;
        $scope.SingleVocationChart.series[1].data = $scope.industriesdata[5006]._2015.season.gdpdata;
        $scope.IndustryGdpChartBySeasonPie.title.text = $scope.industriesdata[5006].title+'产值同比增速对比';
        $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5006]._2015.season.gdpdata[0];
        $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5006]._2015.season.gdpdata[1];
        $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5006]._2015.season.gdpdata[2];
        $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5006]._2015.season.gdpdata[3];
        $scope.IndustryPowerChartBySeasonPie.title.text = $scope.industriesdata[5006].title+'用电量同比增速对比';
        $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5006]._2015.season.powerdata[0];
        $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5006]._2015.season.powerdata[1];
        $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5006]._2015.season.powerdata[2];
        $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5006]._2015.season.powerdata[3];
        $scope.temptable.year.gdp = $scope.industriesdata[5006].yeardata.gdpdata;
        $scope.temptable.year.power = $scope.industriesdata[5006].yeardata.powerdata;
        $scope.temptable.season.gdp = $scope.industriesdata[5006]._2015.season.gdpdata;
        $scope.temptable.season.power = $scope.industriesdata[5006]._2015.season.powerdata;
        $scope.temptable.selectedindustry = $scope.industriesdata[5006].title;
        $scope.industrymark = param;
      };break;
      case 5007:{
        $scope.SingleVocationChartByYear.title.text = $scope.industriesdata[5007].title;
        $scope.SingleVocationChartByYear.series[0].data = $scope.industriesdata[5007].yeardata.powerdata;
        $scope.SingleVocationChartByYear.series[1].data = $scope.industriesdata[5007].yeardata.gdpdata;
        $scope.SingleVocationChart.title.text = $scope.industriesdata[5007].title;
        $scope.SingleVocationChart.series[0].data = $scope.industriesdata[5007]._2015.season.powerdata;
        $scope.SingleVocationChart.series[1].data = $scope.industriesdata[5007]._2015.season.gdpdata;
        $scope.IndustryGdpChartBySeasonPie.title.text = $scope.industriesdata[5007].title+'产值同比增速对比';
        $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5007]._2015.season.gdpdata[0];
        $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5007]._2015.season.gdpdata[1];
        $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5007]._2015.season.gdpdata[2];
        $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5007]._2015.season.gdpdata[3];
        $scope.IndustryPowerChartBySeasonPie.title.text = $scope.industriesdata[5007].title+'用电量同比增速对比';
        $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5007]._2015.season.powerdata[0];
        $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5007]._2015.season.powerdata[1];
        $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5007]._2015.season.powerdata[2];
        $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5007]._2015.season.powerdata[3];
        $scope.temptable.year.gdp = $scope.industriesdata[5007].yeardata.gdpdata;
        $scope.temptable.year.power = $scope.industriesdata[5007].yeardata.powerdata;
        $scope.temptable.season.gdp = $scope.industriesdata[5007]._2015.season.gdpdata;
        $scope.temptable.season.power = $scope.industriesdata[5007]._2015.season.powerdata;
        $scope.temptable.selectedindustry = $scope.industriesdata[5007].title;
        $scope.industrymark = param;
      };break;
      case 5008:{
        $scope.SingleVocationChartByYear.title.text = $scope.industriesdata[5008].title;
        $scope.SingleVocationChartByYear.series[0].data = $scope.industriesdata[5008].yeardata.powerdata;
        $scope.SingleVocationChartByYear.series[1].data = $scope.industriesdata[5008].yeardata.gdpdata;
        $scope.SingleVocationChart.title.text = $scope.industriesdata[5008].title;
        $scope.SingleVocationChart.series[0].data = $scope.industriesdata[5008]._2015.season.powerdata;
        $scope.SingleVocationChart.series[1].data = $scope.industriesdata[5008]._2015.season.gdpdata;
        $scope.IndustryGdpChartBySeasonPie.title.text = $scope.industriesdata[5008].title+'产值同比增速对比';
        $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5008]._2015.season.gdpdata[0];
        $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5008]._2015.season.gdpdata[1];
        $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5008]._2015.season.gdpdata[2];
        $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5008]._2015.season.gdpdata[3];
        $scope.IndustryPowerChartBySeasonPie.title.text = $scope.industriesdata[5008].title+'用电量同比增速对比';
        $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5008]._2015.season.powerdata[0];
        $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5008]._2015.season.powerdata[1];
        $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5008]._2015.season.powerdata[2];
        $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5008]._2015.season.powerdata[3];
        $scope.temptable.year.gdp = $scope.industriesdata[5008].yeardata.gdpdata;
        $scope.temptable.year.power = $scope.industriesdata[5008].yeardata.powerdata;
        $scope.temptable.season.gdp = $scope.industriesdata[5008]._2015.season.gdpdata;
        $scope.temptable.season.power = $scope.industriesdata[5008]._2015.season.powerdata;
        $scope.temptable.selectedindustry = $scope.industriesdata[5008].title;
        $scope.industrymark = param;
      };break;
      case 5009:{
        $scope.SingleVocationChartByYear.title.text = $scope.industriesdata[5009].title;
        $scope.SingleVocationChartByYear.series[0].data = $scope.industriesdata[5009].yeardata.powerdata;
        $scope.SingleVocationChartByYear.series[1].data = $scope.industriesdata[5009].yeardata.gdpdata;
        $scope.SingleVocationChart.title.text = $scope.industriesdata[5009].title;
        $scope.SingleVocationChart.series[0].data = $scope.industriesdata[5009]._2015.season.powerdata;
        $scope.SingleVocationChart.series[1].data = $scope.industriesdata[5009]._2015.season.gdpdata;
        $scope.IndustryGdpChartBySeasonPie.title.text = $scope.industriesdata[5009].title+'产值同比增速对比';
        $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5009]._2015.season.gdpdata[0];
        $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5009]._2015.season.gdpdata[1];
        $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5009]._2015.season.gdpdata[2];
        $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5009]._2015.season.gdpdata[3];
        $scope.IndustryPowerChartBySeasonPie.title.text = $scope.industriesdata[5009].title+'用电量同比增速对比';
        $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5009]._2015.season.powerdata[0];
        $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5009]._2015.season.powerdata[1];
        $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5009]._2015.season.powerdata[2];
        $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5009]._2015.season.powerdata[3];
        $scope.temptable.year.gdp = $scope.industriesdata[5009].yeardata.gdpdata;
        $scope.temptable.year.power = $scope.industriesdata[5009].yeardata.powerdata;
        $scope.temptable.season.gdp = $scope.industriesdata[5009]._2015.season.gdpdata;
        $scope.temptable.season.power = $scope.industriesdata[5009]._2015.season.powerdata;
        $scope.temptable.selectedindustry = $scope.industriesdata[5009].title;
        $scope.industrymark = param;
      };break;
      case 5010:{
        $scope.SingleVocationChartByYear.title.text = $scope.industriesdata[5010].title;
        $scope.SingleVocationChartByYear.series[0].data = $scope.industriesdata[5010].yeardata.powerdata;
        $scope.SingleVocationChartByYear.series[1].data = $scope.industriesdata[5010].yeardata.gdpdata;
        $scope.SingleVocationChart.title.text = $scope.industriesdata[5010].title;
        $scope.SingleVocationChart.series[0].data = $scope.industriesdata[5010]._2015.season.powerdata;
        $scope.SingleVocationChart.series[1].data = $scope.industriesdata[5010]._2015.season.gdpdata;
        $scope.IndustryGdpChartBySeasonPie.title.text = $scope.industriesdata[5010].title+'产值同比增速对比';
        $scope.IndustryGdpChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5010]._2015.season.gdpdata[0];
        $scope.IndustryGdpChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5010]._2015.season.gdpdata[1];
        $scope.IndustryGdpChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5010]._2015.season.gdpdata[2];
        $scope.IndustryGdpChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5010]._2015.season.gdpdata[3];
        $scope.IndustryPowerChartBySeasonPie.title.text = $scope.industriesdata[5010].title+'用电量同比增速对比';
        $scope.IndustryPowerChartBySeasonPie.series[0].data[0][1] = $scope.industriesdata[5010]._2015.season.powerdata[0];
        $scope.IndustryPowerChartBySeasonPie.series[0].data[1][1] = $scope.industriesdata[5010]._2015.season.powerdata[1];
        $scope.IndustryPowerChartBySeasonPie.series[0].data[2][1] = $scope.industriesdata[5010]._2015.season.powerdata[2];
        $scope.IndustryPowerChartBySeasonPie.series[0].data[3][1] = $scope.industriesdata[5010]._2015.season.powerdata[3];
        $scope.temptable.year.gdp = $scope.industriesdata[5010].yeardata.gdpdata;
        $scope.temptable.year.power = $scope.industriesdata[5010].yeardata.powerdata;
        $scope.temptable.season.gdp = $scope.industriesdata[5010]._2015.season.gdpdata;
        $scope.temptable.season.power = $scope.industriesdata[5010]._2015.season.powerdata;
        $scope.temptable.selectedindustry = $scope.industriesdata[5010].title;
        $scope.industrymark = param;
      };break;
    }
  }
  /*上———第一图*/
  $scope.SingleVocationChartByYear={
         options:{
            chart: {
                type: 'spline',
                height: 400
            },
         },
         title: {
            text: $scope.industriesdata[5001].title,
            x: -20 //center
        },
        subtitle: {
            text: '',
            x: -20
        },
        xAxis: {
            categories: ['2006', '2007', '2008', '2009', '2010', '2011','2012', '2013', '2014', '2015', '2016', '2017', '2018'],
            plotBands: [{
                from: 9.5,
                to: 12.5,
                label: { 
                    text:"预测区",
                    style: {
                        color: 'grey',
                    },
                },
                color: 'rgba(68, 170, 213, .2)'
            }],
        },
        yAxis: {
            title: {
                text: '增长率 (%)'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valueSuffix: '%'
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{
            name: '企业用电量同比增长率',
            data: $scope.industriesdata[5001].yeardata.powerdata,
        }, {
            name: '企业产值同比增长率',
            data: $scope.industriesdata[5001].yeardata.gdpdata,
        }]
  };

  /*下——第一图*/
  $scope.SingleVocationChart={  
       options:{
          chart: {
              type: 'spline',
              height:400,
          },
       },
       title: {
          text: $scope.industriesdata[5001].title,
          x: -20, //center
          style: {
                fontSize: '14px'
            }
      },
      subtitle: {
          text: '2015年度',
          x: -20
      },
      xAxis: {
          categories: ['第一季度', '第二季度', '第三季度', '第四季度'],
          plotBands: [{
                from: 8,
                to: 8,
                label: { 
                    text:"预测区",
                    style: {
                        color: 'grey',
                    },
                },
                color: 'rgba(68, 170, 213, .2)'
            }],
      },
      yAxis: {
          title: {
              text: '增长率 (%)'
          }, 
          plotLines: [{
              value: 0,
              width: 1,
              color: '#808080'
          }]
      },
      tooltip: {
          valueSuffix: '%'
      },
      legend: {
          layout: 'vertical',
          align: 'right',
          verticalAlign: 'middle',
          borderWidth: 0
      },
      series: [{
          name: '企业用电量同比增长率',
          data: $scope.industriesdata[5001]._2015.season.powerdata,
      }, {
          name: '企业产值增长率',
          data: $scope.industriesdata[5001]._2015.season.gdpdata,
      }]
  };
  /*下——第二图*/
  $scope.IndustryGdpChartBySeasonPie={
    chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            height:400,
        },
        title: {
            text: $scope.industriesdata[5001].title+'产值同比增速对比',
            style: {
                fontSize: '14px'
            }
        },
        subtitle: {
          text: '2015年度',
          x: -20
      },
        tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                startAngle: -90,
                endAngle:90,  
                center: ['50%', '70%']
            }
        },
        xAxis: {
            categories:[],
            labels: {
                rotation: -45,
                align: 'right',
                style: {
                    fontSize: '8px',
                    fontFamily: 'Verdana, sans-serif'
                }
            }
        },
        yAxis: {
            title: {
                text: '增长率 (%)'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        series: [{
            type: 'column',
            name: '增长率',
            data: [
                ['第一季度',   $scope.industriesdata[5001]._2015.season.gdpdata[0]],
                ['第二季度',   $scope.industriesdata[5001]._2015.season.gdpdata[1]],
                ['第三季度',   $scope.industriesdata[5001]._2015.season.gdpdata[2]],
                ['第四季度',   $scope.industriesdata[5001]._2015.season.gdpdata[3]],
                
            ]
        }]
  };
  /*下——第三图*/
  $scope.IndustryPowerChartBySeasonPie={
    chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            height:400,
        },
        title: {
            text: $scope.industriesdata[5001].title+'用电量同比增速对比',
            style: {
                fontSize: '14px'
            }
        },
        subtitle: {
          text: '2015年度',
          x: -20
      },
        tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
          
        },
        xAxis: {
            categories:[],
            labels: {
                rotation: -45,
                align: 'right',
                style: {
                    fontSize: '8px',
                    fontFamily: 'Verdana, sans-serif'
                }
            }
        },
        yAxis: {
            title: {
                text: '增长率 (%)'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        series: [{
            type: 'column',
            name: '增长率',
            data: [
                ['第一季度',   $scope.industriesdata[5001]._2015.season.powerdata[0]],
                ['第二季度',   $scope.industriesdata[5001]._2015.season.powerdata[1]],
                ['第三季度',   $scope.industriesdata[5001]._2015.season.powerdata[2]],
                ['第四季度',   $scope.industriesdata[5001]._2015.season.powerdata[3]],
            ]
        }]
  };

  $scope.enterpriselist = [
      {
        //占位
      },
      {
          name : '太仓振辉化纤有限公司',
          code : 5001,
          position:[121.100277,31.603982],
      },
      {
          name : '苏州达诺铸造有限公司',
          code : 5002,
          position:[121.097839,31.69338],
      },
      {
          name : '申久化纤有限公司',
          code : 5003,
          position:[121.19411,31.620342],
      },
      {
          name : '太仓协鑫光伏科技有限公司',
          code : 5004,
          position:[121.182226,31.609841],
      },
      {
          name : '舍弗勒(中国)有限公司',
          code : 5005,
          position:[121.118329,31.478157],
      },
      {
          name : '江苏长乐纤维科技有限公司',
          code : 5006,
          position:[121.271566,31.57156],
      },
      {
          name : '太仓海螺水泥有限公司',
          code : 5007,
          position:[121.108497,31.68122],
      },
      {
          name : '太仓中化环保化工有限公司',
          code : 5008,
          position:[121.127511,31.598285],
      },
      {
          name : '奥特斯维能源(太仓)有限公司',
          code : 5009,
          position:[121.091417,31.443898],
      },
      {
          name : '太仓利泰纺织厂有限公司',
          code : 5010,
          position:[121.19704,31.622541],
      },
  ];

  //设置地图标记点
    var marker1 = new AMap.Marker({
        icon : 'images/marker_sprite.png',
        position: $scope.enterpriselist[1].position,
        map:$scope.map,
        clickable:true,
    });

    marker1.setLabel({//label默认蓝框白底左上角显示，样式className为：amap-marker-label
        offset: new AMap.Pixel(20, -2),
        content: $scope.enterpriselist[1].name,
        clickable:true,
    });

    var marker2 = new AMap.Marker({
        icon : 'images/marker_sprite.png',
        position: $scope.enterpriselist[2].position,
        map:$scope.map,
        clickable:true,
    });

    marker2.setLabel({//label默认蓝框白底左上角显示，样式className为：amap-marker-label
        offset: new AMap.Pixel(20, -2),
        content: $scope.enterpriselist[2].name,
        clickable:true,
    });

    var marker3 = new AMap.Marker({
        icon : 'images/marker_sprite.png',
        position: $scope.enterpriselist[3].position,
        map:$scope.map,
        clickable:true,
    });

    marker3.setLabel({//label默认蓝框白底左上角显示，样式className为：amap-marker-label
        offset: new AMap.Pixel(20, -2),
        content: $scope.enterpriselist[3].name,
        clickable:true,
    });

    var marker4 = new AMap.Marker({
        icon : 'images/marker_sprite.png',
        position: $scope.enterpriselist[4].position,
        map:$scope.map,
        clickable:true,
    });

    marker4.setLabel({//label默认蓝框白底左上角显示，样式className为：amap-marker-label
        offset: new AMap.Pixel(20, -2),
        content: $scope.enterpriselist[4].name,
        clickable:true,
    });

    var marker5 = new AMap.Marker({
        icon : 'images/marker_sprite.png',
        position: $scope.enterpriselist[5].position,
        map:$scope.map,
        clickable:true,
    });

    marker5.setLabel({//label默认蓝框白底左上角显示，样式className为：amap-marker-label
        offset: new AMap.Pixel(20, -2),
        content: $scope.enterpriselist[5].name,
        clickable:true,
    });

    var marker6 = new AMap.Marker({
        icon : 'images/marker_sprite.png',
        position: $scope.enterpriselist[6].position,
        map:$scope.map,
        clickable:true,
    });

    marker6.setLabel({//label默认蓝框白底左上角显示，样式className为：amap-marker-label
        offset: new AMap.Pixel(20, -2),
        content: $scope.enterpriselist[6].name,
        clickable:true,
    });

    var marker7 = new AMap.Marker({
        icon : 'images/marker_sprite.png',
        position: $scope.enterpriselist[7].position,
        map:$scope.map,
        clickable:true,
    });

    marker7.setLabel({//label默认蓝框白底左上角显示，样式className为：amap-marker-label
        offset: new AMap.Pixel(20, -2),
        content: $scope.enterpriselist[7].name,
        clickable:true,
    });

    var marker8 = new AMap.Marker({
        icon : 'images/marker_sprite.png',
        position: $scope.enterpriselist[8].position,
        map:$scope.map,
        clickable:true,
    });

    marker8.setLabel({//label默认蓝框白底左上角显示，样式className为：amap-marker-label
        offset: new AMap.Pixel(20, -2),
        content: $scope.enterpriselist[8].name,
        clickable:true,
    });

    var marker9 = new AMap.Marker({
        icon : 'images/marker_sprite.png',
        position: $scope.enterpriselist[9].position,
        map:$scope.map,
        clickable:true,
    });

    marker9.setLabel({//label默认蓝框白底左上角显示，样式className为：amap-marker-label
        offset: new AMap.Pixel(20, -2),
        content: $scope.enterpriselist[9].name,
        clickable:true,
    });

    var marker10 = new AMap.Marker({
        icon : 'images/marker_sprite.png',
        position: $scope.enterpriselist[10].position,
        map:$scope.map,
        clickable:true,
    });

    marker10.setLabel({//label默认蓝框白底左上角显示，样式className为：amap-marker-label
        offset: new AMap.Pixel(20, -2),
        content: $scope.enterpriselist[10].name,
        clickable:true,
    });

    //地图标记--企业数据详情
    var marker1OnClick = function(){
        $scope.$apply(function(){
          $scope.changeIndustry(5001);
        });
    };
    var marker2OnClick = function(){
        $scope.$apply(function(){
          $scope.changeIndustry(5002);
        });
    };
    var marker3OnClick = function(){
        $scope.$apply(function(){
          $scope.changeIndustry(5003);
        });
    };
    var marker4OnClick = function(){
        $scope.$apply(function(){
          $scope.changeIndustry(5004);
        });
    };
    var marker5OnClick = function(){
        $scope.$apply(function(){
          $scope.changeIndustry(5005);
        });
    };
    var marker6OnClick = function(){
        $scope.$apply(function(){
          $scope.changeIndustry(5006);
        });
    };
    var marker7OnClick = function(){
        $scope.$apply(function(){
          $scope.changeIndustry(5007);
        });
    };
    var marker8OnClick = function(){
        $scope.$apply(function(){
          $scope.changeIndustry(5008);
        });
    };
    var marker9OnClick = function(){
        $scope.$apply(function(){
          $scope.changeIndustry(5009);
        });
    };
    var marker10OnClick = function(){
        $scope.$apply(function(){
          $scope.changeIndustry(5010);
        });
    };
    //将上述函数添加到监听事件
    AMap.event.addListener(marker1, 'click', marker1OnClick);
    AMap.event.addListener(marker2, 'click', marker2OnClick);
    AMap.event.addListener(marker3, 'click', marker3OnClick);
    AMap.event.addListener(marker4, 'click', marker4OnClick);
    AMap.event.addListener(marker5, 'click', marker5OnClick);
    AMap.event.addListener(marker6, 'click', marker6OnClick);
    AMap.event.addListener(marker7, 'click', marker7OnClick);
    AMap.event.addListener(marker8, 'click', marker8OnClick);
    AMap.event.addListener(marker9, 'click', marker9OnClick);
    AMap.event.addListener(marker10, 'click', marker10OnClick);


    //搜索框选择企业
    $scope.chooseEnterprise = function(param){
      switch(param){
        case 5001:{
          $scope.map.setZoomAndCenter(16, $scope.enterpriselist[1].position);
          $scope.changeIndustry(5001);
        };break;
        case 5002:{
          $scope.map.setZoomAndCenter(16, $scope.enterpriselist[2].position);
          $scope.changeIndustry(5002);
        };break;
        case 5003:{
          $scope.map.setZoomAndCenter(16, $scope.enterpriselist[3].position);
          $scope.changeIndustry(5003);
        };break;
        case 5004:{
          $scope.map.setZoomAndCenter(16, $scope.enterpriselist[4].position);
          $scope.changeIndustry(5004);
        };break;
        case 5005:{
          $scope.map.setZoomAndCenter(16, $scope.enterpriselist[5].position);
          $scope.changeIndustry(5005);
        };break;
        case 5006:{
          $scope.map.setZoomAndCenter(16, $scope.enterpriselist[6].position);
          $scope.changeIndustry(5006);
        };break;
        case 5007:{
          $scope.map.setZoomAndCenter(16, $scope.enterpriselist[7].position);
          $scope.changeIndustry(5007);
        };break;
        case 5008:{
          $scope.map.setZoomAndCenter(16, $scope.enterpriselist[8].position);
          $scope.changeIndustry(5008);
        };break;
        case 5009:{
          $scope.map.setZoomAndCenter(16, $scope.enterpriselist[9].position);
          $scope.changeIndustry(5009);
        };break;
        case 5010:{
          $scope.map.setZoomAndCenter(16, $scope.enterpriselist[10].position);
          $scope.changeIndustry(5010);
        };break;
      }

    }
});	
}]);