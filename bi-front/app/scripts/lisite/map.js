//显示地图
var map = new AMap.Map('lisiteMap');
map.setZoom(10);
map.setCenter([121.111,31.550]);
//设置锚点
var marker1 = new AMap.Marker({
    position: [121.188, 31.660],
});
marker1.setMap(map);

var marker2 = new AMap.Marker({
    position: [121.234, 31.580],
});
marker2.setMap(map);

var marker3 = new AMap.Marker({
    position: [121.281, 31.550],
});
marker3.setMap(map);
//显示信息窗体(可单击位置显示隐藏的信息窗体)
var infowindow1 = new AMap.InfoWindow({
     content: "<h4>第二水厂</h4>\
    <table class='lst-table table-hover' width='100%' style='font-size: 50%'>\
        <tr class='lst-tr'>\
            <th class='lst-th'><button type='button' class='btn btn-success'>溶解氧</button></th>\
            <th class='lst-th'><button type='button' class='btn btn-danger'>高锰酸钾</button></th>\
            <th class='lst-th'><button type='button' class='btn btn-success'>氨氮</button></th>\
        </tr>\
        <tr class='lst-tr'>\
            <td class='lst-td'>34mg/L</td>\
            <td class='lst-td'>122mg/L</td>\
            <td class='lst-td'>40mg/L</td>\
        </tr>\
    </table>",
     offset: new AMap.Pixel(0, -30),
     size:new AMap.Size(300,0)
})
var clickHandle1 = AMap.event.addListener(marker1, 'click', function() {
    infowindow1.open(map, marker1.getPosition())
})

var infowindow2 = new AMap.InfoWindow({
    content: "<h4>协鑫码头</h4>\
    <table class='lst-table table-hover' width='100%' style='font-size: 50%'>\
        <tr class='lst-tr'>\
            <th class='lst-th'><button type='button' class='btn btn-success'>溶解氧</button></th>\
            <th class='lst-th'><button type='button' class='btn btn-warning'>高锰酸钾</button></th>\
            <th class='lst-th'><button type='button' class='btn btn-danger'>氨氮</button></th>\
        </tr>\
        <tr class='lst-tr'>\
            <td class='lst-td'>34mg/L</td>\
            <td class='lst-td'>56mg/L</td>\
            <td class='lst-td'>117mg/L</td>\
        </tr>\
    </table>",
     offset: new AMap.Pixel(0, -30),
     size:new AMap.Size(300,0)
})
// 显示信息窗体2
infowindow2.open(map, marker2.getPosition());
var clickHandle2 = AMap.event.addListener(marker2, 'click', function() {
    infowindow2.open(map, marker2.getPosition())
})

var infowindow3 = new AMap.InfoWindow({
     content: "<h4>第三水厂</h4>\
    <table class='lst-table table-hover' width='100%' style='font-size: 50%'>\
        <tr class='lst-tr'>\
            <th class='lst-th'><button type='button' class='btn btn-success'>溶解氧</button></th>\
            <th class='lst-th'><button type='button' class='btn btn-success'>高锰酸钾</button></th>\
            <th class='lst-th'><button type='button' class='btn btn-warning'>氨氮</button></th>\
        </tr>\
        <tr class='lst-tr'>\
            <td class='lst-td'>46mg/L</td>\
            <td class='lst-td'>44mg/L</td>\
            <td class='lst-td'>88mg/L</td>\
        </tr>\
    </table>",
     offset: new AMap.Pixel(0, -30),
     size:new AMap.Size(300,0)
})
var clickHandle3 = AMap.event.addListener(marker3, 'click', function() {
    infowindow3.open(map, marker3.getPosition())
})
// 添加工具条和比例尺
AMap.plugin(['AMap.ToolBar','AMap.Scale'],function(){
    //TODO  创建控件并添加
    var toolBar = new AMap.ToolBar();
    var scale = new AMap.Scale();
    map.addControl(toolBar);
    map.addControl(scale);
})
