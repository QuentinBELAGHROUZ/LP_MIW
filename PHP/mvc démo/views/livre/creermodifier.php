<h1>Bibliothèque</h1>
<a href="<?php echo WEBROOT ?>">Accueil</a> >
<?php if($livre->id){ ?>
    <a href="<?php echo WEBROOT ?>accueil/liste?id_type=<?php echo $livre->id_type ?>">Type</a> > Modification
<?php }else{ ?>
    > Nouveau livre
<?php } ?><br />
<h2><?php  echo $livre->titre ?></h2>


<form method="post" action="<?php echo WEBROOT ?>livre/creermodifier?id_livre=<?php echo $livre->id ?>">
    <label for="titre">Titre : </label><input name="titre" id="titre" value="<?php echo $livre->titre ?>" /><br />
    <label for="isbn">ISBN : </label><input name="isbn" id="isbn" value="<?php echo $livre->isbn ?>" /><br />
    <label for="nb_pages">Pages : </label><input name="nb_pages" id="nb_pages" value="<?php echo $livre->nb_pages ?>" /><br />
    <label for="id_type">Type : </label>
    <select name="id_type" id="id_type">
        <?php foreach($types as $type){ ?>
            <option value="<?php echo $type->id ?>" <?php echo $type->id == $livre->id_type?'selected':'' ?>><?php echo $type->libelle ?></option>
        <?php } ?>
    </select>
    <br />
    <label for="resume">Résumé : </label><br />
    <textarea id="resume" name="resume" cols="80" rows="10"><?php echo $livre->resume ?></textarea><br />
    <input type="submit">
</form>