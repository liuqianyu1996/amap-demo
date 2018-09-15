import React, { Component } from 'react';

const AMap = window.AMap;

class Map2 extends Component {

  openAdvanceInfoWindow() {
   
  }

  render() {
    return (
      <div>
        <div className="map-box">
          <p>灵活点标记地图</p>
          <div id="mapContainer1" style={{width: 500, height: 300, background: 'red'}}></div>
        </div>
      </div>
    );
  }
  componentDidMount() {

    // 灵活点标记地图

    var zoomStyleMapping1 = {
      14:0,
      15:0,
      16:0,
      17:0,
      18:0,
      19:0,
      20:0    
    }

    var map1 = new AMap.Map('mapContainer1', {
      viewMode:'3D',
      turboMode:false,
      defaultCursor:'pointer',
      zooms:[14,20],
      zoom:16,
      pitch:55,
      center:[116.408967,39.880101],
    });
    

    var marker1 = new AMap.ElasticMarker({
      map: map1,
      position: [116.410908,39.88057],
      zooms:[15.5,20],
      styles: [{
              icon: {
                  img:'https://a.amap.com/jsapi_demos/static/resource/img/trees.png',
                  size:[366,201],
                  ancher:[183,101],
                  imageSize:[865,1156],
                  imageOffset:[45,480],
                  fitZoom:17.5,
                  scaleFactor:2,
                  maxScale:2,
                  minScale:0.125
              }
          }],
      zoomStyleMapping:zoomStyleMapping1
    })
  }
}

export default Map2;
