/*
A.
get DOM object
根据CSS选择器来获取DOM元素 (重点)
a. api
    querySelector(CSS选择器)   获取一个DOM元素
    querySelectorAll(CSS选择器)    获取多个DOM元素
b.
modify content of DOM
1. document.write()
    只能将文本内容追加到 </body> 前面的位置
    文本中包含的标签会被解析
2.元素innerText 属性
    将文本内容添加/更新到任意标签位置
    文本中包含的标签不会被解析
* */
document.write('<h3>hello world!</h3>')
let label =document.querySelector('div div label')
label.innerText='well down'



