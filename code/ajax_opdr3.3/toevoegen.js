$(document).ready(function(){
    //Bij het klikken op de toevoegen knop:
    $("#toevoegen").click(function(e) {
        //Stop de standaard formulierzending
        e.preventDefault();

        //Haal de waarden van invoervelden op
        let title = $("#title").val();
        let author = $("#author").val();
        let isbn = $("#isbn").val();

        //Maak een AJAX-verzoek naar de PHP-pagina om de gegevens op te slaan
        $.ajax({
            type: "POST",
            url: "toevoegen.php",
            data: { "title": title, "author": author, "isbn": isbn },
            success: function (resultaten) {
                //toon het resultaat in de resultaat-div
                $("#resultaat").html(resultaten);
            },
            error: function (request, error) {
                console.log("FOUT:" + error);
            }
        });
    });
});