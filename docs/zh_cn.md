# arcgis-map-event

![arcgis-map-event](https://img.shields.io/badge/arcgis--map--event-v1.0.0-%23C50008?logo=npm)
[![blog](https://img.shields.io/badge/blog-yesifang.com-orange?logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABjFBMVEUAAAAIAQUiBhQVBA05CyK0I2z4MJTgKoV8GEoKAgZyFkT8MZfTKX4dBRFWEDP9MZfMJ3kGAQQHAQTlK4htFUEAHRMATDAAbUQAf1EAh1QAgFAAbUUATDAAHhNMDy7KJngAeUsAKBp9GEr4MJMDAQIAmWEAWzkABAOGGlD9MZYAcUgABQNoFD7mLIoAZUCdHl4ANiKiH2EpCBgAh1UAAgERAwrVKH9nFD0ALBwSAwuqIWXmK4pTEDIAWTgrCBp2F0eVHVmKG1NWETMAdEgAgVAAAQIAJTcATXIAZJQAbqUAap0AVoEAfE4AAQEAN1EAgMAAaEIACQ4Aap4ARiwACQ0AebMAmV8AEwwAAAAAZ5oAZT8AMkkAkFoAEQsAebMAl14AGCQAkl0ALx4AOlYAeEsAGRAATHAAbkUAll0All4AbkYAMB4ATXMABwQAIxYANiIAPicANyIAJBYAQF4AIjIAis0AAgMAhsYAZJYARWYAk9oAHy4ABQcAfbkAO1gAis3/MZgAmmEAld3///8EabibAAAAgHRSTlMACCIVObX54XwKcv3UHVb+zQYH5m0xfrTU4NW1fzJMy8hDffkD/pcHh/69CGjnqJ5ZoynfBBHWZ0kSqudTlCt2lotWwNUCQIOrvrWVzwFe3a4QtnQPz/0gAbKnVe4c0Psp9E9jximBtvj4t0+FCzpaZlo7bTruA+Wtdfs1CNdm7ZpKyEIAAAABYktHRIP8tM/SAAAAB3RJTUUH5QoVBh0NInrzjgAAATtJREFUOMt902VbwzAUBeDLcAYMhru7uzPcXYcP1+EyPMkvZ03TNk0TztfzNnL7BECeCFck/JOo6BiEYuPiVX2CG9EkJsn7ZA9iSUmV9d40ZCYdICMzKzsnNy+/wASFVo+KALCR4hIGSjlQVm4BXFFZRUE1B2q8HMC4tk4D9RxoABvAjRpwuS3QJADcrIkW6witImhrD4OOTtZ7ukAEuFtboqeXjqqvH5xgQL/qoG9oeET/FQIYdQxWAGNmMT4xOTU9MyuCOVbPLywSGhEs6f3yCiFysEr7tXWiABubWu/fIiqwTRfYISqwu0fBvgoc0DlCgCjA4ZF+hWMFODllMzizgfML2l5eXfuNGd7YAARv7+4fHoPc9J/swJlnrn+Rgdc3C4SkT+vd7D8+peDr2+h/FK838Ev3D4W//wNiKCWwWalJAwAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMS0xMC0yMVQwNjoyOToxMyswMDowMP1Zb/cAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjEtMTAtMjFUMDY6Mjk6MTMrMDA6MDCMBNdLAAAAAElFTkSuQmCC)](//yesifang.com)

> arcgis 地图事件工具包，提供更方便的事件处理接口。
> Arcgis Map event Kit, which provides a more convenient event handling interface.

<div align="center">
  <a href="https://nodei.co/npm/arcgis-map-event/"><img src="https://nodei.co/npm/arcgis-map-event.png?downloads=true&downloadRank=true&stars=true"></a>
</div>
[English Document](../README.md)



## 运行简单示例

![Simple Demo](../src/img/demo.gif)

```shell
$ git clone https://github.com/SuperYesifang/arcgis-map-event.git
$ cd arcgis-map-event
$ npm install
$ npm run dev
```



## 使用

`new MapEvent(options)`

1. 以CDN方式使用

```html
<script src="https://raw.githubusercontent.com/SuperYesifang/arcgis-map-event/master/dist/arcgis-map-event.cdn.js"></script>
````

2. 以ESM方式使用

```js
import MapEvent from "arcgis-map-event";

let mapEvent = new MapEvent();
```



## 选项

| 选项 | 类型 | 含义 |
| -- | -- | -- |
| `view` | `MapView` | 地图视图实例 |
| `cursor`? | `string` | 常规状态下的光标样式，默认为: `options.view.cursor` || `"default"` |
| `hoverCursor`? | `string` | 全局鼠标悬停在图形上时光标的样式，默认为: `"pointer"` |



## 属性

实例的属性

| 属性 | 含义 |
| -- | -- |
| `view` | 地图视图实例 |
| `cursor` | 常规状态下的光标样式，默认为: `instance.view.cursor` || `"default"` |
| `hoverCursor` | 全局鼠标悬停在图形上时光标的样式，默认为: `"pointer"` |
| `hoverList` | 悬停列表 |
| `onHoverList` | 悬停事件列表 |
| `onClickList` | 点击事件列表 |



### view

`instance.view:ArcgisView`

使用MapEvent实例的[ArcgisView]()实例。

```js
let mapView = new MapView(options); // Arcgis MapView
let mapEvent = new MapEvent({
    view: mapView
});

console.log(mapEvent.view === mapView); // true
```



### cursor

`instance.cursor:string`

常规状态下光标的样式，默认为: `instance.view.cursor` || `"default"`。



### hoverCursor

`instance.hoverCursor:string`

全局鼠标悬停在图形上时光标的样式，默认为:  `"pointer"`。




### hoverList

`instance.hoverList:Map`

图形悬停数据列表，是一个JavaScript Map实例。

```js
let mapEvent = new MapEvent(options);

mapEvent.hover(graphic, hoverSymbol, opts);
let hoverList = mapEvent.hoverList.get(graphic);
console.log(hoverList[0].oSymbol === graphic.symbol); // true
console.log(hoverList[0].symbol === hoverSymbol); // true
console.log(hoverList[0].options === opts); // true
console.log(hoverList[0].hover); // 该图形当前的悬停状态 (boolean)
```



### onHoverList

`instance.onHoverList:Map`

图形悬停事件监听器列表，是一个JavaScript Map实例。

```js
let mapEvent = new MapEvent(options);

mapEvent.onHover(graphic, listener1);
mapEvent.on("hover", graphic, listener2);
let listeners = mapEvent.onHoverList.get(graphic);
console.log(listeners[0] === listener1); // true
console.log(listeners[1] === listener2); // true
```



### onClickList

`instance.onClickList:Map`

图形点击事件监听器列表，是一个JavaScript Map实例。

```js
let mapEvent = new MapEvent(options);

mapEvent.onClick(graphic, listener1);
mapEvent.on("click", graphic, listener2);
let listeners = mapEvent.onClickList.get(graphic);
console.log(listeners[0] === listener1); // true
console.log(listeners[1] === listener2); // true
```



## 方法

实例的方法

| method | description |
| -- | -- |
| [on](### on) | add map event listener. |
| [off](### off) | remove map event listener. |
| [reset](### reset) | reset hover or event(s) listener list. |
| [hover](### hover) | add hover changes to graphic. |
| [onHover](### onHover) | add hover event listener. |
| [onClick](### onClick) | add click event listener. |



### on()

`instance.on(event, graphic | graphic[], listener:(context)=>{}):remove | remove[]`
实例的方法。为图形注册一个事件监听器。

+ event: [支持的事件](##事件)
+ graphic: arcgis的 [Graphic](https://developers.arcgis.com/javascript/latest/api-reference/esri-Graphic.html) 实例
+ [listener](##监听器): 事件触发时的回调函数（事件监听器）
+ return: 执行结束后的返回结果
  + remove: 当前事件监听器的删除方法。

```js
let mapEvent = new MapEvent(options);
let remove = mapEvent.on("click", graphic, funciton (context) {
	// ...做一些什么
});
remove(); // remove graphic's event listener.
let removes = mapEvent.on("click", [graphic1, graphic2], funciton(context) {
	// ...做一些什么
});
removes[0](); // 删除 graphic1 的事件监听器。
removes[1](); // 删除 graphic2 的事件监听器。
```



### off()

`instance.off(event, graphic | graphic[], listener | true)`
实例的方法，删除图形的事件监听器。

+ event: [支持的事件](##事件)
+ graphic: arcgis的 [Graphic](https://developers.arcgis.com/javascript/latest/api-reference/esri-Graphic.html) 实例
+ [listener](##监听器): 一个需要删除的事件监听器（必须是已经注册到图形上的）
	+ `true`: 将会删除图形所有的事件监听器

```js
let mapEvent = new MapEvent(options);
mapEvent.on("click", [graphic1, graphic2], listener_m);
mapEvent.on("click", graphic1, listener_1);
	
mapEvent.off("click", graphic2, listener_m); // 删除 graphic2 的 listener_m 监听器
mapEvent.off("click", graphic1, true); // 删除 graphic1 的所有监听器
```



### reset()

`instance.reset(list | list[])`
实例的方法，重置悬停数据列表或事件监听器列表，相当于删除所有图形的所有悬停数据或所有事件监听器。

+ list: 悬停数据列表或事件监听器列表，默认为: `[ "hover", "onHover", "onClick" ]`

list的可能值有: 

+ `"hover"`: 对应 `instance.hoverList`
+ `"onHover"`: 对应 `instance.onHoverList`
+ `"onClick"`: 对应 `instance.onClickList`

```js
let mapEvent = new MapEvent(options);
mapEvent("click", [graphic1, graphic2], listener);
mapEvent("click", graphic3, listener3);
mapEvent("hover", graphic, listener);
mapEvent.reset("click"); // 重置所有图形的点击事件监听器列表
```



### hover()

`instance.hover(graphic | graphic[], symbol, options)`
实例的方法，设置鼠标悬停在图形上图形的symbol样式。

+ graphic: arcgis的 [Graphic](https://developers.arcgis.com/javascript/latest/api-reference/esri-Graphic.html) 实例
+ symbol: 当鼠标悬停图形时，图形的symbol样式 (支持 [autocast](https://developers.arcgis.com/javascript/latest/programming-patterns/#autocasting))
+ options: 更多选项
	+ hoverCursor: 当鼠标悬停图形时，鼠标的光标样式 (该选项将会覆盖全局hoverCurosr)

```js
let mapEvent = new MapEvent(options);
mapEvent.hover(graphic, {
	type: "simple-marker",
	style: "circle",
	color: "red",
	size: "10px"
}, { hoverCursor: "not-allowed" });
```



### onHover()

`instance.onHover(graphic | graphic[], listener):remove`
实例的方法，为图形添加一个"悬停"事件监听器。

+ graphic: arcgis的 [Graphic](https://developers.arcgis.com/javascript/latest/api-reference/esri-Graphic.html) 实例
+ [listener](##监听器): "悬停"事件触发时的回调函数（事件监听器）
+ return: 执行结束后的返回结果
	+ remove: 当前事件监听器的删除方法。

```js
let mapEvent = new MapEvent(options);

let remove = mapEvent.onHover(graphic, listener_x); // 等价于 mapEvent.on("hover", graphic, listener_x)
remove(); //  删除 graphic 的"悬停"事件监听器 listener_x
let removes = mapEvent.onHover([graphic1, graphic2], listener_m);
removes[0](); // 删除 graphic1 的"悬停"事件监听器 listener_m
removes[1](); // 删除 graphic2 的"悬停"事件监听器 listener_m
```



### onClick()

`instance.onClick(graphic | graphic[], listener):remove`
实例的方法，为图形添加一个"点击"事件监听器。

+ graphic: arcgis的 [Graphic](https://developers.arcgis.com/javascript/latest/api-reference/esri-Graphic.html) 实例
+ [listener](##监听器): "点击"事件触发时的回调函数（事件监听器）
+ return: 执行结束后的返回结果
	+ remove: 当前事件监听器的删除方法。

```js
let mapEvent = new MapEvent(options);

let remove = mapEvent.onClick(graphic, listener); // 等价于 mapEvent.on("click", graphic, listener_x)
remove(); //  删除 graphic 的"点击"事件监听器 listener_x
let removes = mapEvent.onClick([graphic1, graphic2], listener_m);
removes[0](); // 删除 graphic1 的"点击"事件监听器 listener_m
removes[1](); // 删除 graphic2 的"点击"事件监听器 listener_m
```



## 事件

支持的事件列表。

| 事件 | 含义 |
| -- | -- |
| `"hover"` | 当鼠标悬停图形时触发 |
| `"click"` | 当鼠标点击图形时触发 |



```ts
type events = "hover" | "click";
```



## 监听器

MapEvent 事件监听器。(本质上是一个回调函数)

```ts
interface Remove {
    ():boolean | boolean[];
}
type events = "hover" | "click";
type context = {
    type:evets; // event type
    $event:ArcgisEventHandle; // 视图原始事件对象
    graphc:Graphic; // 触发该事件的图形
    point:Point; // 鼠标所在位置的点（这是一个Arcgis的Point实例）
    remove:Remove; // 删除该监听器的函数
}
interface Listner {
    (context:context):void;
}
let listener:Listener = function (context) {
    // ...做一些什么
}
```

相关：

+ [ArcgisEventHandle](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html#events-summary)
+ [Graphic](https://developers.arcgis.com/javascript/latest/api-reference/esri-Graphic.html)
+ [Point](https://developers.arcgis.com/javascript/latest/api-reference/esri-geometry-Point.html)
