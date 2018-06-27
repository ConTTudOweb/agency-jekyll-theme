$('#gform').on('submit', function (e) {
    $('#gform *').fadeOut(2000);
    $('#gform').prepend('' +
        '<div class="oc-button__form-response">' +
        '<p>Obrigado pelo seu cadastro! Retornaremos o mais rápido possível.</p>' +
        '</div>');
});