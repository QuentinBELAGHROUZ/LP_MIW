<h1>Bibliothèque</h1>

<table>
    <tr>
        <th>Libellé</th>
    </tr>
    <?php foreach($types as $type){ ?>
        <tr>
            <td><a href="<?php echo WEBROOT ?>accueil/liste?id_type=<?php echo $type->id?>"><?php echo $type->libelle ?></a></td>
        </tr>
    <?php } ?>
</table>
<br />
<br />
<a href="<?php echo WEBROOT ?>livre/creermodifier">Ajouter un livre</a>