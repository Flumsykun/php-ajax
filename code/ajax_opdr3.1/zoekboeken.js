$(document).ready(function(){
    $("#zoekknop").click(function(){
        //Lees de waarde van het titelveld uit
        let title = $('#titel').val();
        //Controleer of het veld is gevuld
        if (title == "")
        {
            $("#resultaat").html("Vul een titel in!");
        }else{
        $.ajax({
            type:   "POST",
            url:    "zoekboeken.php",
            data:   {"title": title},
            success: function (resultaten) {
                $("#resultaat").html(resultaten);
            },
            error: function (request, error) {
                console.log ("FOUT:" + error);
            }
        });
    }
    //LET OP: FORMULIER MAG NIET 'VERSTUURD' WORDEN!
    return false;
    });
});

