require(["config"], function() {
require(["jquery"], function() {
	$(function() {
		$("#lis_footer").load("../html/include/footer.html");
		$("#lis_header").load("../html/include/header.html");
		   	$.getJSON("../mock/lis.json",function(data){
		   for (let i=0;i<data.length;i++) {
		   	var pp=$(".s_bottom dl").eq(i).clone(true);
		   	pp.find("dt img	").attr("src",data[i].img);
		   	pp.find("dd a").html(data[i].title);
		   	pp.find("b").html(data[i].price);
		   	$(".s_bottom").append(pp);
		    }
		   	});
		   		$.getJSON("../mock/lis1.json",function(data){
		   for (let i=0;i<data.length;i++) {
		   	var oo=$(".s_bottom1 dl").eq(i).clone(true);
		   	oo.find("img").attr("src",data[i].img);
		   	oo.find("dl dd a").html(data[i].title);
		   	oo.find("b").html(data[i].price);
		   	$(".s_bottom1").append(oo);
		    }
		   	});
		   		$.getJSON("../mock/lis2.json",function(data){
		   for (let i=0;i<data.length;i++) {
		   	var ll=$(".s_bottom2 dl").eq(i).clone(true);
		   	ll.find("dt img	").attr("src",data[i].img);
		   	ll.find("dd a").html(data[i].title);
		   	ll.find("b").html(data[i].price);
		   	$(".s_bottom2").append(ll);
		    }
		   	});
		   	$("._clear").click(function(){
		  	$(".history div").remove();
		   	});
		   	$(".putaway").on("click",function(){
		   	$(".update").css("border","none");
		   	$(".shangpin1").css("display","none");
		   	$(".shangpin").css("display","block");
		   	$(".shangpin2").css("display","none");
		   	$(".price").css("border","none");
		   	$(".putaway").css("border","2px solid #dddddd")
		   	            .css("border-bottom","none");
		   });
		   $(".update").on("click",function(){
		   	$(".putaway").css("border","none")
		   	$(".shangpin1").css("display","block");
		   	$(".shangpin").css("display","none");
		   	$("shangpin2").css("display","none");
		   	$(".price").css("border","none");
		   	$(".update").css("border","2px solid #dddddd")
		   	            .css("border-bottom","none")
		   	            .css("display","block");
		   	            
		   });
		   $(".price").on("click",function(){
		   	$(".putaway").css("border","none")
		   	$(".update").css("border","none");
		   	$(".shangpin1").css("display","none");
		   	$(".shangpin").css("display","none");
		   	$(".shangpin2").css("display","block");
		   	$(".price").css("border","2px solid #dddddd")
		   	           .css("border-bottom","none")
		   	           .css("display","block");
		   });
		   $(".span2").on("click",function(){
		   	$(".span2").css("background","#666666")
		   	           .css("color","white");
		   	$(".span1").css("background","white")
		   	           .css("color","black");
		   	
		   });
		    $(".span1").on("click",function(){
		   	$(".span1").css("background","#666666")
		   	           .css("color","white")
		   	$(".span2").css("background","white")
		   	           .css("color","black");
		   	
		    });
				$(".seacrh").click(function(){
					console.log("dsrf");
				});
	});
});
});