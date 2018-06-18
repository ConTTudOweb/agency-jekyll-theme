$('#gformContact').on('submit', function (e) {
    $('#gformContact *').fadeOut(1000);
    $('#gformContact').prepend('' +
        '<div class="clear">' +
        '<div class="response text-success text-center" id="mce-success-response"><span>Mensagem enviada! :)</span></div>' +
        '</div>');
});