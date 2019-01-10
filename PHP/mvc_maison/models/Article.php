<?php

class ArticleModel extends Model
{
    public $id;
    public $titre;
    public $contenu;
    public $id_user;
    public $datetime;

    public function __construct($id_article = null)
    {
        parent::__construct();
        $data = $this->select($id_article);
        if ($id_article != null) {
            foreach ($data as $key => $value) {
                if (property_exists($this, $key))
                    $this->$key = $value;
            }
        }
    }

    public function select($id_article)
    {
        $model = self::getInstance();
        $req = $model->bdd->prepare('SELECT * FROM article where id = :id_article');
        $req->bindValue('id_article', $id_article);
        $req->execute();
        return $req->fetch();
    }

    protected function update()
    {
        $req = $this->bdd->prepare('UPDATE article 
           SET titre=:titre, contenu=:contenu, datetime=:datetime
           WHERE id ='.$this->id);
        $req->bindValue('titre', $this->titre, PDO::PARAM_STR);
        $req->bindValue('contenu', $this->contenu, PDO::PARAM_STR);
       // $req->bindValue('id_user', $this->id_user, PDO::PARAM_STR);
        $req->bindValue('datetime', $this->datetime, PDO::PARAM_STR);

        $req->execute();
    }

    protected function insert()
    {
        $req = $this->bdd->prepare('
            INSERT INTO article
            (titre, contenu, id_user, datetime) VALUES(:titre, :contenu, :id_user, :datetime)
        ');

        $req->bindValue('titre', $this->titre, PDO::PARAM_STR);
        $req->bindValue('contenu', $this->contenu, PDO::PARAM_STR);
        $req->bindValue('id_user', $this->id_user, PDO::PARAM_STR);
        $req->bindValue('datetime', $this->datetime, PDO::PARAM_STR);

        $req->execute();
    }

    public function save()
    {
        if (is_null($this->id)) {
            $this->insert();
            $this->id = $this->bdd->lastInsertId();
        } else
            $this->update();
    }

    public function delete()
    {
        $req = $this->bdd->prepare('DELETE FROM article WHERE id=:id');
        $req->bindValue('id', $this->id);
        $req->execute();
    }

    public static function getAll($user_id = null)
    {
        $model = self::getInstance();
        if (!is_null($user_id))
            $req = $model->bdd->prepare('SELECT * FROM article WHERE id_user =' . $user_id);
        else
            $req = $model->bdd->prepare('SELECT * FROM article');
        $req->execute();
        $articles = array();
        while ($row = $req->fetch()) {
            $article = new ArticleModel($row['id']);
            $articles[] = $article;
        }
        return $articles;
    }
}