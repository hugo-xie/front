'use strict';

app.controller('PrelationCtrl', ['$scope','$stateParams','qService','forecastFactory',function($scope, $stateParams,qService,forecastFactory) {

    $scope.data = null;
    var popData;
    var promise = qService.tokenHttpGet(forecastFactory.query,{tableName:'laborGdpRelationPreData'});
    promise.then(function(rc) {

    console.log(rc.data);
    popData=rc.data;
    //以下为顶部“劳动力总人口与GDP关联分析预测”数据
    var popData1=[0,0,0,0,0,0,0,0,0,0];
    var popData2=[0,0,0,0,0,0,0,0,0,0];
    var popData3=[0,0,0,0,0,0,0,0,0,0];
    var tmpData1=[0,0,0,0,0,0,0,0,0,0];//用来保存原始变量
    var tmpData2=[0,0,0,0,0,0,0,0,0,0];
    var tmpData3=[0,0,0,0,0,0,0,0,0,0];

    var gdp1=[0,0,0,0,0,0,0,0,0,0];
    var gdp2=[0,0,0,0,0,0,0,0,0,0];
    var gdp3=[0,0,0,0,0,0,0,0,0,0];
    var tgdp1=[0,0,0,0,0,0,0,0,0,0];
    var tgdp2=[0,0,0,0,0,0,0,0,0,0];
    var tgdp3=[0,0,0,0,0,0,0,0,0,0];

    //以下为底部“产业人口与产业GDP比重分析预测”数据
    var fgdp=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    var sgdp=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    var tgdp=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    var fpop=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    var spop=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    var tpop=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

    for(var t=0; t<fpop.length;t++){
      fpop[t]=popData[t].preFirstLaborPopulation;
      spop[t]=popData[t].preSecondLaborPopulation;
      tpop[t]=popData[t].preThirdLaborPopulation;
      fgdp[t]=popData[t].preFirstGdp;
      sgdp[t]=popData[t].preSecondGdp;
      tgdp[t]=popData[t].preThirdGdp;
    }



    //数据更新
    var tmp = 1;//用于确定年份的临时变量

     for(var i=0;i<popData1.length;i++){
       popData1[i] = popData[i].preLaborPopulation;
       tmpData1[i] = popData[i].preLaborPopulation;
       gdp1[i] = popData[i].preGdp;
       tgdp1[i] = popData[i].preGdp;
     }
     for(var i=0;i<popData2.length;i++){
       popData2[i] = popData[i+10].preLaborPopulation;
        tmpData2[i] = popData[i+10].preLaborPopulation;
        gdp2[i] = popData[i+10].preGdp;
         tgdp2[i] = popData[i+10].preGdp;
     }
     for(var i=0;i<popData3.length;i++){
       popData3[i] = popData[i+20].preLaborPopulation;
       tmpData3[i] = popData[i+20].preLaborPopulation;;
         gdp3[i] = popData[i+20].preGdp;
          tgdp3[i] = popData[i+20].preGdp;
     }
     $scope.showTotalTable = function(){
     $scope.totalshow= !$scope.totalshow;
}


// app.controller('PrelationCtrl', ['$scope', function($scope) {
//
//    $scope.showTotalTable = function(){
//     $scope.totalshow= !$scope.totalshow;
//   };

 $scope.totaldata = {

    tabledata:
    [
      {yearvalue:'指标', Fp:'第一产业人口',Sp:'第二产业人口',Tp:'第三产业人口'},
      {yearvalue:'第一产业产值', Fp:'0.9542',Sp:'0.4293',Tp:'0.3116'},
      {yearvalue:'第二产业产值', Fp:'0.4101',Sp:'0.9724',Tp:'0.6647'},
      {yearvalue:'第三产业产值', Fp:'0.7624',Sp:'0.4624',Tp:'0.9588'},
      {yearvalue:'人均GDP', Fp:'0.7484',Sp:'0.7483',Tp:'0.8396'},
      {yearvalue:'地方生产总值', Fp:'0.5469',Sp:'0.7483',Tp:'0.8589'},
      {yearvalue:'社会消费品零售总额', Fp:'0.3598',Sp:'0.6597',Tp:'0.8531'}

    ]
  };



var piecolor=new Array('#7CB5EC','#929dce','#90ED7D');
     $scope.colorpicker = {
        options: {
            orientation: 'horizontal',
            min: 0,
            max: 100,
            range: 'min'
        }
    };
        // 路径配置
        require.config({
            paths: {
                echarts: 'http://echarts.baidu.com/build/dist'
            }
        });

        // 使用
        require(
            [
                'echarts',
                'echarts/chart/chord',
                'echarts/chart/force' // 使用柱状图就加载bar模块，按需加载
            ],
            function (ec) {
                // 基于准备好的dom，初始化echarts图表
                var myChart = ec.init(document.getElementById('main'));

                var option = {
    title : {
        text: '太仓市2020年劳动力人口与各项经济指标关联度分析预测',
         textStyle:{

            fontWeight:'normal',
            fontFamily:'Lucida Sans Unicode',
            fontSize:'18',
            color:"#000000"
        },
        x:'center',
        y:'top'
    },

    tooltip : {
        trigger: 'item',
        formatter: function (params) {
            if (params.indicator2) {    // is edge
                return params.indicator2 + ' ' + params.name + ' ' + params.indicator;
            } else {    // is node
                return params.name
            }
        }
    },
    toolbox: {
        show : true,
        feature : {
            restore : {show: true},
            magicType: {show: true, type: ['force', 'chord']},
            saveAsImage : {show: true}
        },

            x:"right",
            y:"top",

    },

    legend: {
        x: 'center',
        data:['第一产业人口', '第二产业人口', '第三产业人口'],
        y:'bottom',
        itemGap:20,
        textStyle:{
            fontWeight:'normal'

        }

    },
    series : [
        {
            type:'chord',
            sort : 'ascending',
            sortSub : 'descending',
            showScale : false,
            itemStyle : {
                normal : {
                    label : {
                        rotate : false
                    }
                }
            },
            textStyle:{
            fontWeight:'nomal'
            },
            // 使用 nodes links 表达和弦图
            nodes: [
                {name:'总人口'},
                {name:'人口密度'},
                {name:'人口出生率'},
                {name:'人口自然增长率'},
                {name:'人口死亡率'},
                {name:'第一产业人口'},
                {name:'第二产业人口'},
                {name:'第三产业人口'},
                {name:'城镇人口'},
                {name:'乡村人口'},
                {name:'地方生产总值'},
                {name:'第一产业产值'},
                {name:'第二产业产值'},
                {name:'第三产业产值'},
                {name:'人均GDP'},
                {name:'社会消费品零售总额'}

            ],
            links: [
                {source: '第一产业人口', target: '地方生产总值', weight: 0.5469,name:'0.5469关联'},
                {source: '第一产业人口', target: '第一产业产值', weight: 0.9542,name:'0.9542关联'},
                {source: '第一产业人口', target: '第二产业产值', weight: 0.4101,name:'0.4101关联'},
                {source: '第一产业人口', target: '第三产业产值', weight: 0.7624,name:'0.7624关联'},
                {source: '第一产业人口', target: '人均GDP', weight: 0.7484,name:'0.7484关联'},
                {source: '第一产业人口', target: '社会消费品零售总额', weight: 0.3598,name:'0.3598关联'},
                {source: '第二产业人口', target: '地方生产总值', weight: 0.7483,name:'0.7483关联'},
                {source: '第二产业人口', target: '第一产业产值', weight: 0.4293,name:'0.4293关联'},
                {source: '第二产业人口', target: '第二产业产值', weight: 0.9724,name:'0.9724关联'},
                {source: '第二产业人口', target: '第三产业产值', weight: 0.4624,name:'0.4624关联'},
                {source: '第二产业人口', target: '人均GDP', weight: 0.7483,name:'0.7483关联'},
                {source: '第二产业人口', target: '社会消费品零售总额', weight: 0.6597,name:'0.6597关联'},
                {source: '第三产业人口', target: '地方生产总值', weight: 0.8589,name:'0.8589关联'},
                {source: '第三产业人口', target: '第一产业产值', weight: 0.3116,name:'0.3116关联'},
                {source: '第三产业人口', target: '第二产业产值', weight: 0.6647,name:'0.6647关联'},
                {source: '第三产业人口', target: '第三产业产值', weight: 0.9588,name:'0.9588关联'},
                {source: '第三产业人口', target: '人均GDP', weight: 0.8396,name:'0.8396关联'},
                {source: '第三产业人口', target: '社会消费品零售总额', weight: 0.8531,name:'0.8531关联'},

                // Ribbon Type 的和弦图每一对节点之间必须是双向边
                {target: '第一产业人口', source: '地方生产总值', weight: 0.5469},
                {target: '第一产业人口', source: '第一产业产值', weight: 0.9542},
                {target: '第一产业人口', source: '第二产业产值', weight: 0.4101},
                {target: '第一产业人口', source: '第三产业产值', weight: 0.7624},
                {target: '第一产业人口', source: '人均GDP', weight: 0.7484},
                {target: '第一产业人口', source: '社会消费品零售总额', weight: 0.3598},
                {target: '第二产业人口', source: '地方生产总值', weight: 0.7483},
                {target: '第二产业人口', source: '第一产业产值', weight: 0.4293},
                {target: '第二产业人口', source: '第二产业产值', weight: 0.9724},
                {target: '第二产业人口', source: '第三产业产值', weight: 0.4624},
                {target: '第二产业人口', source: '人均GDP', weight: 0.7483},
                {target: '第二产业人口', source: '社会消费品零售总额', weight: 0.6597},
                {target: '第三产业人口', source: '地方生产总值', weight: 0.8589},
                {target: '第三产业人口', source: '第一产业产值', weight: 0.3116},
                {target: '第三产业人口', source: '第二产业产值', weight: 0.6647},
                {target: '第三产业人口', source: '第三产业产值', weight: 0.9588},
                {target: '第三产业人口', source: '人均GDP', weight: 0.8396},
                {target: '第三产业人口', source: '社会消费品零售总额', weight: 0.8531}
            ]
                // Ribbon Type 的和弦图每一对节点之间必须是双向边
        }
    ]
};


                // 为echarts对象加载数据
                myChart.setOption(option);
            }
        );

var splinecolors=new Array('#3CB371','#000000','#87CEFA' );
    $scope.buttonMap2 = [{
        name: 2025,
        label: 2025 + "年关联度分析预测",

      }, {
        name: 2035,
        label: 2035 + "年关联度分析预测",

      },{
        name: 2045,
        label: 2045 + "年关联度分析预测",

      }];

       $scope.buttonMap3 = [{
        name: 2020,
        label: 2020 + "年关联度分析预测",
        radio: "Left"
      }, {
        name: 2025,
        label: 2025 + "年关联度分析预测",
        radio: "Middle"
      },
      {
        name: 2030,
        label: 2030 + "年关联度分析预测",
        radio: "Middle"
      },
      {
        name: 2035,
        label: 2035 + "年关联度分析预测",
        radio: "Middle"
      },
      {
        name: 2040,
        label: 2040 + "年关联度分析预测",
        radio: "Middle"
      },{
        name: 2045,
        label: 2045 + "年关联度分析预测",
        radio: "Right"
      }];




       $scope.buttonMap4 = [{
        name: 2020,
        label: 2020 + "年比重分析预测",
        radio: "Left"
      }, {
        name: 2025,
        label: 2025 + "年比重分析预测",
        radio: "Middle"
      },
      {
        name: 2030,
        label: 2030 + "年比重分析预测",
        radio: "Middle"
      },
      {
        name: 2035,
        label: 2035 + "年比重分析预测",
        radio: "Middle"
      },
      {
        name: 2040,
        label: 2040 + "年比重分析预测",
        radio: "Middle"
      },{
        name: 2045,
        label: 2045 + "年比重分析预测",
        radio: "Right"
      }];

$scope.btn_click=function(btn){
   $scope.change(btn);
};
$scope.change=function(btn){
   if(btn.name===2025){
     tmp = 1;
$scope.populationChart.xAxis.categories=[2016,2017,2018,2019,2020,2021,2022,2023,2024,2025];
$scope.populationChart.title.text="太仓市2016至2025年劳动力总人口预测值";
     $scope.GDPChart.xAxis.categories=[2016,2017,2018,2019,2020,2021,2022,2023,2024,2025];
     $scope.GDPChart.series[0].data=gdp1;
      $scope.GDPChart.title.text="太仓市2016至2025年GDP总量预测值";
    $scope.populationChart.series[0].data=popData1;
    $scope.predictChart.options.title.text="太仓市2016至2025年劳动力人口与经济关联分析预测";
     $scope.predictChart.options.xAxis.categories=[2016,2017,2018,2019,2020,2021,2022,2023,2024,2025];
  //  $scope.predictChart.yAxis[1].tickPositions=[0,50,100,150,200,250];
    $scope.predictChart.series=[{
            name: '人口(人)',
            color: '#7CB5EC',
            type: 'column',
            yAxis: 1,
            data: popData1,
            tooltip: {
                valueSuffix: '人'
            },
            tickPositions:[0,50,100,150,200,250]
        }, {
            name: '关联度',
            type: 'spline',
            color: '#AA4643',
            yAxis: 2,
            data: [0.895, 0.842, 0.7524,0.7891, 0.8512, 0.7125, 0.7951, 0.8125, 0.7415, 0.7956],
            marker: {
                enabled: true,
                symbol:"circle"
            },
            dashStyle: 'shortdot',
            tooltip: {
                valueSuffix: ''
            }

        }, {
            name: 'GDP(亿元)',
            color: '#89A54E',
            type: 'spline',
            data: gdp1,
            marker:{
               symbol:"square"
           },
            tooltip: {
                valueSuffix: '亿元'
            }
        }];
   }
   if(btn.name===2035){
     tmp = 2;
     $scope.predictChart.options.title.text="太仓市2026至2035年劳动力人口与经济关联分析预测";
     $scope.populationChart.xAxis.categories=[2026,2027,2028,2029,2030,2031,2032,2033,2034,2035];
     $scope.populationChart.title.text="太仓市2026至2035年劳动力总人口预测值";
     $scope.GDPChart.xAxis.categories=[2026,2027,2028,2029,2030,2031,2032,2033,2034,2035];
     $scope.GDPChart.series[0].data=gdp2;
      $scope.GDPChart.title.text="太仓市2026至2035年GDP总量预测值";
     $scope.populationChart.series[0].data=popData2;
    $scope.predictChart.options.xAxis.categories=[2026,2027,2028,2029,2030,2031,2032,2033,2034,2035];
    $scope.predictChart.series=[{
            name: '人口(人)',
            color: '#7CB5EC',
            type: 'column',
            yAxis: 1,
            data: popData2,
            tooltip: {
                valueSuffix: '人'
            }

        }, {
            name: '关联度',
            type: 'spline',
            color: '#AA4643',
            yAxis: 2,
            data: [0.895, 0.842, 0.7524,0.7891, 0.8512, 0.7135, 0.7951, 0.8125, 0.7415, 0.7956],
            marker: {
                enabled: true,
                symbol:"circle"
            },
            dashStyle: 'shortdot',
            tooltip: {
                valueSuffix: ''
            }

        }, {
            name: 'GDP(亿元)',
            color: '#89A54E',
            type: 'spline',
            data: gdp2,
            marker:{
               symbol:"square"
           },
            tooltip: {
                valueSuffix: '亿元'
            }
        }];
   }
   if(btn.name===2045){
     tmp = 3;
    $scope.predictChart.options.title.text="太仓市2036至2045年劳动力人口与经济关联分析预测";
     $scope.populationChart.xAxis.categories=[2036,2037,2038,2039,2040,2041,2042,2043,2044,2045];
     $scope.populationChart.title.text="太仓市2036至2045年劳动力总人口预测值";
     $scope.GDPChart.xAxis.categories=[2036,2037,2038,2039,2040,2041,2042,2043,2044,2045];
     $scope.GDPChart.series[0].data=gdp3;
     $scope.GDPChart.title.text="太仓市2036至2045年GDP总量预测值";
    $scope.populationChart.series[0].data=popData3;
    $scope.predictChart.options.xAxis.categories=[2036,2037,2038,2039,2040,2041,2042,2043,2044,2045];
    $scope.predictChart.series=[{
            name: '人口(人)',
            color: '#7CB5EC',
            type: 'column',
            yAxis: 1,
            data: popData3,
            tooltip: {
                valueSuffix: '人'
            }

        }, {
            name: '关联度',
            type: 'spline',
            color: '#AA4643',
            yAxis: 2,
            data: [0.895, 0.842, 0.8524,0.7891, 0.8512, 0.7125, 0.7951, 0.8125, 0.7415, 0.7956],
            marker: {
                enabled: true,
                symbol:"circle"
            },
            dashStyle: 'shortdot',
            tooltip: {
                valueSuffix: ''
            }

        }, {
            name: 'GDP(亿元)',
            color: '#89A54E',
            type: 'spline',
            data: gdp3,
            marker:{
                symbol:"square"
            },
            tooltip: {
                valueSuffix: '亿元'
            }
        }];
   }
};
$scope.btn_click3=function(btn){
   $scope.change3(btn);
};
$scope.change3=function(btn){
   if(btn.name===2020){
    document.getElementById("b").innerHTML="&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp结合两者的平均比重，即第一、二、三产业就业人口比重分别为"+(fpop[4]/popData1[4]*100).toFixed(1)+"%、"+(spop[4]/popData1[4]*100).toFixed(1)+"%和"+(tpop[4]/popData1[4]*100).toFixed(1)+"%。产值比重分别是"+(fgdp[4]/gdp1[4]*100).toFixed(1)
    +"%、"+(sgdp[4]/gdp1[4]*100).toFixed(1)+"%和"+(tgdp[4]/gdp1[4]*100).toFixed(1)+"%。一般情况下，随着经济发展和人均国民收入提高，第二、三产业人口将提高，第三产业人口将占绝对优势。";
    $scope.populationPie.options.title.text="太仓市2020年产业就业人口比重分析预测";
    $scope.industryPie.options.title.text="太仓市2020年产业产值比重分析预测";
    $scope.populationPie.series=[{
            type: 'pie',
            data: [
            ['第一产业人口',fpop[4]/10000],
                ['第二产业人口',spop[4]/10000],
                ['第三产业人口',tpop[4]/10000]
                ]
        }];
    $scope.industryPie.series=[{
            type: 'pie',
            name: '',
            data: [
               ['第一产业产值',fgdp[4]],
                ['第二产业产值',sgdp[4]],//692.1345
                ['第三产业产值',tgdp[4]]
            ]
        }];
   }
   if(btn.name===2025){
    document.getElementById("b").innerHTML="&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp结合两者的平均比重，即第一、二、三产业就业人口比重分别为"+(fpop[9]/popData1[9]*100).toFixed(1)+"%、"+(spop[9]/popData1[9]*100).toFixed(1)+"%和"+(tpop[9]/popData1[9]*100).toFixed(1)+"%。产值比重分别是"+(fgdp[9]/gdp1[9]*100).toFixed(1)
    +"%、"+(sgdp[9]/gdp1[9]*100).toFixed(1)+"%和"+(tgdp[9]/gdp1[9]*100).toFixed(1)+"%。一般情况下，随着经济发展和人均国民收入提高，第二、三产业人口将提高，第三产业人口将占绝对优势。";
    $scope.populationPie.options.title.text="太仓市2025年产业就业人口比重分析预测";
    $scope.industryPie.options.title.text="太仓市2025年产业产值比重分析预测";
    $scope.populationPie.series=[{
            type: 'pie',
            data: [
             ['第一产业人口',fpop[9]/10000],//
                ['第二产业人口',spop[9]/10000],
                ['第三产业人口',tpop[9]/10000]
                ]
        }];
    $scope.industryPie.series=[{
            type: 'pie',
            name: '',
            data: [
               ['第一产业产值',fgdp[9]],
                ['第二产业产值',sgdp[9]],
                ['第三产业产值',tgdp[9]]//1092.05
            ]
        }];
   }
   if(btn.name===2030){
    document.getElementById("b").innerHTML="&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp结合两者的平均比重，即第一、二、三产业就业人口比重分别为"+(fpop[14]/popData2[4]*100).toFixed(1)+"%、"+(spop[14]/popData2[4]*100).toFixed(1)+"%和"+(tpop[14]/popData2[4]*100).toFixed(1)+"%。产值比重分别是"+(fgdp[14]/gdp2[4]*100).toFixed(1)
    +"%、"+(sgdp[14]/gdp2[4]*100).toFixed(1)+"%和"+(tgdp[14]/gdp2[4]*100).toFixed(1)+"%。一般情况下，随着经济发展和人均国民收入提高，第二、三产业人口将提高，第三产业人口将占绝对优势。";
    $scope.populationPie.options.title.text="太仓市2030年产业就业人口比重分析预测";
    $scope.industryPie.options.title.text="太仓市2030年产业产值比重分析预测";
    $scope.populationPie.series=[{
            type: 'pie',
            data: [
                ['第一产业人口',fpop[14]/10000],
                ['第二产业人口',spop[14]/10000],
                ['第三产业人口',tpop[14]/10000]
                ]
        }];
    $scope.industryPie.series=[{
            type: 'pie',
            name: '',
            data: [
               ['第一产业产值',fgdp[14]],
                ['第二产业产值',sgdp[14]],
                ['第三产业产值',tgdp[14]]//
            ]
        }];
   }
   if(btn.name===2035){
    document.getElementById("b").innerHTML="&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp结合两者的平均比重，即第一、二、三产业就业人口比重分别为"+(fpop[19]/popData2[9]*100).toFixed(1)+"%、"+(spop[19]/popData2[9]*100).toFixed(1)+"%和"+(tpop[19]/popData2[9]*100).toFixed(1)+"%。产值比重分别是"+(fgdp[19]/gdp2[9]*100).toFixed(1)
    +"%、"+(sgdp[19]/gdp2[9]*100).toFixed(1)+"%和"+(tgdp[19]/gdp2[9]*100).toFixed(1)+"%。一般情况下，随着经济发展和人均国民收入提高，第二、三产业人口将提高，第三产业人口将占绝对优势。";
    $scope.populationPie.options.title.text="太仓市2035年产业就业人口比重分析预测";
    $scope.industryPie.options.title.text="太仓市2035年产业产值比重分析预测";
    $scope.populationPie.series=[{
            type: 'pie',
            data: [
                ['第一产业人口',fpop[19]/10000],
                ['第二产业人口',spop[19]/10000],
                ['第三产业人口',tpop[19]/10000]
                ]
        }];
    $scope.industryPie.series=[{
            type: 'pie',
            name: '',
            data: [
               ['第一产业产值',fgdp[19]],
                ['第二产业产值',sgdp[19]],
                ['第三产业产值',tgdp[19]]
            ]
        }];
   }
   if(btn.name===2040){
    document.getElementById("b").innerHTML="&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp结合两者的平均比重，即第一、二、三产业就业人口比重分别为"+(fpop[24]/popData3[4]*100).toFixed(1)+"%、"+(spop[24]/popData3[4]*100).toFixed(1)+"%和"+(tpop[24]/popData3[4]*100).toFixed(1)+"%。产值比重分别是"+(fgdp[24]/gdp3[4]*100).toFixed(1)
    +"%、"+(sgdp[24]/gdp3[4]*100).toFixed(1)+"%和"+(tgdp[24]/gdp3[4]*100).toFixed(1)+"%。一般情况下，随着经济发展和人均国民收入提高，第二、三产业人口将提高，第三产业人口将占绝对优势。";
    $scope.populationPie.options.title.text="太仓市2040年产业就业人口比重分析预测";
    $scope.industryPie.options.title.text="太仓市2040年产业产值比重分析预测";
    $scope.populationPie.series=[{
            type: 'pie',
            data: [
                ['第一产业人口',fpop[24]/10000],
                ['第二产业人口',spop[24]/10000],
                ['第三产业人口',tpop[24]/10000]
                ]
        }];
    $scope.industryPie.series=[{
            type: 'pie',
            name: '',
            data: [
               ['第一产业产值',fgdp[24]],
                ['第二产业产值',sgdp[24]],
                ['第三产业产值',tgdp[24]]
            ]
        }];
   }
   if(btn.name===2045){
    document.getElementById("b").innerHTML="&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp结合两者的平均比重，即第一、二、三产业就业人口比重分别为"+(fpop[29]/popData3[9]*100).toFixed(1)+"%、"+(spop[29]/popData3[9]*100).toFixed(1)+"%和"+(tpop[29]/popData3[9]*100).toFixed(1)+"%。产值比重分别是"+(fgdp[29]/gdp3[9]*100).toFixed(1)
    +"%、"+(sgdp[29]/gdp3[9]*100).toFixed(1)+"%和"+(tgdp[29]/gdp3[9]*100).toFixed(1)+"%。一般情况下，随着经济发展和人均国民收入提高，第二、三产业人口将提高，第三产业人口将占绝对优势。";
    $scope.populationPie.options.title.text="太仓市2045年产业就业人口比重分析预测";
    $scope.industryPie.options.title.text="太仓市2045年产业产值比重分析预测";
    $scope.populationPie.series=[{
            type: 'pie',
            data: [
                ['第一产业人口',fpop[29]/10000],
                ['第二产业人口',spop[29]/10000],
                ['第三产业人口',tpop[29]/10000]
                ]
        }];
    $scope.industryPie.series=[{
            type: 'pie',
            name: '',
            data: [
               ['第一产业产值',fgdp[29]],
                ['第二产业产值',sgdp[29]],
                ['第三产业产值',tgdp[29]]
            ]
        }];
   }
};
$scope.btn_click2=function(btn){
   $scope.change2(btn);
};
$scope.change2=function(btn){
   if(btn.name===2020){
    $scope.totaldata = {

    tabledata:
     [
     {yearvalue:'指标', Fp:'第一产业人口',Sp:'第二产业人口',Tp:'第三产业人口'},
      {yearvalue:'第一产业产值', Fp:'0.9542',Sp:'0.4293',Tp:'0.3116'},
      {yearvalue:'第二产业产值', Fp:'0.4101',Sp:'0.9724',Tp:'0.6647'},
      {yearvalue:'第三产业产值', Fp:'0.7624',Sp:'0.4624',Tp:'0.9588'},
      {yearvalue:'人均GDP', Fp:'0.7484',Sp:'0.7483',Tp:'0.8396'},
      {yearvalue:'地方生产总值', Fp:'0.5469',Sp:'0.7483',Tp:'0.8589'},
      {yearvalue:'社会消费品零售总额', Fp:'0.3598',Sp:'0.6597',Tp:'0.8531'}

    ]
  };
    require(
            [
                'echarts',
                'echarts/chart/chord',
                'echarts/chart/force' // 使用柱状图就加载bar模块，按需加载
            ],
            function (ec) {
                // 基于准备好的dom，初始化echarts图表
                var myChart = ec.init(document.getElementById('main'));

                var option = {
    title : {
        text: '太仓市2020年劳动力人口与各项经济指标关联度分析预测',
         textStyle:{
            fontWeight:'normal',
            fontFamily:'Lucida Sans Unicode',
            fontSize:'18',
            color:"#000000"
        },
        x:'center',
        y:'top'
    },
    tooltip : {
        trigger: 'item',
        formatter: function (params) {
            if (params.indicator2) {    // is edge
                return params.indicator2 + ' ' + params.name + ' ' + params.indicator;
            } else {    // is node
                return params.name
            }
        }
    },
    toolbox: {
        show : true,
        feature : {
            restore : {show: true},
            magicType: {show: true, type: ['force', 'chord']},
            saveAsImage : {show: true}
        }
    },
    legend: {
        x: 'center',
        y: 'bottom',
        itemGap:20,
        data:['第一产业人口', '第二产业人口', '第三产业人口'],
        textStyle:{
            fontWeight:'normal'
        }
    },
    series : [
        {
            type:'chord',
            sort : 'ascending',
            sortSub : 'descending',
            showScale : false,
            itemStyle : {
                normal : {
                    label : {
                        rotate : false
                    }
                }
            },
            // 使用 nodes links 表达和弦图
            nodes: [
                {name:'总人口'},
                {name:'人口密度'},
                {name:'人口出生率'},
                {name:'人口自然增长率'},
                {name:'人口死亡率'},
                {name:'第一产业人口'},
                {name:'第二产业人口'},
                {name:'第三产业人口'},
                {name:'城镇人口'},
                {name:'乡村人口'},
                {name:'地方生产总值'},
                {name:'第一产业产值'},
                {name:'第二产业产值'},
                {name:'第三产业产值'},
                {name:'人均GDP'},
                {name:'社会消费品零售总额'}

            ],
            links: [
                 {source: '第一产业人口', target: '地方生产总值', weight: 0.5469,name:'0.5469关联'},
                {source: '第一产业人口', target: '第一产业产值', weight: 0.9542,name:'0.9542关联'},
                {source: '第一产业人口', target: '第二产业产值', weight: 0.4101,name:'0.4101关联'},
                {source: '第一产业人口', target: '第三产业产值', weight: 0.7624,name:'0.7624关联'},
                {source: '第一产业人口', target: '人均GDP', weight: 0.7484,name:'0.7484关联'},
                {source: '第一产业人口', target: '社会消费品零售总额', weight: 0.3598,name:'0.3598关联'},
                {source: '第二产业人口', target: '地方生产总值', weight: 0.7483,name:'0.7483关联'},
                {source: '第二产业人口', target: '第一产业产值', weight: 0.4293,name:'0.4293关联'},
                {source: '第二产业人口', target: '第二产业产值', weight: 0.9724,name:'0.9724关联'},
                {source: '第二产业人口', target: '第三产业产值', weight: 0.4624,name:'0.4624关联'},
                {source: '第二产业人口', target: '人均GDP', weight: 0.7483,name:'0.7483关联'},
                {source: '第二产业人口', target: '社会消费品零售总额', weight: 0.6597,name:'0.6597关联'},
                {source: '第三产业人口', target: '地方生产总值', weight: 0.8589,name:'0.8589关联'},
                {source: '第三产业人口', target: '第一产业产值', weight: 0.3116,name:'0.3116关联'},
                {source: '第三产业人口', target: '第二产业产值', weight: 0.6647,name:'0.6647关联'},
                {source: '第三产业人口', target: '第三产业产值', weight: 0.9588,name:'0.9588关联'},
                {source: '第三产业人口', target: '人均GDP', weight: 0.8396,name:'0.8396关联'},
                {source: '第三产业人口', target: '社会消费品零售总额', weight: 0.8531,name:'0.8531关联'},

                // Ribbon Type 的和弦图每一对节点之间必须是双向边
                {target: '第一产业人口', source: '地方生产总值', weight: 0.5469},
                {target: '第一产业人口', source: '第一产业产值', weight: 0.9542},
                {target: '第一产业人口', source: '第二产业产值', weight: 0.4101},
                {target: '第一产业人口', source: '第三产业产值', weight: 0.7624},
                {target: '第一产业人口', source: '人均GDP', weight: 0.7484},
                {target: '第一产业人口', source: '社会消费品零售总额', weight: 0.3598},
                {target: '第二产业人口', source: '地方生产总值', weight: 0.7483},
                {target: '第二产业人口', source: '第一产业产值', weight: 0.4293},
                {target: '第二产业人口', source: '第二产业产值', weight: 0.9724},
                {target: '第二产业人口', source: '第三产业产值', weight: 0.4624},
                {target: '第二产业人口', source: '人均GDP', weight: 0.7483},
                {target: '第二产业人口', source: '社会消费品零售总额', weight: 0.6597},
                {target: '第三产业人口', source: '地方生产总值', weight: 0.8589},
                {target: '第三产业人口', source: '第一产业产值', weight: 0.3116},
                {target: '第三产业人口', source: '第二产业产值', weight: 0.6647},
                {target: '第三产业人口', source: '第三产业产值', weight: 0.9588},
                {target: '第三产业人口', source: '人均GDP', weight: 0.8396},
                {target: '第三产业人口', source: '社会消费品零售总额', weight: 0.8531}
            ]
        }
    ]
};


                // 为echarts对象加载数据
                myChart.setOption(option);
            }
        );
   }
   if(btn.name===2025){
     $scope.totaldata = {

    tabledata:
    [
      {yearvalue:'指标', Fp:'第一产业人口',Sp:'第二产业人口',Tp:'第三产业人口'},
      {yearvalue:'第一产业产值', Fp:'0.9569',Sp:'0.3145',Tp:'0.2185'},
      {yearvalue:'第二产业产值', Fp:'0.2185',Sp:'0.9582',Tp:'0.4156'},
      {yearvalue:'第三产业产值', Fp:'0.2456',Sp:'0.5214',Tp:'0.9102'},
      {yearvalue:'人均GDP', Fp:'0.9245',Sp:'0.8241',Tp:'0.8851'},
      {yearvalue:'地方生产总值', Fp:'0.6125',Sp:'0.8521',Tp:'0.7589'},
      {yearvalue:'社会消费品零售总额', Fp:'0.6125',Sp:'0.7797',Tp:'0.8531'}

    ]
  };
    require(
            [
                'echarts',
                'echarts/chart/chord',
                'echarts/chart/force' // 使用柱状图就加载bar模块，按需加载
            ],
            function (ec) {
                // 基于准备好的dom，初始化echarts图表
                var myChart = ec.init(document.getElementById('main'));

                var option = {
    title : {
        text: '太仓市2025年劳动力人口与各项经济指标关联度分析预测',
         textStyle:{
            fontWeight:'normal',
            fontFamily:'Lucida Sans Unicode',
            fontSize:'18',
            color:"#000000"
        },
        x:'center',
        y:'top'
    },
    tooltip : {
        trigger: 'item',
        formatter: function (params) {
            if (params.indicator2) {    // is edge
                return params.indicator2 + ' ' + params.name + ' ' + params.indicator;
            } else {    // is node
                return params.name
            }
        }
    },
    toolbox: {
        show : true,
        feature : {
            restore : {show: true},
            magicType: {show: true, type: ['force', 'chord']},
            saveAsImage : {show: true}
        }
    },
    legend: {
        x: 'center',
        y: 'bottom',
        itemGap:20,
        data:['第一产业人口', '第二产业人口', '第三产业人口'],
        textStyle:{
            fontWeight:'normal'
        }
    },
    series : [
        {
            type:'chord',
            sort : 'ascending',
            sortSub : 'descending',
            showScale : false,
            itemStyle : {
                normal : {
                    label : {
                        rotate : false
                    }
                }
            },
            // 使用 nodes links 表达和弦图
            nodes: [
                {name:'总人口'},
                {name:'人口密度'},
                {name:'人口出生率'},
                {name:'人口自然增长率'},
                {name:'人口死亡率'},
                {name:'第一产业人口'},
                {name:'第二产业人口'},
                {name:'第三产业人口'},
                {name:'城镇人口'},
                {name:'乡村人口'},
                {name:'地方生产总值'},
                {name:'第一产业产值'},
                {name:'第二产业产值'},
                {name:'第三产业产值'},
                {name:'人均GDP'},
                {name:'社会消费品零售总额'}

            ],
            links: [
                {source: '第一产业人口', target: '地方生产总值', weight: 0.8469,name:'0.8469关联'},
                {source: '第一产业人口', target: '第一产业产值', weight: 0.9569,name:'0.9569关联'},
                {source: '第一产业人口', target: '第二产业产值', weight: 0.3145,name:'0.3145关联'},
                {source: '第一产业人口', target: '第三产业产值', weight: 0.2185,name:'0.2185关联'},
                {source: '第一产业人口', target: '人均GDP', weight: 0.9245,name:'0.9245关联'},
                {source: '第一产业人口', target: '社会消费品零售总额', weight: 0.6125,name:'0.6125关联'},
                {source: '第二产业人口', target: '地方生产总值', weight: 0.8521,name:'0.8521关联'},
                {source: '第二产业人口', target: '第一产业产值', weight: 0.2185,name:'0.2185关联'},
                {source: '第二产业人口', target: '第二产业产值', weight: 0.9582,name:'0.9582关联'},
                {source: '第二产业人口', target: '第三产业产值', weight: 0.4156,name:'0.4156关联'},
                {source: '第二产业人口', target: '人均GDP', weight: 0.8241,name:'0.8241关联'},
                {source: '第二产业人口', target: '社会消费品零售总额', weight: 0.7797,name:'0.7797关联'},
                {source: '第三产业人口', target: '地方生产总值', weight: 0.7589,name:'0.7589关联'},
                {source: '第三产业人口', target: '第一产业产值', weight: 0.2456,name:'0.2456关联'},
                {source: '第三产业人口', target: '第二产业产值', weight: 0.5214,name:'0.5214关联'},
                {source: '第三产业人口', target: '第三产业产值', weight: 0.9102,name:'0.9102关联'},
                {source: '第三产业人口', target: '人均GDP', weight: 0.8851,name:'0.8851关联'},
                {source: '第三产业人口', target: '社会消费品零售总额', weight: 0.8531,name:'0.8531关联'},

                // Ribbon Type 的和弦图每一对节点之间必须是双向边
                {target: '第一产业人口', source: '地方生产总值', weight: 0.8469},
                {target: '第一产业人口', source: '第一产业产值', weight: 0.9569},
                {target: '第一产业人口', source: '第二产业产值', weight: 0.3145},
                {target: '第一产业人口', source: '第三产业产值', weight: 0.2185},
                {target: '第一产业人口', source: '人均GDP', weight: 0.9245},
                {target: '第一产业人口', source: '社会消费品零售总额', weight: 0.6125},
                {target: '第二产业人口', source: '地方生产总值', weight: 0.8521},
                {target: '第二产业人口', source: '第一产业产值', weight: 0.2185},
                {target: '第二产业人口', source: '第二产业产值', weight: 0.9582},
                {target: '第二产业人口', source: '第三产业产值', weight: 0.4156},
                {target: '第二产业人口', source: '人均GDP', weight: 0.8241},
                {target: '第二产业人口', source: '社会消费品零售总额', weight: 0.7797},
                {target: '第三产业人口', source: '地方生产总值', weight: 0.7589},
                {target: '第三产业人口', source: '第一产业产值', weight: 0.2456},
                {target: '第三产业人口', source: '第二产业产值', weight: 0.5214},
                {target: '第三产业人口', source: '第三产业产值', weight: 0.9102},
                {target: '第三产业人口', source: '人均GDP', weight: 0.8851},
                {target: '第三产业人口', source: '社会消费品零售总额', weight: 0.8531}
            ]
        }
    ]
};


                // 为echarts对象加载数据
                myChart.setOption(option);
            }
        );
   }
   if(btn.name===2030){
     $scope.totaldata = {

    tabledata:
    [
      {yearvalue:'指标', Fp:'第一产业人口',Sp:'第二产业人口',Tp:'第三产业人口'},
      {yearvalue:'第一产业产值', Fp:'0.9021',Sp:'0.3698',Tp:'0.2541'},
      {yearvalue:'第二产业产值', Fp:'0.3561',Sp:'0.9521',Tp:'0.6214'},
      {yearvalue:'第三产业产值', Fp:'0.2256',Sp:'0.6245',Tp:'0.9561'},
      {yearvalue:'人均GDP', Fp:'0.6214',Sp:'0.7183',Tp:'0.8196'},
      {yearvalue:'地方生产总值', Fp:'0.8269',Sp:'0.7349',Tp:'0.7189'},
      {yearvalue:'社会消费品零售总额', Fp:'0.8898',Sp:'0.8097',Tp:'0.7631'}

    ]
  };
    require(
            [
                'echarts',
                'echarts/chart/chord',
                'echarts/chart/force' // 使用柱状图就加载bar模块，按需加载
            ],
            function (ec) {
                // 基于准备好的dom，初始化echarts图表
                var myChart = ec.init(document.getElementById('main'));

                var option = {
    title : {
        text: '太仓市2030年劳动力人口与各项经济指标关联度分析预测',
         textStyle:{
            fontWeight:'normal',
            fontFamily:'Lucida Sans Unicode',
            fontSize:'18',
            color:"#000000"
        },
        x:'center',
        y:'top'
    },
    tooltip : {
        trigger: 'item',
        formatter: function (params) {
            if (params.indicator2) {    // is edge
                return params.indicator2 + ' ' + params.name + ' ' + params.indicator;
            } else {    // is node
                return params.name
            }
        }
    },
    toolbox: {
        show : true,
        feature : {
            restore : {show: true},
            magicType: {show: true, type: ['force', 'chord']},
            saveAsImage : {show: true}
        }
    },
    legend: {
        x: 'center',
        y: 'bottom',
        itemGap:20,
        data:['第一产业人口', '第二产业人口', '第三产业人口'],
        textStyle:{
            fontWeight:'normal'
        }
    },
    series : [
        {
            type:'chord',
            sort : 'ascending',
            sortSub : 'descending',
            showScale : false,
            itemStyle : {
                normal : {
                    label : {
                        rotate : false
                    }
                }
            },
            // 使用 nodes links 表达和弦图
            nodes: [
                {name:'总人口'},
                {name:'人口密度'},
                {name:'人口出生率'},
                {name:'人口自然增长率'},
                {name:'人口死亡率'},
                {name:'第一产业人口'},
                {name:'第二产业人口'},
                {name:'第三产业人口'},
                {name:'城镇人口'},
                {name:'乡村人口'},
                {name:'地方生产总值'},
                {name:'第一产业产值'},
                {name:'第二产业产值'},
                {name:'第三产业产值'},
                {name:'人均GDP'},
                {name:'社会消费品零售总额'}

            ],
            links: [
                {source: '第一产业人口', target: '地方生产总值', weight: 0.8269,name:'0.8269关联'},
                {source: '第一产业人口', target: '第一产业产值', weight: 0.9021,name:'0.9021关联'},
                {source: '第一产业人口', target: '第二产业产值', weight: 0.3698,name:'0.3698关联'},
                {source: '第一产业人口', target: '第三产业产值', weight: 0.2541,name:'0.2541关联'},
                {source: '第一产业人口', target: '人均GDP', weight: 0.6214,name:'0.6214关联'},
                {source: '第一产业人口', target: '社会消费品零售总额', weight: 0.8898,name:'0.8898关联'},
                {source: '第二产业人口', target: '地方生产总值', weight: 0.7349,name:'0.7349关联'},
                {source: '第二产业人口', target: '第一产业产值', weight: 0.3561,name:'0.3561关联'},
                {source: '第二产业人口', target: '第二产业产值', weight: 0.9521,name:'0.9521关联'},
                {source: '第二产业人口', target: '第三产业产值', weight: 0.6214,name:'0.6214关联'},
                {source: '第二产业人口', target: '人均GDP', weight: 0.7183,name:'0.7183关联'},
                {source: '第二产业人口', target: '社会消费品零售总额', weight: 0.8097,name:'0.8097关联'},
                {source: '第三产业人口', target: '地方生产总值', weight: 0.7189,name:'0.7189关联'},
                {source: '第三产业人口', target: '第一产业产值', weight: 0.2256,name:'0.2256关联'},
                {source: '第三产业人口', target: '第二产业产值', weight: 0.6245,name:'0.6245关联'},
                {source: '第三产业人口', target: '第三产业产值', weight: 0.9561,name:'0.9561关联'},
                {source: '第三产业人口', target: '人均GDP', weight: 0.8196,name:'0.8196关联'},
                {source: '第三产业人口', target: '社会消费品零售总额', weight: 0.7631,name:'0.7631关联'},

                // Ribbon Type 的和弦图每一对节点之间必须是双向边
                {target: '第一产业人口', source: '地方生产总值', weight: 0.8269},
                {target: '第一产业人口', source: '第一产业产值', weight: 0.9021},
                {target: '第一产业人口', source: '第二产业产值', weight: 0.3698},
                {target: '第一产业人口', source: '第三产业产值', weight: 0.2541},
                {target: '第一产业人口', source: '人均GDP', weight: 0.6214},
                {target: '第一产业人口', source: '社会消费品零售总额', weight: 0.8898},
                {target: '第二产业人口', source: '地方生产总值', weight: 0.7349},
                {target: '第二产业人口', source: '第一产业产值', weight: 0.3561},
                {target: '第二产业人口', source: '第二产业产值', weight: 0.9521},
                {target: '第二产业人口', source: '第三产业产值', weight: 0.6214},
                {target: '第二产业人口', source: '人均GDP', weight: 0.7183},
                {target: '第二产业人口', source: '社会消费品零售总额', weight: 0.8097},
                {target: '第三产业人口', source: '地方生产总值', weight: 0.7189},
                {target: '第三产业人口', source: '第一产业产值', weight: 0.2256},
                {target: '第三产业人口', source: '第二产业产值', weight: 0.6245},
                {target: '第三产业人口', source: '第三产业产值', weight: 0.9561},
                {target: '第三产业人口', source: '人均GDP', weight: 0.8196},
                {target: '第三产业人口', source: '社会消费品零售总额', weight: 0.7631}
            ]
        }
    ]
};


                // 为echarts对象加载数据
                myChart.setOption(option);
            }
        );
   }
   if(btn.name===2045){
     $scope.totaldata = {

    tabledata:
    [
      {yearvalue:'指标', Fp:'第一产业人口',Sp:'第二产业人口',Tp:'第三产业人口'},

      {yearvalue:'第一产业产值', Fp:'0.9395',Sp:'0.4193',Tp:'0.4116'},
      {yearvalue:'第二产业产值', Fp:'0.4425',Sp:'0.9724',Tp:'0.5947'},
      {yearvalue:'第三产业产值', Fp:'0.4924',Sp:'0.5824',Tp:'0.9488'},
      {yearvalue:'人均GDP', Fp:'0.4184',Sp:'0.6583',Tp:'0.7196'},
      {yearvalue:'地方生产总值', Fp:'0.4569',Sp:'0.6249',Tp:'0.7589'},
      {yearvalue:'社会消费品零售总额', Fp:'0.4498',Sp:'0.6997',Tp:'0.7631'}



    ]
  };
    require(
            [
                'echarts',
                'echarts/chart/chord',
                'echarts/chart/force' // 使用柱状图就加载bar模块，按需加载
            ],
            function (ec) {
                // 基于准备好的dom，初始化echarts图表
                var myChart = ec.init(document.getElementById('main'));

                var option = {
    title : {
        text: '太仓市2045年劳动力人口与各项经济指标关联度分析预测',
         textStyle:{
            fontWeight:'normal',
            fontFamily:'Lucida Sans Unicode',
            fontSize:'18',
            color:"#000000"
        },
        x:'center',
        y:'top'
    },
    tooltip : {
        trigger: 'item',
        formatter: function (params) {
            if (params.indicator2) {    // is edge
                return params.indicator2 + ' ' + params.name + ' ' + params.indicator;
            } else {    // is node
                return params.name
            }
        }
    },
    toolbox: {
        show : true,
        feature : {
            restore : {show: true},
            magicType: {show: true, type: ['force', 'chord']},
            saveAsImage : {show: true}
        }
    },
    legend: {
        x: 'center',
        y: 'bottom',
        itemGap:20,
        data:['第一产业人口', '第二产业人口', '第三产业人口'],
        textStyle:{
            fontWeight:'normal'
        }
    },
    series : [
        {
            type:'chord',
            sort : 'ascending',
            sortSub : 'descending',
            showScale : false,
            itemStyle : {
                normal : {
                    label : {
                        rotate : false
                    }
                }
            },
            // 使用 nodes links 表达和弦图
            nodes: [
                {name:'总人口'},
                {name:'人口密度'},
                {name:'人口出生率'},
                {name:'人口自然增长率'},
                {name:'人口死亡率'},
                {name:'第一产业人口'},
                {name:'第二产业人口'},
                {name:'第三产业人口'},
                {name:'城镇人口'},
                {name:'乡村人口'},
                {name:'地方生产总值'},
                {name:'第一产业产值'},
                {name:'第二产业产值'},
                {name:'第三产业产值'},
                {name:'人均GDP'},
                {name:'社会消费品零售总额'}

            ],
            links: [

                {source: '第一产业人口', target: '地方生产总值', weight: 0.4569,name:'0.4569关联'},
                {source: '第一产业人口', target: '第一产业产值', weight: 0.9395,name:'0.9395关联'},
                {source: '第一产业人口', target: '第二产业产值', weight: 0.4425,name:'0.4425关联'},
                {source: '第一产业人口', target: '第三产业产值', weight: 0.4924,name:'0.4924关联'},
                {source: '第一产业人口', target: '人均GDP', weight: 0.4184,name:'0.4184关联'},
                {source: '第一产业人口', target: '社会消费品零售总额', weight: 0.4498,name:'0.4498关联'},
                {source: '第二产业人口', target: '地方生产总值', weight: 0.6249,name:'0.6249关联'},
                {source: '第二产业人口', target: '第一产业产值', weight: 0.4193,name:'0.4193关联'},
                {source: '第二产业人口', target: '第二产业产值', weight: 0.9724,name:'0.9724关联'},
                {source: '第二产业人口', target: '第三产业产值', weight: 0.5824,name:'0.5824关联'},
                {source: '第二产业人口', target: '人均GDP', weight: 0.6583,name:'0.6583关联'},
                {source: '第二产业人口', target: '社会消费品零售总额', weight: 0.6997,name:'0.6997关联'},
                {source: '第三产业人口', target: '地方生产总值', weight: 0.7589,name:'0.7589关联'},
                {source: '第三产业人口', target: '第一产业产值', weight: 0.4116,name:'0.4116关联'},
                {source: '第三产业人口', target: '第二产业产值', weight: 0.5947,name:'0.5947关联'},
                {source: '第三产业人口', target: '第三产业产值', weight: 0.9488,name:'0.9488关联'},
                {source: '第三产业人口', target: '人均GDP', weight: 0.7196,name:'0.7196关联'},
                {source: '第三产业人口', target: '社会消费品零售总额', weight: 0.7631,name:'0.7631关联'},

                // Ribbon Type 的和弦图每一对节点之间必须是双向边
                {target: '第一产业人口', source: '地方生产总值', weight: 0.4569},
                {target: '第一产业人口', source: '第一产业产值', weight: 0.9395},
                {target: '第一产业人口', source: '第二产业产值', weight: 0.4425},
                {target: '第一产业人口', source: '第三产业产值', weight: 0.4924},
                {target: '第一产业人口', source: '人均GDP', weight: 0.4184},
                {target: '第一产业人口', source: '社会消费品零售总额', weight: 0.4498},
                {target: '第二产业人口', source: '地方生产总值', weight: 0.6249},
                {target: '第二产业人口', source: '第一产业产值', weight: 0.4193},
                {target: '第二产业人口', source: '第二产业产值', weight: 0.9724},
                {target: '第二产业人口', source: '第三产业产值', weight: 0.5824},
                {target: '第二产业人口', source: '人均GDP', weight: 0.6583},
                {target: '第二产业人口', source: '社会消费品零售总额', weight: 0.6997},
                {target: '第三产业人口', source: '地方生产总值', weight: 0.7589},
                {target: '第三产业人口', source: '第一产业产值', weight: 0.4116},
                {target: '第三产业人口', source: '第二产业产值', weight: 0.5947},
                {target: '第三产业人口', source: '第三产业产值', weight: 0.9488},
                {target: '第三产业人口', source: '人均GDP', weight: 0.7196},
                {target: '第三产业人口', source: '社会消费品零售总额', weight: 0.7631}


            ]
        }
    ]
};


                // 为echarts对象加载数据
                myChart.setOption(option);
            }
        );
   }
   if(btn.name===2035){
     $scope.totaldata = {

    tabledata:
    [
      {yearvalue:'指标', Fp:'第一产业人口',Sp:'第二产业人口',Tp:'第三产业人口'},
      {yearvalue:'第一产业产值', Fp:'0.9180',Sp:'0.2173',Tp:'0.7234'},
      {yearvalue:'第二产业产值', Fp:'0.2145',Sp:'0.9214',Tp:'0.5624'},
      {yearvalue:'第三产业产值', Fp:'0.2154',Sp:'0.6214',Tp:'0.9012'},
      {yearvalue:'人均GDP', Fp:'0.7378',Sp:'0.7425',Tp:'0.7457'},
      {yearvalue:'地方生产总值', Fp:'0.7610',Sp:'0.7631',Tp:'0.7631'},
      {yearvalue:'社会消费品零售总额', Fp:'0.7517',Sp:'0.7554',Tp:'0.7577'}

    ]
  };
    require(
            [
                'echarts',
                'echarts/chart/chord',
                'echarts/chart/force' // 使用柱状图就加载bar模块，按需加载
            ],
            function (ec) {
                // 基于准备好的dom，初始化echarts图表
                var myChart = ec.init(document.getElementById('main'));

                var option = {
    title : {
        text: '太仓市2035年劳动力人口与各项经济指标关联度分析预测',
         textStyle:{
            fontWeight:'normal',
            fontFamily:'Lucida Sans Unicode',
            fontSize:'18',
            color:"#000000"
        },
        x:'center',
        y:'top'
    },
    tooltip : {
        trigger: 'item',
        formatter: function (params) {
            if (params.indicator2) {    // is edge
                return params.indicator2 + ' ' + params.name + ' ' + params.indicator;
            } else {    // is node
                return params.name
            }
        }
    },
    toolbox: {
        show : true,
        feature : {
            restore : {show: true},
            magicType: {show: true, type: ['force', 'chord']},
            saveAsImage : {show: true}
        }
    },
    legend: {
        x: 'center',
        y: 'bottom',
        itemGap:20,
        data:['第一产业人口', '第二产业人口', '第三产业人口'],
        textStyle:{
            fontWeight:'normal'
        }
    },
    series : [
        {
            type:'chord',
            sort : 'ascending',
            sortSub : 'descending',
            showScale : false,
            itemStyle : {
                normal : {
                    label : {
                        rotate : false
                    }
                }
            },
            // 使用 nodes links 表达和弦图
            nodes: [
                {name:'总人口'},
                {name:'人口密度'},
                {name:'人口出生率'},
                {name:'人口自然增长率'},
                {name:'人口死亡率'},
                {name:'第一产业人口'},
                {name:'第二产业人口'},
                {name:'第三产业人口'},
                {name:'城镇人口'},
                {name:'乡村人口'},
                {name:'地方生产总值'},
                {name:'第一产业产值'},
                {name:'第二产业产值'},
                {name:'第三产业产值'},
                {name:'人均GDP'},
                {name:'社会消费品零售总额'}

            ],
            links: [
                {source: '第一产业人口', target: '地方生产总值', weight: 0.7546,name:'0.7546关联'},
                {source: '第一产业人口', target: '第一产业产值', weight: 0.9180,name:'0.9180关联'},
                {source: '第一产业人口', target: '第二产业产值', weight: 0.2173,name:'0.2173关联'},
                {source: '第一产业人口', target: '第三产业产值', weight: 0.7234,name:'0.7234关联'},
                {source: '第一产业人口', target: '人均GDP', weight: 0.7378,name:'0.7378关联'},
                {source: '第一产业人口', target: '社会消费品零售总额', weight: 0.7517,name:'0.7517关联'},
                {source: '第二产业人口', target: '地方生产总值', weight: 0.7610,name:'0.7610关联'},
                {source: '第二产业人口', target: '第一产业产值', weight: 0.2145,name:'0.2145关联'},
                {source: '第二产业人口', target: '第二产业产值', weight: 0.9214,name:'0.9214关联'},
                {source: '第二产业人口', target: '第三产业产值', weight: 0.5624,name:'0.5624关联'},
                {source: '第二产业人口', target: '人均GDP', weight: 0.7425,name:'0.7425关联'},
                {source: '第二产业人口', target: '社会消费品零售总额', weight: 0.7554,name:'0.7554关联'},
                {source: '第三产业人口', target: '地方生产总值', weight: 0.7631,name:'0.7631关联'},
                {source: '第三产业人口', target: '第一产业产值', weight: 0.2154,name:'0.2154关联'},
                {source: '第三产业人口', target: '第二产业产值', weight: 0.6214,name:'0.6214关联'},
                {source: '第三产业人口', target: '第三产业产值', weight: 0.9012,name:'0.9012关联'},
                {source: '第三产业人口', target: '人均GDP', weight:0.7457,name:'0.7457关联'},
                {source: '第三产业人口', target: '社会消费品零售总额', weight: 0.7577,name:'0.7577关联'},

                // Ribbon Type 的和弦图每一对节点之间必须是双向边
                {target: '第一产业人口', source: '地方生产总值', weight: 0.7546},
                {target: '第一产业人口', source: '第一产业产值', weight: 0.9180},
                {target: '第一产业人口', source: '第二产业产值', weight: 0.2173},
                {target: '第一产业人口', source: '第三产业产值', weight:0.7234},
                {target: '第一产业人口', source: '人均GDP', weight: 0.7378},
                {target: '第一产业人口', source: '社会消费品零售总额', weight: 0.7517},
                {target: '第二产业人口', source: '地方生产总值', weight: 0.7610},
                {target: '第二产业人口', source: '第一产业产值', weight: 0.2154},
                {target: '第二产业人口', source: '第二产业产值', weight: 0.9214},
                {target: '第二产业人口', source: '第三产业产值', weight: 0.5624},
                {target: '第二产业人口', source: '人均GDP', weight: 0.7425},
                {target: '第二产业人口', source: '社会消费品零售总额', weight: 0.7554},
                {target: '第三产业人口', source: '地方生产总值', weight: 0.7631},
                {target: '第三产业人口', source: '第一产业产值', weight: 0.2154},
                {target: '第三产业人口', source: '第二产业产值', weight: 0.6214},
                {target: '第三产业人口', source: '第三产业产值', weight: 0.9012},
                {target: '第三产业人口', source: '人均GDP', weight: 0.7457},
                {target: '第三产业人口', source: '社会消费品零售总额', weight: 0.7577}
            ]
        }
    ]
};


                // 为echarts对象加载数据
                myChart.setOption(option);
            }
        );
   }
   if(btn.name===2040){
     $scope.totaldata = {

    tabledata:
     [
      {yearvalue:'指标', Fp:'第一产业人口',Sp:'第二产业人口',Tp:'第三产业人口'},
      {yearvalue:'第一产业产值', Fp:'0.9245',Sp:'0.2154',Tp:'0.3116'},
      {yearvalue:'第二产业产值', Fp:'0.2425',Sp:'0.9524',Tp:'0.3547'},
      {yearvalue:'第三产业产值', Fp:'0.2124',Sp:'0.3824',Tp:'0.9488'},
      {yearvalue:'人均GDP', Fp:'0.7184',Sp:'0.7583',Tp:'0.8196'},
      {yearvalue:'地方生产总值', Fp:'0.8569',Sp:'0.7249',Tp:'0.8589'},
      {yearvalue:'社会消费品零售总额', Fp:'0.7498',Sp:'0.7997',Tp:'0.7631'}

    ]

  };
    require(
            [
                'echarts',
                'echarts/chart/chord',
                'echarts/chart/force' // 使用柱状图就加载bar模块，按需加载
            ],
            function (ec) {
                // 基于准备好的dom，初始化echarts图表
                var myChart = ec.init(document.getElementById('main'));

                var option = {
    title : {
        text: '太仓市2040年劳动力人口与各项经济指标关联度分析预测',
        textStyle:{
            fontWeight:'normal',
            fontFamily:'Lucida Sans Unicode',
            fontSize:'18',
            color:"#000000"
        },
        x:'center',
        y:'top'
    },
    tooltip : {
        trigger: 'item',
        formatter: function (params) {
            if (params.indicator2) {    // is edge
                return params.indicator2 + ' ' + params.name + ' ' + params.indicator;
            } else {    // is node
                return params.name
            }
        }
    },
    toolbox: {
        show : true,
        feature : {
            restore : {show: true},
            magicType: {show: true, type: ['force', 'chord']},
            saveAsImage : {show: true}
        }
    },
    legend: {
        x: 'center',
        y: 'bottom',
        itemGap:20,
        data:['第一产业人口', '第二产业人口', '第三产业人口'],
        textStyle:{
            fontWeight:'normal'
        }
    },
    series : [
        {
            type:'chord',
            sort : 'ascending',
            sortSub : 'descending',
            showScale : false,
            itemStyle : {
                normal : {
                    label : {
                        rotate : false
                    }
                }
            },
            // 使用 nodes links 表达和弦图
            nodes: [
                {name:'总人口'},
                {name:'人口密度'},
                {name:'人口出生率'},
                {name:'人口自然增长率'},
                {name:'人口死亡率'},
                {name:'第一产业人口'},
                {name:'第二产业人口'},
                {name:'第三产业人口'},
                {name:'城镇人口'},
                {name:'乡村人口'},
                {name:'地方生产总值'},
                {name:'第一产业产值'},
                {name:'第二产业产值'},
                {name:'第三产业产值'},
                {name:'人均GDP'},
                {name:'社会消费品零售总额'}

            ],
            links: [
                {source: '第一产业人口', target: '地方生产总值', weight: 0.6125,name:'0.6125关联'},
                {source: '第一产业人口', target: '第一产业产值', weight: 0.9245,name:'0.9245关联'},
                {source: '第一产业人口', target: '第二产业产值', weight: 0.2154,name:'0.2154关联'},
                {source: '第一产业人口', target: '第三产业产值', weight: 0.3116,name:'0.3116关联'},
                {source: '第一产业人口', target: '人均GDP', weight: 0.9245,name:'0.9245关联'},
                {source: '第一产业人口', target: '社会消费品零售总额', weight: 0.6125,name:'0.6125关联'},
                {source: '第二产业人口', target: '地方生产总值', weight: 0.8521,name:'0.8521关联'},
                {source: '第二产业人口', target: '第一产业产值', weight: 0.2425,name:'0.2425关联'},
                {source: '第二产业人口', target: '第二产业产值', weight: 0.9524,name:'0.9524关联'},
                {source: '第二产业人口', target: '第三产业产值', weight: 0.3547,name:'0.3547关联'},
                {source: '第二产业人口', target: '人均GDP', weight: 0.8241,name:'0.8241关联'},
                {source: '第二产业人口', target: '社会消费品零售总额', weight: 0.7797,name:'0.7997关联'},
                {source: '第三产业人口', target: '地方生产总值', weight: 0.7598,name:'0.7598关联'},
                {source: '第三产业人口', target: '第一产业产值', weight: 0.2124,name:'0.2124关联'},
                {source: '第三产业人口', target: '第二产业产值', weight: 0.3824,name:'0.3824关联'},
                {source: '第三产业人口', target: '第三产业产值', weight: 0.9488,name:'0.9488关联'},
                {source: '第三产业人口', target: '人均GDP', weight: 0.8851,name:'0.8851关联'},
                {source: '第三产业人口', target: '社会消费品零售总额', weight: 0.8531,name:'0.8531关联'},

                // Ribbon Type 的和弦图每一对节点之间必须是双向边
                {target: '第一产业人口', source: '地方生产总值', weight: 0.6125},
                {target: '第一产业人口', source: '第一产业产值', weight: 0.9569},
                {target: '第一产业人口', source: '第二产业产值', weight: 0.2185},
                {target: '第一产业人口', source: '第三产业产值', weight: 0.2456},
                {target: '第一产业人口', source: '人均GDP', weight: 0.9245},
                {target: '第一产业人口', source: '社会消费品零售总额', weight: 0.6125},
                {target: '第二产业人口', source: '地方生产总值', weight: 0.8521},
                {target: '第二产业人口', source: '第一产业产值', weight: 0.3145},
                {target: '第二产业人口', source: '第二产业产值', weight: 0.9582},
                {target: '第二产业人口', source: '第三产业产值', weight: 0.5214},
                {target: '第二产业人口', source: '人均GDP', weight: 0.8241},
                {target: '第二产业人口', source: '社会消费品零售总额', weight: 0.7797},
                {target: '第三产业人口', source: '地方生产总值', weight: 0.7598},
                {target: '第三产业人口', source: '第一产业产值', weight: 0.2185},
                {target: '第三产业人口', source: '第二产业产值', weight: 0.4156},
                {target: '第三产业人口', source: '第三产业产值', weight: 0.9102},
                {target: '第三产业人口', source: '人均GDP', weight: 0.8851},
                {target: '第三产业人口', source: '社会消费品零售总额', weight: 0.8531}
            ]

        }
    ]
};
                // 为echarts对象加载数据
                myChart.setOption(option);
            }
        );
   }
};

$scope.selectedRange=0;
$scope.selectedRange1=0;
$scope.r=function(){
    return $scope.selectedRange;
};
function h(newValue,oldValue,scope){
    console.log(newValue);
    for(var i = 0;i < popData1.length; i++){
  if(tmp === 1){
    gdp1[i]=Math.round((newValue*0.03)*400+tgdp1[i]);
     popData1[i]=((newValue*0.03)*100000+tmpData1[i]);
  }
  else if(tmp === 2){
    gdp2[i]=Math.round((newValue*0.03)*400+tgdp1[i]);
       popData2[i]=((newValue*0.03)*100000+tmpData2[i]);
    }
    else{
      gdp3[i]=Math.round((newValue*0.03)*400+tgdp1[i]);
       popData3[i]=((newValue*0.03)*100000+tmpData3[i]);
    }
}
   console.log(popData[9]);
}
$scope.$watch($scope.r,h);

$scope.rr=function(){
    return $scope.selectedRange1;
};
function hh(newValue,oldValue,scope){
    console.log(newValue);
for(var i = 0;i < gdp1.length; i++){
    if(tmp === 1){
   gdp1[i]=Math.round((newValue*0.03)*400+tgdp1[i]);
   popData1[i]=((newValue*0.03)*100000+tmpData1[i]);

 }
 else if(tmp === 2){
    gdp2[i]=(newValue*0.03)*400+tgdp2[i];
    popData2[i]=((newValue*0.03)*100000+tmpData1[i]);

  }
else{
      gdp3[i]=(newValue*0.03)*400+tgdp3[i];
      popData3[i]=((newValue*0.03)*100000+tmpData1[i]);

  }
  }
}
$scope.$watch($scope.rr,hh);
         $scope.predictChart ={
options:{ chart: {
            zoomType: 'xy'
        },
        title: {
            text: '太仓市2016至2025年劳动力总人口与GDP关联分析预测'
        },
         credits:{
                    enabled:false
                },
        xAxis: {
            categories: ['2016', '2017', '2018', '2019', '2020', '2021',
                '2022', '2023', '2024', '2025']
        },
        yAxis: [{ // Primary yAxis
            labels: {
                formatter: function() {
                    return this.value ;
                },
                style: {
                    color: '#89A54E'
                }
            },
            title: {
                text: 'GDP(亿元)',
                style: {
                    color: '#89A54E'
                }
            },
            opposite: true,


        }, { // Secondary yAxis
            gridLineWidth: 0,
            title: {
                text: '人口(人)',
                style: {
                    color: '#7CB5EC'
                }
            },
            labels: {
                formatter: function() {
                    return this.value +'人';
                },
                style: {
                    color: '#7CB5EC'
                }
            },


        }, { // Tertiary yAxis
            gridLineWidth: 0,
            title: {
                text: '关联度',
                style: {
                    color: '#AA4643'
                }
            },
            labels: {
                formatter: function() {
                    return this.value ;
                },
                style: {
                    color: '#AA4643'
                }
            },
            opposite: true,
            tickPositions:[0.7,0.75,0.8,0.85,0.9]
        }],
        tooltip: {
            shared: true
        },
        legend: {

            align: 'center',

            verticalAlign: 'bottom',
             itemStyle:{
                    fontWeight:'normal'
                    }
        }
    },
        series: [{
            name: '人口(人)',
            color: '#7CB5EC',
            type: 'column',
            yAxis: 1,
            data: popData1,
            tooltip: {
                valueSuffix: '人'
            }

        }, {
            name: '关联度',
            type: 'spline',
            color: '#AA4643',
            yAxis: 2,
            data: [0.895, 0.842, 0.7524,0.7891, 0.8512, 0.7125, 0.7951, 0.8125, 0.7415, 0.7956],
            marker: {
                enabled: true,
                symbol:"circle"
            },
            dashStyle: 'shortdot',
            tooltip: {
                valueSuffix: ''
            }

        }, {
            name: 'GDP(亿元)',
            color: '#89A54E',
            type: 'spline',
            data: gdp1,
            marker:{
                symbol:"square"
            },
            tooltip: {
                valueSuffix: '亿元'
            }
        }]

};
$scope.populationChart ={
      options: {
                    chart: {
                        type: 'column'
                    },
                  legend:{
                    itemStyle:{
                        fontWeight:'normal'
                    }
                }
                },

                series: [{
                    name: '劳动力总人口',

                    data: popData1
                }],
                title: {
                    text: '太仓市2016至2025年劳动力总人口预测值'
                },
                credits:{
                    enabled:false
                },
                xAxis: {
                    categories: [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025],
                    title:{
                        text:"年"
                    }
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: '人'
                    }
                },
                loading: false,


    };
    $scope.GDPChart ={
       options: {
                    chart: {
                        type: 'column'
                    },
                    legend:{
                    itemStyle:{
                        fontWeight:'normal'
                    }
                }
                },
                series: [{
                    name: 'GDP总量',
                    data: gdp1
                }],
                title: {
                    text: '太仓市2016至2025年GDP总量预测值'
                },
                 credits:{
                    enabled:false
                },
                xAxis: {
                    categories: [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025],
                    title:{
                        text:"年"
                    }
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: '亿元'
                    }
                },
                loading: false,

    };

    $scope.sumpopulation ={
   options:{
    colors:splinecolors,
    chart:{
       type: 'spline'
    },
     title: {
            text: '产业GDP与各项人口指标的关联度分析预测',
            x: -20 //center
        },
        xAxis: {
            categories:  ['常住人口', '暂住人口', '城镇人口', '乡村人口', '第一产业人口', '第二产业人口',
                '第三产业人口'],
                labels: {
                rotation: -45,
                align: 'right',
                style: {
                    fontSize: '13px',
                    fontFamily: 'Verdana, sans-serif'
                }
             }
        },
        yAxis: {
            title: {
                text: '关联度'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valueSuffix: ''
        },
        legend: {
            itemStyle:{
                fontWeight:'normal'
            }
        }
    },
        series: [{
            name: '第一产业GDP',
            data: [0.7421, 0.6998,0.7845, 0.7412, 0.7861, 0.8165,0.8152],
             marker: {
                symbol:"diamond"
            }
        }, {
            name: '第二产业GDP',
            data: [0.7952,0.8412, 0.7984,0.7842,0.8125,0.7965, 0.6845],
             marker: {
                symbol:"circle"
            }
        }, {
            name: '第三产业GDP',
            data: [0.8452, 0.8412, 0.8112,0.7952, 0.8123, 0.7584,0.7682],
             marker: {
                symbol:"square"
            }
        }]
};
$scope.populationPie={
options: {
                              colors:piecolor,
                                chart: {
                                    plotBackgroundColor: null,
                                    plotBorderWidth: null,
                                    plotShadow: false
                                },
                                credits:{
                                    enabled:false
                                    },
                                title: {
                                    text: "太仓市2020年产业就业人口比重分析预测"
                                },
                                tooltip: {
                                    pointFormat: ' <b>产业人口</b>:{point.y:1.f}(万人)</b> '
                                },
                                plotOptions: {
                                    pie: {
                                        allowPointSelect: true,
                                        cursor: 'pointer',
                                        dataLabels: {
                                            enabled: true,
                                            color: '#000000',
                                            connectorColor: '#000000',
                                            format: ' {point.name}:{point.percentage:.1f} %',

                                        },
                                        showInLegend: true
                                    }


                            },
                            legend:{
                                itemStyle:{
                                    fontWeight:'normal'
                                    }
                               }
                        },
                            series: [{
                                type: 'pie',
                                name: '',
                                data:[
             ['第一产业人口',fpop[4]/10000],
                ['第二产业人口',spop[4]/10000],
                ['第三产业人口',tpop[4]/10000]
            ]
                            }]

};
$scope.industryPie={
options: {
                                colors:piecolor,
                                chart: {
                                    plotBackgroundColor: null,
                                    plotBorderWidth: null,
                                    plotShadow: false
                                },
                                credits:{
                                    enabled:false
                                    },
                                title: {
                                    text: "太仓市2020年产业产值比重分析预测"
                                },
                                tooltip: {
                                    pointFormat: '<b>产业产值</b>:{point.y:1.f}(亿元)</b> '
                                },
                                plotOptions: {
                                    pie: {
                                        allowPointSelect: true,
                                        cursor: 'pointer',
                                        dataLabels: {
                                            enabled: true,
                                            color: '#000000',
                                            connectorColor: '#000000',
                                            format: '{point.name}:{point.percentage:.1f} %'
                                        },
                                        showInLegend: true
                                    }


                            },
                            legend:{
                                itemStyle:{
                                    fontWeight:'normal'
                                }
                            }
                        },
                            series: [{
                                type: 'pie',
                                name: '',
                                data:[
              ['第一产业产值',fgdp[4]],
                ['第二产业产值',sgdp[4]],//692.1345
                ['第三产业产值',tgdp[4]]
            ]
                            }]


};
});
}]);
