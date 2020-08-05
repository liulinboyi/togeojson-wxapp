# kml、gpx格式转geojson格式。
# 可在小程序、浏览器、Node使用。

# 使用

```
npm install togeojson-wxapp
```

# 例子

## 浏览器：[立即体验](https://blog.heyliubo.top/togeojson-wxapp/example/index.html)

## 小程序：待补充

## Node：
```javascript
const togeojsonWxapp = require('togeojson-wxapp/dist/togeojson-wxapp.cjs')
togeojsonWxapp.togeojson()
```

# API

## togeojson(path: string, fileContent: string): togeojson
### path: 文件路径
### fileContent: 文件内容

## stringTogeojson(type, fileContent: string): togeojson
### type: 文件类型
### fileContent: 文件内容

