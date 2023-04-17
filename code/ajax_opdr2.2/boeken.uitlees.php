<?php
$servername = 'localhost';
$username = '85942';
$password = '14O*a4j1p';

//error reporting
ini_set('display_errors', 1);
error_reporting(E_ALL);


function leesBoeken() {
    $.ajax({
      url: "boeken_uitlees.php",
      dataType: "json",
      success: function(data) {
        // omzetten van JSON-array naar javascript-array
        var boeken = JSON.parse(data);
  
        // tonen van gegevens in HTML-pagina
        var html = "";
        for (var i = 0; i < boeken.length; i++) {
          html += "<p>" + boeken[i].titel + " - " + boeken[i].auteur + "</p>";
        }
        $("#boeken-div").html(html);
      },
      error: function(xhr, textStatus, errorThrown) {
        console.log("Error: " + errorThrown);
      }
    });
  }
  
?>