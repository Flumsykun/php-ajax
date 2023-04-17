<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);

    //Maak (en vul) een multi-dimensionele array
    $landen = Array(array("Nederland","Amsterdam",17.47),
                    array("Spanje","Madrid",46.57),
                    array("Duitsland","Berlijn",82.79));
    //Voeg een element toe aan de array
    $nieuwland = array("Frankrijk", "Parijs",67.12);
    array_push($landen, $nieuwland);
    //Zet de array om in een JSON-array
    $jsonarray = json_encode($landen);
    //Toon de JSON-array op het schemr
    echo $jsonarray;



