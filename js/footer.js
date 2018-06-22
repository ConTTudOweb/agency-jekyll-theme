$('#gform').on('submit', function (e) {
    $('#gform *').fadeOut(2000);
    $('#gform').prepend('' +
        '<div class="oc-button__form-response">' +
        '<p>Recebemos seus dados em entraremos em contato em breve! :)</p>' +
        '</div>');
});