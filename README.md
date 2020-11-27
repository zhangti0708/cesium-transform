# cesium-transform
3dtilset模型矩阵变换

----------------------------------------------------------------------------------------------------------------------------------------
### 基于cesium的3dtilset模型矩阵变换
### cesium-transform

### 说明
##### /cesium-transform/src/doc

### 使用

#####  在项目中引入Cesium.js

#####  在项目中引入dat.gui.js

#####  然后引入 cesium-transform.js 即可

<a href="http://zhangticcc.gitee.io/webgis/"><img alt="" height="100%" src="https://img-blog.csdnimg.cn/20201113150314459.gif" width="90%" ></a>&nbsp;

``` 
    // 初始化
    let viewer = new Cesium.Viewer("viewerContainer")

    // tilset地址
    const url = 'http://earthsdk.com/v/last/Apps/assets/dayanta/tileset.json'

    // 基础参数
    let tileModelParam = {
        url: url,
        scale: 1.0,
        longitude: 116.29393709916772,
        latitude: 39.935457593075405,
        height: 0.0,
        rx: 0,
        ry: 0,
        rz: 0,
        alphaEnble: false,
        alpha: 1.0
    }

    // 调用调整面板
    TilesetMatrixPanel(viewer, { tileModelParam: tileModelParam })

```
