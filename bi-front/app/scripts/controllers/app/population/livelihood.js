'use strict';

app.controller('LivelihoodCtrl', ['$scope', 'qService','forecastFactory',function($scope,qService,forecastFactory) {

    var promise = qService.tokenHttpGet(forecastFactory.query,{tableName:'populationEmployInsuranceData'});
    promise.then(function(rc) {

    $scope.preLaborPopulation = rc.data[0];
    $scope.preEmployedPopulation = rc.data[1];
    $scope.preFirstPopulation = rc.data[2];
    $scope.preSecondPopulation = rc.data[3];
    $scope.preThirdPopulation = rc.data[4];
    $scope.preInsurance = rc.data[5];
    $scope.preOldRate = rc.data[6];
    $scope.preLaborRate = rc.data[7];
    $scope.prePrimarySchool = rc.data[8];
    $scope.preMiddleSchool = rc.data[9];
    $scope.preHighschool = rc.data[10];

    $scope.townName = ['城区','城厢镇','双凤镇','沙溪镇','浏河镇','浮桥镇','璜泾镇','新区','港区','科教新城'];
    


    $scope.firstTenYear  = ['2016', '2017', '2018', '2019', '2020', '2021','2022', '2023', '2024', '2025'];
    $scope.secondTenYear = ['2026', '2027', '2028', '2029', '2030', '2031','2032', '2033', '2034', '2035'];
    $scope.thirdTenYear  = ['2036', '2037', '2038', '2039', '2040', '2041','2042', '2043', '2044', '2045'];

$scope.buttonMap3 = [{
        name: 2025,
        label: 2025 + "年"
      },
      {
        name: 2035,
        label: 2035 + "年"
      },
      {
        name: 2045,
        label: 2045 + "年"
      }];
 $scope.btn_click3=function(bttn){
     $scope.change3(bttn);
  };    
 $scope.change3=function(bttn){
   if(bttn.name===2025){
    $scope.jobf.options.title.text="太仓市2016至2025年就业人数分析预测";
    $scope.jobf.options.xAxis.categories=$scope.firstTenYear;
    $scope.jobf.series=[{
            name: '劳动力人口数',
            data: $scope.preLaborPopulation[0],
            marker:{
               symbol:"square" 
           }
        }, {
            name: '就业人数',
            data: $scope.preEmployedPopulation[0],
            marker:{
               symbol:"circle" 
           }
        }];
   }
   if(bttn.name===2035){
    $scope.jobf.options.title.text="太仓市2026至2035年就业人数分析预测";
    $scope.jobf.options.xAxis.categories=$scope.secondTenYear;
     $scope.jobf.series=[{
            name: '劳动力人口数',
            data: $scope.preLaborPopulation[1],
            marker:{
               symbol:"square" 
           }
        }, {
            name: '就业人数',
            data: $scope.preEmployedPopulation[1],
            marker:{
               symbol:"circle" 
           }
        }];
   }
   if(bttn.name===2045){
    $scope.jobf.options.title.text="太仓市2036至2045年就业人数分析预测";
    $scope.jobf.options.xAxis.categories=$scope.thirdTenYear;
     $scope.jobf.series=[{
            name: '劳动力人口数',
            data: $scope.preLaborPopulation[2],
            marker:{
               symbol:"square" 
           }
        }, {
            name: '就业人数',
            data: $scope.preEmployedPopulation[2],
            marker:{
               symbol:"circle" 
           }
        }];
   }
 };

   $scope.showTotalTable = function(){
    $scope.totalshow= !$scope.totalshow;
  };

// $scope.tchrGrntList=[{
//     name:'小学'
// },{
//     name:'中学'
// },{
//     name:'高中'
// }];

// $scope.tchrGrntKindChange=function(tchrGrntOne){
// if(tchrGrntOne.name==="小学"){
//     $scope.school.options.title.text="各城镇小学学校数量";
//     $scope.school.series=[{
//             name: '小学',
//             data: $scope.prePrimarySchool[0]

//         }, {
//             name: '初中',
//             data: $scope.prePrimarySchool[1]

//         }, {
//             name: '高中',
//             data: $scope.prePrimarySchool[2]

//         }];
// }
// if(tchrGrntOne.name==="中学"){
//     $scope.school.options.title.text="各城镇中学学校数量";
//     $scope.school.series=[{
//             name: '小学',
//             data: $scope.preMiddleSchool[0]

//         }, {
//             name: '2030年',
//             data: $scope.preMiddleSchool[1]

//         }, {
//             name: '2040年',
//             data: $scope.preMiddleSchool[2]

//         }];
// }
// if(tchrGrntOne.name==="高中"){
//     $scope.school.options.title.text="各城镇高中学校数量";
//     $scope.school.series=[{
//             name: '2020年',
//             data: $scope.preHighschool[0]

//         }, {
//             name: '2030年',
//             data: $scope.preHighschool[1]

//         }, {
//             name: '2040年',
//             data: $scope.preHighschool[2]

//         }];
// }
// };


$scope.buttonMap8 = [{
        name: 2025,
        label: 2025 + "年",
        radio: "Middle"
      },
      {
        name: 2035,
        label: 2035 + "年",
        radio: "Middle"
      },
      {
        name: 2045,
        label: 2045 + "年",
        radio: "Right"
      }];
 $scope.btn_click8=function(bttn){
     $scope.change8(bttn);
  };    
 $scope.change8=function(bttn){
    if(bttn.name===2025){
        $scope.school.options.title.text="太仓市各城镇2025年学校数量分析预测";
    $scope.school.series=[{
            name: '小学',
            data: $scope.prePrimarySchool[0]

        }, {
            name: '初中',
            data: $scope.preMiddleSchool[0]

        }, {
            name: '高中',
            data: $scope.preHighschool[0]

        }];

    }
    if(bttn.name===2035){
        $scope.school.options.title.text="太仓市各城镇2035年学校数量分析预测";
    $scope.school.series=[{
            name: '小学',
            data: $scope.prePrimarySchool[1]

        }, {
            name: '初中',
            data: $scope.preMiddleSchool[1]

        }, {
            name: '高中',
            data: $scope.preHighschool[1]

        }];
    }
    if(bttn.name===2045){
       $scope.school.options.title.text="太仓市各城镇2045年学校数量分析预测";
    $scope.school.series=[{
            name: '小学',
            data: $scope.prePrimarySchool[2]

        }, {
            name: '初中',
            data: $scope.preMiddleSchool[2]

        }, {
            name: '高中',
            data: $scope.preHighschool[2]

        }];
}
    
 };

       $scope.buttonMap5 = [{
        name: 2025,
        label: 2025 + "年",
        radio: "Middle"
      },
      {
        name: 2035,
        label: 2035 + "年",
        radio: "Middle"
      },
      {
        name: 2045,
        label: 2045 + "年",
        radio: "Right"
      }];
       
  $scope.btn_click5=function(bttn){
     $scope.change5(bttn);
  };    
 $scope.change5=function(bttn){
    if(bttn.name===2025){
        $scope.money.options.title.text="太仓市2016至2025年城镇基本养老保险分析预测";
        $scope.money.options.xAxis[0].categories=$scope.firstTenYear;
        $scope.money.series[0].data=$scope.preInsurance[0];
        $scope.money.series[1].data=$scope.preOldRate[0];
        $scope.money.series[2].data=$scope.preLaborRate[0];

    }
    if(bttn.name===2035){
        $scope.money.options.title.text="太仓市2026至2035年城镇基本养老保险分析预测";
        $scope.money.options.xAxis[0].categories=$scope.secondTenYear;
        $scope.money.series[0].data=$scope.preInsurance[1];
        $scope.money.series[1].data=$scope.preOldRate[1];
        $scope.money.series[2].data=$scope.preLaborRate[1];
    }
    if(bttn.name===2045){
        $scope.money.options.title.text="太仓市2036至2045年城镇基本养老保险分析预测";
        $scope.money.options.xAxis[0].categories=$scope.thirdTenYear;
        $scope.money.series[0].data=$scope.preInsurance[2];
        $scope.money.series[1].data=$scope.preOldRate[2];
        $scope.money.series[2].data=$scope.preLaborRate[2];
    }
 };


       
$scope.buttonMap1 = [{
        name: 2025,
        label: 2025 + "年",
        radio: "Middle"
      },
      {
        name: 2035,
        label: 2035 + "年",
        radio: "Middle"
      },
      {
        name: 2045,
        label: 2045 + "年",
        radio: "Right"
      }];
 $scope.btn_click1=function(bttn){
     $scope.change1(bttn);
  };    
 $scope.change1=function(bttn){
     if(bttn.name===2025){
        $scope.jobt.options.title.text="太仓市2016至2025年就业结构变化分析预测";
        $scope.jobt.options.xAxis.categories=$scope.firstTenYear;
        $scope.jobt.series=[{
            name: '就业人数',
            type: 'column',
            yAxis: 1,
            data: $scope.preEmployedPopulation[0],
            tooltip: {
                valueSuffix: ' 万人'
            }

        },{
            name: '第一产业',
            type: 'spline',
            marker:{
               symbol:"square" 
            },
            data: $scope.preFirstPopulation[0]
        }, {
            name: '第二产业',
            type: 'spline',
            marker:{
               symbol:"circle" 
            },
            data: $scope.preSecondPopulation[0]
        }, {
            name: '第三产业',
            type: 'spline',
            marker:{
               symbol:"triangle" 
            },
            data: $scope.preThirdPopulation[0]
        }];
     }
     if(bttn.name===2035){
        $scope.jobt.options.title.text="太仓市2026至2035年就业结构变化分析预测";
        $scope.jobt.options.xAxis.categories=$scope.secondTenYear;
        $scope.jobt.series=[{
            name: '就业人数',
            type: 'column',
            yAxis: 1,
            data: $scope.preEmployedPopulation[1],
            tooltip: {
                valueSuffix: ' 万人'
            }

        },{
            name: '第一产业',
            type: 'spline',
            marker:{
               symbol:"square" 
            },
            data: $scope.preFirstPopulation[1]

        }, {
            name: '第二产业',
            type: 'spline',
            marker:{
               symbol:"circle" 
            },
            data: $scope.preSecondPopulation[1]
        }, {
            name: '第三产业',
            type: 'spline',
            marker:{
               symbol:"triangle" 
            },
            data: $scope.preThirdPopulation[1]
        }];
     }
     if(bttn.name===2045){
        $scope.jobt.options.title.text="太仓市2036至2045年就业结构变化分析预测";
        $scope.jobt.options.xAxis.categories=$scope.thirdTenYear;
        $scope.jobt.series=[{
            name: '就业人数',
            type: 'column',
            yAxis: 1,
            data: $scope.preEmployedPopulation[2],
            tooltip: {
                valueSuffix: ' 万人'
            }

        },{
            name: '第一产业',
            type: 'spline',
            marker:{
               symbol:"square" 
            },
            data: $scope.preFirstPopulation[2]

        }, {
            name: '第二产业',
            type: 'spline',
            marker:{
               symbol:"circle" 
            },
            data: $scope.preSecondPopulation[2]
        }, {
            name: '第三产业',
            type: 'spline',
            marker:{
               symbol:"triangle" 
            },
            data: $scope.preThirdPopulation[2]
        }];
     }
 };



var jobfcolor=new Array('#7cb5ec','#000000');
 $scope.jobf ={
      options:{
        colors:jobfcolor,
        chart: {
            type: 'areaspline'
        },
        title: {
            text: '太仓市2016至2025年就业人数分析预测'
        },
        legend: {
            layout: 'vertical',
            align: 'left',
            verticalAlign: 'top',
            x: 150,
            y: 100,
            floating: true,
            borderWidth: 1,
            backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
        },
        xAxis: {
            categories: $scope.firstTenYear
        },
        yAxis: {
            title: {
                text: '人数'
            }
        },
        tooltip: {
            shared: true,
            valueSuffix: ' 万人'
        },
        credits: {
            enabled: false
        },
        plotOptions: {
            areaspline: {
                fillOpacity: 0.5
            }
        }
    },
        series: [{
            name: '劳动力人口数',
            data: $scope.preLaborPopulation[0],
            marker:{
               symbol:"square" 
           }
        }, {
            name: '就业人数',
            data: $scope.preEmployedPopulation[0],
            marker:{
               symbol:"circle" 
           }
        }]
};  
var jobtcolor=new Array('#7cb5ec','#000000','#90ED7D','#F7A35C');
$scope.jobt ={
       options:{
        colors:jobtcolor,
        chart: {
            zoomType: 'xy'
        },
        title: {
            text: '太仓市2016至2025年就业结构变化分析预测',
            x: -20 //center
        },
        credits:{
            enabled:false
        },
        xAxis: {
            categories: $scope.firstTenYear
        },
        yAxis: [{ // Primary yAxis
            labels: {
                format: '{value}%',
                style: {
                    color: Highcharts.getOptions().colors[1]
                }
            },
            title: {
                text: '比例',
                style: {
                    color: Highcharts.getOptions().colors[1]
                }
            }
        }, { // Secondary yAxis
            title: {
                text: '就业人数',
                style: {
                    color: Highcharts.getOptions().colors[0]
                }
            },
            labels: {
                format: '{value} 万人',
                style: {
                    color: Highcharts.getOptions().colors[0]
                }
            },
            opposite: true
        }],
        tooltip: {
            valueSuffix: '%'
        },
        legend: {
           // layout: 'vertical',
            align: 'center',
            verticalAlign: 'bottom',
            borderWidth: 0
        }
    },
        series: [{
            name: '就业人数',
            type: 'column',
            yAxis: 1,
            data: $scope.preEmployedPopulation[0],
            tooltip: {
                valueSuffix: ' 万人'
            }

        },{
            name: '第一产业人口比例',
            type: 'spline',
            marker:{
               symbol:"square" 
            },
            data: $scope.preFirstPopulation[0]
        }, {
            name: '第二产业人口比例',
            type: 'spline',
            marker:{
               symbol:"circle" 
            },
            data: $scope.preSecondPopulation[0]
        }, {
            name: '第三产业人口比例',
            type: 'spline',
            marker:{
               symbol:"triangle" 
            },
            data: $scope.preThirdPopulation[0]
        }]

    };    
    $scope.money ={
    options:{
        chart: {
            zoomType: 'xy'
        },
        title: {
            text: '太仓市2016至2025年城镇基本养老保险分析预测'
        },
        credits:{
            enabled:false
        },
        xAxis: [{
            categories: $scope.firstTenYear,
            crosshair: true
        }],
        yAxis: [ { // Secondary yAxis
            gridLineWidth: 1,
            title: {
                text: '保险结余',
                style: {
                    color: Highcharts.getOptions().colors[0]
                }
            },
            labels: {
                format: '{value} 亿元',
                style: {
                    color: Highcharts.getOptions().colors[0]
                }
            }

        }, { // Tertiary yAxis
            gridLineWidth: 1,
            title: {
                text: '比例',
                style: {
                    color: Highcharts.getOptions().colors[1]
                }
            },
            labels: {
                format: '{value} %',
                style: {
                    color: Highcharts.getOptions().colors[1]
                }
            },
            opposite: true
        }],
        tooltip: {
            shared: true
        },
        legend: {
            //layout: 'vertical',
            align: 'center',
            verticalAlign: 'bottom',
        }
    },
        series: [{
            name: '养老保险结余',
            type: 'column',
            yAxis: 0,
            data: $scope.preInsurance[0],
            tooltip: {
                valueSuffix: ' 亿元'
            }

        }, {
            name: '老龄人口比例',
            type: 'spline',
            yAxis: 1,
            data: $scope.preOldRate[0],
            marker: {
                enabled: true
            },
            //dashStyle: 'shortdot',
            tooltip: {
                valueSuffix: ' %'
            }

        }, {
            name: '就业人口比例',
            type: 'spline',
            yAxis: 1,
            data: $scope.preLaborRate[0],
            tooltip: {
                valueSuffix: ' %'
            }
        }]
};
var schoolcolor=new Array('#7cb5ec','#000000','#90ed7d');
$scope.school={
    options:{ 
        colors:schoolcolor, 
        chart: {
            type: 'column'
        },
        title: {
            text: '太仓市各乡镇2025年学校数量分析预测'
        },
        credits:{
            enabled:false
        },
        xAxis: {
            categories: $scope.townName,
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: '数量 (所)'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} 所</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        }
    },
        series: [{
            name: '小学',
           // color:"#7cb5ec",
            data: $scope.prePrimarySchool[0]

        }, {
            name: '初中',
           // color:"#000000",
            data: $scope.preMiddleSchool[0]

        }, {
            name: '高中',
           // color:"#90ed7d",
            data: $scope.preHighschool[0]

        }]
};
});
}]);