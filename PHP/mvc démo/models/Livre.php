<?php
class LivreModel extends Model{

    public $id;
    public $titre;
    public $isbn;
    public $nb_pages;
    public $resume;
    public $id_type;

    public function __construct($id = null)
    {
        parent::__construct();
        if(!is_null($id)){
            $data = $this->select($id);
            foreach($data as $key=>$value){
                if(property_exists($this, $key))
                    $this->$key = $value;
            }
        }
    }

    //CRUD
    public function select($id){
        $req = $this->bdd->prepare('SELECT * FROM livre WHERE id =:id');
        $req->bindValue('id', $id);
        $req->execute();
        return $req->fetch();
    }

    protected function update(){
        $req = $this->bdd->prepare('
          UPDATE livre set titre=:titre, isbn=:isbn, nb_pages=:nb_pages, resume=:resume, id_type=:id_type
          WHERE id=:id');

        $req->bindValue('id', $this->id, PDO::PARAM_STR);
        $req->bindValue('titre', $this->titre, PDO::PARAM_STR);
        $req->bindValue('isbn', $this->isbn, PDO::PARAM_STR);
        $req->bindValue('nb_pages', $this->nb_pages, PDO::PARAM_INT);
        $req->bindValue('resume', $this->resume, PDO::PARAM_STR);
        $req->bindValue('id_type', $this->id_type, PDO::PARAM_INT);

        $req->execute();
    }

    protected function insert(){
        $req = $this->bdd->prepare('INSERT INTO livre (titre, isbn, nb_pages, resume, id_type)'. ' VALUES(:titre, :isbn, :nb_pages, :resume, :id_type)');

        $req->bindValue('titre', $this->titre, PDO::PARAM_STR);
        $req->bindValue('isbn', $this->isbn, PDO::PARAM_STR);
        $req->bindValue('nb_pages', $this->nb_pages, PDO::PARAM_INT);
        $req->bindValue('resume', $this->resume, PDO::PARAM_STR);
        $req->bindValue('id_type', $this->id_type, PDO::PARAM_INT);

        $req->execute();
        $this->id = $this->bdd->lastInsertId();
    }

    public function save(){
        if(is_null($this->id))
            $this->insert();
        else
            $this->update();
    }

    public function delete(){
        $req = $this->bdd->prepare('DELETE FROM livre WHERE id=:id');
        $req->bindValue('id', $this->id);
        $req->execute();
    }

    public static function getAll(){
        $model = self::getInstance();
        $req = $model->bdd->prepare('SELECT id FROM livre');
        $req->execute();
        $livres = array();
        while($row = $req->fetch()){
            $livre = new LivreModel($row['id']);
            $livres[] = $livre;
        }
        return $livres;
    }

    public static function getAllByType($id_type){
        $model = self::getInstance();
        $req = $model->bdd->prepare('SELECT id FROM livre WHERE id_type=:id_type');
        $req->bindValue('id_type', $id_type, PDO::PARAM_INT);
        $req->execute();
        $livres = array();
        while($row = $req->fetch()){
            $livre = new LivreModel($row['id']);
            $livres[] = $livre;
        }
        return $livres;
    }
}