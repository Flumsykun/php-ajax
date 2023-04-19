<?php
// Maak verbinding met de database
$host = "localhost";
$user = "85942";
$pass = "@z51tt78H";
$dbname = "test_database";

// Maak verbinding
$conn = mysqli_connect($host, $user, $pass, $dbname);

// Controleer of de verbinding is gelukt
if (!$conn) {
    die("Verbinding mislukt: " . mysqli_connect_error());
}

// Lees de waarde van het titelveld uit
if(isset($_POST['title'])){
    $title = $_POST['title'];
} else {
    $title = "";
}

// Maak een query om de titels op te zoeken
$sql = "SELECT DISTINCT title FROM boeken WHERE title LIKE '%{$title}%'";

// Voer de query uit
$result = mysqli_query($conn, $sql);

// Controleer of er resultaten zijn gevonden
if (mysqli_num_rows($result) > 0) {
    // Toon de resultaten in een lijst
    echo "<ul>";
    while ($row = mysqli_fetch_assoc($result)) {
        echo "<li>" . $row['title'] . "</li>";
    }
    echo "</ul>";
} else {
    echo "Geen resultaten gevonden";
}
?>
