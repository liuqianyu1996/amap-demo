import React, { Component } from 'react';
import remoteLoad from '../utils/remoteLoad.js';
import axios from 'axios';

class Map1 extends Component {


  constructor() {
    super()
    
    this.state = {
      start: '',
      end: '',
      destName: ''
    }
  }

  initMap() {
    var map = new window.AMap.Map('mapContainer', {
      center:[116.39,39.9],
      zoom:11
    });

    const that = this;

    window.AMap.plugin(['AMap.Autocomplete','AMap.PlaceSearch'],function(){

      // 起点

      var startOpt = {
        // 城市，默认全国 
        city: "北京",
        // 使用联想输入的input的id
        input: "start"
      }
      var autocompleteStart= new window.AMap.Autocomplete(startOpt)
    
      var placeSearchStart = new window.AMap.PlaceSearch({
        city: '北京',
        map: map
      })
      window.AMap.event.addListener(autocompleteStart, 'select', function(e){
        // 选中之后设置地图中的城市、地点
        placeSearchStart.setCity(e.poi.adcode);
        placeSearchStart.search(e.poi.name)
        const { lng, lat } = e.poi.location
        that.setState({
          start: `${lng},${lat}`
        })
        that.onNavigator()
        console.log('start', e.poi)
      })

      // 终点

      var endOpt = {
        // 城市，默认全国 
        city: "北京",
        // 使用联想输入的input的id
        input: "End"
      }

      var autocompleteEnd= new window.AMap.Autocomplete(endOpt)
    
      var placeSearchEnd = new window.AMap.PlaceSearch({
        city: '北京',
        map: map
      })
      window.AMap.event.addListener(autocompleteEnd, 'select', function(e){
        // 选中之后设置地图中的城市、地点
        placeSearchEnd.setCity(e.poi.adcode);
        placeSearchEnd.search(e.poi.name)
        const { lng, lat } = e.poi.location
        that.setState({
          end: `${lng},${lat}`,
          destName: e.poi.name
        })
        that.onNavigator()
        console.log('end', e.poi)
      })
    })
  }

  onNavigator () {
    const { start, end, destName } = this.state;
    if ( start !== '' && end !== '') {
      fetch(`https://m.amap.com/navi?start=${start}&dest=${end}&destName=${destName}&naviBy=car&key=5b58b07e7ec426be59cd41eafe17e32f`, {
        method: 'GET'

      })
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
      });
      // axios.get('https://m.amap.com/navi', {
      //   params: {
      //     start: start,
      //     dest: end,
      //     destName: destName,
      //     naviBy: 'car',
      //     key: '5b58b07e7ec426be59cd41eafe17e32f',
      //   }
      // })
      // .then(function (response) {
      //   console.log(response)
      // }) 
    }
  }

  render() {
    return (
      <div className="App">
        <div id="mapContainer" style={{ width: 500, height: 300 }}>
        </div>
        <div id="tip">
          <div>
            <label>起点:</label>
            <input type="text" id="start" name="start" placeholder="请输入关键字" />
          </div>
          <div>
            <label>终点:</label>
            <input type="text" id="End" name="End" placeholder="请输入关键字" />
          </div>
        </div>
      </div>
    );
  }

  async componentDidMount() {
     // 已载入高德地图API，则直接初始化地图
     if (window.AMap && window.AMapUI) {
        this.initMap()
      // 未载入高德地图API，则先载入API再初始化
      } else {
        await remoteLoad("https://webapi.amap.com/maps?v=1.4.8&key=c11931afa0886cfba47027e71cecdfc6&plugin=Map3D,ElasticMarker,AMap.AdvancedInfoWindow")
        await remoteLoad("https://webapi.amap.com/ui/1.0/main.js")
        // 初始化地图
        this.initMap()
        
    }
  }
}

export default Map1;
