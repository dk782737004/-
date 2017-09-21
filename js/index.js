require(["config"],function(){
require(["jquery","cookie"],function(){
	$(function(){
//		$("#header").load("html/include/header1.html");
  $.ajax("/SNP/html/include/header1.html").done(function(data){
    	$.cookie.json=true;
    	var _kas=$.cookie("products")||[],
    	    len=_kas.length;
    	    console.log(len)
    	$(data).appendTo("#header").find(".num").text(len);
    });
        $("#footer").load("html/include/footer.html");
        $.getJSON("mock/index.json",function(data){
					for (let i=0;i<data.length;i++) {
					var _dl= $(".s_bottom dl").eq(0).clone(true);
					_dl.find("dt img").attr("src",data[i].img);
					_dl.find("dt dl a").html(data[i].title);
					_dl.find("dt dl b").html(data[i].price);
					$(".s_bottom").append(_dl);
					}
				});
				$.getJSON("mock/index1.json",function(data){
					for (let j=0;j<data.length;j++) {
						var __dl=$(".ss_bottom  dl").eq(0).clone(true);
						__dl.find(" a img").attr("src",data[j].img);
						__dl.find(".ss_bottom dl dd").html(data[j].title);
						__dl.find(".ss_bottom b").html(data[j].price);
						$(".ss_bottom").append(__dl);
					}
				});
				$.getJSON("mock/index2.json",function(data){
					for (let k=0;k<data.length;k++) {
						var _div=$(".goods div").eq(0).clone(true);
						_div.find(" p img").attr("src",data[k].img);
						_div.find(".goods dd").html(data[k].title);
						_div.find(".goods b").html(data[k].price);
						$(".goods").append(_div);
					}
				});
				$.getJSON("mock/index3.json",function(data){
					for (let o=0;o<data.length;o++) {
						var _div=$(".hotgoods div").eq(0).clone(true);
						_div.find(" p img").attr("src",data[o].img);
						_div.find(".hotgoods dd").html(data[o].title);
						_div.find(".hotgoods b").html(data[o].price);
						$(".hotgoods").append(_div);
					}
				});
				var curIndex = 0;
				var autoChange = setInterval(function(){ 
			        if(curIndex <  $("#imgs li").length-1){ 
			            curIndex ++; 
			        }else{ 
			            curIndex = 0;
			        }
			        //调用变换处理函数
			        changeTo(curIndex);  
			    },3000);
			    // 处理小圆点点击事件
				$("#pages p").on("mouseenter",function(){
					// 获取当前点击小圆点的索引
					var index = $(this).index();
					// 判断
					if (index == curIndex)
						return;
					curIndex = index;
					changeTo(curIndex);  
				});
				function changeTo(num){
				    $("#imgs").find("li").fadeOut(600).eq(num).fadeIn(600);
					$("#pages").find("p").eq(num).addClass("current").siblings().removeClass("current").fadeIn();
			    }
				
	});
	});
});