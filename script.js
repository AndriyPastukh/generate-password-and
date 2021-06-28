$('#sent-info').click(function(){
	if($('.enterd-informatin-input').val() == "" || $('.enterd-informatin-input-message').val() == ""){
		
		$('.thank-Message-after-sent-jquery').append('<div class="error-Message-after-sent"><h1>Somthing went wrong</h1></div>')

	}else{
		$('.thank-Message-after-sent-jquery').append('<div class="thank-Message-after-sent"><h1>Message sent. Thank you.</h1></div>')
		$('#sent-info').remove() 	
	}

	
	

})



$(".a").click(function () {
	window.scrollTo (0,2600);
	
});;



$(".item-goods").click(function(){
window.open('order-goods.html')


})









