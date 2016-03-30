'use strict';

app.controller('EconomyTaxCtrl', ['$scope','$stateParams','qService','forecastFactory_gdp',function($scope, $stateParams,qService,forecastFactory_gdp) {
  var year;
  
  $scope.panelyear=2015;
  $scope.vicedeviation=false;
  var promise = qService.tokenHttpGet(forecastFactory_gdp.query,{tableName:'taxForecastData',year:year});
   $scope.changeyear=function(param){
     $scope.monthselectedRange = 0;
    $scope.monthselectedRange2 = 0;
    $scope.monthselectedRange3 = 0;
    $scope.monthselectedRange4 = 0;
      year=param;
      $scope.deviation=false;
      $scope.vicedeviation=false;
      if (param==2016) {
        $scope.forecastarea=0.5;
      }else if (param==2015) {
        $scope.forecastarea=10.5;
      };
      $scope.panelyear=param;
      if (param==2016) {
      var promise = qService.tokenHttpGet(forecastFactory_gdp.query,{tableName:'taxForecastData',year:year});
       promise.then(function(rc) {
     
    // console.log(rc.data);
    //alert(rc.data);
    //$scope.forecastvalue=rc.data[0].gdpForecastValue;
    
  $scope.colorpicker = {
        options: {
            orientation: 'horizontal',
            min: 0,
            max: 100,
            range: 'min'
        }
    };
  $scope.title = $stateParams.title;
  
  $scope.deviation=false;
  $scope.forecast=false;
  $scope.changeViews=function(){
    if( $scope.monthTaxChart.options.chart.type == 'column')
    {
        $scope.monthTaxChart.options.chart.type = 'spline'
    }
    else
        $scope.monthTaxChart.options.chart.type = 'column'
   
  };
  $scope.checkdeviation=function(){
    if (year==2015) {
      $scope.vicedeviation=false;
    $scope.deviation=!$scope.deviation;
  }else if (year==2016) {
    $scope.deviation=false;
    $scope.vicedeviation=!$scope.vicedeviation;
  };
  };
  $scope.checkforecast=function(){
    $scope.forecast=!$scope.forecast;
  }
  // $scope.adjustParameter=function(){
  //   $scope.monthselectedRange = 0;
  //   $scope.monthselectedRange2 = 0;
  //   $scope.monthselectedRange3 = 0;
  //   $scope.monthselectedRange4 = 0;
  //   $scope.date2[10]=96.52;
  //   $scope.ratedate1[10]=7.2;
  // };

  $scope.deviationYear=false;
  $scope.forecastYear=false;

  $scope.changeViewsYear=function(){
    if( $scope.yearTaxChart.options.chart.type == 'column')
    {
        $scope.yearTaxChart.options.chart.type = 'spline'
    }
    else
        $scope.yearTaxChart.options.chart.type = 'column'
   
  };
  $scope.checkdeviationYear=function(){
    $scope.deviationYear=!$scope.deviationYear;
  };
  $scope.checkforecastYear=function(){
    $scope.forecastYear=!$scope.forecastYear;
  };
  // $scope.adjustParameterYear=function(){
  //   $scope.date[10] = 96.52;
  //   $scope.ratedate[10] = 7.2;
  //   $scope.date[11] = 103.43;
  //   $scope.ratedate[11] = 7.0;
  //   $scope.date[12] = 110.02;
  //   $scope.ratedate[12] = 7.2;
  //   $scope.selectedRange=0;
  //   $scope.selectedRange2=0;
  //   $scope.selectedRange3=0;
  //   $scope.selectedRange4=0;
  // };
  // $scope.selectedRange=0;
  
  // $scope.taxthisyearrealvalue=rc.data[0];
  // $scope.date=rc.data[1];
  // $scope.ratedate=rc.data[2];
  $scope.taxrealvalue=rc.data[3]
  $scope.date2=rc.data[4];
  $scope.ratedate1=rc.data[5];
  $scope.thisyearforecastvalue=rc.data[1][9];
$scope.range = function() {
        return $scope.selectedRange;
      };
      $scope.range2=function(){
        return $scope.selectedRange2;
      };
       $scope.range3=function(){
        return $scope.selectedRange3;
      };
       $scope.range4=function(){
        return $scope.selectedRange4;
      };
      $scope.monthrange=function(){
        return $scope.monthselectedRange;
      };
      $scope.monthrange2=function(){
        return $scope.monthselectedRange2;
      };
      $scope.monthrange3=function(){
        return $scope.monthselectedRange3;
      };
      $scope.monthrange4=function(){
        return $scope.monthselectedRange4;
      };
// var changedetail=function(newValue,oldValue,scope){

//   $scope.date[10]=Math.round($scope.date[10]*(1+(newValue-oldValue)/200)*100)/100;
//   $scope.date[11]=Math.round($scope.date[11]*(1+(newValue-oldValue)/200)*100)/100;
//   $scope.date[12]=Math.round($scope.date[12]*(1+(newValue-oldValue)/200)*100)/100;
//   $scope.ratedate[10]=Math.round($scope.ratedate[10]*(1+(newValue-oldValue)/200)*100)/100;
//   $scope.ratedate[11]=Math.round($scope.ratedate[11]*(1+(newValue-oldValue)/200)*100)/100;
//   $scope.ratedate[12]=Math.round($scope.ratedate[12]*(1+(newValue-oldValue)/200)*100)/100;
 
// };
// var changedetail2=function(newValue,oldValue,scope){
//   $scope.date[10]=Math.round($scope.date[10]*(1+(newValue-oldValue)/200)*100)/100;
//   $scope.date[11]=Math.round($scope.date[11]*(1+(newValue-oldValue)/200)*100)/100;
//   $scope.date[12]=Math.round($scope.date[12]*(1+(newValue-oldValue)/200)*100)/100;
//   $scope.ratedate[10]=Math.round($scope.ratedate[10]*(1+(newValue-oldValue)/200)*100)/100;
//   $scope.ratedate[11]=Math.round($scope.ratedate[11]*(1+(newValue-oldValue)/200)*100)/100;
//   $scope.ratedate[12]=Math.round($scope.ratedate[12]*(1+(newValue-oldValue)/200)*100)/100;
  
// };
// var changedetail3=function(newValue,oldValue,scope){
//   $scope.date[10]=Math.round($scope.date[10]*(1+(newValue-oldValue)/200)*100)/100;
//   $scope.date[11]=Math.round($scope.date[11]*(1+(newValue-oldValue)/200)*100)/100;
//   $scope.date[12]=Math.round($scope.date[12]*(1+(newValue-oldValue)/200)*100)/100;
//   $scope.ratedate[10]=Math.round($scope.ratedate[10]*(1+(newValue-oldValue)/200)*100)/100;
//   $scope.ratedate[11]=Math.round($scope.ratedate[11]*(1+(newValue-oldValue)/200)*100)/100;
//   $scope.ratedate[12]=Math.round($scope.ratedate[12]*(1+(newValue-oldValue)/200)*100)/100;
 

// };
// var changedetail4=function(newValue,oldValue,scope){
//   $scope.date[10]=Math.round($scope.date[10]*(1+(newValue-oldValue)/200)*100)/100;
//   $scope.date[11]=Math.round($scope.date[11]*(1+(newValue-oldValue)/200)*100)/100;
//   $scope.date[12]=Math.round($scope.date[12]*(1+(newValue-oldValue)/200)*100)/100;
//   $scope.ratedate[10]=Math.round($scope.ratedate[10]*(1+(newValue-oldValue)/200)*100)/100;
//   $scope.ratedate[11]=Math.round($scope.ratedate[11]*(1+(newValue-oldValue)/200)*100)/100;
//   $scope.ratedate[12]=Math.round($scope.ratedate[12]*(1+(newValue-oldValue)/200)*100)/100;
 
// };
var changemonthdetail=function(newValue,oldValue,scope){
  if (year==2016) {
  $scope.date2[10]=Math.round($scope.date2[10]*(1+(newValue-oldValue)/400)*100)/100;
  $scope.date2[9]=Math.round($scope.date2[9]*(1+(newValue-oldValue)/400)*100)/100;
  $scope.date2[8]=Math.round($scope.date2[8]*(1+(newValue-oldValue)/400)*100)/100;
  $scope.date2[7]=Math.round($scope.date2[7]*(1+(newValue-oldValue)/400)*100)/100;
  $scope.date2[6]=Math.round($scope.date2[6]*(1+(newValue-oldValue)/400)*100)/100;
  $scope.date2[5]=Math.round($scope.date2[5]*(1+(newValue-oldValue)/400)*100)/100;
  $scope.date2[4]=Math.round($scope.date2[4]*(1+(newValue-oldValue)/400)*100)/100;
  $scope.date2[3]=Math.round($scope.date2[3]*(1+(newValue-oldValue)/400)*100)/100;
  $scope.date2[2]=Math.round($scope.date2[2]*(1+(newValue-oldValue)/400)*100)/100;
  $scope.date2[1]=Math.round($scope.date2[1]*(1+(newValue-oldValue)/400)*100)/100;
  $scope.ratedate1[10]=Math.round($scope.ratedate1[10]*(1+(newValue-oldValue)/400)*100)/100;
  $scope.ratedate1[9]=Math.round($scope.ratedate1[9]*(1+(newValue-oldValue)/400)*100)/100;
  $scope.ratedate1[8]=Math.round($scope.ratedate1[8]*(1+(newValue-oldValue)/400)*100)/100;
  $scope.ratedate1[7]=Math.round($scope.ratedate1[7]*(1+(newValue-oldValue)/400)*100)/100;
  $scope.ratedate1[6]=Math.round($scope.ratedate1[6]*(1+(newValue-oldValue)/400)*100)/100;
  $scope.ratedate1[5]=Math.round($scope.ratedate1[5]*(1+(newValue-oldValue)/400)*100)/100;
  $scope.ratedate1[4]=Math.round($scope.ratedate1[4]*(1+(newValue-oldValue)/400)*100)/100;
  $scope.ratedate1[3]=Math.round($scope.ratedate1[3]*(1+(newValue-oldValue)/400)*100)/100;
  $scope.ratedate1[2]=Math.round($scope.ratedate1[2]*(1+(newValue-oldValue)/400)*100)/100;
  $scope.ratedate1[1]=Math.round($scope.ratedate1[1]*(1+(newValue-oldValue)/400)*100)/100;
  };


 

};
var changemonthdetail2=function(newValue,oldValue,scope){
  if (year==2016) {
   $scope.date2[10]=Math.round($scope.date2[10]*(1+(newValue-oldValue)/400)*100)/100;
  $scope.date2[9]=Math.round($scope.date2[9]*(1+(newValue-oldValue)/400)*100)/100;
  $scope.date2[8]=Math.round($scope.date2[8]*(1+(newValue-oldValue)/400)*100)/100;
  $scope.date2[7]=Math.round($scope.date2[7]*(1+(newValue-oldValue)/400)*100)/100;
  $scope.date2[6]=Math.round($scope.date2[6]*(1+(newValue-oldValue)/400)*100)/100;
  $scope.date2[5]=Math.round($scope.date2[5]*(1+(newValue-oldValue)/400)*100)/100;
  $scope.date2[4]=Math.round($scope.date2[4]*(1+(newValue-oldValue)/400)*100)/100;
  $scope.date2[3]=Math.round($scope.date2[3]*(1+(newValue-oldValue)/400)*100)/100;
  $scope.date2[2]=Math.round($scope.date2[2]*(1+(newValue-oldValue)/400)*100)/100;
  $scope.date2[1]=Math.round($scope.date2[1]*(1+(newValue-oldValue)/400)*100)/100;
  $scope.ratedate1[10]=Math.round($scope.ratedate1[10]*(1+(newValue-oldValue)/400)*100)/100;
  $scope.ratedate1[9]=Math.round($scope.ratedate1[9]*(1+(newValue-oldValue)/400)*100)/100;
  $scope.ratedate1[8]=Math.round($scope.ratedate1[8]*(1+(newValue-oldValue)/400)*100)/100;
  $scope.ratedate1[7]=Math.round($scope.ratedate1[7]*(1+(newValue-oldValue)/400)*100)/100;
  $scope.ratedate1[6]=Math.round($scope.ratedate1[6]*(1+(newValue-oldValue)/400)*100)/100;
  $scope.ratedate1[5]=Math.round($scope.ratedate1[5]*(1+(newValue-oldValue)/400)*100)/100;
  $scope.ratedate1[4]=Math.round($scope.ratedate1[4]*(1+(newValue-oldValue)/400)*100)/100;
  $scope.ratedate1[3]=Math.round($scope.ratedate1[3]*(1+(newValue-oldValue)/400)*100)/100;
  $scope.ratedate1[2]=Math.round($scope.ratedate1[2]*(1+(newValue-oldValue)/400)*100)/100;
  $scope.ratedate1[1]=Math.round($scope.ratedate1[1]*(1+(newValue-oldValue)/400)*100)/100;
  };

};
var changemonthdetail3=function(newValue,oldValue,scope){
  if (year==2016) {
  $scope.date2[10]=Math.round($scope.date2[10]*(1+(newValue-oldValue)/400)*100)/100;
  $scope.date2[9]=Math.round($scope.date2[9]*(1+(newValue-oldValue)/400)*100)/100;
  $scope.date2[8]=Math.round($scope.date2[8]*(1+(newValue-oldValue)/400)*100)/100;
  $scope.date2[7]=Math.round($scope.date2[7]*(1+(newValue-oldValue)/400)*100)/100;
  $scope.date2[6]=Math.round($scope.date2[6]*(1+(newValue-oldValue)/400)*100)/100;
  $scope.date2[5]=Math.round($scope.date2[5]*(1+(newValue-oldValue)/400)*100)/100;
  $scope.date2[4]=Math.round($scope.date2[4]*(1+(newValue-oldValue)/400)*100)/100;
  $scope.date2[3]=Math.round($scope.date2[3]*(1+(newValue-oldValue)/400)*100)/100;
  $scope.date2[2]=Math.round($scope.date2[2]*(1+(newValue-oldValue)/400)*100)/100;
  $scope.date2[1]=Math.round($scope.date2[1]*(1+(newValue-oldValue)/400)*100)/100;
  $scope.ratedate1[10]=Math.round($scope.ratedate1[10]*(1+(newValue-oldValue)/400)*100)/100;
  $scope.ratedate1[9]=Math.round($scope.ratedate1[9]*(1+(newValue-oldValue)/400)*100)/100;
  $scope.ratedate1[8]=Math.round($scope.ratedate1[8]*(1+(newValue-oldValue)/400)*100)/100;
  $scope.ratedate1[7]=Math.round($scope.ratedate1[7]*(1+(newValue-oldValue)/400)*100)/100;
  $scope.ratedate1[6]=Math.round($scope.ratedate1[6]*(1+(newValue-oldValue)/400)*100)/100;
  $scope.ratedate1[5]=Math.round($scope.ratedate1[5]*(1+(newValue-oldValue)/400)*100)/100;
  $scope.ratedate1[4]=Math.round($scope.ratedate1[4]*(1+(newValue-oldValue)/400)*100)/100;
  $scope.ratedate1[3]=Math.round($scope.ratedate1[3]*(1+(newValue-oldValue)/400)*100)/100;
  $scope.ratedate1[2]=Math.round($scope.ratedate1[2]*(1+(newValue-oldValue)/400)*100)/100;
  $scope.ratedate1[1]=Math.round($scope.ratedate1[1]*(1+(newValue-oldValue)/400)*100)/100;
  };
};
var changemonthdetail4=function(newValue,oldValue,scope){
  if (year==2016) {
  $scope.date2[10]=Math.round($scope.date2[10]*(1+(newValue-oldValue)/400)*100)/100;
  $scope.date2[9]=Math.round($scope.date2[9]*(1+(newValue-oldValue)/400)*100)/100;
  $scope.date2[8]=Math.round($scope.date2[8]*(1+(newValue-oldValue)/400)*100)/100;
  $scope.date2[7]=Math.round($scope.date2[7]*(1+(newValue-oldValue)/400)*100)/100;
  $scope.date2[6]=Math.round($scope.date2[6]*(1+(newValue-oldValue)/400)*100)/100;
  $scope.date2[5]=Math.round($scope.date2[5]*(1+(newValue-oldValue)/400)*100)/100;
  $scope.date2[4]=Math.round($scope.date2[4]*(1+(newValue-oldValue)/400)*100)/100;
  $scope.date2[3]=Math.round($scope.date2[3]*(1+(newValue-oldValue)/400)*100)/100;
  $scope.date2[2]=Math.round($scope.date2[2]*(1+(newValue-oldValue)/400)*100)/100;
  $scope.date2[1]=Math.round($scope.date2[1]*(1+(newValue-oldValue)/400)*100)/100;
  $scope.ratedate1[10]=Math.round($scope.ratedate1[10]*(1+(newValue-oldValue)/400)*100)/100;
  $scope.ratedate1[9]=Math.round($scope.ratedate1[9]*(1+(newValue-oldValue)/400)*100)/100;
  $scope.ratedate1[8]=Math.round($scope.ratedate1[8]*(1+(newValue-oldValue)/400)*100)/100;
  $scope.ratedate1[7]=Math.round($scope.ratedate1[7]*(1+(newValue-oldValue)/400)*100)/100;
  $scope.ratedate1[6]=Math.round($scope.ratedate1[6]*(1+(newValue-oldValue)/400)*100)/100;
  $scope.ratedate1[5]=Math.round($scope.ratedate1[5]*(1+(newValue-oldValue)/400)*100)/100;
  $scope.ratedate1[4]=Math.round($scope.ratedate1[4]*(1+(newValue-oldValue)/400)*100)/100;
  $scope.ratedate1[3]=Math.round($scope.ratedate1[3]*(1+(newValue-oldValue)/400)*100)/100;
  $scope.ratedate1[2]=Math.round($scope.ratedate1[2]*(1+(newValue-oldValue)/400)*100)/100;
  $scope.ratedate1[1]=Math.round($scope.ratedate1[1]*(1+(newValue-oldValue)/400)*100)/100;
 };
};
// $scope.$watch($scope.range,changedetail);
// $scope.$watch($scope.range2,changedetail2);
// $scope.$watch($scope.range3,changedetail3);
// $scope.$watch($scope.range4,changedetail4);
$scope.$watch($scope.monthrange,changemonthdetail);
$scope.$watch($scope.monthrange2,changemonthdetail2);
$scope.$watch($scope.monthrange3,changemonthdetail3);
$scope.$watch($scope.monthrange4,changemonthdetail4);
  $scope.monthArray = ['2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'];
  // $scope.yearArray = rc.data[6];
  $scope.monthTaxChart = {
    options: {
      chart: {
        type:'column'
      },
    },
    credits:{
        enabled:false,
     },
    title: {
      text:'本年月度税收收入预测',
      style:{
        fontWeight:'bold'
      }
    },

    xAxis: {
      categories: $scope.monthArray,
        plotBands:[{
            from: $scope.forecastarea,
            to:10.5,
            color:'rgba(68, 170, 213, .2)',
            label: {
                    text: '预测区',
                    verticalAlign: 'top',
                    style: {
                        fontSize: '12px',
                        fontWeight: 600
                    }
                   
                }
            }]
    },
    yAxis: 
    [{
      min: 0,
      title: {text: '税收收入（亿元）'},
       plotLines:[{
            color:'red',
            dashStyle:'DashDot',
            value:100.64,
            width:2,
            label:{
                text:'本年度税收目标',
                align:'left',
                x:10,
                 style: {
                        fontSize: '8px',
                        fontWeight: 200
                    }
            }
            }]
    },
    {
            title: {
                text: '同比增长率'
            },
            labels: {
                format: '{value} %',
                style: {
                    color: Highcharts.getOptions().colors[0]
                }
        },
        opposite:true}],
    tooltip: 
    {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
          '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
      footerFormat: '</table>',
      shared: true,
      useHTML: true
    },
    plotOptions: {
        column: {
          pointPadding: 0.2,
          borderWidth: 0
        }
    },
    series: [{
            color:'#7CB5EC',
            name: '真实值',
            data: $scope.taxrealvalue

        }, {
            color:'#434348',
            name: '预测值',
            data: $scope.date2

        },
        {   
            color:'#90ED7D',
            yAxis: 1,
            type:'spline',
            name: '同比增长率',
            data: $scope.ratedate1
        }]   
  };
   
 
    });
} else if(param==2015){
  var promise = qService.tokenHttpGet(forecastFactory_gdp.query,{tableName:'taxForecastData',year:year});
       promise.then(function(rc) {

    // console.log(rc.data);
    //alert(rc.data);
    //$scope.forecastvalue=rc.data[0].gdpForecastValue;
  
  $scope.colorpicker = {
        options: {
            orientation: 'horizontal',
            min: 0,
            max: 100,
            range: 'min'
        }
    };
  $scope.title = $stateParams.title;
  
  $scope.deviation=false;
  $scope.forecast=false;
  $scope.changeViews=function(){
    if( $scope.monthTaxChart.options.chart.type == 'column')
    {
        $scope.monthTaxChart.options.chart.type = 'spline'
    }
    else
        $scope.monthTaxChart.options.chart.type = 'column'
   
  };
  $scope.checkdeviation=function(){
    $scope.deviation=!$scope.deviation;
  };
  $scope.checkforecast=function(){
    $scope.forecast=!$scope.forecast;
  }
  // $scope.adjustParameter=function(){
  //   $scope.monthselectedRange = 0;
  //   $scope.monthselectedRange2 = 0;
  //   $scope.monthselectedRange3 = 0;
  //   $scope.monthselectedRange4 = 0;
  //   $scope.date2[10]=96.52;
  //   $scope.ratedate1[10]=7.2;
  // };

  $scope.deviationYear=false;
  $scope.forecastYear=false;

  $scope.changeViewsYear=function(){
    if( $scope.yearTaxChart.options.chart.type == 'column')
    {
        $scope.yearTaxChart.options.chart.type = 'spline'
    }
    else
        $scope.yearTaxChart.options.chart.type = 'column'
   
  };
  $scope.checkdeviationYear=function(){
    $scope.deviationYear=!$scope.deviationYear;
  };
  $scope.checkforecastYear=function(){
    $scope.forecastYear=!$scope.forecastYear;
  };
  // $scope.adjustParameterYear=function(){
  //   $scope.date[10] = 96.52;
  //   $scope.ratedate[10] = 7.2;
  //   $scope.date[11] = 103.43;
  //   $scope.ratedate[11] = 7.0;
  //   $scope.date[12] = 110.02;
  //   $scope.ratedate[12] = 7.2;
  //   $scope.selectedRange=0;
  //   $scope.selectedRange2=0;
  //   $scope.selectedRange3=0;
  //   $scope.selectedRange4=0;
  // };
  // $scope.selectedRange=0;
  
  // $scope.taxthisyearrealvalue=rc.data[0];
  // $scope.date=rc.data[1];
  // $scope.ratedate=rc.data[2];
  $scope.taxrealvalue=rc.data[3]
  $scope.date2=rc.data[4];
  $scope.ratedate1=rc.data[5];
  $scope.thisyearforecastvalue=rc.data[1][9];
$scope.range = function() {
        return $scope.selectedRange;
      };
      $scope.range2=function(){
        return $scope.selectedRange2;
      };
       $scope.range3=function(){
        return $scope.selectedRange3;
      };
       $scope.range4=function(){
        return $scope.selectedRange4;
      };
      $scope.monthrange=function(){
        return $scope.monthselectedRange;
      };
      $scope.monthrange2=function(){
        return $scope.monthselectedRange2;
      };
      $scope.monthrange3=function(){
        return $scope.monthselectedRange3;
      };
      $scope.monthrange4=function(){
        return $scope.monthselectedRange4;
      };
// var changedetail=function(newValue,oldValue,scope){

//   $scope.date[10]=Math.round($scope.date[10]*(1+(newValue-oldValue)/200)*100)/100;
//   $scope.date[11]=Math.round($scope.date[11]*(1+(newValue-oldValue)/200)*100)/100;
//   $scope.date[12]=Math.round($scope.date[12]*(1+(newValue-oldValue)/200)*100)/100;
//   $scope.ratedate[10]=Math.round($scope.ratedate[10]*(1+(newValue-oldValue)/200)*100)/100;
//   $scope.ratedate[11]=Math.round($scope.ratedate[11]*(1+(newValue-oldValue)/200)*100)/100;
//   $scope.ratedate[12]=Math.round($scope.ratedate[12]*(1+(newValue-oldValue)/200)*100)/100;
 
// };
// var changedetail2=function(newValue,oldValue,scope){
//   $scope.date[10]=Math.round($scope.date[10]*(1+(newValue-oldValue)/200)*100)/100;
//   $scope.date[11]=Math.round($scope.date[11]*(1+(newValue-oldValue)/200)*100)/100;
//   $scope.date[12]=Math.round($scope.date[12]*(1+(newValue-oldValue)/200)*100)/100;
//   $scope.ratedate[10]=Math.round($scope.ratedate[10]*(1+(newValue-oldValue)/200)*100)/100;
//   $scope.ratedate[11]=Math.round($scope.ratedate[11]*(1+(newValue-oldValue)/200)*100)/100;
//   $scope.ratedate[12]=Math.round($scope.ratedate[12]*(1+(newValue-oldValue)/200)*100)/100;
  
// };
// var changedetail3=function(newValue,oldValue,scope){
//   $scope.date[10]=Math.round($scope.date[10]*(1+(newValue-oldValue)/200)*100)/100;
//   $scope.date[11]=Math.round($scope.date[11]*(1+(newValue-oldValue)/200)*100)/100;
//   $scope.date[12]=Math.round($scope.date[12]*(1+(newValue-oldValue)/200)*100)/100;
//   $scope.ratedate[10]=Math.round($scope.ratedate[10]*(1+(newValue-oldValue)/200)*100)/100;
//   $scope.ratedate[11]=Math.round($scope.ratedate[11]*(1+(newValue-oldValue)/200)*100)/100;
//   $scope.ratedate[12]=Math.round($scope.ratedate[12]*(1+(newValue-oldValue)/200)*100)/100;
 

// };
// var changedetail4=function(newValue,oldValue,scope){
//   $scope.date[10]=Math.round($scope.date[10]*(1+(newValue-oldValue)/200)*100)/100;
//   $scope.date[11]=Math.round($scope.date[11]*(1+(newValue-oldValue)/200)*100)/100;
//   $scope.date[12]=Math.round($scope.date[12]*(1+(newValue-oldValue)/200)*100)/100;
//   $scope.ratedate[10]=Math.round($scope.ratedate[10]*(1+(newValue-oldValue)/200)*100)/100;
//   $scope.ratedate[11]=Math.round($scope.ratedate[11]*(1+(newValue-oldValue)/200)*100)/100;
//   $scope.ratedate[12]=Math.round($scope.ratedate[12]*(1+(newValue-oldValue)/200)*100)/100;
 
// };
// var changemonthdetail=function(newValue,oldValue,scope){};
// var changemonthdetail2=function(newValue,oldValue,scope){};
// var changemonthdetail3=function(newValue,oldValue,scope){};
// var changemonthdetail4=function(newValue,oldValue,scope){};
// // $scope.$watch($scope.range,changedetail);
// // $scope.$watch($scope.range2,changedetail2);
// // $scope.$watch($scope.range3,changedetail3);
// // $scope.$watch($scope.range4,changedetail4);
// $scope.$watch($scope.monthrange,newchangemonthdetail);
// $scope.$watch($scope.monthrange2,newchangemonthdetail2);
// $scope.$watch($scope.monthrange3,newchangemonthdetail3);
// $scope.$watch($scope.monthrange4,newchangemonthdetail4);
  $scope.monthArray = ['2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'];
  // $scope.yearArray = rc.data[6];
  $scope.monthTaxChart = {
    options: {
      chart: {
        type:'column'
      },
    },
    credits:{
        enabled:false,
     },
    title: {
      text:'本年月度税收收入预测',
      style:{
        fontWeight:'bold'
      }
    },

    xAxis: {
      categories: $scope.monthArray,
        plotBands:[{
            from: $scope.forecastarea,
            to:10.5,
            color:'rgba(68, 170, 213, .2)',
            label: {
                    text: '预测区',
                    verticalAlign: 'top',
                    style: {
                        fontSize: '12px',
                        fontWeight: 600
                    }
                   
                }
            }]
    },
    yAxis: 
    [{
      min: 0,
      title: {text: '税收收入（亿元）'},
       plotLines:[{
            color:'red',
            dashStyle:'DashDot',
            value:94.56,
            width:2,
            label:{
                text:'本年度税收目标',
                align:'left',
                x:10,
                 style: {
                        fontSize: '8px',
                        fontWeight: 200
                    }
            }
            }]
    },
    {
            title: {
                text: '同比增长率'
            },
            labels: {
                format: '{value} %',
                style: {
                    color: Highcharts.getOptions().colors[0]
                }
        },
        opposite:true}],
    tooltip: 
    {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
          '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
      footerFormat: '</table>',
      shared: true,
      useHTML: true
    },
    plotOptions: {
        column: {
          pointPadding: 0.2,
          borderWidth: 0
        }
    },
    series: [{
            color:'#7CB5EC',
            name: '真实值',
            data: $scope.taxrealvalue

        }, {
            color:'#434348',
            name: '预测值',
            data: $scope.date2

        },
        {   
            color:'#90ED7D',
            yAxis: 1,
            type:'spline',
            name: '同比增长率',
            data: $scope.ratedate1
        }]   
  };
   
 
    });

};
   };




   // 第一次请求
    promise.then(function(rc) {

    console.log(rc.data);
    //alert(rc.data);
    //$scope.forecastvalue=rc.data[0].gdpForecastValue;
    
  $scope.colorpicker = {
        options: {
            orientation: 'horizontal',
            min: 0,
            max: 100,
            range: 'min'
        }
    };
  $scope.title = $stateParams.title;
  
  $scope.deviation=false;
  $scope.forecast=false;
  $scope.changeViews=function(){
    if( $scope.monthTaxChart.options.chart.type == 'column')
    {
        $scope.monthTaxChart.options.chart.type = 'spline'
    }
    else
        $scope.monthTaxChart.options.chart.type = 'column'
   
  };
  $scope.checkdeviation=function(){
    $scope.deviation=!$scope.deviation;
  };
  $scope.checkforecast=function(){
    $scope.forecast=!$scope.forecast;
  }








  $scope.adjustParameter=function(){
     year=$scope.yearchoose;
      var promise = qService.tokenHttpGet(forecastFactory_gdp.query,{tableName:'taxForecastData',year:year});
       promise.then(function(rc) {
// var changedetail=function(newValue,oldValue,scope){
// $scope.panelyear=2015;
//   $scope.date[10]=Math.round($scope.date[10]*(1+(newValue-oldValue)/200)*100)/100;
//   $scope.date[11]=Math.round($scope.date[11]*(1+(newValue-oldValue)/200)*100)/100;
//   $scope.date[12]=Math.round($scope.date[12]*(1+(newValue-oldValue)/200)*100)/100;
//   $scope.ratedate[10]=Math.round($scope.ratedate[10]*(1+(newValue-oldValue)/200)*100)/100;
//   $scope.ratedate[11]=Math.round($scope.ratedate[11]*(1+(newValue-oldValue)/200)*100)/100;
//   $scope.ratedate[12]=Math.round($scope.ratedate[12]*(1+(newValue-oldValue)/200)*100)/100;
 
// };
// var changedetail2=function(newValue,oldValue,scope){
//   $scope.date[10]=Math.round($scope.date[10]*(1+(newValue-oldValue)/200)*100)/100;
//   $scope.date[11]=Math.round($scope.date[11]*(1+(newValue-oldValue)/200)*100)/100;
//   $scope.date[12]=Math.round($scope.date[12]*(1+(newValue-oldValue)/200)*100)/100;
//   $scope.ratedate[10]=Math.round($scope.ratedate[10]*(1+(newValue-oldValue)/200)*100)/100;
//   $scope.ratedate[11]=Math.round($scope.ratedate[11]*(1+(newValue-oldValue)/200)*100)/100;
//   $scope.ratedate[12]=Math.round($scope.ratedate[12]*(1+(newValue-oldValue)/200)*100)/100;
  
// };
// var changedetail3=function(newValue,oldValue,scope){
//   $scope.date[10]=Math.round($scope.date[10]*(1+(newValue-oldValue)/200)*100)/100;
//   $scope.date[11]=Math.round($scope.date[11]*(1+(newValue-oldValue)/200)*100)/100;
//   $scope.date[12]=Math.round($scope.date[12]*(1+(newValue-oldValue)/200)*100)/100;
//   $scope.ratedate[10]=Math.round($scope.ratedate[10]*(1+(newValue-oldValue)/200)*100)/100;
//   $scope.ratedate[11]=Math.round($scope.ratedate[11]*(1+(newValue-oldValue)/200)*100)/100;
//   $scope.ratedate[12]=Math.round($scope.ratedate[12]*(1+(newValue-oldValue)/200)*100)/100;
 

// };
// var changedetail4=function(newValue,oldValue,scope){
//   $scope.date[10]=Math.round($scope.date[10]*(1+(newValue-oldValue)/200)*100)/100;
//   $scope.date[11]=Math.round($scope.date[11]*(1+(newValue-oldValue)/200)*100)/100;
//   $scope.date[12]=Math.round($scope.date[12]*(1+(newValue-oldValue)/200)*100)/100;
//   $scope.ratedate[10]=Math.round($scope.ratedate[10]*(1+(newValue-oldValue)/200)*100)/100;
//   $scope.ratedate[11]=Math.round($scope.ratedate[11]*(1+(newValue-oldValue)/200)*100)/100;
//   $scope.ratedate[12]=Math.round($scope.ratedate[12]*(1+(newValue-oldValue)/200)*100)/100;
 
// };
var changemonthdetail=function(newValue,oldValue,scope){
  $scope.date2[10]=Math.round($scope.date2[10]*(1+(newValue-oldValue)/200)*100)/100;
  $scope.ratedate1[10]=Math.round($scope.ratedate1[10]*(1+(newValue-oldValue)/200)*100)/100;
 

};
var changemonthdetail2=function(newValue,oldValue,scope){
  $scope.date2[10]=Math.round($scope.date2[10]*(1+(newValue-oldValue)/200)*100)/100;
  $scope.ratedate1[10]=Math.round($scope.ratedate1[10]*(1+(newValue-oldValue)/200)*100)/100;

  

};
var changemonthdetail3=function(newValue,oldValue,scope){
  $scope.date2[10]=Math.round($scope.date2[10]*(1+(newValue-oldValue)/200)*100)/100;
  $scope.ratedate1[10]=Math.round($scope.ratedate1[10]*(1+(newValue-oldValue)/200)*100)/100;
 
};
var changemonthdetail4=function(newValue,oldValue,scope){
  $scope.date2[10]=Math.round($scope.date2[10]*(1+(newValue-oldValue)/200)*100)/100;
  $scope.ratedate1[10]=Math.round($scope.ratedate1[10]*(1+(newValue-oldValue)/200)*100)/100;
 
};
// $scope.$watch($scope.range,changedetail);
// $scope.$watch($scope.range2,changedetail2);
// $scope.$watch($scope.range3,changedetail3);
// $scope.$watch($scope.range4,changedetail4);
// $scope.$watch($scope.monthrange,changemonthdetail);
// $scope.$watch($scope.monthrange2,changemonthdetail2);
// $scope.$watch($scope.monthrange3,changemonthdetail3);
// $scope.$watch($scope.monthrange4,changemonthdetail4);
    
    //alert(rc.data);
    //$scope.forecastvalue=rc.data[0].gdpForecastValue;
    
  $scope.colorpicker = {
        options: {
            orientation: 'horizontal',
            min: 0,
            max: 100,
            range: 'min'
        }
    };
  $scope.title = $stateParams.title;
  
  $scope.deviation=false;
  $scope.forecast=false;
  $scope.changeViews=function(){
    if( $scope.monthTaxChart.options.chart.type == 'column')
    {
        $scope.monthTaxChart.options.chart.type = 'spline'
    }
    else
        $scope.monthTaxChart.options.chart.type = 'column'
   
  };
  $scope.checkdeviation=function(){
    $scope.deviation=!$scope.deviation;
  };
  $scope.checkforecast=function(){
    $scope.forecast=!$scope.forecast;
  }
  // $scope.adjustParameter=function(){
  //   $scope.monthselectedRange = 0;
  //   $scope.monthselectedRange2 = 0;
  //   $scope.monthselectedRange3 = 0;
  //   $scope.monthselectedRange4 = 0;
  //   $scope.date2[10]=96.52;
  //   $scope.ratedate1[10]=7.2;
  // }

  $scope.deviationYear=false;
  $scope.forecastYear=false;

  $scope.changeViewsYear=function(){
    if( $scope.yearTaxChart.options.chart.type == 'column')
    {
        $scope.yearTaxChart.options.chart.type = 'spline'
    }
    else
        $scope.yearTaxChart.options.chart.type = 'column'
   
  };
  $scope.checkdeviationYear=function(){
    $scope.deviationYear=!$scope.deviationYear;
  };
  $scope.checkforecastYear=function(){
    $scope.forecastYear=!$scope.forecastYear;
  };
  // $scope.taxthisyearrealvalue=rc.data[0];
  // $scope.date=rc.data[1];
  // $scope.ratedate=rc.data[2];
  $scope.taxrealvalue=rc.data[3]
  $scope.date2=rc.data[4];
  $scope.ratedate1=rc.data[5];
  $scope.thisyearforecastvalue=rc.data[1][9];


 $scope.monthArray = ['2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'];
  // $scope.yearArray = rc.data[6];
  //  $scope.yearTaxChart = {
  //   options: {
  //     chart: {
  //       type:'column'
  //     },
  //   },
  //   credits:{
  //       enabled:false,
  //    },
  //   title: {
  //     text:'年度税收收入预测',
  //     style:{
  //       fontWeight:'bold'
  //     }
  //   },

  //   xAxis: {
  //     categories: $scope.yearArray,
  //       plotBands:[{
  //           from: 9.5+(2015-year),
  //           to:12.5,
  //           color:'rgba(68, 170, 213, .2)',
  //           label: {
  //                   text: '预测区',
  //                   verticalAlign: 'top',
  //                   style: {
  //                       fontSize: '12px',
  //                       fontWeight: 600
  //                   }
                   
  //               }
  //           }]

  //   },
  //   yAxis: 
  //   [{
  //     min: 0,
  //     title: {
  //       text: '税收收入（亿元）'
  //     },
  //      plotLines:[{
  //           color:'red',
  //           dashStyle:'DashDot',
  //           value:95.62,
  //           width:2,
  //           label:{
  //               text:'本年度税收目标',
  //               align:'left',
  //               x:10,
  //                style: {
  //                       fontSize: '8px',
  //                       fontWeight: 200
  //                   }
  //           }
  //           }]

  //   },
  //   {
  //           title: {
  //               text: '同比增长率'
  //           },
  //           labels: {
  //               format: '{value} %',
  //               style: {
  //                   color: Highcharts.getOptions().colors[0]
  //               }
  //       },
  //       opposite:true}],
  //   tooltip: 
  //   {

  //     headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
  //     pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
  //         '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
  //     footerFormat: '</table>',
  //     shared: true,
  //     useHTML: true
  //   },
  //   plotOptions: {
  //       column: {
  //         pointPadding: 0.2,
  //         borderWidth: 0
  //       }
  //   },
  //   series: [{
  //           color:'#7CB5EC',
  //           name: '真实值',
  //           data: $scope.taxthisyearrealvalue

  //       }, {
  //           color:'#434348',
  //           name: '预测值',
  //           data: $scope.date

  //       },
  //        {   
  //           color:'#90ED7D',
  //           yAxis: 1,
  //           type:'spline',
  //           name: '同比增长率',
  //           data: $scope.ratedate
  //       }]   
  // };
  $scope.monthTaxChart = {
    options: {
      chart: {
        type:'column'
      },
    },
    credits:{
        enabled:false,
     },
    title: {
      text:'本年月度税收收入预测',
      style:{
        fontWeight:'bold'
      }
    },

    xAxis: {
      categories: $scope.monthArray,
        plotBands:[{
            from: 10.5,
            to:10.5,
            color:'rgba(68, 170, 213, .2)',
            label: {
                    text: '预测区',
                    verticalAlign: 'top',
                    style: {
                        fontSize: '12px',
                        fontWeight: 600
                    }
                   
                }
            }]
    },
    yAxis: 
    [{
      min: 0,
      title: {text: '税收收入（亿元）'},
       plotLines:[{
            color:'red',
            dashStyle:'DashDot',
            value:94.56,
            width:2,
            label:{
                text:'本年度税收目标',
                align:'left',
                x:10,
                 style: {
                        fontSize: '8px',
                        fontWeight: 200
                    }
            }
            }]
    },
    {
            title: {
                text: '同比增长率'
            },
            labels: {
                format: '{value} %',
                style: {
                    color: Highcharts.getOptions().colors[0]
                }
        },
        opposite:true}],
    tooltip: 
    {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
          '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
      footerFormat: '</table>',
      shared: true,
      useHTML: true
    },
    plotOptions: {
        column: {
          pointPadding: 0.2,
          borderWidth: 0
        }
    },
    series: [{
            color:'#7CB5EC',
            name: '真实值',
            data: $scope.taxrealvalue

        }, {
            color:'#434348',
            name: '预测值',
            data: $scope.date2

        },
        {   
            color:'#90ED7D',
            yAxis: 1,
            type:'spline',
            name: '同比增长率',
            data: $scope.ratedate1
        }]   
  };

    });
    // $scope.selectedRange=0;
    // $scope.selectedRange2=0;
    // $scope.selectedRange3=0;
    // $scope.selectedRange4=0;
    $scope.monthselectedRange = 0;
    $scope.monthselectedRange2 = 0;
    $scope.monthselectedRange3 = 0;
    $scope.monthselectedRange4 = 0;
  };

  $scope.deviationYear=false;
  $scope.forecastYear=false;

  $scope.changeViewsYear=function(){
    if( $scope.yearTaxChart.options.chart.type == 'column')
    {
        $scope.yearTaxChart.options.chart.type = 'spline'
    }
    else
        $scope.yearTaxChart.options.chart.type = 'column'
   
  };
  $scope.checkdeviationYear=function(){
    $scope.deviationYear=!$scope.deviationYear;
  };
  $scope.checkforecastYear=function(){
    $scope.forecastYear=!$scope.forecastYear;
  };











  $scope.adjustParameterYear=function(){
    
      year=$scope.yearchoose;
      var promise = qService.tokenHttpGet(forecastFactory_gdp.query,{tableName:'taxForecastData',year:year});
       promise.then(function(rc) {
var changedetail=function(newValue,oldValue,scope){

  $scope.date[10]=Math.round($scope.date[10]*(1+(newValue-oldValue)/500)*100)/100;
  $scope.date[11]=Math.round($scope.date[11]*(1+(newValue-oldValue)/500)*100)/100;
  $scope.date[12]=Math.round($scope.date[12]*(1+(newValue-oldValue)/500)*100)/100;
  $scope.ratedate[10]=Math.round($scope.ratedate[10]*(1+(newValue-oldValue)/500)*100)/100;
  $scope.ratedate[11]=Math.round($scope.ratedate[11]*(1+(newValue-oldValue)/500)*100)/100;
  $scope.ratedate[12]=Math.round($scope.ratedate[12]*(1+(newValue-oldValue)/500)*100)/100;
 
};
var changedetail2=function(newValue,oldValue,scope){
  $scope.date[10]=Math.round($scope.date[10]*(1+(newValue-oldValue)/500)*100)/100;
  $scope.date[11]=Math.round($scope.date[11]*(1+(newValue-oldValue)/500)*100)/100;
  $scope.date[12]=Math.round($scope.date[12]*(1+(newValue-oldValue)/500)*100)/100;
  $scope.ratedate[10]=Math.round($scope.ratedate[10]*(1+(newValue-oldValue)/500)*100)/100;
  $scope.ratedate[11]=Math.round($scope.ratedate[11]*(1+(newValue-oldValue)/500)*100)/100;
  $scope.ratedate[12]=Math.round($scope.ratedate[12]*(1+(newValue-oldValue)/500)*100)/100;
  
};
var changedetail3=function(newValue,oldValue,scope){
  $scope.date[10]=Math.round($scope.date[10]*(1+(newValue-oldValue)/500)*100)/100;
  $scope.date[11]=Math.round($scope.date[11]*(1+(newValue-oldValue)/500)*100)/100;
  $scope.date[12]=Math.round($scope.date[12]*(1+(newValue-oldValue)/500)*100)/100;
  $scope.ratedate[10]=Math.round($scope.ratedate[10]*(1+(newValue-oldValue)/500)*100)/100;
  $scope.ratedate[11]=Math.round($scope.ratedate[11]*(1+(newValue-oldValue)/500)*100)/100;
  $scope.ratedate[12]=Math.round($scope.ratedate[12]*(1+(newValue-oldValue)/500)*100)/100;
 

};
var changedetail4=function(newValue,oldValue,scope){
  $scope.date[10]=Math.round($scope.date[10]*(1+(newValue-oldValue)/400)*100)/100;
  $scope.date[11]=Math.round($scope.date[11]*(1+(newValue-oldValue)/400)*100)/100;
  $scope.date[12]=Math.round($scope.date[12]*(1+(newValue-oldValue)/400)*100)/100;
  $scope.ratedate[10]=Math.round($scope.ratedate[10]*(1+(newValue-oldValue)/400)*100)/100;
  $scope.ratedate[11]=Math.round($scope.ratedate[11]*(1+(newValue-oldValue)/400)*100)/100;
  $scope.ratedate[12]=Math.round($scope.ratedate[12]*(1+(newValue-oldValue)/400)*100)/100;
 
};
// var changemonthdetail=function(newValue,oldValue,scope){
//   $scope.date2[10]=Math.round($scope.date2[10]*(1+(newValue-oldValue)/200)*100)/100;
//   $scope.ratedate1[10]=Math.round($scope.ratedate1[10]*(1+(newValue-oldValue)/200)*100)/100;
 

// };
// var changemonthdetail2=function(newValue,oldValue,scope){
//   $scope.date2[10]=Math.round($scope.date2[10]*(1+(newValue-oldValue)/200)*100)/100;
//   $scope.ratedate1[10]=Math.round($scope.ratedate1[10]*(1+(newValue-oldValue)/200)*100)/100;

  

// };
// var changemonthdetail3=function(newValue,oldValue,scope){
//   $scope.date2[10]=Math.round($scope.date2[10]*(1+(newValue-oldValue)/200)*100)/100;
//   $scope.ratedate1[10]=Math.round($scope.ratedate1[10]*(1+(newValue-oldValue)/200)*100)/100;
 
// };
// var changemonthdetail4=function(newValue,oldValue,scope){
//   $scope.date2[10]=Math.round($scope.date2[10]*(1+(newValue-oldValue)/200)*100)/100;
//   $scope.ratedate1[10]=Math.round($scope.ratedate1[10]*(1+(newValue-oldValue)/200)*100)/100;
 
// };
$scope.$watch($scope.range,changedetail);
$scope.$watch($scope.range2,changedetail2);
$scope.$watch($scope.range3,changedetail3);
$scope.$watch($scope.range4,changedetail4);
// $scope.$watch($scope.monthrange,changemonthdetail);
// $scope.$watch($scope.monthrange2,changemonthdetail2);
// $scope.$watch($scope.monthrange3,changemonthdetail3);
// $scope.$watch($scope.monthrange4,changemonthdetail4);
    
    //alert(rc.data);
    //$scope.forecastvalue=rc.data[0].gdpForecastValue;
    
  $scope.colorpicker = {
        options: {
            orientation: 'horizontal',
            min: 0,
            max: 100,
            range: 'min'
        }
    };
  $scope.title = $stateParams.title;
  
  $scope.deviation=false;
  $scope.forecast=false;
  $scope.changeViews=function(){
    if( $scope.monthTaxChart.options.chart.type == 'column')
    {
        $scope.monthTaxChart.options.chart.type = 'spline'
    }
    else
        $scope.monthTaxChart.options.chart.type = 'column'
   
  };
  $scope.checkdeviation=function(){
    $scope.deviation=!$scope.deviation;
  };
  $scope.checkforecast=function(){
    $scope.forecast=!$scope.forecast;
  }
  // $scope.adjustParameter=function(){
  //   $scope.monthselectedRange = 0;
  //   $scope.monthselectedRange2 = 0;
  //   $scope.monthselectedRange3 = 0;
  //   $scope.monthselectedRange4 = 0;
  //   $scope.date2[10]=96.52;
  //   $scope.ratedate1[10]=7.2;
  // }

  $scope.deviationYear=false;
  $scope.forecastYear=false;

  $scope.changeViewsYear=function(){
    if( $scope.yearTaxChart.options.chart.type == 'column')
    {
        $scope.yearTaxChart.options.chart.type = 'spline'
    }
    else
        $scope.yearTaxChart.options.chart.type = 'column'
   
  };
  $scope.checkdeviationYear=function(){
    $scope.deviationYear=!$scope.deviationYear;
  };
  $scope.checkforecastYear=function(){
    $scope.forecastYear=!$scope.forecastYear;
  };
  $scope.taxthisyearrealvalue=rc.data[0];
  $scope.date=rc.data[1];
  $scope.ratedate=rc.data[2];
  // $scope.taxrealvalue=rc.data[3]
  // $scope.date2=rc.data[4];
  // $scope.ratedate1=rc.data[5];
  


  $scope.yearArray = rc.data[6];
 //  $scope.monthArray = ['2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'];
 // $scope.monthTaxChart = {
 //    options: {
 //      chart: {
 //        type:'column'
 //      },
 //    },
 //    credits:{
 //        enabled:false,
 //     },
 //    title: {
 //      text:'2015年月度税收收入预测',
 //      style:{
 //        fontWeight:'bold'
 //      }
 //    },

 //    xAxis: {
 //      categories: $scope.monthArray,
 //        // plotBands:[{
 //        //     from: 9.5,
 //        //     to:10.5,
 //        //     color:'rgba(68, 170, 213, .2)',
 //        //     label: {
 //        //             text: '预测区',
 //        //             verticalAlign: 'top',
 //        //             style: {
 //        //                 fontSize: '12px',
 //        //                 fontWeight: 600
 //        //             }
                   
 //        //         }
 //        //     }]
 //    },
 //    yAxis: 
 //    [{
 //      min: 0,
 //      title: {text: '税收收入（亿元）'},
 //       plotLines:[{
 //            color:'red',
 //            dashStyle:'DashDot',
 //            value:95.62,
 //            width:2,
 //            label:{
 //                text:'本年度税收目标',
 //                align:'left',
 //                x:10,
 //                 style: {
 //                        fontSize: '8px',
 //                        fontWeight: 200
 //                    }
 //            }
 //            }]
 //    },
 //    {
 //            title: {
 //                text: '同比增长率'
 //            },
 //            labels: {
 //                format: '{value} %',
 //                style: {
 //                    color: Highcharts.getOptions().colors[0]
 //                }
 //        },
 //        opposite:true}],
 //    tooltip: 
 //    {
 //      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
 //      pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
 //          '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
 //      footerFormat: '</table>',
 //      shared: true,
 //      useHTML: true
 //    },
 //    plotOptions: {
 //        column: {
 //          pointPadding: 0.2,
 //          borderWidth: 0
 //        }
 //    },
 //    series: [{
 //            color:'#7CB5EC',
 //            name: '真实值',
 //            data: $scope.taxrealvalue

 //        }, {
 //            color:'#434348',
 //            name: '预测值',
 //            data: $scope.date2

 //        },
 //        {   
 //            color:'#90ED7D',
 //            yAxis: 1,
 //            type:'spline',
 //            name: '同比增长率',
 //            data: $scope.ratedate1
 //        }]   
 //  };

  $scope.yearTaxChart = {
    options: {
      chart: {
        type:'column'
      },
    },
    credits:{
        enabled:false,
     },
    title: {
      text:'年度税收收入预测',
      style:{
        fontWeight:'bold'
      }
    },

    xAxis: {
      categories: $scope.yearArray,
        plotBands:[{
            from: 9.5+(2015-year),
            to:12.5,
            color:'rgba(68, 170, 213, .2)',
            label: {
                    text: '预测区',
                    verticalAlign: 'top',
                    style: {
                        fontSize: '12px',
                        fontWeight: 600
                    }
                   
                }
            }]

    },
    yAxis: 
    [{
      min: 0,
      title: {
        text: '税收收入（亿元）'
      },
       plotLines:[{
            color:'red',
            dashStyle:'DashDot',
            value:95.62,
            width:2,
            label:{
                text:'本年度税收目标',
                align:'left',
                x:10,
                 style: {
                        fontSize: '8px',
                        fontWeight: 200
                    }
            }
            }]

    },
    {
            title: {
                text: '同比增长率'
            },
            labels: {
                format: '{value} %',
                style: {
                    color: Highcharts.getOptions().colors[0]
                }
        },
        opposite:true}],
    tooltip: 
    {

      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
          '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
      footerFormat: '</table>',
      shared: true,
      useHTML: true
    },
    plotOptions: {
        column: {
          pointPadding: 0.2,
          borderWidth: 0
        }
    },
    series: [{
            color:'#7CB5EC',
            name: '真实值',
            data: $scope.taxthisyearrealvalue

        }, {
            color:'#434348',
            name: '预测值',
            data: $scope.date

        },
         {   
            color:'#90ED7D',
            yAxis: 1,
            type:'spline',
            name: '同比增长率',
            data: $scope.ratedate
        }]   
  };

    });
   

     $scope.selectedRange=0;
    $scope.selectedRange2=0;
    $scope.selectedRange3=0;
    $scope.selectedRange4=0;
    // $scope.monthselectedRange = 0;
    // $scope.monthselectedRange2 = 0;
    // $scope.monthselectedRange3 = 0;
    // $scope.monthselectedRange4 = 0;
  };
  $scope.selectedRange=0;
  
  $scope.taxthisyearrealvalue=rc.data[0];
  $scope.date=rc.data[1];
  $scope.ratedate=rc.data[2];
  $scope.taxrealvalue=rc.data[3]
  $scope.date2=rc.data[4];
  $scope.ratedate1=rc.data[5];
  $scope.thisyearforecastvalue=rc.data[1][9];
$scope.range = function() {
        return $scope.selectedRange;
      };
      $scope.range2=function(){
        return $scope.selectedRange2;
      };
       $scope.range3=function(){
        return $scope.selectedRange3;
      };
       $scope.range4=function(){
        return $scope.selectedRange4;
      };
      $scope.monthrange=function(){
        return $scope.monthselectedRange;
      };
      $scope.monthrange2=function(){
        return $scope.monthselectedRange2;
      };
      $scope.monthrange3=function(){
        return $scope.monthselectedRange3;
      };
      $scope.monthrange4=function(){
        return $scope.monthselectedRange4;
      };
var changedetail=function(newValue,oldValue,scope){

  $scope.date[10]=Math.round($scope.date[10]*(1+(newValue-oldValue)/400)*100)/100;
  $scope.date[11]=Math.round($scope.date[11]*(1+(newValue-oldValue)/400)*100)/100;
  $scope.date[12]=Math.round($scope.date[12]*(1+(newValue-oldValue)/400)*100)/100;
  $scope.ratedate[10]=Math.round($scope.ratedate[10]*(1+(newValue-oldValue)/400)*100)/100;
  $scope.ratedate[11]=Math.round($scope.ratedate[11]*(1+(newValue-oldValue)/400)*100)/100;
  $scope.ratedate[12]=Math.round($scope.ratedate[12]*(1+(newValue-oldValue)/400)*100)/100;
 
};
var changedetail2=function(newValue,oldValue,scope){
  $scope.date[10]=Math.round($scope.date[10]*(1+(newValue-oldValue)/400)*100)/100;
  $scope.date[11]=Math.round($scope.date[11]*(1+(newValue-oldValue)/400)*100)/100;
  $scope.date[12]=Math.round($scope.date[12]*(1+(newValue-oldValue)/400)*100)/100;
  $scope.ratedate[10]=Math.round($scope.ratedate[10]*(1+(newValue-oldValue)/400)*100)/100;
  $scope.ratedate[11]=Math.round($scope.ratedate[11]*(1+(newValue-oldValue)/400)*100)/100;
  $scope.ratedate[12]=Math.round($scope.ratedate[12]*(1+(newValue-oldValue)/400)*100)/100;
  
};
var changedetail3=function(newValue,oldValue,scope){
  $scope.date[10]=Math.round($scope.date[10]*(1+(newValue-oldValue)/400)*100)/100;
  $scope.date[11]=Math.round($scope.date[11]*(1+(newValue-oldValue)/400)*100)/100;
  $scope.date[12]=Math.round($scope.date[12]*(1+(newValue-oldValue)/400)*100)/100;
  $scope.ratedate[10]=Math.round($scope.ratedate[10]*(1+(newValue-oldValue)/400)*100)/100;
  $scope.ratedate[11]=Math.round($scope.ratedate[11]*(1+(newValue-oldValue)/400)*100)/100;
  $scope.ratedate[12]=Math.round($scope.ratedate[12]*(1+(newValue-oldValue)/400)*100)/100;
 

};
var changedetail4=function(newValue,oldValue,scope){
  $scope.date[10]=Math.round($scope.date[10]*(1+(newValue-oldValue)/400)*100)/100;
  $scope.date[11]=Math.round($scope.date[11]*(1+(newValue-oldValue)/400)*100)/100;
  $scope.date[12]=Math.round($scope.date[12]*(1+(newValue-oldValue)/400)*100)/100;
  $scope.ratedate[10]=Math.round($scope.ratedate[10]*(1+(newValue-oldValue)/400)*100)/100;
  $scope.ratedate[11]=Math.round($scope.ratedate[11]*(1+(newValue-oldValue)/400)*100)/100;
  $scope.ratedate[12]=Math.round($scope.ratedate[12]*(1+(newValue-oldValue)/400)*100)/100;
 
};
var changemonthdetail=function(newValue,oldValue,scope){};
var changemonthdetail2=function(newValue,oldValue,scope){};
var changemonthdetail3=function(newValue,oldValue,scope){};
var changemonthdetail4=function(newValue,oldValue,scope){};
$scope.$watch($scope.range,changedetail);
$scope.$watch($scope.range2,changedetail2);
$scope.$watch($scope.range3,changedetail3);
$scope.$watch($scope.range4,changedetail4);
$scope.$watch($scope.monthrange,changemonthdetail);
$scope.$watch($scope.monthrange2,changemonthdetail2);
$scope.$watch($scope.monthrange3,changemonthdetail3);
$scope.$watch($scope.monthrange4,changemonthdetail4);
  $scope.monthArray = ['2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'];
  // $scope.yearArray = ['2006','2007','2008','2009','2010','2011','2012','2013','2014','2015','2016','2017','2018'];
  $scope.yearArray=rc.data[6];
  $scope.monthTaxChart = {
    options: {
      chart: {
        type:'column'
      },
    },
    credits:{
        enabled:false,
     },
    title: {
      text:'本年月度税收收入预测',
      style:{
        fontWeight:'bold'
      }
    },

    xAxis: {
      categories: $scope.monthArray,
        plotBands:[{
            from: 10.5,
            to:10.5,
            color:'rgba(68, 170, 213, .2)',
            label: {
                    text: '',
                    verticalAlign: 'top',
                    style: {
                        fontSize: '12px',
                        fontWeight: 600
                    }
                   
                }
            }]
    },
    yAxis: 
    [{
      min: 0,
      title: {text: '税收收入（亿元）'},
       plotLines:[{
            color:'red',
            dashStyle:'DashDot',
            value:94.56,
            width:2,
            label:{
                text:'本年度税收目标',
                align:'left',
                x:10,
                 style: {
                        fontSize: '8px',
                        fontWeight: 200
                    }
            }
            }]
    },
    {
            title: {
                text: '同比增长率'
            },
            labels: {
                format: '{value} %',
                style: {
                    color: Highcharts.getOptions().colors[0]
                }
        },
        opposite:true}],
    tooltip: 
    {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
          '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
      footerFormat: '</table>',
      shared: true,
      useHTML: true
    },
    plotOptions: {
        column: {
          pointPadding: 0.2,
          borderWidth: 0
        }
    },
    series: [{
            name: '真实值',
            data: $scope.taxrealvalue

        }, {
            name: '预测值',
            data: $scope.date2

        },
        {   
            yAxis: 1,
            type:'spline',
            name: '同比增长率',
            data: $scope.ratedate1
        }]   
  };

  $scope.yearTaxChart = {
    options: {
      chart: {
        type:'column'
      },
    },
    credits:{
        enabled:false,
     },
    title: {
      text:'年度税收收入预测',
      style:{
        fontWeight:'bold'
      }
    },

    xAxis: {
      categories: $scope.yearArray,
        plotBands:[{
            from: 9.5,
            to:12.5,
            color:'rgba(68, 170, 213, .2)',
            label: {
                    text: '预测区',
                    verticalAlign: 'top',
                    style: {
                        fontSize: '12px',
                        fontWeight: 600
                    }
                   
                }
            }]

    },
    yAxis: 
    [{
      min: 0,
      title: {
        text: '税收收入（亿元）'
      },
       plotLines:[{
            color:'red',
            dashStyle:'DashDot',
            value:95.62,
            width:2,
            label:{
                text:'本年度税收目标',
                align:'left',
                x:10,
                 style: {
                        fontSize: '8px',
                        fontWeight: 200
                    }
            }
            }]

    },
    {
            title: {
                text: '同比增长率'
            },
            labels: {
                format: '{value} %',
                style: {
                    color: Highcharts.getOptions().colors[0]
                }
        },
        opposite:true}],
    tooltip: 
    {

      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
          '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
      footerFormat: '</table>',
      shared: true,
      useHTML: true
    },
    plotOptions: {
        column: {
          pointPadding: 0.2,
          borderWidth: 0
        }
    },
    series: [{
            name: '真实值',
            data: $scope.taxthisyearrealvalue

        }, {
            name: '预测值',
            data: $scope.date

        },
         {   
            yAxis: 1,
            type:'spline',
            name: '同比增长率',
            data: $scope.ratedate
        }]   
  };

    });
}]);
