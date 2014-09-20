$(document).ready(function(){
	$("#item").keyup(function(event){
		if(event.keyCode==13){
			event.preventDefault();
			$("#submit").click();
		};
	});


$("#submit").click(function(){
	var txtval=$("#item").val();
	if(txtval.length>0){
		$("#second").append('<li class="groceries"><button class="in">&nbsp;&nbsp;&#10004;&nbsp;&nbsp;</button><span class="purchase">'+txtval+'</span><button id="remove">&nbsp;&nbsp;&#10006;&nbsp;&nbsp;</button></li>');
		$("#item").val('');
	};
});

$("#second").on("click","#remove", function(){
	$(this).closest("li").addClass("cancel");
});

$("#second").on("click",".in",function(){
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