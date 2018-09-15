import React, { Component } from 'react';
import axios from 'axios';

const AMap = window.AMap;

class Map5 extends Component {

  render() {
    return (
      <div>
          <p>弹出标记点信息、请求逆地理编码api</p>
          <div id="mapContainer5" style={{width: 500, height: 300, background: 'red'}}></div>
      </div>
    );
  }
  componentDidMount() {

    // 初始化地图
    
    var map4 = new AMap.Map('mapContainer5', {
      center: [116.38,39.9],
      zoom: 11
    });
    
    var marker3 = new AMap.Marker({
      position: [116.397499, 39.908722],
      title: '天安门'
    })

    map4.add(marker3);

    /*** 普通弹窗  ***/

    // 弹窗内部信息变量
    var title = '<h5 style="margin: 5px">北京天安门</h5>',
    content = [];
    content.push("<img src='http://tpc.googlesyndication.com/simgad/5843493769827749134'>");
    // 定义弹窗对象
    var infoWindow = new AMap.InfoWindow({
      content: '',
      offset: new AMap.Pixel(0, -20)
    });

    // 鼠标点击marker弹出自定义的信息窗体
    AMap.event.addListener(marker3, 'click', function() {
      var marker3Pos = marker3.getPosition()
      // 请求逆地理编码web服务api
      axios.get('https://restapi.amap.com/v3/geocode/regeo', {
        params: {
          location: `${marker3Pos.P},${marker3Pos.O}`,
          key: '5b58b07e7ec426be59cd41eafe17e32f'
        }
      })
      .then(function (response) {
        var marker3Ad = `<div style='font-size: 12px'>详细地址${response.data.regeocode.formatted_address}</div>`;
        infoWindow.setContent(`${title}${content.join()}${marker3Ad}`)
        infoWindow.open(map4, marker3Pos);
      }) 
    });

    /*** 高级弹窗 ***/

    // 弹窗内部信息变量
    var adContent='<div>高德地图</div>' +
    '<img src="https://webapi.amap.com/images/amap.jpg">'

    // 定义高级弹窗对象
    var infowindow2 = new AMap.AdvancedInfoWindow({
      content: adContent,
      offset: new AMap.Pixel(0, -30)
    });

    // 标记点
    var aDmarker = new AMap.Marker({
      position: [116.39, 39.90],
    })

    aDmarker.setMap(map4)

    // 鼠标点击marker弹出自定义的信息窗体
    AMap.event.addListener(aDmarker, 'click', function() {
      var aDmarkerPos = aDmarker.getPosition()
      infowindow2.open(map4, aDmarkerPos);
      console.log(aDmarkerPos)
    });
  }
}

export default Map5;
