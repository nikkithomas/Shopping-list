$(document).ready(function(){
	$("#item").keyup(function(event){
		if(event.keycode==13){
			event.preventDefault();
			$("#sumbit").click();
		};
	});


$("#submit").click(function(){
	var txtval=$("#item").val();
	if(txtval.length>0){
		$("#second").append('<li class="groceries"><input type="checkbox" id="check"/><span>'+txtval+'</span><button id="remove">Remove</button></li>');
		$("#item").val('');
	};
});

$("#second").on("click","#remove", function(){
	$(this).closest("li").addClass("cancel");
});
$("#second").on("click","checkbox",function(){
	$(this).closest("li").addClass("in-cart");
});
});







$(document).on("click","#clear", function(){
	$(".number").empty();
	submissions=0;
});
$(document).on("click","#clear", function(){
	$(".groceries").empty();
	submissions=0;
});