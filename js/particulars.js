require(["config"],function(){
	require(["jquery","cookie","shopping"],function(){
		$(function(){
         $("#pt_footer").load("../html/include/footer.html");
         $.getJSON("../mock/particulars.json",function(data){
	    		for (let i=0;i<data.length;i++) {
	    			var oo=$(".sames div").eq(0).clone(true);
	    			oo.find("p img").attr("src",data[i].img);
	    			oo.find(" div p").html(data[i].title);
	    			oo.find("div b ").html(data[i].price);
	    			$(".sames").append(oo);
	    		}
	    	});
	    	$.getJSON("../mock/particulars1.json",function(data){
	    		for (let i=0;i<data.length;i++) {
	    			var oo=$(".classify1 div").eq(0).clone(true);
	    			oo.find("p img").attr("src",data[i].img);
	    			oo.find(" div p").html(data[i].title);
	    			oo.find("div b ").html(data[i].price);
	    			$(".classify1").append(oo);
	    		}
	    	});
	    	$.getJSON("../mock/particulars2.json",function(data){
	    		for (let k=0;k<data.length;k++) {
	    			var oo=$(".fit1 div").eq(0).clone(true);
	    			oo.find("p img").attr("src",data[k].img);
	    			oo.find(" div p").html(data[k].title);
	    			oo.find("div b ").html(data[k].price);
	    			$(".fit1").append(oo);
	    		}
	    	});
	    	$.getJSON("../mock/particulars3.json",function(data){
	    		for (let k=0;k<data.length;k++) {
	    			var oo=$(".also1 div").eq(0).clone(true);
	    			oo.find("p img").attr("src",data[k].img);
	    			oo.find(" div p").html(data[k].title);
	    			oo.find("div b ").html(data[k].price);
	    			$(".also1").append(oo);
	    		}
	    	});
	    	$.getJSON("../mock/particulars4.json",function(data){
	    		$(".xiaotu li").on("mouseenter",function(){
	    			var _index=$(this).index();
	    			$(".datu").css("background-image","url("+data[_index].url+")");
	    		});
	    	});
	    	$.getJSON("../mock/particulars4.json",function(data){
	    		$(".xiaotu li").on("mouseenter",function(){
	    			var _index=$(this).index();
	    			$(".detail_ .ddtu").css("background-image","url("+data[_index].url+")");
	    		});
	    	});
	    		$.getJSON("../mock/particulars5.json",function(data){
	    		for (var i=0;i<data.length;i++) {
	    			var ss=$(".com1 div").eq(0).clone(true);
	    		   ss.find("p i").html(data[i].title);
	    		   ss.find("p b").html(data[i].name);
	    		   ss.find("p span").html(data[i].day);
	    		   ss.find("p em").attr("src",data[i].img);
	    		   $(".com1").append(ss);
	    		}
	    	});
	    		$.getJSON("../mock/particulars6.json",function(data){
	    		for (var i=0;i<data.length;i++) {
	    			var ss=$(".com2 div").eq(0).clone(true);
	    		   ss.find("p i").html(data[i].title);
	    		   ss.find("p b").html(data[i].name);
	    		   ss.find("p span").html(data[i].day);
	    		   ss.find("p em").attr("src",data[i].img);
	    		   $(".com2").append(ss);
	    		}
	    	});
	        //胶囊导航
	    	$(".describe").on("click",function(){
	    		$(".com1").css("display","none");
	    		$(".pro1").css("display","none");
	    		$(".des1").css("display","block");
	    		$(".describe").css("border","2px solid #dddddd");
	    		$(".describe").css("border-bottom","none");
	    		$(".property").css("border","none");
	    		$(".property").css("border-bottom","2px solid #dddddd");
	    		$(".comment").css("border","none");
	    		$(".comment").css("border-bottom","2px solid #dddddd");
	    		$(".record").css("display","none");
	    		$(".ll").css("display","none");
	    		$(".com2").css("display","none")
	    	});
	    	$(".property").on("click",function(){
	    		$(".des1").css("display","none");
	    		$(".com1").css("display","none");
	    		$(".pro1").css("display","block");
	    		$(".describe").css("border","none");
	    		$(".describe").css("border-bottom","2px solid #dddddd");
	    		$(".property").css("border","2px solid #dddddd");
	    		$(".property").css("border-bottom","none");
	    		$(".comment").css("border","none");
	    		$(".comment").css("border-bottom","2px solid #dddddd");
	    		$(".record").css("display","none");
	    		$(".ll").css("display","none");
	    		$(".com2").css("display","none");
	    	});
	    	$(".comment").on("click",function(){
	    		$(".com1").css("display","block");
	    		$(".des1").css("display","none");
	    		$(".pro1").css("display","none");
	            $(".describe").css("border","none");
	    		$(".describe").css("border-bottom","2px solid #dddddd");
	    		$(".property").css("border","none");
	    		$(".property").css("border-bottom","2px solid #dddddd");
	    		$(".comment").css("border","2px solid #dddddd");
	    		$(".comment").css("border-bottom","none");
	    		$(".record").css("display","block");
	    		$(".ll").css("display","block");
	    		
	    	});
	    	//放大镜
	    	$(".datu").on("mouseenter",function(){
	    		$(".len").show();
	    		$(".detail_ .ddtu").show();
	    		$(".detail_").show();
	    		
	    	});
	    	$(".datu").on("mouseleave",function(){
	    		$(".detail_ .ddtu").hide();
	    		$(".detail_").hide();
	    		
	    		$(".len").hide();
	    	});
	    	$("html,body").on("mousemove",function(e){
	    		var _pagex=e.pageX,
	    		    _pagey=e.pageY,
	    		 _left=_pagex-$(".len").offset().left-20,
	    		 _top=_pagey-$(".len").offset().top-30;
	    		 if(_top<0)
	    		 _top=0;
	    		 else if(_top>300)
	    		 _top=300;
	    		 if(_left<0)
	    		 _left=0;
	    		  else if(_left>300)
                 _left=300;
	    		 $(".len").css({"left":_left+"px",
	    		                "top":_top+"px"});
	              $(".detail_ .ddtu").css({
	              	"top":-1*_top+"px",
	              	"left":-1*_left+"px"
	              });
	    	});
	    	$("._price").on("blur",function(){
	    		var val=$("._price").val();
	    		$(".zj").html(val*159);
	    		if(val>581){
	    			 $("._price").val(581);
	    		    $(".zj").html(92379);
	    		}
	    	});
	    	$(".record .up").on("click",function(){
	    		$(".com1").css("display","block");
	    		$(".com2").css("display","none");
	    	});
	    	$(".record .next").on("click",function(){
	    		$(".com1").css("display","none");
	    		$(".com2").css("display","block");
	    		
	    	});
            function change(){
					    code=$("._span2");
					  // 验证码组成库
					   var arrays=new Array( 
					       '1','2','3','4','5','6','7','8','9','0',
					       'a','b','c','d','e','f','g','h','i','j', 
					       'k','l','m','n','o','p','q','r','s','t', 
					       'u','v','w','x','y','z', 
					       'A','B','C','D','E','F','G','H','I','J', 
					       'K','L','M','N','O','P','Q','R','S','T', 
					       'U','V','W','X','Y','Z'        
					       ); 
					    codes='';// 重新初始化验证码
					   for(var i = 0; i<4; i++){
					  	 // 随机获取一个数组的下标
					   	var r = parseInt(Math.random()*arrays.length);
					   	codes += arrays[r];
					  }
					  // 验证码添加到input里
					     code.text(codes);
					  }
					 change();
					 $("._span2").click(change);
			
	    $(".zm").on("blur",function(){
	    	var a = $("._span2").text().toUpperCase(),
	    		b=$(this).val().toUpperCase();
	    	if(a===b){
	    		
	    		$(".duihao").html("√")
	    	}else{
	    		$(".duihao").html("×")
	    		$(".zm").val("");
	    	}
	    });
      });  
        $(".add").on("click",function(){
    	var product = {
    		id:$(".id").text(),
    		img:$(".sx1 img").text(),
    		price:$(".sx2").text(),
    		title:$(".sx3").text(),
    		cont:$("._price").val(),
    		amount:1
    	}
    	console.log(product);
    	$.cookie.json=true;
    	var _products=$.cookie("products")||[];
    	var _index=indexOf(product.id,_products);
    	if(_index===-1)
    		_products.push(product);
    	else
    		_products[_index].amount++;
    	$.cookie("products",_products,{expires:7,path:"/"})
    	$(".success").css("display","block");
    	$(".mo").css("display","block");
    	function indexOf(id,products){
    		for(var i=0;i<products.length;i++){
    			if(products[i].id==id)
    				return i;
    		}
    		return -1;
    	}
        });
        $(".close").on("click",function(){
    	$(".success").css("display","none");
    	$(".mo").css("display","none");
    });
  });
});
