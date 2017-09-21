require(["config"],function(){
	require(["jquery","cookie","shopping"],function(){
	$(function(){
	$("#log_footer").load("../html/include/footer.html");
	$.cookie.json=true;
	var message=$.cookie("ly520");
	
	$(".an").on("click",function(){
		var _user=$("#dksb").val(),
			_pass=$("#dkdsb").val();
		console.log(JSON.parse(message));
		if(_user==JSON.parse(message).name&&_pass==JSON.parse(message)._password){
			location="/SNP/html/address.html";
		}
	});
	});
  });
});
