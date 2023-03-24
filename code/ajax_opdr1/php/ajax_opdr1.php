<?php
    date_default_timezone_set("Europe/Amsterdam");
    $currentTime = date("H:i:s");

    if ($currentTime >= "06:00" && $currentTime < "12:00") {
        echo "Goedemorgen!";
    } elseif ($currentTime >= "12:00" && $currentTime < "18:00") {
        echo "Goedemiddag!";
    } else {
        echo "Goedenavond!";
    }
?>
