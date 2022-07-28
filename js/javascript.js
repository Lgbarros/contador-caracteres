$('textarea').on('keyup paste', function(){
	setTimeout(function() {
		var valorTextarea = $('textarea').val().length,
				palavras = $('textarea').val().split(' ').length;
                linhas = $('textarea').val().split('\n').length;
		$('.caracteres').text(valorTextarea);
		$('.palavras').text(palavras);
        $('.linhas').text(linhas);
	}, 200);
});