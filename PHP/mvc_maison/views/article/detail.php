<h1>Article - Detail</h1>

<h2><?php echo $article -> titre ?></h2>

<p>Publié le <?php echo $article -> datetime ?> par <?php echo $user->name; ?></p>
<p><?php echo $article -> contenu ?></p>

<h4>Commentaires</h4>





<?php
if(count($commentaires)){
    foreach ($commentaires as $commentaire){
        echo '<b>'.$commentaire->titre.'</b><br>';
        echo $commentaire->contenu.'<br>';
        echo '---------------<br>';
    }
}

?>



<br>
<h4>Modifier l'article</h4>

<form method="post" action="<?php echo WEBROOT.'article/update?id='.$article->id; ?>">
    <label>Titre : </label>
    <input type="text" name="titre" placeholder="Nouveau titre" required><br><br>

    <label>Contenu : </label><br>
    <textarea name="contenu" required rows="10" cols="50" placeholder="Nouveau contenu"></textarea>
    <br><br>
    <input type="submit" name="envoyer">
</form>