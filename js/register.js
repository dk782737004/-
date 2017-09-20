require(["config"],function(){
	require(["jquery"],function(){
		$(function(){
			$("#reg_header").load("../html/include/header.html");
            $("#reg_footer").load("../html/include/footer.html");
			$("#user_name").blur(function(){
				
         	   	var reg=/^[a-z0-9_-]{3,16}$/;
       	   	if(reg.test(this.value)){
      	   		$("#name_info").fadeOut();
      	   		$("#yes").fadeIn();
       	   	}else{
      	   	    $("#name_info").fadeIn();
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
      	   	    $("#yes3").fadeOut();
      	   	}
              });
		});
	});
});
