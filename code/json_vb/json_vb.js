
/**** OPTIE 1: ****/

    let res = document.getElementById("resultaat");
    $.ajax({
        type:    "GET",
        url:     "json_vb.php",
        dataType: "JSON",
        success: function (array) {
            /* TEST: */ console.log(array);
            res.innerHtml = "landen:<br/>";
            for (let i=0; i<array.length; i++)
            {
                let tekst = "Land: " + array[i][0] + "<br/>";
                tekst += "Hoofdstad: " + array[i][1] + "<br/>";
                tekst += "<hr>";
                res.innerHTML += tekst;
            }
        },
        error: function (request, error) {
            console.log ("FOUT:" + error);
        }
    });
