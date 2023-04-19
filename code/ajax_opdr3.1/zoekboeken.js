$("#zoekknop").click(function(){
    //Lees de waarde van het titelveld uit
    let titel = $('#titel').val();
    //Controleer of het veld is gevuld
    if (titel == "")
    {
        $("#resultaat").html("Vul een titel in!");
    }
    //Als het veld is gevuld, stuur de data naar de verwerkpagina
    else
    {
        $.ajax({
            type:   "POST",
            url:    "zoekboeken.php",
            data:   {"titel": titel},
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
