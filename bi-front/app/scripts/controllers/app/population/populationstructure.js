'use strict';

app.controller('PopulationStructureCtrl', ['$scope','$stateParams','qService','forecastFactory',function($scope, $stateParams,qService,forecastFactory) {

    $scope.data = null;
    var popData;

  
    var promise = qService.tokenHttpGet(forecastFactory.query,{tableName:'populationStructurePreData'});
    
   // var promise = qService.tokenHttpGet(forecastFactory.query,{tableName:'populationStructurePreData'});
    promise.then(function(rc) {

    console.log(rc.data);
     popData=rc.data;
     //return popData;
     
    console.log(popData[0].preResidentPopulation);
//2015年的数据
    var popData13=[0,0,0,0,0,0,0,0,0,0,0];  //初始化预测男性数据
    var popData14=[0,0,0,0,0,0,0,0,0,0,0];  //初始化预测女性数据
    var sumMale6=0;//初始化男性总数
    var sumFemale6=0;//初始化女性总数
    var curMale=[];
    var curMale1=[];
    for(var i=0;i<popData.length;i++){
      if(popData[i].preYear===2015){
        if(popData[i].sexType_id===1){ //当前男性
          curMale.push(-popData[i].preResidentPopulation);
           sumMale6+=popData[i].preResidentPopulation;
           if(popData[i].ageType_id<6&&popData[i].ageType_id>=0){
                 popData13[0]+=popData[i].preResidentPopulation;
            }
           if(popData[i].ageType_id<12&&popData[i].ageType_id>=6){
                 popData13[1]+=popData[i].preResidentPopulation;
            }
           if(popData[i].ageType_id<18&&popData[i].ageType_id>=12){
                 popData13[2]+=popData[i].preResidentPopulation;
            }
          if(popData[i].ageType_id<24&&popData[i].ageType_id>=18){
                 popData13[3]+=popData[i].preResidentPopulation;
            }
          if(popData[i].ageType_id<30&&popData[i].ageType_id>=24){
                 popData13[4]+=popData[i].preResidentPopulation;
            }
          if(popData[i].ageType_id<36&&popData[i].ageType_id>=30){
                 popData13[5]+=popData[i].preResidentPopulation;
            }
          if(popData[i].ageType_id<42&&popData[i].ageType_id>=36){
                 popData13[6]+=popData[i].preResidentPopulation;
            }
          if(popData[i].ageType_id<48&&popData[i].ageType_id>=42){
                 popData13[7]+=popData[i].preResidentPopulation;
            }
          if(popData[i].ageType_id<54&&popData[i].ageType_id>=48){
                 popData13[8]+=popData[i].preResidentPopulation;
            }
          if(popData[i].ageType_id<60&&popData[i].ageType_id>=54){
                 popData13[9]+=popData[i].preResidentPopulation;
            }
          if(popData[i].ageType_id>=60){
                 popData13[10]+=popData[i].preResidentPopulation;
            }
      }
      if(popData[i].sexType_id===2){  //预测女性
        curMale1.push(popData[i].preResidentPopulation);
           sumFemale6+=popData[i].preResidentPopulation;
           if(popData[i].ageType_id<6&&popData[i].ageType_id>=0){
                 popData14[0]+=popData[i].preResidentPopulation;
            }
           if(popData[i].ageType_id<12&&popData[i].ageType_id>=6){
                 popData14[1]+=popData[i].preResidentPopulation;
            }
           if(popData[i].ageType_id<18&&popData[i].ageType_id>=12){
                 popData14[2]+=popData[i].preResidentPopulation;
            }
          if(popData[i].ageType_id<24&&popData[i].ageType_id>=18){
                 popData14[3]+=popData[i].preResidentPopulation;
            }
          if(popData[i].ageType_id<30&&popData[i].ageType_id>=24){
                 popData14[4]+=popData[i].preResidentPopulation;
            }
          if(popData[i].ageType_id<36&&popData[i].ageType_id>=30){
                 popData14[5]+=popData[i].preResidentPopulation;
            }
          if(popData[i].ageType_id<42&&popData[i].ageType_id>=36){
                 popData14[6]+=popData[i].preResidentPopulation;
            }
          if(popData[i].ageType_id<48&&popData[i].ageType_id>=42){
                 popData14[7]+=popData[i].preResidentPopulation;
            }
          if(popData[i].ageType_id<54&&popData[i].ageType_id>=48){
                 popData14[8]+=popData[i].preResidentPopulation;
            }
          if(popData[i].ageType_id<60&&popData[i].ageType_id>=54){
                 popData14[9]+=popData[i].preResidentPopulation;
            }
          if(popData[i].ageType_id>=60){
                 popData14[10]+=popData[i].preResidentPopulation;
            }
      }
    }
    }
    popData13[0]=parseFloat(((popData13[0]/sumMale6)*100).toFixed(2));
    popData13[1]=parseFloat(((popData13[1]/sumMale6)*100).toFixed(2));
    popData13[2]=parseFloat(((popData13[2]/sumMale6)*100).toFixed(2));
    popData13[3]=parseFloat(((popData13[3]/sumMale6)*100).toFixed(2));
    popData13[4]=parseFloat(((popData13[4]/sumMale6)*100).toFixed(2));
    popData13[5]=parseFloat(((popData13[5]/sumMale6)*100).toFixed(2));
    popData13[6]=parseFloat(((popData13[6]/sumMale6)*100).toFixed(2));
    popData13[7]=parseFloat(((popData13[7]/sumMale6)*100).toFixed(2));
    popData13[8]=parseFloat(((popData13[8]/sumMale6)*100).toFixed(2));
    popData13[9]=parseFloat(((popData13[9]/sumMale6)*100).toFixed(2));
    popData13[10]=parseFloat(((popData13[10]/sumMale6)*100).toFixed(2));

    popData14[0]=parseFloat(((popData14[0]/sumFemale6)*100).toFixed(2));
    popData14[1]=parseFloat(((popData14[1]/sumFemale6)*100).toFixed(2));
    popData14[2]=parseFloat(((popData14[2]/sumFemale6)*100).toFixed(2));
    popData14[3]=parseFloat(((popData14[3]/sumFemale6)*100).toFixed(2));
    popData14[4]=parseFloat(((popData14[4]/sumFemale6)*100).toFixed(2));
    popData14[5]=parseFloat(((popData14[5]/sumFemale6)*100).toFixed(2));
    popData14[6]=parseFloat(((popData14[6]/sumFemale6)*100).toFixed(2));
    popData14[7]=parseFloat(((popData14[7]/sumFemale6)*100).toFixed(2));
    popData14[8]=parseFloat(((popData14[8]/sumFemale6)*100).toFixed(2));
    popData14[9]=parseFloat(((popData14[9]/sumFemale6)*100).toFixed(2));
    popData14[10]=parseFloat(((popData14[10]/sumFemale6)*100).toFixed(2));
   console.log(popData13);
   console.log(sumMale6);

   console.log(popData14);
   console.log(sumFemale6);

   //console.log(z);
 
//2020年的数据
    var popData1=[0,0,0,0,0,0,0,0,0,0,0];  //初始化预测男性数据
    var popData2=[0,0,0,0,0,0,0,0,0,0,0];  //初始化预测女性数据
    var sumMale=0;//初始化男性总数
    var sumFemale=0;//初始化女性总数
    var male20=[];
    var female20=[];
    for(var i=0;i<popData.length;i++){
      if(popData[i].preYear===2020){
        if(popData[i].sexType_id===1){ //预测男性
          male20.push(-popData[i].preResidentPopulation);
           sumMale+=popData[i].preResidentPopulation;
           if(popData[i].ageType_id<6&&popData[i].ageType_id>=0){
                 popData1[0]+=popData[i].preResidentPopulation;
            }
           if(popData[i].ageType_id<12&&popData[i].ageType_id>=6){
                 popData1[1]+=popData[i].preResidentPopulation;
            }
           if(popData[i].ageType_id<18&&popData[i].ageType_id>=12){
                 popData1[2]+=popData[i].preResidentPopulation;
            }
          if(popData[i].ageType_id<24&&popData[i].ageType_id>=18){
                 popData1[3]+=popData[i].preResidentPopulation;
            }
          if(popData[i].ageType_id<30&&popData[i].ageType_id>=24){
                 popData1[4]+=popData[i].preResidentPopulation;
            }
          if(popData[i].ageType_id<36&&popData[i].ageType_id>=30){
                 popData1[5]+=popData[i].preResidentPopulation;
            }
          if(popData[i].ageType_id<42&&popData[i].ageType_id>=36){
                 popData1[6]+=popData[i].preResidentPopulation;
            }
          if(popData[i].ageType_id<48&&popData[i].ageType_id>=42){
                 popData1[7]+=popData[i].preResidentPopulation;
            }
          if(popData[i].ageType_id<54&&popData[i].ageType_id>=48){
                 popData1[8]+=popData[i].preResidentPopulation;
            }
          if(popData[i].ageType_id<60&&popData[i].ageType_id>=54){
                 popData1[9]+=popData[i].preResidentPopulation;
            }
          if(popData[i].ageType_id>=60){
                 popData1[10]+=popData[i].preResidentPopulation;
            }
      }
      if(popData[i].sexType_id===2){  //预测女性
        female20.push(popData[i].preResidentPopulation);
           sumFemale+=popData[i].preResidentPopulation;
           if(popData[i].ageType_id<6&&popData[i].ageType_id>=0){
                 popData2[0]+=popData[i].preResidentPopulation;
            }
           if(popData[i].ageType_id<12&&popData[i].ageType_id>=6){
                 popData2[1]+=popData[i].preResidentPopulation;
            }
           if(popData[i].ageType_id<18&&popData[i].ageType_id>=12){
                 popData2[2]+=popData[i].preResidentPopulation;
            }
          if(popData[i].ageType_id<24&&popData[i].ageType_id>=18){
                 popData2[3]+=popData[i].preResidentPopulation;
            }
          if(popData[i].ageType_id<30&&popData[i].ageType_id>=24){
                 popData2[4]+=popData[i].preResidentPopulation;
            }
          if(popData[i].ageType_id<36&&popData[i].ageType_id>=30){
                 popData2[5]+=popData[i].preResidentPopulation;
            }
          if(popData[i].ageType_id<42&&popData[i].ageType_id>=36){
                 popData2[6]+=popData[i].preResidentPopulation;
            }
          if(popData[i].ageType_id<48&&popData[i].ageType_id>=42){
                 popData2[7]+=popData[i].preResidentPopulation;
            }
          if(popData[i].ageType_id<54&&popData[i].ageType_id>=48){
                 popData2[8]+=popData[i].preResidentPopulation;
            }
          if(popData[i].ageType_id<60&&popData[i].ageType_id>=54){
                 popData2[9]+=popData[i].preResidentPopulation;
            }
          if(popData[i].ageType_id>=60){
                 popData2[10]+=popData[i].preResidentPopulation;
            }
      }
    }
    }
    popData1[0]=parseFloat(((popData1[0]/sumMale)*100).toFixed(2));
    popData1[1]=parseFloat(((popData1[1]/sumMale)*100).toFixed(2));
    popData1[2]=parseFloat(((popData1[2]/sumMale)*100).toFixed(2));
    popData1[3]=parseFloat(((popData1[3]/sumMale)*100).toFixed(2));
    popData1[4]=parseFloat(((popData1[4]/sumMale)*100).toFixed(2));
    popData1[5]=parseFloat(((popData1[5]/sumMale)*100).toFixed(2));
    popData1[6]=parseFloat(((popData1[6]/sumMale)*100).toFixed(2));
    popData1[7]=parseFloat(((popData1[7]/sumMale)*100).toFixed(2));
    popData1[8]=parseFloat(((popData1[8]/sumMale)*100).toFixed(2));
    popData1[9]=parseFloat(((popData1[9]/sumMale)*100).toFixed(2));
    popData1[10]=parseFloat(((popData1[10]/sumMale)*100).toFixed(2));

    popData2[0]=parseFloat(((popData2[0]/sumFemale)*100).toFixed(2));
    popData2[1]=parseFloat(((popData2[1]/sumFemale)*100).toFixed(2));
    popData2[2]=parseFloat(((popData2[2]/sumFemale)*100).toFixed(2));
    popData2[3]=parseFloat(((popData2[3]/sumFemale)*100).toFixed(2));
    popData2[4]=parseFloat(((popData2[4]/sumFemale)*100).toFixed(2));
    popData2[5]=parseFloat(((popData2[5]/sumFemale)*100).toFixed(2));
    popData2[6]=parseFloat(((popData2[6]/sumFemale)*100).toFixed(2));
    popData2[7]=parseFloat(((popData2[7]/sumFemale)*100).toFixed(2));
    popData2[8]=parseFloat(((popData2[8]/sumFemale)*100).toFixed(2));
    popData2[9]=parseFloat(((popData2[9]/sumFemale)*100).toFixed(2));
    popData2[10]=parseFloat(((popData2[10]/sumFemale)*100).toFixed(2));
   console.log(popData1);
   console.log(sumMale);

   console.log(popData2);
   console.log(sumFemale);
 
 //2025年的数据
    var popData3=[0,0,0,0,0,0,0,0,0,0,0];  //初始化预测男性数据
    var popData4=[0,0,0,0,0,0,0,0,0,0,0];  //初始化预测女性数据
    var sumMale1=0;//初始化男性总数
    var sumFemale1=0;//初始化女性总数
    var male25=[];
    var female25=[];
    for(var i=0;i<popData.length;i++){
      if(popData[i].preYear===2025){ 
        if(popData[i].sexType_id===1){ //预测男性
          male25.push(-popData[i].preResidentPopulation);
           sumMale1+=popData[i].preResidentPopulation;
           if(popData[i].ageType_id<6&&popData[i].ageType_id>=0){
                 popData3[0]+=popData[i].preResidentPopulation;
            }
           if(popData[i].ageType_id<12&&popData[i].ageType_id>=6){
                 popData3[1]+=popData[i].preResidentPopulation;
            }
           if(popData[i].ageType_id<18&&popData[i].ageType_id>=12){
                 popData3[2]+=popData[i].preResidentPopulation;
            }
          if(popData[i].ageType_id<24&&popData[i].ageType_id>=18){
                 popData3[3]+=popData[i].preResidentPopulation;
            }
          if(popData[i].ageType_id<30&&popData[i].ageType_id>=24){
                 popData3[4]+=popData[i].preResidentPopulation;
            }
          if(popData[i].ageType_id<36&&popData[i].ageType_id>=30){
                 popData3[5]+=popData[i].preResidentPopulation;
            }
          if(popData[i].ageType_id<42&&popData[i].ageType_id>=36){
                 popData3[6]+=popData[i].preResidentPopulation;
            }
          if(popData[i].ageType_id<48&&popData[i].ageType_id>=42){
                 popData3[7]+=popData[i].preResidentPopulation;
            }
          if(popData[i].ageType_id<54&&popData[i].ageType_id>=48){
                 popData3[8]+=popData[i].preResidentPopulation;
            }
          if(popData[i].ageType_id<60&&popData[i].ageType_id>=54){
                 popData3[9]+=popData[i].preResidentPopulation;
            }
          if(popData[i].ageType_id>=60){
                 popData3[10]+=popData[i].preResidentPopulation;
            }
      }
      if(popData[i].sexType_id===2){  //预测女性
           female25.push(popData[i].preResidentPopulation);
           sumFemale1+=popData[i].preResidentPopulation;
           if(popData[i].ageType_id<6&&popData[i].ageType_id>=0){
                 popData4[0]+=popData[i].preResidentPopulation;
            }
           if(popData[i].ageType_id<12&&popData[i].ageType_id>=6){
                 popData4[1]+=popData[i].preResidentPopulation;
            }
           if(popData[i].ageType_id<18&&popData[i].ageType_id>=12){
                 popData4[2]+=popData[i].preResidentPopulation;
            }
          if(popData[i].ageType_id<24&&popData[i].ageType_id>=18){
                 popData4[3]+=popData[i].preResidentPopulation;
            }
          if(popData[i].ageType_id<30&&popData[i].ageType_id>=24){
                 popData4[4]+=popData[i].preResidentPopulation;
            }
          if(popData[i].ageType_id<36&&popData[i].ageType_id>=30){
                 popData4[5]+=popData[i].preResidentPopulation;
            }
          if(popData[i].ageType_id<42&&popData[i].ageType_id>=36){
                 popData4[6]+=popData[i].preResidentPopulation;
            }
          if(popData[i].ageType_id<48&&popData[i].ageType_id>=42){
                 popData4[7]+=popData[i].preResidentPopulation;
            }
          if(popData[i].ageType_id<54&&popData[i].ageType_id>=48){
                 popData4[8]+=popData[i].preResidentPopulation;
            }
          if(popData[i].ageType_id<60&&popData[i].ageType_id>=54){
                 popData4[9]+=popData[i].preResidentPopulation;
            }
          if(popData[i].ageType_id>=60){
                 popData4[10]+=popData[i].preResidentPopulation;
            }
      }
    }
    }
    popData3[0]=parseFloat(((popData3[0]/sumMale1)*100).toFixed(2));
    popData3[1]=parseFloat(((popData3[1]/sumMale1)*100).toFixed(2));
    popData3[2]=parseFloat(((popData3[2]/sumMale1)*100).toFixed(2));
    popData3[3]=parseFloat(((popData3[3]/sumMale1)*100).toFixed(2));
    popData3[4]=parseFloat(((popData3[4]/sumMale1)*100).toFixed(2));
    popData3[5]=parseFloat(((popData3[5]/sumMale1)*100).toFixed(2));
    popData3[6]=parseFloat(((popData3[6]/sumMale1)*100).toFixed(2));
    popData3[7]=parseFloat(((popData3[7]/sumMale1)*100).toFixed(2));
    popData3[8]=parseFloat(((popData3[8]/sumMale1)*100).toFixed(2));
    popData3[9]=parseFloat(((popData3[9]/sumMale1)*100).toFixed(2));
    popData3[10]=parseFloat(((popData3[10]/sumMale1)*100).toFixed(2));

    popData4[0]=parseFloat(((popData4[0]/sumFemale1)*100).toFixed(2));
    popData4[1]=parseFloat(((popData4[1]/sumFemale1)*100).toFixed(2));
    popData4[2]=parseFloat(((popData4[2]/sumFemale1)*100).toFixed(2));
    popData4[3]=parseFloat(((popData4[3]/sumFemale1)*100).toFixed(2));
    popData4[4]=parseFloat(((popData4[4]/sumFemale1)*100).toFixed(2));
    popData4[5]=parseFloat(((popData4[5]/sumFemale1)*100).toFixed(2));
    popData4[6]=parseFloat(((popData4[6]/sumFemale1)*100).toFixed(2));
    popData4[7]=parseFloat(((popData4[7]/sumFemale1)*100).toFixed(2));
    popData4[8]=parseFloat(((popData4[8]/sumFemale1)*100).toFixed(2));
    popData4[9]=parseFloat(((popData4[9]/sumFemale1)*100).toFixed(2));
    popData4[10]=parseFloat(((popData4[10]/sumFemale1)*100).toFixed(2));
   console.log(popData3);
   console.log(sumMale1);

   console.log(popData4);
   console.log(sumFemale1);


  //2030年的数据
    var popData5=[0,0,0,0,0,0,0,0,0,0,0];  //初始化预测男性数据
    var popData6=[0,0,0,0,0,0,0,0,0,0,0];  //初始化预测女性数据
    var sumMale2=0;//初始化男性总数
    var sumFemale2=0;//初始化女性总数
    var male30=[];
    var female30=[];
    for(var i=0;i<popData.length;i++){
      if(popData[i].preYear===2030){
        if(popData[i].sexType_id===1){ //预测男性
           male30.push(-popData[i].preResidentPopulation);
           sumMale2+=popData[i].preResidentPopulation;
           if(popData[i].ageType_id<6&&popData[i].ageType_id>=0){
                 popData5[0]+=popData[i].preResidentPopulation;
            }
           if(popData[i].ageType_id<12&&popData[i].ageType_id>=6){
                 popData5[1]+=popData[i].preResidentPopulation;
            }
           if(popData[i].ageType_id<18&&popData[i].ageType_id>=12){
                 popData5[2]+=popData[i].preResidentPopulation;
            }
          if(popData[i].ageType_id<24&&popData[i].ageType_id>=18){
                 popData5[3]+=popData[i].preResidentPopulation;
            }
          if(popData[i].ageType_id<30&&popData[i].ageType_id>=24){
                 popData5[4]+=popData[i].preResidentPopulation;
            }
          if(popData[i].ageType_id<36&&popData[i].ageType_id>=30){
                 popData5[5]+=popData[i].preResidentPopulation;
            }
          if(popData[i].ageType_id<42&&popData[i].ageType_id>=36){
                 popData5[6]+=popData[i].preResidentPopulation;
            }
          if(popData[i].ageType_id<48&&popData[i].ageType_id>=42){
                 popData5[7]+=popData[i].preResidentPopulation;
            }
          if(popData[i].ageType_id<54&&popData[i].ageType_id>=48){
                 popData5[8]+=popData[i].preResidentPopulation;
            }
          if(popData[i].ageType_id<60&&popData[i].ageType_id>=54){
                 popData5[9]+=popData[i].preResidentPopulation;
            }
          if(popData[i].ageType_id>=60){
                 popData5[10]+=popData[i].preResidentPopulation;
            }
      }
      if(popData[i].sexType_id===2){  //预测女性
           female30.push(popData[i].preResidentPopulation);
           sumFemale2+=popData[i].preResidentPopulation;
           if(popData[i].ageType_id<6&&popData[i].ageType_id>=0){
                 popData6[0]+=popData[i].preResidentPopulation;
            }
           if(popData[i].ageType_id<12&&popData[i].ageType_id>=6){
                 popData6[1]+=popData[i].preResidentPopulation;
            }
           if(popData[i].ageType_id<18&&popData[i].ageType_id>=12){
                 popData6[2]+=popData[i].preResidentPopulation;
            }
          if(popData[i].ageType_id<24&&popData[i].ageType_id>=18){
                 popData6[3]+=popData[i].preResidentPopulation;
            }
          if(popData[i].ageType_id<30&&popData[i].ageType_id>=24){
                 popData6[4]+=popData[i].preResidentPopulation;
            }
          if(popData[i].ageType_id<36&&popData[i].ageType_id>=30){
                 popData6[5]+=popData[i].preResidentPopulation;
            }
          if(popData[i].ageType_id<42&&popData[i].ageType_id>=36){
                 popData6[6]+=popData[i].preResidentPopulation;
            }
          if(popData[i].ageType_id<48&&popData[i].ageType_id>=42){
                 popData6[7]+=popData[i].preResidentPopulation;
            }
          if(popData[i].ageType_id<54&&popData[i].ageType_id>=48){
                 popData6[8]+=popData[i].preResidentPopulation;
            }
          if(popData[i].ageType_id<60&&popData[i].ageType_id>=54){
                 popData6[9]+=popData[i].preResidentPopulation;
            }
          if(popData[i].ageType_id>=60){
                 popData6[10]+=popData[i].preResidentPopulation;
            }
      }
    }
    }
    popData5[0]=parseFloat(((popData5[0]/sumMale2)*100).toFixed(2));
    popData5[1]=parseFloat(((popData5[1]/sumMale2)*100).toFixed(2));
    popData5[2]=parseFloat(((popData5[2]/sumMale2)*100).toFixed(2));
    popData5[3]=parseFloat(((popData5[3]/sumMale2)*100).toFixed(2));
    popData5[4]=parseFloat(((popData5[4]/sumMale2)*100).toFixed(2));
    popData5[5]=parseFloat(((popData5[5]/sumMale2)*100).toFixed(2));
    popData5[6]=parseFloat(((popData5[6]/sumMale2)*100).toFixed(2));
    popData5[7]=parseFloat(((popData5[7]/sumMale2)*100).toFixed(2));
    popData5[8]=parseFloat(((popData5[8]/sumMale2)*100).toFixed(2));
    popData5[9]=parseFloat(((popData5[9]/sumMale2)*100).toFixed(2));
    popData5[10]=parseFloat(((popData5[10]/sumMale2)*100).toFixed(2));

    popData6[0]=parseFloat(((popData6[0]/sumFemale2)*100).toFixed(2));
    popData6[1]=parseFloat(((popData6[1]/sumFemale2)*100).toFixed(2));
    popData6[2]=parseFloat(((popData6[2]/sumFemale2)*100).toFixed(2));
    popData6[3]=parseFloat(((popData6[3]/sumFemale2)*100).toFixed(2));
    popData6[4]=parseFloat(((popData6[4]/sumFemale2)*100).toFixed(2));
    popData6[5]=parseFloat(((popData6[5]/sumFemale2)*100).toFixed(2));
    popData6[6]=parseFloat(((popData6[6]/sumFemale2)*100).toFixed(2));
    popData6[7]=parseFloat(((popData6[7]/sumFemale2)*100).toFixed(2));
    popData6[8]=parseFloat(((popData6[8]/sumFemale2)*100).toFixed(2));
    popData6[9]=parseFloat(((popData6[9]/sumFemale2)*100).toFixed(2));
    popData6[10]=parseFloat(((popData6[10]/sumFemale2)*100).toFixed(2));
   console.log(popData5);
   console.log(sumMale2);

   console.log(popData6);
   console.log(sumFemale2);

   //2035年的数据
    var popData7=[0,0,0,0,0,0,0,0,0,0,0];  //初始化预测男性数据
    var popData8=[0,0,0,0,0,0,0,0,0,0,0];  //初始化预测女性数据
    var sumMale3=0;//初始化男性总数
    var sumFemale3=0;//初始化女性总数
    var male35=[];
    var female35=[];
    for(var i=0;i<popData.length;i++){
      if(popData[i].preYear===2035){
        if(popData[i].sexType_id===1){ //预测男性
           male35.push(-popData[i].preResidentPopulation);
           sumMale3+=popData[i].preResidentPopulation;
           if(popData[i].ageType_id<6&&popData[i].ageType_id>=0){
                 popData7[0]+=popData[i].preResidentPopulation;
            }
           if(popData[i].ageType_id<12&&popData[i].ageType_id>=6){
                 popData7[1]+=popData[i].preResidentPopulation;
            }
           if(popData[i].ageType_id<18&&popData[i].ageType_id>=12){
                 popData7[2]+=popData[i].preResidentPopulation;
            }
          if(popData[i].ageType_id<24&&popData[i].ageType_id>=18){
                 popData7[3]+=popData[i].preResidentPopulation;
            }
          if(popData[i].ageType_id<30&&popData[i].ageType_id>=24){
                 popData7[4]+=popData[i].preResidentPopulation;
            }
          if(popData[i].ageType_id<36&&popData[i].ageType_id>=30){
                 popData7[5]+=popData[i].preResidentPopulation;
            }
          if(popData[i].ageType_id<42&&popData[i].ageType_id>=36){
                 popData7[6]+=popData[i].preResidentPopulation;
            }
          if(popData[i].ageType_id<48&&popData[i].ageType_id>=42){
                 popData7[7]+=popData[i].preResidentPopulation;
            }
          if(popData[i].ageType_id<54&&popData[i].ageType_id>=48){
                 popData7[8]+=popData[i].preResidentPopulation;
            }
          if(popData[i].ageType_id<60&&popData[i].ageType_id>=54){
                 popData7[9]+=popData[i].preResidentPopulation;
            }
          if(popData[i].ageType_id>=60){
                 popData7[10]+=popData[i].preResidentPopulation;
            }
      }
      if(popData[i].sexType_id===2){  //预测女性
           female35.push(popData[i].preResidentPopulation);
           sumFemale3+=popData[i].preResidentPopulation;
           if(popData[i].ageType_id<6&&popData[i].ageType_id>=0){
                 popData8[0]+=popData[i].preResidentPopulation;
            }
           if(popData[i].ageType_id<12&&popData[i].ageType_id>=6){
                 popData8[1]+=popData[i].preResidentPopulation;
            }
           if(popData[i].ageType_id<18&&popData[i].ageType_id>=12){
                 popData8[2]+=popData[i].preResidentPopulation;
            }
          if(popData[i].ageType_id<24&&popData[i].ageType_id>=18){
                 popData8[3]+=popData[i].preResidentPopulation;
            }
          if(popData[i].ageType_id<30&&popData[i].ageType_id>=24){
                 popData8[4]+=popData[i].preResidentPopulation;
            }
          if(popData[i].ageType_id<36&&popData[i].ageType_id>=30){
                 popData8[5]+=popData[i].preResidentPopulation;
            }
          if(popData[i].ageType_id<42&&popData[i].ageType_id>=36){
                 popData8[6]+=popData[i].preResidentPopulation;
            }
          if(popData[i].ageType_id<48&&popData[i].ageType_id>=42){
                 popData8[7]+=popData[i].preResidentPopulation;
            }
          if(popData[i].ageType_id<54&&popData[i].ageType_id>=48){
                 popData8[8]+=popData[i].preResidentPopulation;
            }
          if(popData[i].ageType_id<60&&popData[i].ageType_id>=54){
                 popData8[9]+=popData[i].preResidentPopulation;
            }
          if(popData[i].ageType_id>=60){
                 popData8[10]+=popData[i].preResidentPopulation;
            }
      }
    }
    }
    popData7[0]=parseFloat(((popData7[0]/sumMale3)*100).toFixed(2));
    popData7[1]=parseFloat(((popData7[1]/sumMale3)*100).toFixed(2));
    popData7[2]=parseFloat(((popData7[2]/sumMale3)*100).toFixed(2));
    popData7[3]=parseFloat(((popData7[3]/sumMale3)*100).toFixed(2));
    popData7[4]=parseFloat(((popData7[4]/sumMale3)*100).toFixed(2));
    popData7[5]=parseFloat(((popData7[5]/sumMale3)*100).toFixed(2));
    popData7[6]=parseFloat(((popData7[6]/sumMale3)*100).toFixed(2));
    popData7[7]=parseFloat(((popData7[7]/sumMale3)*100).toFixed(2));
    popData7[8]=parseFloat(((popData7[8]/sumMale3)*100).toFixed(2));
    popData7[9]=parseFloat(((popData7[9]/sumMale3)*100).toFixed(2));
    popData7[10]=parseFloat(((popData7[10]/sumMale3)*100).toFixed(2));

    popData8[0]=parseFloat(((popData8[0]/sumFemale3)*100).toFixed(2));
    popData8[1]=parseFloat(((popData8[1]/sumFemale3)*100).toFixed(2));
    popData8[2]=parseFloat(((popData8[2]/sumFemale3)*100).toFixed(2));
    popData8[3]=parseFloat(((popData8[3]/sumFemale3)*100).toFixed(2));
    popData8[4]=parseFloat(((popData8[4]/sumFemale3)*100).toFixed(2));
    popData8[5]=parseFloat(((popData8[5]/sumFemale3)*100).toFixed(2));
    popData8[6]=parseFloat(((popData8[6]/sumFemale3)*100).toFixed(2));
    popData8[7]=parseFloat(((popData8[7]/sumFemale3)*100).toFixed(2));
    popData8[8]=parseFloat(((popData8[8]/sumFemale3)*100).toFixed(2));
    popData8[9]=parseFloat(((popData8[9]/sumFemale3)*100).toFixed(2));
    popData8[10]=parseFloat(((popData8[10]/sumFemale3)*100).toFixed(2));
   console.log(popData7);
   console.log(sumMale3);

   console.log(popData8);
   console.log(sumFemale3);

   //2040年的数据
    var popData9=[0,0,0,0,0,0,0,0,0,0,0];  //初始化预测男性数据
    var popData10=[0,0,0,0,0,0,0,0,0,0,0];  //初始化预测女性数据
    var sumMale4=0;//初始化男性总数
    var sumFemale4=0;//初始化女性总数
    var male40=[];
    var female40=[];
    for(var i=0;i<popData.length;i++){
      if(popData[i].preYear===2040){
        if(popData[i].sexType_id===1){ //预测男性
          male40.push(-popData[i].preResidentPopulation);
           sumMale4+=popData[i].preResidentPopulation;
           if(popData[i].ageType_id<6&&popData[i].ageType_id>=0){
                 popData9[0]+=popData[i].preResidentPopulation;
            }
           if(popData[i].ageType_id<12&&popData[i].ageType_id>=6){
                 popData9[1]+=popData[i].preResidentPopulation;
            }
           if(popData[i].ageType_id<18&&popData[i].ageType_id>=12){
                 popData9[2]+=popData[i].preResidentPopulation;
            }
          if(popData[i].ageType_id<24&&popData[i].ageType_id>=18){
                 popData9[3]+=popData[i].preResidentPopulation;
            }
          if(popData[i].ageType_id<30&&popData[i].ageType_id>=24){
                 popData9[4]+=popData[i].preResidentPopulation;
            }
          if(popData[i].ageType_id<36&&popData[i].ageType_id>=30){
                 popData9[5]+=popData[i].preResidentPopulation;
            }
          if(popData[i].ageType_id<42&&popData[i].ageType_id>=36){
                 popData9[6]+=popData[i].preResidentPopulation;
            }
          if(popData[i].ageType_id<48&&popData[i].ageType_id>=42){
                 popData9[7]+=popData[i].preResidentPopulation;
            }
          if(popData[i].ageType_id<54&&popData[i].ageType_id>=48){
                 popData9[8]+=popData[i].preResidentPopulation;
            }
          if(popData[i].ageType_id<60&&popData[i].ageType_id>=54){
                 popData9[9]+=popData[i].preResidentPopulation;
            }
          if(popData[i].ageType_id>=60){
                 popData9[10]+=popData[i].preResidentPopulation;
            }
      }
      if(popData[i].sexType_id===2){  //预测女性
           female40.push(popData[i].preResidentPopulation);
           sumFemale4+=popData[i].preResidentPopulation;
           if(popData[i].ageType_id<6&&popData[i].ageType_id>=0){
                 popData10[0]+=popData[i].preResidentPopulation;
            }
           if(popData[i].ageType_id<12&&popData[i].ageType_id>=6){
                 popData10[1]+=popData[i].preResidentPopulation;
            }
           if(popData[i].ageType_id<18&&popData[i].ageType_id>=12){
                 popData10[2]+=popData[i].preResidentPopulation;
            }
          if(popData[i].ageType_id<24&&popData[i].ageType_id>=18){
                 popData10[3]+=popData[i].preResidentPopulation;
            }
          if(popData[i].ageType_id<30&&popData[i].ageType_id>=24){
                 popData10[4]+=popData[i].preResidentPopulation;
            }
          if(popData[i].ageType_id<36&&popData[i].ageType_id>=30){
                 popData10[5]+=popData[i].preResidentPopulation;
            }
          if(popData[i].ageType_id<42&&popData[i].ageType_id>=36){
                 popData10[6]+=popData[i].preResidentPopulation;
            }
          if(popData[i].ageType_id<48&&popData[i].ageType_id>=42){
                 popData10[7]+=popData[i].preResidentPopulation;
            }
          if(popData[i].ageType_id<54&&popData[i].ageType_id>=48){
                 popData10[8]+=popData[i].preResidentPopulation;
            }
          if(popData[i].ageType_id<60&&popData[i].ageType_id>=54){
                 popData10[9]+=popData[i].preResidentPopulation;
            }
          if(popData[i].ageType_id>=60){
                 popData10[10]+=popData[i].preResidentPopulation;
            }
      }
    }
    }
    popData9[0]=parseFloat(((popData9[0]/sumMale4)*100).toFixed(2));
    popData9[1]=parseFloat(((popData9[1]/sumMale4)*100).toFixed(2));
    popData9[2]=parseFloat(((popData9[2]/sumMale4)*100).toFixed(2));
    popData9[3]=parseFloat(((popData9[3]/sumMale4)*100).toFixed(2));
    popData9[4]=parseFloat(((popData9[4]/sumMale4)*100).toFixed(2));
    popData9[5]=parseFloat(((popData9[5]/sumMale4)*100).toFixed(2));
    popData9[6]=parseFloat(((popData9[6]/sumMale4)*100).toFixed(2));
    popData9[7]=parseFloat(((popData9[7]/sumMale4)*100).toFixed(2));
    popData9[8]=parseFloat(((popData9[8]/sumMale4)*100).toFixed(2));
    popData9[9]=parseFloat(((popData9[9]/sumMale4)*100).toFixed(2));
    popData9[10]=parseFloat(((popData9[10]/sumMale4)*100).toFixed(2));

    popData10[0]=parseFloat(((popData10[0]/sumFemale4)*100).toFixed(2));
    popData10[1]=parseFloat(((popData10[1]/sumFemale4)*100).toFixed(2));
    popData10[2]=parseFloat(((popData10[2]/sumFemale4)*100).toFixed(2));
    popData10[3]=parseFloat(((popData10[3]/sumFemale4)*100).toFixed(2));
    popData10[4]=parseFloat(((popData10[4]/sumFemale4)*100).toFixed(2));
    popData10[5]=parseFloat(((popData10[5]/sumFemale4)*100).toFixed(2));
    popData10[6]=parseFloat(((popData10[6]/sumFemale4)*100).toFixed(2));
    popData10[7]=parseFloat(((popData10[7]/sumFemale4)*100).toFixed(2));
    popData10[8]=parseFloat(((popData10[8]/sumFemale4)*100).toFixed(2));
    popData10[9]=parseFloat(((popData10[9]/sumFemale4)*100).toFixed(2));
    popData10[10]=parseFloat(((popData10[10]/sumFemale4)*100).toFixed(2));
   console.log(popData9);
   console.log(sumMale4);

   console.log(popData10);
   console.log(sumFemale4);

   //2045年的数据
    var popData11=[0,0,0,0,0,0,0,0,0,0,0];  //初始化预测男性数据
    var popData12=[0,0,0,0,0,0,0,0,0,0,0];  //初始化预测女性数据
    var sumMale5=0;//初始化男性总数
    var sumFemale5=0;//初始化女性总数
    var male45=[];
    var female45=[];
    for(var i=0;i<popData.length;i++){
      if(popData[i].preYear===2045){
        if(popData[i].sexType_id===1){ //预测男性
           male45.push(-popData[i].preResidentPopulation);
           sumMale5+=popData[i].preResidentPopulation;
           if(popData[i].ageType_id<6&&popData[i].ageType_id>=0){
                 popData11[0]+=popData[i].preResidentPopulation;
            }
           if(popData[i].ageType_id<12&&popData[i].ageType_id>=6){
                 popData11[1]+=popData[i].preResidentPopulation;
            }
           if(popData[i].ageType_id<18&&popData[i].ageType_id>=12){
                 popData11[2]+=popData[i].preResidentPopulation;
            }
          if(popData[i].ageType_id<24&&popData[i].ageType_id>=18){
                 popData11[3]+=popData[i].preResidentPopulation;
            }
          if(popData[i].ageType_id<30&&popData[i].ageType_id>=24){
                 popData11[4]+=popData[i].preResidentPopulation;
            }
          if(popData[i].ageType_id<36&&popData[i].ageType_id>=30){
                 popData11[5]+=popData[i].preResidentPopulation;
            }
          if(popData[i].ageType_id<42&&popData[i].ageType_id>=36){
                 popData11[6]+=popData[i].preResidentPopulation;
            }
          if(popData[i].ageType_id<48&&popData[i].ageType_id>=42){
                 popData11[7]+=popData[i].preResidentPopulation;
            }
          if(popData[i].ageType_id<54&&popData[i].ageType_id>=48){
                 popData11[8]+=popData[i].preResidentPopulation;
            }
          if(popData[i].ageType_id<60&&popData[i].ageType_id>=54){
                 popData11[9]+=popData[i].preResidentPopulation;
            }
          if(popData[i].ageType_id>=60){
                 popData11[10]+=popData[i].preResidentPopulation;
            }
      }
      if(popData[i].sexType_id===2){  //预测女性
           female45.push(popData[i].preResidentPopulation);
           sumFemale5+=popData[i].preResidentPopulation;
           if(popData[i].ageType_id<6&&popData[i].ageType_id>=0){
                 popData12[0]+=popData[i].preResidentPopulation;
            }
           if(popData[i].ageType_id<12&&popData[i].ageType_id>=6){
                 popData12[1]+=popData[i].preResidentPopulation;
            }
           if(popData[i].ageType_id<18&&popData[i].ageType_id>=12){
                 popData12[2]+=popData[i].preResidentPopulation;
            }
          if(popData[i].ageType_id<24&&popData[i].ageType_id>=18){
                 popData12[3]+=popData[i].preResidentPopulation;
            }
          if(popData[i].ageType_id<30&&popData[i].ageType_id>=24){
                 popData12[4]+=popData[i].preResidentPopulation;
            }
          if(popData[i].ageType_id<36&&popData[i].ageType_id>=30){
                 popData12[5]+=popData[i].preResidentPopulation;
            }
          if(popData[i].ageType_id<42&&popData[i].ageType_id>=36){
                 popData12[6]+=popData[i].preResidentPopulation;
            }
          if(popData[i].ageType_id<48&&popData[i].ageType_id>=42){
                 popData12[7]+=popData[i].preResidentPopulation;
            }
          if(popData[i].ageType_id<54&&popData[i].ageType_id>=48){
                 popData12[8]+=popData[i].preResidentPopulation;
            }
          if(popData[i].ageType_id<60&&popData[i].ageType_id>=54){
                 popData12[9]+=popData[i].preResidentPopulation;
            }
          if(popData[i].ageType_id>=60){
                 popData12[10]+=popData[i].preResidentPopulation;
            }
      }
    }
    }
    popData11[0]=parseFloat(((popData11[0]/sumMale5)*100).toFixed(2));
    popData11[1]=parseFloat(((popData11[1]/sumMale5)*100).toFixed(2));
    popData11[2]=parseFloat(((popData11[2]/sumMale5)*100).toFixed(2));
    popData11[3]=parseFloat(((popData11[3]/sumMale5)*100).toFixed(2));
    popData11[4]=parseFloat(((popData11[4]/sumMale5)*100).toFixed(2));
    popData11[5]=parseFloat(((popData11[5]/sumMale5)*100).toFixed(2));
    popData11[6]=parseFloat(((popData11[6]/sumMale5)*100).toFixed(2));
    popData11[7]=parseFloat(((popData11[7]/sumMale5)*100).toFixed(2));
    popData11[8]=parseFloat(((popData11[8]/sumMale5)*100).toFixed(2));
    popData11[9]=parseFloat(((popData11[9]/sumMale5)*100).toFixed(2));
    popData11[10]=parseFloat(((popData11[10]/sumMale5)*100).toFixed(2));

    popData12[0]=parseFloat(((popData12[0]/sumFemale5)*100).toFixed(2));
    popData12[1]=parseFloat(((popData12[1]/sumFemale5)*100).toFixed(2));
    popData12[2]=parseFloat(((popData12[2]/sumFemale5)*100).toFixed(2));
    popData12[3]=parseFloat(((popData12[3]/sumFemale5)*100).toFixed(2));
    popData12[4]=parseFloat(((popData12[4]/sumFemale5)*100).toFixed(2));
    popData12[5]=parseFloat(((popData12[5]/sumFemale5)*100).toFixed(2));
    popData12[6]=parseFloat(((popData12[6]/sumFemale5)*100).toFixed(2));
    popData12[7]=parseFloat(((popData12[7]/sumFemale5)*100).toFixed(2));
    popData12[8]=parseFloat(((popData12[8]/sumFemale5)*100).toFixed(2));
    popData12[9]=parseFloat(((popData12[9]/sumFemale5)*100).toFixed(2));
    popData12[10]=parseFloat(((popData12[10]/sumFemale5)*100).toFixed(2));
   console.log(popData11);
   console.log(sumMale5);

   console.log(popData12);
   console.log(sumFemale5);

   

  var columnColors = new Array( '#87CEFA','#929bce','#0787C8', '#465296');
  var pieColors = new Array('#3795BC', '#FB9705');  //'#0787C8', '#1FC22B'


  var promise1 = qService.tokenHttpGet(forecastFactory.query,{tableName:'birthrateData'});
    promise1.then(function(rc1) {

    console.log(rc1.data);
  
  

var map = new AMap.Map('conMap');
map.setZoom(12);
map.setCenter([121.10, 31.45]);


 
AMap.plugin(['AMap.ToolBar','AMap.Scale'],function(){
    var toolBar = new AMap.ToolBar();
    var scale = new AMap.Scale();
    map.addControl(toolBar);
    map.addControl(scale);
});




 var marker1 = new AMap.Marker({
        position: [121.046329, 31.471813],   //新湖镇
        map:map,
        icon: new AMap.Icon({            
          size: new AMap.Size(40, 50),  //图标大小
          image: "/images/marker_sprite.png",
        })        
    });
 marker1.setMap(map);
    // 设置鼠标划过点标记显示的文字提示
    marker1.setTitle('');
var infow=[];
infow.push("<div style='background-color:#FFFFFF;border:2px solid #CC0033;border-radius:10px;padding:10px 10px;position:absolute;top:-10px;left:-5px;white-space:nowrap;color:#CC0033;font-size:18px'>新湖镇</div>")
    // 设置label标签
    marker1.setLabel({//label默认蓝框白底左上角显示，样式className为：amap-marker-label
        offset: new AMap.Pixel(20, 20),//修改label相对于maker的位置
        content: infow.join('')
    });
 var marker5 = new AMap.Marker({
        position: [121.070907, 31.556999],   //沙溪镇
        map:map,
        icon: new AMap.Icon({            
          size: new AMap.Size(40, 50),  //图标大小
          image: "/images/marker_sprite.png",
        })
    });
 var infow5=[];
infow5.push("<div style='background-color:#FFFFFF;border:2px solid #66cc66;border-radius:10px;padding:10px 10px;position:absolute;top:-10px;left:-5px;white-space:nowrap;color:#66cc66;font-size:18px'>沙溪镇</div>")
    // 设置label标签
    marker5.setLabel({//label默认蓝框白底左上角显示，样式className为：amap-marker-label
        offset: new AMap.Pixel(20, 20),//修改label相对于maker的位置
        content: infow5.join('')
    });
 var marker4 = new AMap.Marker({            //板桥镇
        position: [121.134911, 31.491627],
        map:map,
        icon: new AMap.Icon({            
          size: new AMap.Size(40, 50),  //图标大小
          image: "/images/marker_sprite.png",
        })
    });
  var infow4=[];
infow4.push("<div style='background-color:#FFFFFF;border:2px solid #CC0033;border-radius:10px;padding:10px 10px;position:absolute;top:-10px;left:-5px;white-space:nowrap;color:#CC0033;font-size:18px'>板桥镇</div>")
    // 设置label标签
    marker4.setLabel({//label默认蓝框白底左上角显示，样式className为：amap-marker-label
        offset: new AMap.Pixel(20, 20),//修改label相对于maker的位置
        content: infow4.join('')
    });
  var marker2 = new AMap.Marker({
        position: [121.276413, 31.515122], //浏河镇
        map:map,
        icon: new AMap.Icon({            
          size: new AMap.Size(40, 50),  //图标大小
          image: "/images/marker_sprite.png",
        })
    });
   var infow2=[];
infow2.push("<div style='background-color:#FFFFFF;border:2px solid #66cc66;border-radius:10px;padding:10px 10px;position:absolute;top:-10px;left:-5px;white-space:nowrap;color:#66cc66;font-size:18px'>浏河镇</div>")
    // 设置label标签
    marker2.setLabel({//label默认蓝框白底左上角显示，样式className为：amap-marker-label
        offset: new AMap.Pixel(20, 20),//修改label相对于maker的位置
        content: infow2.join('')
    });
   var marker3 = new AMap.Marker({
        position: [121.10, 31.45],  //太仓市
        map:map,
        icon: new AMap.Icon({            
          size: new AMap.Size(40, 50),  //图标大小
          image: "/images/marker_sprite.png",
        })
    });
   var infow3=[];
infow3.push("<div style='background-color:#FFFFFF;border:2px solid #66cc66;border-radius:10px;padding:10px 10px;position:absolute;top:-10px;left:-5px;white-space:nowrap;color:#66cc66;font-size:18px'>太仓城区</div>")
    // 设置label标签
    marker3.setLabel({//label默认蓝框白底左上角显示，样式className为：amap-marker-label
        offset: new AMap.Pixel(20, 20),//修改label相对于maker的位置
        content: infow3.join('')
    });
   var marker6 = new AMap.Marker({
        position: [121.190549, 31.467665],  //陆渡镇
        map:map,
        icon: new AMap.Icon({            
          size: new AMap.Size(40, 50),  //图标大小
          image: "/images/marker_sprite.png",
        })
    });
   var infow6=[];
infow6.push("<div style='background-color:#FFFFFF;border:2px solid #66cc66;border-radius:10px;padding:10px 10px;position:absolute;top:-10px;left:-5px;white-space:nowrap;color:#66cc66;font-size:18px'>陆渡镇</div>")
    // 设置label标签
    marker6.setLabel({//label默认蓝框白底左上角显示，样式className为：amap-marker-label
        offset: new AMap.Pixel(20, 20),//修改label相对于maker的位置
        content: infow6.join('')
    });
   var marker7 = new AMap.Marker({
        position: [121.106514, 31.649675],  //璜泾镇
        map:map,
        icon: new AMap.Icon({            
          size: new AMap.Size(40, 50),  //图标大小
          image: "/images/marker_sprite.png",
        })
    });
   var infow7=[];
infow7.push("<div style='background-color:#FFFFFF;border:2px solid #CC0033;border-radius:10px;padding:10px 10px;position:absolute;top:-10px;left:-5px;white-space:nowrap;color:#CC0033;font-size:18px'>璜泾镇</div>")
    // 设置label标签
    marker7.setLabel({//label默认蓝框白底左上角显示，样式className为：amap-marker-label
        offset: new AMap.Pixel(20, 20),//修改label相对于maker的位置
        content: infow7.join('')
    });
//显示信息窗体(可单击位置显示隐藏的信息窗体)
var info1=[];
   info1.push("<h4><strong>新湖镇人口自然增长率</strong></h4>");
    info1.push("<table class='table table-bordered table-striped'>");
    info1.push("<tr><td style='font-size:15px;text-align:center'>出生率</td><td style='text-align:center'>6.31‰</td></tr>");
    info1.push("<tr><td style='font-size:15px;text-align:center'>死亡率</td><td style='text-align:center'>6.34‰</td></tr>");
    info1.push("<tr><td style='font-size:15px;text-align:center'>人口自然增长率</td><td style='text-align:center'>-0.03‰</td></tr>");
    info1.push("</table>");
var infowindow1 = new AMap.InfoWindow({
     content: info1.join(''),
     offset: new AMap.Pixel(0, -30),
     size:new AMap.Size(300,0)
})
var clickHandle1 = AMap.event.addListener(marker1, 'click', function() {
    infowindow1.open(map, marker1.getPosition())
})

var info2=[];
   info2.push("<h4><strong>浏河镇人口自然增长率</strong></h4>");
    info2.push("<table class='table table-bordered table-striped'>");
    info2.push("<tr><td style='font-size:15px;width:150px;text-align:center'>出生率</td><td style='text-align:center'>8.05‰</td></tr>");
    info2.push("<tr><td style='font-size:15px;text-align:center'>死亡率</td><td style='text-align:center'>7.95‰</td></tr>");
    info2.push("<tr><td style='font-size:15px;text-align:center'>人口自然增长率</td><td style='text-align:center'>0.1‰</td></tr>");
    info2.push("</table>");
var infowindow2 = new AMap.InfoWindow({
     content: info2.join(''),
     offset: new AMap.Pixel(0, -30),
     size:new AMap.Size(300,0)
})
var clickHandle2 = AMap.event.addListener(marker2, 'click', function() {
    infowindow2.open(map, marker2.getPosition())
})

var info3=[];
   info3.push("<h4><strong>太仓城区人口自然增长率</strong></h4>");
    info3.push("<table class='table table-bordered table-striped'>");
    info3.push("<tr><td style='font-size:15px;text-align:center'>出生率</td><td style='text-align:center'>8.34‰</td ></tr>");
    info3.push("<tr><td style='font-size:15px;text-align:center'>死亡率</td><td style='text-align:center'>8.12‰</td ></tr>");
    info3.push("<tr><td style='font-size:15px;text-align:center'>人口自然增长率</td><td style='text-align:center'>0.22‰</td></tr>");
    info3.push("</table>");
var infowindow3 = new AMap.InfoWindow({
     content: info3.join(''),
     offset: new AMap.Pixel(0, -30),
     size:new AMap.Size(300,0)
})
infowindow3.open(map, marker3.getPosition());
var clickHandle3 = AMap.event.addListener(marker3, 'click', function() {
    infowindow3.open(map, marker3.getPosition())
})

var info4=[];
    info4.push("<h4><strong>板桥镇人口自然增长率</strong></h4>");
    info4.push("<table class='table table-bordered table-striped'>");
    info4.push("<tr><td style='font-size:15px;text-align:center'>出生率</td><td style='text-align:center'>7.54‰</td></tr>");
    info4.push("<tr><td style='font-size:15px;text-align:center'>死亡率</td><td style='text-align:center'>7.85‰</td></tr>");
    info4.push("<tr><td style='font-size:15px;text-align:center'>人口自然增长率</td><td style='text-align:center'>-0.31‰</td></tr>");
    info4.push("</table>");
var infowindow4 = new AMap.InfoWindow({
     content: info4.join(''),
     offset: new AMap.Pixel(0, -30),
     size:new AMap.Size(300,0)
})
var clickHandle4 = AMap.event.addListener(marker4, 'click', function() {
    infowindow4.open(map, marker4.getPosition())
})

var info5=[];
   info5.push("<h4><strong>沙溪镇人口自然增长率</strong></h4>");
    info5.push("<table class='table table-bordered table-striped'>");
    info5.push("<tr><td style='font-size:15px;text-align:center'>出生率</td><td style='text-align:center'>8.11‰</td></tr>");
    info5.push("<tr><td style='font-size:15px;text-align:center'>死亡率</td><td style='text-align:center'>7.98‰</td></tr>");
    info5.push("<tr><td style='font-size:15px;text-align:center'>人口自然增长率</td><td style='text-align:center'>0.13‰</td></tr>");
    info5.push("</table>");
var infowindow5 = new AMap.InfoWindow({
     content: info5.join(''),
     offset: new AMap.Pixel(0, -30),
     size:new AMap.Size(300,0)
})
var clickHandle5 = AMap.event.addListener(marker5, 'click', function() {
    infowindow5.open(map, marker5.getPosition())
})

var info6=[];
   info6.push("<h4><strong>陆渡镇人口自然增长率</strong></h4>");
    info6.push("<table class='table table-bordered table-striped'>");
    info6.push("<tr><td style='font-size:15px;text-align:center'>出生率</td><td style='text-align:center'>8.54‰</td></tr>");
    info6.push("<tr><td style='font-size:15px;text-align:center'>死亡率</td><td style='text-align:center'>8.24‰</td></tr>");
    info6.push("<tr><td style='font-size:15px;text-align:center'>人口自然增长率</td><td style='text-align:center'>0.3‰</td></tr>");
    info6.push("</table>");
var infowindow6 = new AMap.InfoWindow({
     content: info6.join(''),
     offset: new AMap.Pixel(0, -30),
     size:new AMap.Size(300,0)
})
var clickHandle6 = AMap.event.addListener(marker6, 'click', function() {
    infowindow6.open(map, marker6.getPosition())
})
var info7=[];
   info7.push("<h4><strong>璜泾镇人口自然增长率</strong></h4>");
    info7.push("<table class='table table-bordered table-striped'>");
    info7.push("<tr><td style='font-size:15px;text-align:center'>出生率</td><td style='text-align:center'>8.34‰</td></tr>");
    info7.push("<tr><td style='font-size:15px;text-align:center'>死亡率</td><td style='text-align:center'>8.54‰</td></tr>");
    info7.push("<tr><td style='font-size:15px;text-align:center'>人口自然增长率</td><td style='text-align:center'>-0.2‰</td></tr>");
    info7.push("</table>");
var infowindow7 = new AMap.InfoWindow({
     content: info7.join(''),
     offset: new AMap.Pixel(0, -30),
     size:new AMap.Size(300,0)
})
var clickHandle7 = AMap.event.addListener(marker7, 'click', function() {
    infowindow7.open(map, marker7.getPosition())
})
//var heatmap;
var points =[
    {"lng":121.10,"lat":31.45,"count":30},
    {"lng":121.046329,"lat":31.471813,"count":90},
    {"lng":121.135737,"lat":31.491485,"count":12},
    {"lng":121.134911,"lat":31.491627,"count":100},
    {"lng":121.276413,"lat":31.515122,"count":50},
    {"lng":121.106514,"lat":31.649675,"count":15},
    {"lng":121.070907,"lat":31.556999,"count":16},
   // {"lng":121.118541,"lat":31.592205,"count":16},  //金浪镇
    {"lng":121.190549,"lat":31.467665,"count":16}
];
/* map.plugin(["AMap.Heatmap"], function() {
        //初始化heatmap对象
        heatmap = new AMap.Heatmap(map, {
            radius: 50, //给定半径
            opacity: [0, 0.8],
         
            gradient:{
             0.5: 'blue',
             0.65: 'rgb(117,211,248)',
             0.7: 'rgb(0, 255, 0)',
             0.9: '#ffea00',
             1.0: 'red'
             
             }
        });
        //设置数据集：该数据为北京部分“公园”数据
        heatmap.setDataSet({
            data: points,
            max: 100
        });
    });
    //判断浏览区是否支持canvas
    function isSupportCanvas() {
        var elem = document.createElement('canvas');
        return !!(elem.getContext && elem.getContext('2d'));
    }

 */

});

 
  $scope.buttonMap = [{
        name: 2020,
        label: 2020 + "年人口结构预测",
       
      }, {
        name: 2025,
        label: 2025 + "年人口结构预测",
       
      },
       {
        name: 2030,
        label: 2030 + "年人口结构预测",
       
      },
       {
        name: 2035,
        label: 2035 + "年人口结构预测",
       
      },
       {
        name: 2040,
        label: 2040 + "年人口结构预测",
        
      }, {
        name: 2045,
        label: 2045 + "年人口结构预测",
        
      }];

    $scope.buttonMap1 = [{
        name: 2025,
        label: 2025 + "年人口总量预测",
        radio: "Left"
      }, {
        name: 2035,
        label: 2035 + "年人口总量预测",
        radio: "Middle"
      }, {
        name: 2045,
        label: 2045 + "年人口总量预测",
        radio: "Right"
      }];
  $scope.btn_click=function(btn){
    $scope.change(btn);
  };
  $scope.change=function(btn){
  //  var columnColors = new Array('#7CADDF', '#327EBD', '#195489', '#1FC22B', '#FB9705', '#F26200');
     if(btn.name===2020){
        document.getElementById('abc').innerHTML='&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp太仓市人口结构呈现不断老龄化趋势；其中，60岁及以上人口比例从2015的 5% 增加到2020的 7%。';
        $scope.age_ration.options.colors=columnColors;
        $scope.age_ration.options.title.text="太仓市人口结构预测2015/2020年龄层比例图";
        $scope.age_ration.series=[{
            name: '当前男性比例',
            data: popData13,
            stack: 'male'
        },{
            name: '当前女性比例',
            data: popData14,
            stack: 'male'
        },{
            name: '预测男性比例',
            data: popData1,
            stack: 'female'
        },{
            name: '预测女性比例',
            data: popData2,
            stack: 'female'
        }];
        $scope.population_prediction_year.options.title.text="太仓市2020年常住人口结构图";
        $scope.population_prediction_year.series=[{
                name: '男性',
                data: male20
            }, {
                name: '女性',
                data: female20
            }]
          }
      if(btn.name===2025){
        document.getElementById('abc').innerHTML='&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp太仓市人口结构呈现不断老龄化趋势；其中，60岁及以上人口比例从2015的 5% 增加到2025的 8%。';
        $scope.age_ration.options.colors=columnColors;
        $scope.age_ration.options.title.text="太仓市人口结构预测2015/2025年龄层比例图";
        $scope.age_ration.series=[{
            name: '当前男性比例',
            data: popData13,
            stack: 'male'
        },{
            name: '当前女性比例',
            data: popData14,
            stack: 'male'
        },{
            name: '预测男性比例',
            data: popData3,
            stack: 'female'
        },{
            name: '预测女性比例',
            data: popData4,
            stack: 'female'
        }];
        $scope.population_prediction_year.options.title.text="太仓市2025年常住人口结构图";
        $scope.population_prediction_year.series=[{
                name: '男性',
                data: male25
            }, {
                name: '女性',
                data: female25
            }]
     }
      if(btn.name===2030){
        document.getElementById('abc').innerHTML='&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp太仓市人口结构呈现不断老龄化趋势；其中，60岁及以上人口比例从2015的 5% 增加到2030的 9%。';
        $scope.age_ration.options.colors=columnColors;
        $scope.age_ration.options.title.text="太仓市人口结构预测2015/2030年龄层比例图";
        $scope.age_ration.series=[{
            name: '当前男性比例',
            data: popData13,
            stack: 'male'
        },{
            name: '当前女性比例',
            data: popData14,
            stack: 'male'
        },{
            name: '预测男性比例',
            data: popData5,
            stack: 'female'
        },{
            name: '预测女性比例',
            data: popData6,
            stack: 'female'
        }];
        $scope.population_prediction_year.options.title.text="太仓市2030年常住人口结构图";
        $scope.population_prediction_year.series=[{
                name: '男性',
                data: male30
            }, {
                name: '女性',
                data: female30
            }]
     }
      if(btn.name===2040){
        document.getElementById('abc').innerHTML='&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp太仓市人口结构呈现不断老龄化趋势；其中，60岁及以上人口比例从2015的 5% 增加到2040的 10%。';
        $scope.age_ration.options.colors=columnColors;
        $scope.age_ration.options.title.text="太仓市人口结构预测2015/2040年龄层比例图";
        $scope.age_ration.series=[{
            name: '当前男性比例',
            data: popData13,
            stack: 'male'
        },{
            name: '当前女性比例',
            data: popData14,
            stack: 'male'
        },{
            name: '预测男性比例',
            data: popData9,
            stack: 'female'
        },{
            name: '预测女性比例',
            data: popData10,
            stack: 'female'
        }];
        $scope.population_prediction_year.options.title.text="太仓市2040年常住人口结构图";
        $scope.population_prediction_year.series=[{
                name: '男性',
                data: male40
            }, {
                name: '女性',
                data: female40
            }]
     }
     if(btn.name===2035){
        document.getElementById('abc').innerHTML='&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp太仓市人口结构呈现不断老龄化趋势；其中，60岁及以上人口比例从2015的 5% 增加到2035的 8%。';
        $scope.age_ration.options.colors=columnColors;
        $scope.age_ration.options.title.text="太仓市人口结构预测2015/2035年龄层比例图";
        $scope.age_ration.series=[{
            name: '当前男性比例',
            data: popData13,
            stack: 'male'
        }, {
            name: '当前女性比例',
            data: popData14,
            stack: 'male'
        }, {
            name: '预测男性比例',
            data: popData7,
            stack: 'female'
        },{
            name: '预测女性比例',
            data: popData8,
            stack: 'female'
        }];
         $scope.population_prediction_year.options.title.text="太仓市2035年常住人口结构图";
        $scope.population_prediction_year.series=[{
                name: '男性',
                data: male35
            }, {
                name: '女性',
                data: female35
            }]
     }
     if(btn.name===2045){
        document.getElementById('abc').innerHTML='&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp太仓市人口结构呈现不断老龄化趋势；其中，60岁及以上人口比例从2015的 5% 增加到2045的 11%。';
        $scope.age_ration.options.colors=columnColors;
        $scope.age_ration.options.title.text="太仓市人口结构预测2015/2045年龄层比例图";
        $scope.age_ration.series=[{
            name: '当前男性比例',
            data: popData13,
            stack: 'male'
        },{
            name: '当前女性比例',
            data: popData14,
            stack: 'male'
        },{
            name: '预测男性比例',
            data: popData11,
            stack: 'female'
        },{
            name: '预测女性比例',
            data: popData12,
            stack: 'female'
        }];
        $scope.population_prediction_year.options.title.text="太仓市2045年常住人口结构图";
        $scope.population_prediction_year.series=[{
                name: '男性',
                data: male45
            }, {
                name: '女性',
                data: female45
            }]
     }
  };
   $scope.btn_click1=function(btn){
    $scope.change1(btn);
  };
  $scope.change1=function(btn){
    if(btn.name===2025){
        document.getElementById('a').innerHTML="&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp 总体来看，太仓市的人口总量处于平稳状态，呈增长趋势，随着二胎政策的全面开放，促进了人口数量的增加。";
    $scope.sumpopulation.options.xAxis[0].categories=['2016','2017','2018','2019','2020','2021','2022','2023','2024','2025'];
    $scope.sumpopulation.options.title.text="太仓市2016年到2025年常住人口人口总量预测趋势图";
    $scope.sumpopulation.series=[{
            name: '人口总量',
            type: 'column',
            yAxis: 1,
            color: "#7CB5EC",
            data: [747046, 750908, 754570, 757963, 761066, 763863, 766970, 769950, 772652, 775038],
            tooltip: {
                valueSuffix: '人'
            }

        }, {
            name: '人口增长率',
            type: 'spline',
             color: "#434348",
            data: [0.21, 0.23, 0.25, 0.27, 0.33, 0.37, 0.40, 0.37, 0.44, 0.41],
            marker:{
                symbol:"circle"
            },
            tooltip: {
                valueSuffix: '%'
            }
        }];
     }
     if(btn.name===2035){
        document.getElementById('a').innerHTML="&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp 总体来看，太仓市的人口总量处于平稳状态，呈增长趋势，随着二胎政策的全面开放，促进了人口数量的增加。2035年的人口增长率1.17%相比2026年的0.86%有了小幅度的增长。";
        $scope.sumpopulation.options.xAxis[0].categories=['2026','2027','2028','2029','2030','2031','2032','2033','2034','2035'];
        $scope.sumpopulation.options.title.text="太仓市2026年到2035年常住人口人口总量预测趋势图";
    $scope.sumpopulation.series=[{
            name: '人口总量',
            type: 'column',
            yAxis: 1,
            color: "#7CB5EC",
            data: [803463, 808465, 813319, 818001, 822475, 826754, 831251, 835567, 839655, 843482],
            tooltip: {
                valueSuffix: '人'
            }

        }, {
            name: '人口增长率',
            type: 'spline',
            color: "#434348",
            data: [0.46, 0.40, 0.46, 0.53, 0.49,0.54, 0.51, 0.46, 0.52, 0.47],
            marker:{
                symbol:"circle"
            },
            tooltip: {
                valueSuffix: '%'
            }
        }];
     }
     if(btn.name===2045){
    document.getElementById('a').innerHTML="&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp 总体来看，太仓市的人口总量处于平稳状态，呈增长趋势，随着二胎政策的全面开放，促进了人口数量的增加。2045年的人口增长率1.54%相比2036年的1.22%有了小幅度的增长。";
     $scope.sumpopulation.options.xAxis[0].categories=['2036','2037','2038','2039','2040','2041','2042','2043','2044','2045'];
        $scope.sumpopulation.options.title.text="太仓市2036年到2045年常住人口人口总量预测趋势图";
    $scope.sumpopulation.series=[{
            name: '人口总量',
            type: 'column',
            yAxis: 1,
            color: "#7CB5EC",
            data: [850441, 856081, 861654, 867106, 872420, 877676, 883104, 888418, 893579, 898577],
            tooltip: {
                valueSuffix: '人'
            }

        }, {
            name: '人口增长率',
            type: 'spline',
            color: "#434348",
            data: [0.42, 0.41,0.45, 0.43, 0.47, 0.42, 0.39, 0.43, 0.49, 0.54],
            marker:{
                symbol:"circle"
            },
            tooltip: {
                valueSuffix: '%'
            }
        }];
     }
  };
  $scope.age_ration={
    options:{
        colors:columnColors,
         chart: {
            type: 'column'
        },

        title: {
            text: '太仓市人口结构预测2015/2020年龄层比例图',
            floationg: 'true'
        },
        credits:{
          enabled:false
        },
        legend:{
           itemDistance: 30,
           itemStyle:{
            fontWeight:'normal'
           }
         },
        xAxis: {
            categories: ['0-5岁', '6-11岁', '12-17岁', '18-23岁', '24-29岁','30-35岁','36-41岁','42-47岁','48-53岁','54-59岁','60岁以上'],
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
            allowDecimals: false,
            min: 0,
            title: {
                text: '人口比例(%)'
            }
        },

        tooltip: {
            formatter: function() {
                return ' <b>'+ this.x +'</b><br/>'+
                    this.series.name +': '+ this.y +'%'+'<br/>'+
                    '总共: '+ this.point.stackTotal+'%';
            }
        },

        plotOptions: {
            column: {
                stacking: 'normal'
            }
        }
      },

        series: [{
            name: '当前男性比例',
            data: popData13,
            stack: 'male'
        },{
            name: '当前女性比例',
            data: popData14,
            stack: 'male'
        },{
            name: '预测男性比例',
            data: popData1,
            stack: 'female'
        },{
            name: '预测女性比例',
            data: popData2,
            stack: 'female'
        }]

      };
    var categories = ['0岁', '1岁', '2岁', '3岁',
            '4岁', '5岁', '6岁', '7岁', '8岁',
            '9岁', '10岁', '11岁', '12岁', '13岁',
            '14岁', '15岁', '16岁', '17岁', '18岁',
            '19岁','20岁', '21岁', '22岁', '23岁',
            '24岁', '25岁', '26岁', '27岁', '28岁',
            '29岁', '30岁', '31岁', '32岁', '33岁',
            '34岁', '35岁', '36岁', '37岁', '38岁',
            '39岁', '40岁', '41岁', '42岁', '43岁',
            '44岁', '45岁', '46岁', '47岁', '48岁',
            '49岁', '50岁', '51岁', '52岁', '53岁',
            '54岁', '55岁', '56岁', '57岁', '58岁',
            '59岁','60岁', '61岁', '62岁', '63岁',
            '64岁', '65岁', '66岁', '67岁', '68岁',
            '69岁', '70岁', '71岁', '72岁', '73岁',
            '74岁', '75岁', '76岁', '77岁', '78岁',
            '79岁','80岁', '81岁', '82岁', '83岁',
            '84岁', '85岁', '86岁', '87岁', '88岁',
            '89岁', '90岁', '91岁', '92岁', '93岁',
            '94岁', '95岁', '96岁', '97岁', '98岁',
            '99岁','100岁+'];
$scope.population_year={
        options:{
            colors:pieColors,
        chart: {
                type: 'bar'
            },
            title: {
                text: '太仓市2015年常住人口结构图'
            },
        legend:{
        
           itemStyle:{
            fontWeight:'normal'
           }
         },
            xAxis: [{
                categories: categories,
                reversed: false,
                labels: {
                    step: 5
                }
            }, { // mirror axis on right side
                opposite: true,
                reversed: false,
                categories: categories,
                linkedTo: 0,
                labels: {
                    step: 5
                }
            }],
            yAxis: {
                title: {
                    text: null
                },
                labels: {
                    formatter: function () {
                        return (Math.abs(this.value) / 1000) + 'K';
                    }
                },
                min: -6000,
                max: 6000
            },

            plotOptions: {
                series: {
                    stacking: 'normal'
                }
            },
            credits:{
          enabled:false
            },
            tooltip: {
                formatter: function () {
                    return ' <b>' + this.series.name + ', age ' + this.point.category + '</b><br/>' +
                        'Population: ' + Highcharts.numberFormat(Math.abs(this.point.y), 0);
                }
            }
          },

            series: [{
                name: '男性',
                data: curMale
            }, {
                name: '女性',
                data: curMale1
            }]
    };
    $scope.population_prediction_year={
        options:{
            colors:pieColors,
        chart: {
                type: 'bar'
            },
            title: {
                text: '太仓市2020年常住人口预测结构图'
            },
            legend:{
        
           itemStyle:{
            fontWeight:'normal'
           }
         },
            xAxis: [{
                categories: categories,
                reversed: false,
                labels: {
                    step: 5
                }
            }, { // mirror axis on right side
                opposite: true,
                reversed: false,
                categories: categories,
                linkedTo: 0,
                labels: {
                    step: 5
                }
            }],
            yAxis: {
                title: {
                    text: null
                },
                labels: {
                    formatter: function () {
                        return (Math.abs(this.value) / 1000) + 'K';
                    }
                },
                min: -6000,
                max: 6000
            },
             credits:{
                   enabled:false
            },
            plotOptions: {
                series: {
                    stacking: 'normal'
                }
            },

            tooltip: {
                formatter: function () {
                    return '<b>' + this.series.name + ', age ' + this.point.category + '</b><br/>' +
                        'Population: ' + Highcharts.numberFormat(Math.abs(this.point.y), 0);
                }
            }
          },

            series: [{
                name: '男性',
                data: male20
            }, {
                name: '女性',
                data: female20
            }]
    };
$scope.sumpopulation={
    options:{
      //  colors:lineColors,
      chart: {
            zoomType: 'xy'
        },
        title: {
            text: '太仓市2016年到2025年常住人口总量预测趋势图'
        },
        legend:{
        
           itemStyle:{
            fontWeight:'normal'
           }
         },
        xAxis: [{
            categories: ['2016', '2017', '2018', '2019', '2020',
                '2021', '2022', '2023', '2024', '2025'],
            crosshair: true,
            labels: {
                rotation: -45,
                align: 'right',
                style: {
                    fontSize: '13px',
                    fontFamily: 'Verdana, sans-serif'
                }
             }
        }],
        yAxis: [{ // Primary yAxis
            labels: {
                format: '{value}%',
                style: {
                    color: Highcharts.getOptions().colors[1]
                }
            },
            title: {
                text: '人口增长率',
                style: {
                    color: Highcharts.getOptions().colors[1]
                }
            }
        }, { // Secondary yAxis
            title: {
                text: '人口总量',
                style: {
                    color: Highcharts.getOptions().colors[0]
                }
            },
            labels: {
                format: '{value} 人',
                style: {
                    color: Highcharts.getOptions().colors[0]
                }
            },
            opposite: true
        }],
        tooltip: {
            shared: true
        },
        credits:{
            enabled:false
        }
       
      },
        series: [{
            name: '人口总量',
            type: 'column',
            yAxis: 1,
            color: "#7CB5EC",
            data: [747046, 750908, 754570, 757963, 761066, 763863, 766970, 769950, 772652, 775038],
            tooltip: {
                valueSuffix: '人'
            }

        }, {
            name: '人口增长率',
            type: 'spline',
             color: "#434348",
            data: [0.21, 0.23, 0.25, 0.27, 0.33, 0.37, 0.40, 0.37, 0.44, 0.41],
            marker:{
                symbol:"circle"
            },
            tooltip: {
                valueSuffix: '%'
            }
        }]
      };

     });  
}]);