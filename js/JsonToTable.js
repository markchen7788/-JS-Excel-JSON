document.write("<link rel='stylesheet' href='https://www.layuicdn.com/layui/css/layui.css'>");
document.write("<script src='https://www.layuicdn.com/layui/layui.js'></script>");
function renderTable(data1) {
    var col = [[{ type: 'checkbox', fixed: 'left' }]], edi = { fixed: 'right', title: '操作', toolbar: '#barDemo', width: 150 };
		for (var key in data1[0]) {
			var item = { field: key, title: key, sort: true }
			col[0].push(item)
		}
		col[0].push(edi)
    layui.use(['element', 'table', 'jquery'], function () {
        var table = layui.table;
        const $ = layui.jquery;
        table.render({
            elem: '#test'
            , data: data1
            , height: 'full'
            , even: 'true'
            , size: 'sm'
            , cellMinWidth: 80 //全局定义常规单元格的最小宽度，layui 2.2.1 新增
            , toolbar: '#toolbarDemo' //开启头部工具栏，并为其绑定左侧模板
            , defaultToolbar: ['filter', 'print', 'exports']
            , cols: col
            , page: { limit: 18 }
        });

    }
    );
}