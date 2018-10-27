<?php
include 'config_bdd.php';

function printCountriesArray($tri_desc = false)
{
    global $bdd;

    $pays_par_page = 40;
    $total_pays_rec= $bdd->query('SELECT code from country');
    $total_pays = $total_pays_rec -> rowCount();
    $pages = ceil($total_pays/$pays_par_page);

    if(isset($_GET['page']) AND !empty($_GET['page']) AND $_GET['page'] > 0 AND $_GET['page'] <= $pages) {
        $_GET['page'] = intval($_GET['page']);
        $pageCourante = $_GET['page'];
    } else {
        $pageCourante = 1;
    }

    $depart = ($pageCourante-1)*$pays_par_page;

    echo "<table class=\"table\">
    <thead>
    <tr>
        <th>Pays</th>
        <th>Population</th>
        <th>Nombre villes</th>
    </tr>
    </thead>
    <tbody>";




    $sql = 'select country.code, country.name, country.population, count(city.countrycode) as nb_villes from country 
    inner join city on country.code = city.countrycode
        group by city.countrycode LIMIT '.$depart.','. $pays_par_page;

    if ($tri_desc)
        $sql .= ' order by country.name desc';

    $res = $bdd->query($sql);


    while ($row = $res->fetch()) {
        $code = $row['code'];
        echo '<tr>';
        echo '<td> <a href=country.php?country=' . $code . '>' . $row['name'] . '</a></td>';
        echo '<td>' . $row['population'] . '</td>';
        echo '<td>' . $row['nb_villes'] . '</td>';
        echo '</tr>';
    }


    echo "</tr>
    </tbody>
</table>";

      for($i=1;$i<=$pages;$i++) {
          if($i == $pageCourante) {
              echo $i.' ';
          } else {
              echo '<a href="index.php?page='.$i.'">'.$i.'</a> ';
          }
      }

}

function printCities()
{

    global $bdd;

    echo "<table class=\"table\">
    <thead>
    <tr>
        <th scope=\"col\">#</th>
        <th scope=\"col\"> Ville</th>
        <th scope=\"col\"> Population</th>
    </tr>
    </thead>
    <tbody>";

    $cities = $bdd->prepare('SELECT city.name, city.population from city inner join country on city.countrycode = country.code where code = ? order by city.population desc LIMIT 10');
    $cities->execute(array($_GET['country']));

    $i = 0;
    while ($row = $cities->fetch()) {
        echo '<tr>';
        echo '<th scope="row">' . $i . '</th>';
        echo '<td>' . $row['name'] . '</td>';
        echo '<td>' . $row['population'] . '</td>';
        echo '</tr>';
        $i++;
    }

    echo "</tbody>
</table>";
}

function printCountryInfos()
{
    global $bdd;


    $res = $bdd->prepare('SELECT * FROM country
                          where code = ?');
    $res->execute(array($_GET['country']));

    while ($row = $res->fetch()) {
        echo '<h1>' . $row['name'] . '</h1>' . '<br/>';
        echo 'Code : ' . $row['code'] . '</br>';
        echo 'Continent : ' . $row['continent'] . '</br>';
        echo 'Region : ' . $row['region'] . '</br>';
        echo 'Superficie : ' . $row['surfacearea'] . '</br>';
        echo 'Indépendence : ' . $row['indepyear'] . '</br>';
        echo 'Population : ' . $row['population'] . '</br>';
        echo 'Espérence de vie : ' . $row['lifeexpectancy'] . '</br>';
        echo 'Continent : ' . $row['gnp'] . '</br>';
        if (empty($row['gnpold']))
            echo 'GNP : non renseigné</br>';
        else
            echo 'GNP : ' . $row['gnpold'] . '</br>';
        echo 'Nom local : ' . $row['LocalName'] . '</br>';
        echo 'Gouvernement : ' . $row['governmentform'] . '</br>';
        echo 'Chef d\'Etat : ' . $row['headofstate'] . '</br>';
        echo 'Capital : ' . $row['capital'] . '</br>';
        echo 'Code : ' . $row['code2'] . '</br>';
    }

}