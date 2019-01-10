<h1>Bibliothèque</h1>
<a href="<?php echo WEBROOT ?>">Accueil</a><br />
<h2>Type de livres : <?php  echo $type->libelle ?></h2>
<table>
    <tr>
        <th>Titre</th>
        <th>ISBN</th>
        <th>Nb Pages</th>
    </tr>
    <?php foreach($livres as $livre){ ?>
        <tr>
            <td><?php echo $livre->titre ?></td>
            <td><?php echo $livre->isbn ?></td>
            <td><?php echo $livre->nb_pages ?></td>
            <td>
                <a href="<?php echo WEBROOT ?>livre/detail?id_livre=<?php echo $livre->id?>">Voir</a>
                | <a href="<?php echo WEBROOT ?>livre/creermodifier?id_livre=<?php echo $livre->id?>">Modifier</a>
                | <a href="<?php echo WEBROOT ?>livre/supprimer?id_livre=<?php echo $livre->id?>">Supprimer</a>
            </td>
        </tr>
    <?php } ?>
</table>