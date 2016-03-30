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
    popData13[0]=parseFloat(((popData13[0]/(sumMale6+sumFemale6))*100).toFixed(2));
    popData13[1]=parseFloat(((popData13[1]/(sumMale6+sumFemale6))*100).toFixed(2));
    popData13[2]=parseFloat(((popData13[2]/(sumMale6+sumFemale6))*100).toFixed(2));
    popData13[3]=parseFloat(((popData13[3]/(sumMale6+sumFemale6))*100).toFixed(2));
    popData13[4]=parseFloat(((popData13[4]/(sumMale6+sumFemale6))*100).toFixed(2));
    popData13[5]=parseFloat(((popData13[5]/(sumMale6+sumFemale6))*100).toFixed(2));
    popData13[6]=parseFloat(((popData13[6]/(sumMale6+sumFemale6))*100).toFixed(2));
    popData13[7]=parseFloat(((popData13[7]/(sumMale6+sumFemale6))*100).toFixed(2));
    popData13[8]=parseFloat(((popData13[8]/(sumMale6+sumFemale6))*100).toFixed(2));
    popData13[9]=parseFloat(((popData13[9]/(sumMale6+sumFemale6))*100).toFixed(2));
    popData13[10]=parseFloat(((popData13[10]/(sumMale6+sumFemale6))*100).toFixed(2));

    popData14[0]=parseFloat(((popData14[0]/(sumMale6+sumFemale6))*100).toFixed(2));
    popData14[1]=parseFloat(((popData14[1]/(sumMale6+sumFemale6))*100).toFixed(2));
    popData14[2]=parseFloat(((popData14[2]/(sumMale6+sumFemale6))*100).toFixed(2));
    popData14[3]=parseFloat(((popData14[3]/(sumMale6+sumFemale6))*100).toFixed(2));
    popData14[4]=parseFloat(((popData14[4]/(sumMale6+sumFemale6))*100).toFixed(2));
    popData14[5]=parseFloat(((popData14[5]/(sumMale6+sumFemale6))*100).toFixed(2));
    popData14[6]=parseFloat(((popData14[6]/(sumMale6+sumFemale6))*100).toFixed(2));
    popData14[7]=parseFloat(((popData14[7]/(sumMale6+sumFemale6))*100).toFixed(2));
    popData14[8]=parseFloat(((popData14[8]/(sumMale6+sumFemale6))*100).toFixed(2));
    popData14[9]=parseFloat(((popData14[9]/(sumMale6+sumFemale6))*100).toFixed(2));
    popData14[10]=parseFloat(((popData14[10]/(sumMale6+sumFemale6))*100).toFixed(2));
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
    popData1[0]=parseFloat(((popData1[0]/(sumMale+sumFemale))*100).toFixed(2));
    popData1[1]=parseFloat(((popData1[1]/(sumMale+sumFemale))*100).toFixed(2));
    popData1[2]=parseFloat(((popData1[2]/(sumMale+sumFemale))*100).toFixed(2));
    popData1[3]=parseFloat(((popData1[3]/(sumMale+sumFemale))*100).toFixed(2));
    popData1[4]=parseFloat(((popData1[4]/(sumMale+sumFemale))*100).toFixed(2));
    popData1[5]=parseFloat(((popData1[5]/(sumMale+sumFemale))*100).toFixed(2));
    popData1[6]=parseFloat(((popData1[6]/(sumMale+sumFemale))*100).toFixed(2));
    popData1[7]=parseFloat(((popData1[7]/(sumMale+sumFemale))*100).toFixed(2));
    popData1[8]=parseFloat(((popData1[8]/(sumMale+sumFemale))*100).toFixed(2));
    popData1[9]=parseFloat(((popData1[9]/(sumMale+sumFemale))*100).toFixed(2));
    popData1[10]=parseFloat(((popData1[10]/(sumMale+sumFemale))*100).toFixed(2));

    popData2[0]=parseFloat(((popData2[0]/(sumMale+sumFemale))*100).toFixed(2));
    popData2[1]=parseFloat(((popData2[1]/(sumMale+sumFemale))*100).toFixed(2));
    popData2[2]=parseFloat(((popData2[2]/(sumMale+sumFemale))*100).toFixed(2));
    popData2[3]=parseFloat(((popData2[3]/(sumMale+sumFemale))*100).toFixed(2));
    popData2[4]=parseFloat(((popData2[4]/(sumMale+sumFemale))*100).toFixed(2));
    popData2[5]=parseFloat(((popData2[5]/(sumMale+sumFemale))*100).toFixed(2));
    popData2[6]=parseFloat(((popData2[6]/(sumMale+sumFemale))*100).toFixed(2));
    popData2[7]=parseFloat(((popData2[7]/(sumMale+sumFemale))*100).toFixed(2));
    popData2[8]=parseFloat(((popData2[8]/(sumMale+sumFemale))*100).toFixed(2));
    popData2[9]=parseFloat(((popData2[9]/(sumMale+sumFemale))*100).toFixed(2));
    popData2[10]=parseFloat(((popData2[10]/(sumMale+sumFemale))*100).toFixed(2));
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
    popData3[0]=parseFloat(((popData3[0]/(sumMale1+sumFemale1))*100).toFixed(2));
    popData3[1]=parseFloat(((popData3[1]/(sumMale1+sumFemale1))*100).toFixed(2));
    popData3[2]=parseFloat(((popData3[2]/(sumMale1+sumFemale1))*100).toFixed(2));
    popData3[3]=parseFloat(((popData3[3]/(sumMale1+sumFemale1))*100).toFixed(2));
    popData3[4]=parseFloat(((popData3[4]/(sumMale1+sumFemale1))*100).toFixed(2));
    popData3[5]=parseFloat(((popData3[5]/(sumMale1+sumFemale1))*100).toFixed(2));
    popData3[6]=parseFloat(((popData3[6]/(sumMale1+sumFemale1))*100).toFixed(2));
    popData3[7]=parseFloat(((popData3[7]/(sumMale1+sumFemale1))*100).toFixed(2));
    popData3[8]=parseFloat(((popData3[8]/(sumMale1+sumFemale1))*100).toFixed(2));
    popData3[9]=parseFloat(((popData3[9]/(sumMale1+sumFemale1))*100).toFixed(2));
    popData3[10]=parseFloat(((popData3[10]/(sumMale1+sumFemale1))*100).toFixed(2));

    popData4[0]=parseFloat(((popData4[0]/(sumMale1+sumFemale1))*100).toFixed(2));
    popData4[1]=parseFloat(((popData4[1]/(sumMale1+sumFemale1))*100).toFixed(2));
    popData4[2]=parseFloat(((popData4[2]/(sumMale1+sumFemale1))*100).toFixed(2));
    popData4[3]=parseFloat(((popData4[3]/(sumMale1+sumFemale1))*100).toFixed(2));
    popData4[4]=parseFloat(((popData4[4]/(sumMale1+sumFemale1))*100).toFixed(2));
    popData4[5]=parseFloat(((popData4[5]/(sumMale1+sumFemale1))*100).toFixed(2));
    popData4[6]=parseFloat(((popData4[6]/(sumMale1+sumFemale1))*100).toFixed(2));
    popData4[7]=parseFloat(((popData4[7]/(sumMale1+sumFemale1))*100).toFixed(2));
    popData4[8]=parseFloat(((popData4[8]/(sumMale1+sumFemale1))*100).toFixed(2));
    popData4[9]=parseFloat(((popData4[9]/(sumMale1+sumFemale1))*100).toFixed(2));
    popData4[10]=parseFloat(((popData4[10]/(sumMale1+sumFemale1))*100).toFixed(2));
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
    popData5[0]=parseFloat(((popData5[0]/(sumMale2+sumFemale2))*100).toFixed(2));
    popData5[1]=parseFloat(((popData5[1]/(sumMale2+sumFemale2))*100).toFixed(2));
    popData5[2]=parseFloat(((popData5[2]/(sumMale2+sumFemale2))*100).toFixed(2));
    popData5[3]=parseFloat(((popData5[3]/(sumMale2+sumFemale2))*100).toFixed(2));
    popData5[4]=parseFloat(((popData5[4]/(sumMale2+sumFemale2))*100).toFixed(2));
    popData5[5]=parseFloat(((popData5[5]/(sumMale2+sumFemale2))*100).toFixed(2));
    popData5[6]=parseFloat(((popData5[6]/(sumMale2+sumFemale2))*100).toFixed(2));
    popData5[7]=parseFloat(((popData5[7]/(sumMale2+sumFemale2))*100).toFixed(2));
    popData5[8]=parseFloat(((popData5[8]/(sumMale2+sumFemale2))*100).toFixed(2));
    popData5[9]=parseFloat(((popData5[9]/(sumMale2+sumFemale2))*100).toFixed(2));
    popData5[10]=parseFloat(((popData5[10]/(sumMale2+sumFemale2))*100).toFixed(2));

    popData6[0]=parseFloat(((popData6[0]/(sumMale2+sumFemale2))*100).toFixed(2));
    popData6[1]=parseFloat(((popData6[1]/(sumMale2+sumFemale2))*100).toFixed(2));
    popData6[2]=parseFloat(((popData6[2]/(sumMale2+sumFemale2))*100).toFixed(2));
    popData6[3]=parseFloat(((popData6[3]/(sumMale2+sumFemale2))*100).toFixed(2));
    popData6[4]=parseFloat(((popData6[4]/(sumMale2+sumFemale2))*100).toFixed(2));
    popData6[5]=parseFloat(((popData6[5]/(sumMale2+sumFemale2))*100).toFixed(2));
    popData6[6]=parseFloat(((popData6[6]/(sumMale2+sumFemale2))*100).toFixed(2));
    popData6[7]=parseFloat(((popData6[7]/(sumMale2+sumFemale2))*100).toFixed(2));
    popData6[8]=parseFloat(((popData6[8]/(sumMale2+sumFemale2))*100).toFixed(2));
    popData6[9]=parseFloat(((popData6[9]/(sumMale2+sumFemale2))*100).toFixed(2));
    popData6[10]=parseFloat(((popData6[10]/(sumMale2+sumFemale2))*100).toFixed(2));
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
    popData7[0]=parseFloat(((popData7[0]/(sumMale3+sumFemale3))*100).toFixed(2));
    popData7[1]=parseFloat(((popData7[1]/(sumMale3+sumFemale3))*100).toFixed(2));
    popData7[2]=parseFloat(((popData7[2]/(sumMale3+sumFemale3))*100).toFixed(2));
    popData7[3]=parseFloat(((popData7[3]/(sumMale3+sumFemale3))*100).toFixed(2));
    popData7[4]=parseFloat(((popData7[4]/(sumMale3+sumFemale3))*100).toFixed(2));
    popData7[5]=parseFloat(((popData7[5]/(sumMale3+sumFemale3))*100).toFixed(2));
    popData7[6]=parseFloat(((popData7[6]/(sumMale3+sumFemale3))*100).toFixed(2));
    popData7[7]=parseFloat(((popData7[7]/(sumMale3+sumFemale3))*100).toFixed(2));
    popData7[8]=parseFloat(((popData7[8]/(sumMale3+sumFemale3))*100).toFixed(2));
    popData7[9]=parseFloat(((popData7[9]/(sumMale3+sumFemale3))*100).toFixed(2));
    popData7[10]=parseFloat(((popData7[10]/(sumMale3+sumFemale3))*100).toFixed(2));

    popData8[0]=parseFloat(((popData8[0]/(sumMale3+sumFemale3))*100).toFixed(2));
    popData8[1]=parseFloat(((popData8[1]/(sumMale3+sumFemale3))*100).toFixed(2));
    popData8[2]=parseFloat(((popData8[2]/(sumMale3+sumFemale3))*100).toFixed(2));
    popData8[3]=parseFloat(((popData8[3]/(sumMale3+sumFemale3))*100).toFixed(2));
    popData8[4]=parseFloat(((popData8[4]/(sumMale3+sumFemale3))*100).toFixed(2));
    popData8[5]=parseFloat(((popData8[5]/(sumMale3+sumFemale3))*100).toFixed(2));
    popData8[6]=parseFloat(((popData8[6]/(sumMale3+sumFemale3))*100).toFixed(2));
    popData8[7]=parseFloat(((popData8[7]/(sumMale3+sumFemale3))*100).toFixed(2));
    popData8[8]=parseFloat(((popData8[8]/(sumMale3+sumFemale3))*100).toFixed(2));
    popData8[9]=parseFloat(((popData8[9]/(sumMale3+sumFemale3))*100).toFixed(2));
    popData8[10]=parseFloat(((popData8[10]/(sumMale3+sumFemale3))*100).toFixed(2));
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
    popData9[0]=parseFloat(((popData9[0]/(sumMale4+sumFemale4))*100).toFixed(2));
    popData9[1]=parseFloat(((popData9[1]/(sumMale4+sumFemale4))*100).toFixed(2));
    popData9[2]=parseFloat(((popData9[2]/(sumMale4+sumFemale4))*100).toFixed(2));
    popData9[3]=parseFloat(((popData9[3]/(sumMale4+sumFemale4))*100).toFixed(2));
    popData9[4]=parseFloat(((popData9[4]/(sumMale4+sumFemale4))*100).toFixed(2));
    popData9[5]=parseFloat(((popData9[5]/(sumMale4+sumFemale4))*100).toFixed(2));
    popData9[6]=parseFloat(((popData9[6]/(sumMale4+sumFemale4))*100).toFixed(2));
    popData9[7]=parseFloat(((popData9[7]/(sumMale4+sumFemale4))*100).toFixed(2));
    popData9[8]=parseFloat(((popData9[8]/(sumMale4+sumFemale4))*100).toFixed(2));
    popData9[9]=parseFloat(((popData9[9]/(sumMale4+sumFemale4))*100).toFixed(2));
    popData9[10]=parseFloat(((popData9[10]/(sumMale4+sumFemale4))*100).toFixed(2));

    popData10[0]=parseFloat(((popData10[0]/(sumMale4+sumFemale4))*100).toFixed(2));
    popData10[1]=parseFloat(((popData10[1]/(sumMale4+sumFemale4))*100).toFixed(2));
    popData10[2]=parseFloat(((popData10[2]/(sumMale4+sumFemale4))*100).toFixed(2));
    popData10[3]=parseFloat(((popData10[3]/(sumMale4+sumFemale4))*100).toFixed(2));
    popData10[4]=parseFloat(((popData10[4]/(sumMale4+sumFemale4))*100).toFixed(2));
    popData10[5]=parseFloat(((popData10[5]/(sumMale4+sumFemale4))*100).toFixed(2));
    popData10[6]=parseFloat(((popData10[6]/(sumMale4+sumFemale4))*100).toFixed(2));
    popData10[7]=parseFloat(((popData10[7]/(sumMale4+sumFemale4))*100).toFixed(2));
    popData10[8]=parseFloat(((popData10[8]/(sumMale4+sumFemale4))*100).toFixed(2));
    popData10[9]=parseFloat(((popData10[9]/(sumMale4+sumFemale4))*100).toFixed(2));
    popData10[10]=parseFloat(((popData10[10]/(sumMale4+sumFemale4))*100).toFixed(2));
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
    popData11[0]=parseFloat(((popData11[0]/(sumMale5+sumFemale5))*100).toFixed(2));
    popData11[1]=parseFloat(((popData11[1]/(sumMale5+sumFemale5))*100).toFixed(2));
    popData11[2]=parseFloat(((popData11[2]/(sumMale5+sumFemale5))*100).toFixed(2));
    popData11[3]=parseFloat(((popData11[3]/(sumMale5+sumFemale5))*100).toFixed(2));
    popData11[4]=parseFloat(((popData11[4]/(sumMale5+sumFemale5))*100).toFixed(2));
    popData11[5]=parseFloat(((popData11[5]/(sumMale5+sumFemale5))*100).toFixed(2));
    popData11[6]=parseFloat(((popData11[6]/(sumMale5+sumFemale5))*100).toFixed(2));
    popData11[7]=parseFloat(((popData11[7]/(sumMale5+sumFemale5))*100).toFixed(2));
    popData11[8]=parseFloat(((popData11[8]/(sumMale5+sumFemale5))*100).toFixed(2));
    popData11[9]=parseFloat(((popData11[9]/(sumMale5+sumFemale5))*100).toFixed(2));
    popData11[10]=parseFloat(((popData11[10]/(sumMale5+sumFemale5))*100).toFixed(2));

    popData12[0]=parseFloat(((popData12[0]/(sumMale5+sumFemale5))*100).toFixed(2));
    popData12[1]=parseFloat(((popData12[1]/(sumMale5+sumFemale5))*100).toFixed(2));
    popData12[2]=parseFloat(((popData12[2]/(sumMale5+sumFemale5))*100).toFixed(2));
    popData12[3]=parseFloat(((popData12[3]/(sumMale5+sumFemale5))*100).toFixed(2));
    popData12[4]=parseFloat(((popData12[4]/(sumMale5+sumFemale5))*100).toFixed(2));
    popData12[5]=parseFloat(((popData12[5]/(sumMale5+sumFemale5))*100).toFixed(2));
    popData12[6]=parseFloat(((popData12[6]/(sumMale5+sumFemale5))*100).toFixed(2));
    popData12[7]=parseFloat(((popData12[7]/(sumMale5+sumFemale5))*100).toFixed(2));
    popData12[8]=parseFloat(((popData12[8]/(sumMale5+sumFemale5))*100).toFixed(2));
    popData12[9]=parseFloat(((popData12[9]/(sumMale5+sumFemale5))*100).toFixed(2));
    popData12[10]=parseFloat(((popData12[10]/(sumMale5+sumFemale5))*100).toFixed(2));
   console.log(popData11);
   console.log(sumMale5);

   console.log(popData12);
   console.log(sumFemale5);












  var columnColors = new Array( '#87CEFA','#929bce','#0787C8', '#465296');
  var pieColors = new Array('#3795BC', '#FB9705');  //'#0787C8', '#1FC22B'


  //var promise1 = qService.tokenHttpGet(forecastFactory.query,{tableName:'birthrateData'});
  //  promise1.then(function(rc1) {

 //   console.log(rc1.data);
  
  

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
        position: [121.20748, 31.622211],   //浮桥镇  121.20748,31.622211
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
infow.push("<div style='background-color:#FFFFFF;border:2px solid #CC0033;border-radius:10px;padding:10px 10px;position:absolute;top:-10px;left:-5px;white-space:nowrap;color:#CC0033;font-size:18px'>浮桥镇</div>")
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
 var marker4 = new AMap.Marker({            //城厢镇
        position: [121.1124,31.456376],
        map:map,
        icon: new AMap.Icon({            
          size: new AMap.Size(40, 50),  //图标大小
          image: "/images/marker_sprite.png",
        })
    });
  var infow4=[];
infow4.push("<div style='background-color:#FFFFFF;border:2px solid #66cc66;border-radius:10px;padding:10px 10px;position:absolute;top:-10px;left:-5px;white-space:nowrap;color:#66cc66;font-size:18px'>城厢镇</div>")
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
infow2.push("<div style='background-color:#FFFFFF;border:2px solid #CC0033;border-radius:10px;padding:10px 10px;position:absolute;top:-10px;left:-5px;white-space:nowrap;color:#CC0033;font-size:18px'>浏河镇</div>")
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
infow3.push("<div style='background-color:#FFFFFF;border:2px solid #CC0033;border-radius:10px;padding:10px 10px;position:absolute;top:-10px;left:-5px;white-space:nowrap;color:#CC0033;font-size:18px'>太仓城区</div>")
    // 设置label标签
    marker3.setLabel({//label默认蓝框白底左上角显示，样式className为：amap-marker-label
        offset: new AMap.Pixel(20, 20),//修改label相对于maker的位置
        content: infow3.join('')
    });
   var marker6 = new AMap.Marker({
        position: [121.036167,31.519103],  //双凤镇
        map:map,
        icon: new AMap.Icon({            
          size: new AMap.Size(40, 50),  //图标大小
          image: "/images/marker_sprite.png",
        })
    });
   var infow6=[];
infow6.push("<div style='background-color:#FFFFFF;border:2px solid #CC0033;border-radius:10px;padding:10px 10px;position:absolute;top:-10px;left:-5px;white-space:nowrap;color:#CC0033;font-size:18px'>双凤镇</div>")
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

var marker8 = new AMap.Marker({
        position: [121.126845,31.434877],   //科教新城  121.20748,31.622211
        map:map,
        icon: new AMap.Icon({            
          size: new AMap.Size(40, 50),  //图标大小
          image: "/images/marker_sprite.png",
        })        
    });
 marker8.setMap(map);
    // 设置鼠标划过点标记显示的文字提示
    marker8.setTitle('');
var infow=[];
infow.push("<div style='background-color:#FFFFFF;border:2px solid #66cc66;border-radius:10px;padding:10px 10px;position:absolute;top:-10px;left:-5px;white-space:nowrap;color:#66cc66;font-size:18px'>科教新城</div>")
    // 设置label标签
    marker8.setLabel({//label默认蓝框白底左上角显示，样式className为：amap-marker-label
        offset: new AMap.Pixel(20, 20),//修改label相对于maker的位置
        content: infow.join('')
    });

var marker9 = new AMap.Marker({
        position: [121.132514,31.479037],   //新区  121.20748,31.622211
        map:map,
        icon: new AMap.Icon({            
          size: new AMap.Size(40, 50),  //图标大小
          image: "/images/marker_sprite.png",
        })        
    });
 marker9.setMap(map);
    // 设置鼠标划过点标记显示的文字提示
    marker9.setTitle('');
var infow=[];
infow.push("<div style='background-color:#FFFFFF;border:2px solid #CC0033;border-radius:10px;padding:10px 10px;position:absolute;top:-10px;left:-5px;white-space:nowrap;color:#CC0033;font-size:18px'>新区</div>")
    // 设置label标签
    marker9.setLabel({//label默认蓝框白底左上角显示，样式className为：amap-marker-label
        offset: new AMap.Pixel(20, 20),//修改label相对于maker的位置
        content: infow.join('')
    });

var marker10 = new AMap.Marker({
        position: [121.212609,31.600756],   //港区  121.20748,31.622211
        map:map,
        icon: new AMap.Icon({            
          size: new AMap.Size(40, 50),  //图标大小
          image: "/images/marker_sprite.png",
        })        
    });
 marker10.setMap(map);
    // 设置鼠标划过点标记显示的文字提示
    marker10.setTitle('');
var infow=[];
infow.push("<div style='background-color:#FFFFFF;border:2px solid #CC0033;border-radius:10px;padding:10px 10px;position:absolute;top:-10px;left:-5px;white-space:nowrap;color:#CC0033;font-size:18px'>港区</div>")
    // 设置label标签
    marker10.setLabel({//label默认蓝框白底左上角显示，样式className为：amap-marker-label
        offset: new AMap.Pixel(20, 20),//修改label相对于maker的位置
        content: infow.join('')
    });

//显示信息窗体(可单击位置显示隐藏的信息窗体)
var info1=[];
   info1.push("<h4><strong>浮桥镇人口自然增长率</strong></h4>");//121.20748,31.622211
    info1.push("<table class='table table-bordered table-striped'>");
    info1.push("<tr><td style='font-size:15px;text-align:center'>出生率</td><td style='text-align:center'>6.12‰</td></tr>");
    info1.push("<tr><td style='font-size:15px;text-align:center'>死亡率</td><td style='text-align:center'>10.78‰</td></tr>");
    info1.push("<tr><td style='font-size:15px;text-align:center'>人口自然增长率</td><td style='text-align:center'>-4.66‰</td></tr>");
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
    info2.push("<tr><td style='font-size:15px;width:150px;text-align:center'>出生率</td><td style='text-align:center'>6.3‰</td></tr>");
    info2.push("<tr><td style='font-size:15px;text-align:center'>死亡率</td><td style='text-align:center'>9.09‰</td></tr>");
    info2.push("<tr><td style='font-size:15px;text-align:center'>人口自然增长率</td><td style='text-align:center'>-2.79‰</td></tr>");
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
    info3.push("<tr><td style='font-size:15px;text-align:center'>出生率</td><td style='text-align:center'>6.34‰</td ></tr>");
    info3.push("<tr><td style='font-size:15px;text-align:center'>死亡率</td><td style='text-align:center'>8.22‰</td ></tr>");
    info3.push("<tr><td style='font-size:15px;text-align:center'>人口自然增长率</td><td style='text-align:center'>-1.88‰</td></tr>");
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
    info4.push("<h4><strong>城厢镇人口自然增长率</strong></h4>");
    info4.push("<table class='table table-bordered table-striped'>");
    info4.push("<tr><td style='font-size:15px;text-align:center'>出生率</td><td style='text-align:center'>9.5‰</td></tr>");
    info4.push("<tr><td style='font-size:15px;text-align:center'>死亡率</td><td style='text-align:center'>5.59‰</td></tr>");
    info4.push("<tr><td style='font-size:15px;text-align:center'>人口自然增长率</td><td style='text-align:center'>3.91‰</td></tr>");
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
    info5.push("<tr><td style='font-size:15px;text-align:center'>出生率</td><td style='text-align:center'>6.53‰</td></tr>");
    info5.push("<tr><td style='font-size:15px;text-align:center'>死亡率</td><td style='text-align:center'>4.76‰</td></tr>");
    info5.push("<tr><td style='font-size:15px;text-align:center'>人口自然增长率</td><td style='text-align:center'>1.77‰</td></tr>");
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
   info6.push("<h4><strong>双凤镇人口自然增长率</strong></h4>");
    info6.push("<table class='table table-bordered table-striped'>");
    info6.push("<tr><td style='font-size:15px;text-align:center'>出生率</td><td style='text-align:center'>7.62‰</td></tr>");
    info6.push("<tr><td style='font-size:15px;text-align:center'>死亡率</td><td style='text-align:center'>9.07‰</td></tr>");
    info6.push("<tr><td style='font-size:15px;text-align:center'>人口自然增长率</td><td style='text-align:center'>-1.45‰</td></tr>");
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
    info7.push("<tr><td style='font-size:15px;text-align:center'>出生率</td><td style='text-align:center'>5.91‰</td></tr>");
    info7.push("<tr><td style='font-size:15px;text-align:center'>死亡率</td><td style='text-align:center'>9.98‰</td></tr>");
    info7.push("<tr><td style='font-size:15px;text-align:center'>人口自然增长率</td><td style='text-align:center'>-4.07‰</td></tr>");
    info7.push("</table>");
var infowindow7 = new AMap.InfoWindow({
     content: info7.join(''),
     offset: new AMap.Pixel(0, -30),
     size:new AMap.Size(300,0)
})
var clickHandle7 = AMap.event.addListener(marker7, 'click', function() {
    infowindow7.open(map, marker7.getPosition())
})
var info8=[];
    info8.push("<h4><strong>科教新城人口自然增长率</strong></h4>");
    info8.push("<table class='table table-bordered table-striped'>");
    info8.push("<tr><td style='font-size:15px;text-align:center'>出生率</td><td style='text-align:center'>13.28‰</td></tr>");
    info8.push("<tr><td style='font-size:15px;text-align:center'>死亡率</td><td style='text-align:center'>7.33‰</td></tr>");
    info8.push("<tr><td style='font-size:15px;text-align:center'>人口自然增长率</td><td style='text-align:center'>5.95‰</td></tr>");
    info8.push("</table>");
var infowindow8 = new AMap.InfoWindow({
     content: info8.join(''),
     offset: new AMap.Pixel(0, -30),
     size:new AMap.Size(300,0)
})
var clickHandle8 = AMap.event.addListener(marker8, 'click', function() {
    infowindow8.open(map, marker8.getPosition())
})
var info9=[];
    info9.push("<h4><strong>新区人口自然增长率</strong></h4>");
    info9.push("<table class='table table-bordered table-striped'>");
    info9.push("<tr><td style='font-size:15px;text-align:center'>出生率</td><td style='text-align:center'>6.84‰</td></tr>");
    info9.push("<tr><td style='font-size:15px;text-align:center'>死亡率</td><td style='text-align:center'>8.68‰</td></tr>");
    info9.push("<tr><td style='font-size:15px;text-align:center'>人口自然增长率</td><td style='text-align:center'>-1.84‰</td></tr>");
    info9.push("</table>");
var infowindow9 = new AMap.InfoWindow({
     content: info9.join(''),
     offset: new AMap.Pixel(0, -30),
     size:new AMap.Size(300,0)
})
var clickHandle9 = AMap.event.addListener(marker9, 'click', function() {
    infowindow9.open(map, marker9.getPosition())
})
var info10=[];
    info10.push("<h4><strong>港区人口自然增长率</strong></h4>");
    info10.push("<table class='table table-bordered table-striped'>");
    info10.push("<tr><td style='font-size:15px;text-align:center'>出生率</td><td style='text-align:center'>5.56‰</td></tr>");
    info10.push("<tr><td style='font-size:15px;text-align:center'>死亡率</td><td style='text-align:center'>7.44‰</td></tr>");
    info10.push("<tr><td style='font-size:15px;text-align:center'>人口自然增长率</td><td style='text-align:center'>-1.88‰</td></tr>");
    info10.push("</table>");
var infowindow10 = new AMap.InfoWindow({
     content: info10.join(''),
     offset: new AMap.Pixel(0, -30),
     size:new AMap.Size(300,0)
})
var clickHandle10 = AMap.event.addListener(marker10, 'click', function() {
    infowindow10.open(map, marker10.getPosition())
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

//});

 
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
        document.getElementById('abc').innerHTML='&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp太仓市人口结构呈现不断老龄化趋势；其中，60岁及以上人口比例从2015的31.02% 增加到2020的32.08%。';
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
        document.getElementById('abc').innerHTML='&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp太仓市人口结构呈现不断老龄化趋势；其中，60岁及以上人口比例从2015的31.02% 增加到2025的33.66%。';
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
        document.getElementById('abc').innerHTML='&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp太仓市人口结构呈现不断老龄化趋势；其中，60岁及以上人口比例从2015的31.02% 增加到2030的33.67%。';
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
        document.getElementById('abc').innerHTML='&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp太仓市人口结构呈现不断老龄化趋势；其中，60岁及以上人口比例从2015的31.02% 增加到2040的32.05%。';
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
        document.getElementById('abc').innerHTML='&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp太仓市人口结构呈现不断老龄化趋势；其中，60岁及以上人口比例从2015的31.02% 增加到2035的33.92%。';
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
        document.getElementById('abc').innerHTML='&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp太仓市人口结构呈现不断老龄化趋势；其中，60岁及以上人口比例从2015的31.02% 减少到2045的30.51%。';
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
                        '人口: ' + Highcharts.numberFormat(Math.abs(this.point.y), 0);
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
                        '人口: ' + Highcharts.numberFormat(Math.abs(this.point.y), 0);
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
 });  

var sumData;
var promise2 = qService.tokenHttpGet(forecastFactory.query,{tableName:'sumPopulationData'});
    
   // var promise = qService.tokenHttpGet(forecastFactory.query,{tableName:'populationStructurePreData'});
    promise2.then(function(rc2) {

    console.log(rc2.data);
    var sumData=rc2.data;
    //第二张图
          var sum16=0;
          var sum17=0;
          var sum18=0;
          var sum19=0;
          var sum20=0;
          var sum21=0;
          var sum22=0;
          var sum23=0;
          var sum24=0;
          var sum25=0;
          var sum1=[];

          var rate16=0;
          var rate17=0;
          var rate18=0;
          var rate19=0;
          var rate20=0;
          var rate21=0;
          var rate22=0;
          var rate23=0;
          var rate24=0;
          var rate25=0;
          var rate1=[];
   for(var i=0;i<sumData.length;i++){
            if(sumData[i].year===2016){
               sum16=sumData[i].sumPopulation;
               rate16=sumData[i].popRate;
            }
            if(sumData[i].year===2017){
               sum17=sumData[i].sumPopulation;
               rate17=sumData[i].popRate;
            }
            if(sumData[i].year===2018){
               sum18=sumData[i].sumPopulation;
               rate18=sumData[i].popRate;
            }
            if(sumData[i].year===2019){
               sum19=sumData[i].sumPopulation;
               rate19=sumData[i].popRate;
            }
            if(sumData[i].year===2020){
               sum20=sumData[i].sumPopulation;
               rate20=sumData[i].popRate;
            }
            if(sumData[i].year===2021){
               sum21=sumData[i].sumPopulation;
               rate21=sumData[i].popRate;
            }
            if(sumData[i].year===2022){
               sum22=sumData[i].sumPopulation;
               rate22=sumData[i].popRate;
            }
            if(sumData[i].year===2023){
               sum23=sumData[i].sumPopulation;
               rate23=sumData[i].popRate;
            }
            if(sumData[i].year===2024){
               sum24=sumData[i].sumPopulation;
               rate24=sumData[i].popRate;
            }
            if(sumData[i].year===2025){
               sum25=sumData[i].sumPopulation;
               rate25=sumData[i].popRate;
            }
          }
      sum1.push(sum16);
      sum1.push(sum17);
      sum1.push(sum18);
      sum1.push(sum19);
      sum1.push(sum20);
      sum1.push(sum21);
      sum1.push(sum22);
      sum1.push(sum23);
      sum1.push(sum24);
      sum1.push(sum25);

      rate1.push(rate16);
      rate1.push(rate17);
      rate1.push(rate18);
      rate1.push(rate19);
      rate1.push(rate20);
      rate1.push(rate21);
      rate1.push(rate22);
      rate1.push(rate23);
      rate1.push(rate24);
      rate1.push(rate25);

      console.log(sum1);
      

          var sum26=0;
          var sum27=0;
          var sum28=0;
          var sum29=0;
          var sum30=0;
          var sum31=0;
          var sum32=0;
          var sum33=0;
          var sum34=0;
          var sum35=0;
          var sum2=[];

          var rate26=0;
          var rate27=0;
          var rate28=0;
          var rate29=0;
          var rate30=0;
          var rate31=0;
          var rate32=0;
          var rate33=0;
          var rate34=0;
          var rate35=0;
          var rate2=[];
   for(var i=0;i<sumData.length;i++){
            if(sumData[i].year===2026){
               sum26=sumData[i].sumPopulation;
               rate26=sumData[i].popRate;
            }
            if(sumData[i].year===2027){
               sum27=sumData[i].sumPopulation;
               rate27=sumData[i].popRate;
            }
            if(sumData[i].year===2028){
               sum28=sumData[i].sumPopulation;
               rate28=sumData[i].popRate;
            }
            if(sumData[i].year===2029){
               sum29=sumData[i].sumPopulation;
               rate29=sumData[i].popRate;
            }
            if(sumData[i].year===2030){
               sum30=sumData[i].sumPopulation;
               rate30=sumData[i].popRate;
            }
            if(sumData[i].year===2031){
               sum31=sumData[i].sumPopulation;
               rate31=sumData[i].popRate;
            }
            if(sumData[i].year===2032){
               sum32=sumData[i].sumPopulation;
               rate32=sumData[i].popRate;
            }
            if(sumData[i].year===2033){
               sum33=sumData[i].sumPopulation;
               rate33=sumData[i].popRate;
            }
            if(sumData[i].year===2034){
               sum34=sumData[i].sumPopulation;
               rate34=sumData[i].popRate;
            }
            if(sumData[i].year===2035){
               sum35=sumData[i].sumPopulation;
               rate35=sumData[i].popRate;
            }
          }
      sum2.push(sum26);
      sum2.push(sum27);
      sum2.push(sum28);
      sum2.push(sum29);
      sum2.push(sum30);
      sum2.push(sum31);
      sum2.push(sum32);
      sum2.push(sum33);
      sum2.push(sum34);
      sum2.push(sum35);

      rate2.push(rate26);
      rate2.push(rate27);
      rate2.push(rate28);
      rate2.push(rate29);
      rate2.push(rate30);
      rate2.push(rate31);
      rate2.push(rate32);
      rate2.push(rate33);
      rate2.push(rate34);
      rate2.push(rate35);

      console.log(sum2);

          var sum36=0;
          var sum37=0;
          var sum38=0;
          var sum39=0;
          var sum40=0;
          var sum41=0;
          var sum42=0;
          var sum43=0;
          var sum44=0;
          var sum45=0;
          var sum3=[];

          var rate36=0;
          var rate37=0;
          var rate38=0;
          var rate39=0;
          var rate40=0;
          var rate41=0;
          var rate42=0;
          var rate43=0;
          var rate44=0;
          var rate45=0;
          var rate3=[];
   for(var i=0;i<sumData.length;i++){
            if(sumData[i].year===2036){
               sum36=sumData[i].sumPopulation;
               rate36=sumData[i].popRate;
            }
            if(sumData[i].year===2037){
               sum37=sumData[i].sumPopulation;
               rate37=sumData[i].popRate;
            }
            if(sumData[i].year===2038){
               sum38=sumData[i].sumPopulation;
               rate38=sumData[i].popRate;
            }
            if(sumData[i].year===2039){
               sum39=sumData[i].sumPopulation;
               rate39=sumData[i].popRate;
            }
            if(sumData[i].year===2040){
               sum40=sumData[i].sumPopulation;
               rate40=sumData[i].popRate;
            }
            if(sumData[i].year===2041){
               sum41=sumData[i].sumPopulation;
               rate41=sumData[i].popRate;
            }
            if(sumData[i].year===2042){
               sum42=sumData[i].sumPopulation;
               rate42=sumData[i].popRate;
            }
            if(sumData[i].year===2043){
               sum43=sumData[i].sumPopulation;
               rate43=sumData[i].popRate;
            }
            if(sumData[i].year===2044){
               sum44=sumData[i].sumPopulation;
               rate44=sumData[i].popRate;
            }
            if(sumData[i].year===2045){
               sum45=sumData[i].sumPopulation;
               rate45=sumData[i].popRate;
            }
          }
      sum3.push(sum36);
      sum3.push(sum37);
      sum3.push(sum38);
      sum3.push(sum39);
      sum3.push(sum40);
      sum3.push(sum41);
      sum3.push(sum42);
      sum3.push(sum43);
      sum3.push(sum44);
      sum3.push(sum45);

      rate3.push(rate36);
      rate3.push(rate37);
      rate3.push(rate38);
      rate3.push(rate39);
      rate3.push(rate40);
      rate3.push(rate41);
      rate3.push(rate42);
      rate3.push(rate43);
      rate3.push(rate44);
      rate3.push(rate45);

      console.log(sum3);
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
                },
                
                 //tickPositions: [0, 100000, 200000, 300000,400000,500000,600000,700000,800000,900000] 
            },
            labels: {
                format: '{value} 人',
                style: {
                    color: Highcharts.getOptions().colors[0]
                },

            },
            opposite: true,
            tickPositions: [0, 100000, 200000, 300000,400000,500000,600000,700000,800000,900000]
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
            data: sum1,
            tooltip: {
                valueSuffix: '人'
            }

        }, {
            name: '人口增长率',
            type: 'spline',
             color: "#434348",
            data: rate1,
            marker:{
                symbol:"circle"
            },
            tooltip: {
                valueSuffix: '%'
            }
        }]
      };
      $scope.btn_click1=function(btn){
    $scope.change1(btn);
  };
  $scope.change1=function(btn){
    if(btn.name===2025){
        document.getElementById('a').innerHTML="&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp 总体来看，太仓市的人口总量处于平稳状态，呈增长趋势，随着二胎政策的全面开放，促进了人口数量的增加。";
    $scope.sumpopulation.options.xAxis[0].categories=['2016','2017','2018','2019','2020','2021','2022','2023','2024','2025'];
    $scope.sumpopulation.options.title.text="太仓市2016年到2025年常住人口总量预测趋势图";
    $scope.sumpopulation.series=[{
            name: '人口总量',
            type: 'column',
            yAxis: 1,
            color: "#7CB5EC",
            data: sum1,
            tooltip: {
                valueSuffix: '人'
            }

        }, {
            name: '人口增长率',
            type: 'spline',
             color: "#434348",
            data: rate1,
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
        $scope.sumpopulation.options.title.text="太仓市2026年到2035年常住人口总量预测趋势图";
    $scope.sumpopulation.series=[{
            name: '人口总量',
            type: 'column',
            yAxis: 1,
            color: "#7CB5EC",
            data: sum2,
            tooltip: {
                valueSuffix: '人'
            }

        }, {
            name: '人口增长率',
            type: 'spline',
            color: "#434348",
            data: rate2,
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
        $scope.sumpopulation.options.title.text="太仓市2036年到2045年常住人口总量预测趋势图";
    $scope.sumpopulation.series=[{
            name: '人口总量',
            type: 'column',
            yAxis: 1,
            color: "#7CB5EC",
            data: sum3,
            tooltip: {
                valueSuffix: '人'
            }

        }, {
            name: '人口增长率',
            type: 'spline',
            color: "#434348",
            data: rate3,
            marker:{
                symbol:"circle"
            },
            tooltip: {
                valueSuffix: '%'
            }
        }];
     }
  };
});
    
}]);