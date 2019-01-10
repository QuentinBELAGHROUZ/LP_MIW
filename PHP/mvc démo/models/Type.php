<?php
class TypeModel extends Model{

    public $id;
    public $libelle;

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
        $req = $this->bdd->prepare('SELECT * FROM type WHERE id = :id');
        $req->bindValue('id', $id);
        $req->execute();
        return $req->fetch();
    }

    protected function update(){
        $req = $this->bdd->prepare('UPDATE type set libelle=:libelle WHERE id=:id');

        $req->bindValue('id', $this->id, PDO::PARAM_STR);
        $req->bindValue('libelle', $this->name, PDO::PARAM_STR);

        $req->execute();
    }

    protected function insert(){
        $req = $this->bdd->prepare('
          INSERT INTO type 
          (id, libelle)'
            . ' VALUES(
            :id, :libelle)');

        $req->bindValue('id', $this->id, PDO::PARAM_STR);
        $req->bindValue('libelle', $this->name, PDO::PARAM_STR);

        $req->execute();
    }

    public function save(){
        if(is_null($this->id))
            $this->insert();
        else
            $this->update();
    }

    public function delete(){
        $req = $this->bdd->prepare('DELETE FROM type WHERE id=:id');
        $req->bindValue('id', $this->id);
        $req->execute();
    }

    public static function getAll(){
        $model = self::getInstance();
        $req = $model->bdd->prepare('SELECT id FROM type');
        $req->execute();
        $types = array();
        while($row = $req->fetch()){
            $type = new TypeModel($row['id']);
            $types[] = $type;
        }
        return $types;
    }
}