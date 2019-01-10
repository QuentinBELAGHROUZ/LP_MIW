<h1>Article - index</h1>

<table>
    <tr>
        <th>Titre</th>
        <th>Date</th>
        <th>Commentaires</th>
        <th>Action</th>
    </tr>

    <?php
    foreach ($articles as $article) { ?>
        <tr>
            <td><?php echo $article->titre ?></td>
            <td><?php echo $article->datetime ?></td>
            <td>0</td>
            <td><a href=" <?php echo WEBROOT ?>article/detail?id_article=<?php echo $article->id ?>">Voir </a> <a href=" <?php echo WEBROOT ?>article/delete?id_article=<?php echo $article->id ?>"> Supprimer</a></td>
        </tr>
    <?php }
    ?>
</table>

<p>Nouvel article?<a href=" <?php echo WEBROOT ?>article/nouveauArticle"> Cliquez ici !</a></p>
