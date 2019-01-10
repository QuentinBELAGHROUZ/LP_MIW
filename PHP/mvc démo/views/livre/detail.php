<h1>Bibliothèque</h1>
<a href="<?php echo WEBROOT ?>">Accueil</a> > <a href="<?php echo WEBROOT ?>accueil/liste?id_type=<?php echo $livre->id_type ?>">Type</a> > Détail<br />
<h2><?php  echo $livre->titre ?></h2>
<strong>ISBN : </strong><?php echo $livre->isbn ?><br />
<strong>Pages : </strong><?php echo $livre->nb_pages ?><br />
<strong>Type : </strong><?php echo $livre->id_type ?><br />
<strong>Résumé : </strong><br />
<?php echo nl2br($livre->resume) ?> <!-- notez le nl2br pour les retour à la ligne! -->