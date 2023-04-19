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

//Lees de waarde van het titelveld uit
$title = $_POST['title'];

//Maak een query
$sql = "SELECT * FROM boeken WHERE title LIKE '%$title%'";

//Voer de query uit
$result = mysqli_query($conn, $sql);

//Controleer of er resultaten zijn gevonden
if (mysqli_num_rows($result) > 0 ) {
    //Toon de resultaten in een tabel
    echo "<table border='1'>";
    echo "<tr><th>title</th><th>Author</th><th>isbn</th>";
    while($row = mysqli_fetch_assoc($result)) {
        echo "<tr>";
        echo "<td>" . $row['title'] . "</td>";
        echo "<td>" . $row['author'] . "</td>";
        echo "<td>" . $row['isbn'] . "</td>";
        echo "</tr>";
    }
}
else {
    echo "Geen resultaten gevonden";
}

?>