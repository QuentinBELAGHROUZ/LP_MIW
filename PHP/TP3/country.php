<?php
include 'header.php';

if (isset($_GET['country'])) {
    printCountryInfos();

    echo '<h3>Villes les plus peuplées</h3>';

    printCities();
}
