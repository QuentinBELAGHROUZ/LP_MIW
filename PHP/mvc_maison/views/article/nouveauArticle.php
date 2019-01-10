<h1>Article - Nouvel article</h1>



<form method="post" action="<?php echo WEBROOT.'article/nouveauArticle' ?>">
    <label>Titre : </label>
    <input type="text" name="titre" placeholder="Saisissez le titre de l'article" required><br><br>

    <label>Contenu : </label><br>
    <textarea name="contenu" required rows="10" cols="50" placeholder="Contenu de l'article"></textarea>
    <br><br>
    <input type="submit" name="envoyer">

</form>