import React, { Component } from 'react';
import axios from 'axios';

const AMap = window.AMap;

class Map3 extends Component {

  render() {
    return (
      <div>
        <p>海量点标记</p>
        <div id="mapContainer2" style={{width: 500, height: 300, background: 'red'}}></div>
      </div>
    );
  }
  componentDidMount() {

    //海量点标记

    var map2 = new AMap.Map('mapContainer2', {
      center: [116.39,39.9],
      zoom: 2
    });
    // 创建样式对象
    var style = [{
      url: 'https://a.amap.com/jsapi_demos/static/images/mass0.png',
      anchor: new AMap.Pixel(6, 6),
      size: new AMap.Size(11, 11)
    }];
    // 坐标点数据
    var citys = [
      {lnglat: [116.405285, 39.904989], name: 'aaa',id:1},
      {lnglat: [118.405285, 40.904989], name: 'bbb',id:2},
      {lnglat: [117.405285, 50.904989], name: 'ccc',id:3},
    ]
    // 创建海量坐标点类
    var mass = new AMap.MassMarks(citys, {
      opacity: 0.8,// 图层透明度
      zIndex: 111,
      cursor: 'pointer',
      style: style // 样式可以是不一样的，在数组里设置
    });
    // 创建标记点对象，设置作用地图为map2
    var marker2 = new AMap.Marker({ content:' ',map: map2 })
    // 坐标点事件监听，滑动时显示名称
    mass.on('mouseover',function(e){
      marker2.setPosition(e.data.lnglat);// 设置标记点位置，不设置的话label就会一直在中间而不是跟着滑到的坐标点
      marker2.setLabel({content:e.data.name}) 
    })
    // 设置显示MassMark的地图对象
    mass.setMap(map2); 
  }
}

export default Map3;
