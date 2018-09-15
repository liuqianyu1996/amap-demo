# amap-demo
初探高德地图api做的demo


### `demo详情`


* `创建地图-使用插件`
* `灵活点标记地图`
* `海量点标记`
* `弹出标记点信息、请求逆地理编码api`
* `搜索起点、终点，展示两者之间路线`


### `引入方式`

* `全局通过index.html引入`
```js
<script type="text/javascript" src="https://webapi.amap.com/maps?v=1.4.8&key=你申请的key&plugin=Map3D,
ElasticMarker,AMap.AdvancedInfoWindow"></script> 
```

* `局部在需要引入高德的页面使用动态加载的方式来引入`。

```js
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
