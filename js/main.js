$('#joke-button').click(function() {

    $('#placeholder').remove();
    $.getJSON( 'http://api.icndb.com/jokes/random', function(data) {
        $('#joke-display').html('<p>'+ data.value.joke + '</p>');
    });

});

