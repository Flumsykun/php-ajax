
$("#knop").click(function(){
    //Lees de velden uit
    let vnm = $('#voornaamVeld').val();
    let anm = $('#achternaamVeld').val();
    let pna = $('#plaatsnaamVeld').val();    //Controleer of de velden zijn gevuld
    if (vnm == "")
    {
        $("#resultaat").html("Vul een voornaam in!");
    }
    else if (anm == "")
    {
        $("#resultaat").html("Vul een achternaam in!");
    }
    else if (pna == "")
    {
        $("#resultaat").html("Vul een plaatsnaam in!");
    }
    //Als de velden zijn gevuld, vertuur de data naar de verwerkpagina
    else
    {
        $.ajax({
            type:   "POST",
            url:    "post.php",
            data:   {"voornaam": vnm,
                     "achternaam": anm},
            success: function (tekst) {
                $("#resultaat").html(tekst);
            },
            error: function (request, error) {
                console.log ("FOUT:" + error);
            }
        });
    }
    //LET OP: FORMULIER MAG NIET 'VERSTUURD' WORDEN!
    return false;
});






