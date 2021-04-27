# JS简单实现读取Excel文件并转换为JSON

#### 介绍
1. 简单的使用了一下sheetJs,更多详情请看[官方仓库](https://github.com/SheetJS/sheetjs)
2. 可以实现简单的excel文件转Json;
3. 可以将相同格式的Json数组用 [Layui](https://www.layui.com) 数据表格显示。

#### 示例

* 实例一
   * 简单转换([点击查看示例一](https://markchen7788.github.io/-JS-Excel-JSON/example/test1.html))
    <br>![Image text](./res/test1.gif)
* 实例二
   * 表格显示([点击查看示例二](https://markchen7788.github.io/-JS-Excel-JSON/example/test2.html))
    <br>![Image text](./res/test2.gif)


#### 使用说明

1.  在线调用：
    *  引入js
     ```html
     <script src="https://markchen7788.github.io/-JS-Excel-JSON/js/xlsxToJson.js"></script>
     ```
    *  在onchange()中指定上传的响应函数
     ```html
      <input type="file" id="upload" onchange="change(this,getXlsxJson)" 
      style="width: 320px;" accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet">
     ```
    * 给响应函数写回掉函数，以便获取json格式的结果
    ```js
     function getXlsxJson(json) {
            layui.use('form', function () {
                var form = layui.form;
                form.val("formTest", { "text": JSON.stringify(json) });
            });
        } 
    ```
2.  下载调用：
     * 下载仓库中js目录文件,修改一下引入js时的路径,并按照1中方式引入js即可使用;
