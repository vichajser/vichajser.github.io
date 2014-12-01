


(function(){

	var input = $('.answer input'),
		math = $('.math'),
		answer = $('.answer');

	input.on('click',function(){

		$("body").scrollTop(0);
		math.css({"margin-top":"5%"});
		answer.css({"margin-top":"5%"});
	});
})();