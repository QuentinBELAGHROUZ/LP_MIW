<?php
include 'header.php';
?>

<h1>Liste des pays</h1>

<div class="container">
    <a href="index.php?action=tri_asc">Tri ascendant?</a>
    <a href="index.php?action=tri_desc">Tri descendant?</a>

    <?php
    if (isset($_GET['action']) && $_GET['action'] == 'tri_desc')
        printCountriesArray(true);
    else
        printCountriesArray();
    ?>

</div>


