$('#gformContact').on('submit', function (e) {
    $('#gformContact *').fadeOut(1000);
    $('#gformContact').prepend('' +
        '<div class="clear">' +
        '<div class="response text-success text-center alert bg-darkest-gray" id="mce-success-response"><span class="text-white well-lg">Obrigado pelo seu contato!<br>O interesse pelo curso foi cadastrado com sucesso, retornaremos o mais rápido possível.</span></div>' +
        '</div>');
});