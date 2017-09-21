require(["config"],function(){
	require(["jquery","cookie"],function(){
	$(function(){
    $.ajax("/SNP/html/include/header.html").done(function(data){
    	$.cookie.json=true;
    	var _kas=$.cookie("products")||[],
    	    len=_kas.length;
    	$(data).appendTo("._header").find(".num").text(len);
    });
    $("._footer").load("../html/include/footer.html");
	 $(".clear_").on("click",function(){
       	$(".have").remove();
       	$(".cart").show();
		$.cookie("products",_products,{expires:7,path:"/"});
       });	
		$.cookie.json = true;
			// 读取购物车数据
			var _products = $.cookie("products") || [];
			if (_products.length !== 0){
				$(".cart").hide();
				$(".have").show();
			}
			/*****************************************************/
			/* 显示购物车已有商品的页面数据 */
			$.each(_products, function(index, element){
				// 克隆模板节点
				$(".list").clone(true)	
							  .data("product", this) // 将当前遍历到的商品对象数据缓存起来
							  .show()
							  .appendTo("._list")
							  .children(".id").text(this.id).parent()
							  .children(".title").text(this.title).end()
							  .children("._price_").text(this.price).end()
							  .find(".amount").val(this.cont).end()
							  .children(".list>a img").text(this.img).end()
							  .children(".xiaoji").text(this.price * this.cont);
			});
			$(".delet").on("click",function(){
			var row=$(this).parents("._list");
			var _prod=row.data("product");
			var _index=$.inArray(_prod,_products);
			_products.splice(_index,1);
			$.cookie("products",_products,{expires:7,path:"/"});
			row.remove();
			
			console.log(_products.length);
			if(_products.length===0){
				$(".have").css("display","none");
				$(".cart").show();
				
			}
			});	
			$(".amount").on("blur",function(){
			$.cookie("products",_products,{expires:7,path:"/"});
				console.log("lkafsn")
				var oo=$(".amount").text();
				var kk=$("._price").text();
				console.log(oo)
				$(".xiaoji").text(oo*kk);
			});
			
			
			
	});
	});
});