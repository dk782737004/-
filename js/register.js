require(["config"],function(){
	require(["jquery","shopping"],function(){
		$(function(){
            $("#reg_footer").load("../html/include/footer.html");
			$("#user_name").blur(function(){
				
         	   	var reg=/^[a-z0-9_-]{3,16}$/;
       	   	if(reg.test(this.value)){
      	   		$("#name_info").fadeOut();
      	   		$("#yes").fadeIn();
       	   	}else{
      	   	    $("#name_info").fadeIn();
      	   	    $("#user_name").val("")
      	   	    $("#yes").fadeOut();
      	   	}
              });
              $("#email").blur(function(){
         	   	var reg=/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
       	   	if(reg.test(this.value)){
      	   		$("#email_info").fadeOut();
      	   		$("#yes1").fadeIn();
       	   	}else{
      	   	    $("#email_info").fadeIn();
      	   	    $("#email").val("");
      	   	    $("#yes1").fadeOut();
      	   	}
              });
              $("#password").blur(function(){
         	   	var reg=/^[a-z0-9_-]{6,18}$/;
       	   	if(reg.test(this.value)){
      	   		$("#pad_info").fadeOut();
      	   		$("#yes2").fadeIn();
       	   	}else{
      	   	    $("#pad_info").fadeIn();
      	   	    $("#password").val("");
      	   	    $("#yes2").fadeOut();
      	   	}
              });
               $("#password1").blur(function(){
       	   	if($("#password").val()===$(this).val()){
       	   		console.log($("#password").value)
      	   		$("#pad1_info").fadeOut();
      	   		$("#yes3").fadeIn();
       	   	}else{
      	   	    $("#pad1_info").fadeIn();
      	   	    $("#password1").val("");
      	   	    $("#yes3").fadeOut();
      	   	}
              });
              $(".an").on("click",function(){
              	var  message={
              		name:$("#user_name").val(),
              		_password:$("#password").val()
              	}
              	$.cookie("ly520",JSON.stringify(message));
              });
              $(".an").on("click",function(){
              	var xoxo=$("#user_name").val()&&$("#email").val()&&$("#password").val()&&$("#password1").val();
              	if(xoxo){
              			location="/SNP/html/login.html";
              	}
              });
		});
	});
});
