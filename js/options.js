(function () {

    $('#mingleURL').val(localStorage.mingleURL || localStorage.defaultUrl);

    $('#save').click(function(e) {
        e.preventDefault();

        localStorage.mingleURL = $('#mingleURL').val();
      
        $('#flash')
            .removeClass('hidden')
            .addClass("highlight");

        setTimeout(function () {

            $('#flash')
                .addClass('hidden')
                .removeClass("highlight"); 

        }, 2000);
    });

}());