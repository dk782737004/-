require(["config"], function() {
require(["jquery","shopping"], function() {
	$(function() {
			//加载所有省份
				var url1 = "http://route.showapi.com/1149-1?showapi_appid=29550&showapi_sign=08402fce064a484baad949d9a18f75e7&level=1",
					url2 = "http://route.showapi.com/1149-1?showapi_appid=29550&showapi_sign=08402fce064a484baad949d9a18f75e7&level=1&page=2";
				$.when($.ajax(url1), $.ajax(url2)).then(function(data1, data2){
					var provinces = data1[0].showapi_res_body.data.concat(data2[0].showapi_res_body.data);
					var html = "";
					$.each(provinces, function(){
						html += `<option value='${this.id}'>${this.areaName}</option>`;
					});
					$(".province").append(html);
				});
	
	
				/* 省份/城市选择发生改变，则加载省份/城市的下级信息 */
				$(".province, .city").change(function(){
					// 选中项对应的 id
					var val = $(this).val();
					if (val == -1)
						return;
					var url = "http://route.showapi.com/1149-2?showapi_appid=29550&showapi_sign=08402fce064a484baad949d9a18f75e7&parentId=" + val;
					// 异步请求
					$.getJSON(url, (data) => {
						var cities = data.showapi_res_body.data;
						var html = "<option value='-1'>请选择</option>";
						$.each(cities, function(){
							html += `<option value='${this.id}'>${this.areaName}</option>`;
						});
						if($(this).is(".province"))
							$(".city").html(html);
						else
							$(".district").html(html);
					});

	
	});
});
});
});