插件更改

1、路径，
2、关联隐藏✔️，（审核不同意->审核意见）hidelink
3、日期✔️，（datepicker）
4、上传参数valuekeyName✔️，（upload）
5、watch✔️，（数据更新->defaultValue）
6、noreadonly，（input ->非只读）
7、cutTitle （副标题）

2019/7/29

单行表单 info
日期 pickerOptions
textarea maxlength limit
spreadLink 大写转换
5、 btnPosition

2019/7/31

1、labelSuffix
2、checkbox
3、disabled all
4、checkLink(永久，未完全实现)

2019/8/1

1、novisible
2、手机号正则
3、btn disabledobj

2019/8/2

init变量 控制渲染
发送验证码文案
身份证正则18位

2019/8/5

上传回显,uploadType （file/image） 缺少查看功能后边完善
cuttitle显示
change
Md文档更新备注：

trim默认(type=input): props.inputType === 'textarea'为notrim，其他trim
添加提交按钮宽度 width
支持inline模式
输入框支持显示图标
支持 纯文本展示，以及跳转/下载功能
上传 push bug修复
radio border / <vue-form-item:class="`vue-form-item-${item.keyName}`"
inline 处理为 按钮同一行
### type=text (纯文本) --- color
dateType=>year/month/date/dates/week/datetime/datetimerange/daterange/monthrange
areaSelect 增加支持验证
isBottom 增加新属性 默认：20px
verify 增加 noAssociated sendNumber
minlength
upload => 上传处理 
```js
tick:{
    before： ()=>{},
    after：（）={},
    fail:(res)=>{},
    error：(res)=>{}
}
```
16、 增加associatedSign
17、增加 checkLink ：label: "长期",
keyName: "amountEnd",
defaultValue: "",
plusValue: "1",
reduceValue: null,
disabled: false,
tick: val => {
    debugger;
}

18、type: "datePicker",

tick: val => {
    debugger;
},