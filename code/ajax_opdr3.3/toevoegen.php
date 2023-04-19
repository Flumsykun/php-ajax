<?php
//error reporting
error_reporting(E_ALL);
ini_set('display_errors', 1);

//Maak verbinding met de database
$host = "localhost";
$user = "85942";
$pass = "@z51tt78H";
$dbname = "test_database";

//Maak verbinding
$conn = mysqli_connect($host, $user, $pass, $dbname);

//Controleer of de verbinding is gelukt
if (!$conn) {
    die("Verbinding mislukt: " . mysqli_connect_error());
}
else {
    echo "Verbinding gelukt";
}

//Controleer of de waarden zijn ingevuld
if(
    isset($_POST['title']) &&
    isset($_POST['author']) &&
    isset($_POST['isbn'])
) {
    $title = $_POST['title'];
    $author = $_POST['author'];
    $isbn = $_POST['isbn'];

    //Bereid de query voor om de gegevens toe te voegen aan de database
    $sql = "INSERT INTO boeken (title, author, isbn) VALUES ('$title', '$author', '$isbn')";
    //Voer de query uit
    $result = mysqli_query($conn, $sql);
    //Controleer of de query is uitgevoerd
    if($result) {
        echo "De gegevens zijn toegevoegd";
    }
    else {
        echo "Er is een fout opgetreden";
    }
    
}