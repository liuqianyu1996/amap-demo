import React, { Component } from 'react';

const AMap = window.AMap;

class Map1 extends Component {

  render() {
    return (
      <div>
          <p>创建地图-使用插件</p>
          <div id="mapContainer" style={{width: 500, height: 300, background: 'red'}}></div>
      </div>
    );
  }
  componentDidMount() {

    // 创建地图-使用插件

    var map = new AMap.Map('mapContainer', {
      center:[116.39,39.9],
      zoom:11
    });
    console.log('0',map)
    // 折线路径
    var path = [ [116,39], [116,40], [117,39] ]; //简写
    var polyline = new AMap.Polyline({
       path : path,
    })
    map.add(polyline);

    // 使用插件-异步
    AMap.plugin('AMap.ToolBar',function(){//异步加载插件
      var toolbar = new AMap.ToolBar();
      map.addControl(toolbar);
    });

    // 使用标记
    var marker = new AMap.Marker({
      position: new AMap.LngLat(116.39, 39.9),   // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
      title: '北京'
    })
    map.add(marker);
  }
}

export default Map1;
