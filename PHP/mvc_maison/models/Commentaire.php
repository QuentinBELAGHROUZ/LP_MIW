<?php

class CommentaireModel extends Model
{
    public $id;
    public $titre;
    public $contenu;
    public $id_user;
    public $id_article;
    public $datetime;

    public function __construct($id = null)
    {
        parent::__construct();
        $data = $this->select($id);
        if ($id != null) {
            foreach ($data as $key => $value) {
                if (property_exists($this, $key))
                    $this->$key = $value;
            }
        }
    }

    public function select($id)
    {
        $model = self::getInstance();
        $req = $model->bdd->prepare('SELECT * FROM commentaire where id = :id');
        $req->bindValue('id', $id);
        $req->execute();
        return $req->fetch();
    }

    protected function update()
    {
        $req = $this->bdd->prepare('UPDATE commentaire 
           SET titre=:titre, contenu=:contenu, id_user=:id_user, id_article, datetime=:datetime
           WHERE id ='.$this->id);

        $req->bindValue('titre', $this->titre, PDO::PARAM_STR);
        $req->bindValue('contenu', $this->contenu, PDO::PARAM_STR);
        $req->bindValue('id_user', $this->id_user, PDO::PARAM_STR);
        $req->bindValue('id_article', $this->id_article, PDO::PARAM_STR);
        $req->bindValue('datetime', $this->datetime, PDO::PARAM_STR);

        $req->execute();
    }

    protected function insert()
    {
        $req = $this->bdd->prepare('
            INSERT INTO commentaire
            (titre, contenu, id_user, id_article, datetime) VALUES(:titre, :contenu, :id_user, :id_article, :datetime)
        ');

        $req->bindValue('titre', $this->titre, PDO::PARAM_STR);
        $req->bindValue('contenu', $this->contenu, PDO::PARAM_STR);
        $req->bindValue('id_user', $this->id_user, PDO::PARAM_STR);
        $req->bindValue('id_article', $this->id_article, PDO::PARAM_STR);
        $req->bindValue('datetime', $this->datetime, PDO::PARAM_STR);

        $req->execute();
    }

    public function save()
    {
        if (is_null($this->id)) {
            $this->insert();
        } else
            $this->update();
    }

    public function delete()
    {
        $req = $this->bdd->prepare('DELETE FROM commentaire WHERE id=:id');
        $req->bindValue('id', $this->id);
        $req->execute();
    }

    public static function getAll($id = null)
    {
        $model = self::getInstance();
        if (!is_null($id))
            $req = $model->bdd->prepare('SELECT * FROM commentaire WHERE id_user =' . $id);
        else
            $req = $model->bdd->prepare('SELECT * FROM commentaire');
        $req->execute();
        $commentaires = array();
        while ($row = $req->fetch()) {
            $commentaire = new CommentaireModel($row['id']);
            $commentaires[] = $commentaire;
        }
        return $commentaires;
    }

    public static function getComsByArticles($id){
        $model = self::getInstance();

        $req = $model->bdd->prepare('SELECT c.id, c.titre, c.contenu, c.datetime FROM commentaire c inner join article a on c.id_article = a.id where a.id ='.$id);
        $req -> execute();
        $commentaires = array();

        while($row = $req -> fetch()){
            $commentaire = new CommentaireModel(($row['id']));
            $commentaires[] = $commentaire;
        }
        return $commentaires;
    }

}