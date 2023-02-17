
$("#knop").click(function(){
    //$(this).hide();
    $.ajax({
        type:    "GET",
        url:     "verwerk_jq.php",
        success: function (tekst) {
            $("#result").html(tekst);
        },
        error: function (request, error) {
            console.log ("FOUT:" + error);
        }
    });
});


