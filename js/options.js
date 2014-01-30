(function () {

    $('#flash').hide();

    $('#mingleURL').val(localStorage.mingleURL || localStorage.defaultUrl);

    $('#save').click(function(e) {
        e.preventDefault();

        localStorage.mingleURL = $('#mingleURL').val();
      
        $('#flash')
                .fadeIn()
                .delay(2000)
                .fadeOut();
    });

}());