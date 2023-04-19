
$(document).ready(function () {
    $("#zoekknop").click(function () {
        //Lees de waarde van het titelveld uit
        let title = $('#title').val();
        //Controleer of het veld is gevuld
        if (title == "") {
            $("#resultaat").html("Vul een titel in!");
        } else {
            $.ajax({
                type: "POST",
                url: "zoekboeken.php",
                data: { "title": title },
                success: function (resultaten) {
                    $("#resultaat").html(resultaten);
                },
                error: function (request, error) {
                    console.log("FOUT:" + error);
                }
            });
        }
        //LET OP: FORMULIER MAG NIET 'VERSTUURD' WORDEN!
        return false;
    });

    //Nieuwe Jquery-event toevoegen om te controleren of er een toets is ingedrukt binnen het tekstveld
    $('#title').on('input', function () {

        let title = $('#title').val();
        if (title == "") {
            $("#resultaat").html("Vul een titel in!");
            return;
        }
        $.ajax({
            type: "POST",
            url: "zoektitels.php",
            data: { "title": title },
            success: function (resultaten) {
                $("#resultaat").html(resultaten);
            },
            error: function (request, error) {
                console.log("FOUT:" + error);
            }
        });
    });
});

