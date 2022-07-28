$('textarea').on('keyup paste', function(){
	setTimeout(function() {
		var valorTextarea = $('textarea').val().length,
				palavras = $('textarea').val().split(' '&&'\n').length;
                linhas = $('textarea').val().split('\n').length;
				espacos = $('textarea').val().split(' ').length - 1;
		$('.caracteres').text(valorTextarea);
		$('.palavras').text(palavras);
        $('.linhas').text(linhas);
		$('.espacos').text(espacos);
	}, 200);
});