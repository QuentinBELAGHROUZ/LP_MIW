<?php

class UserModel extends Model
{
    public $id;
    public $name;
    public $email;

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
        $req = $model->bdd->prepare('SELECT * FROM user where id = :id');
        $req->bindValue('id', $id);
        $req->execute();
        return $req->fetch();
    }

    protected function update()
    {
        $req = $this->bdd->prepare('UPDATE user 
           SET name=:name, email=:email
           WHERE id =' . $this->id);
        $req->bindValue('name', $this->name, PDO::PARAM_STR);
        $req->bindValue('email', $this->contenu, PDO::PARAM_STR);

        $req->execute();
    }

    protected function insert()
    {
        $req = $this->bdd->prepare('
            INSERT INTO user
            (name, email) VALUES(:name, :email)
        ');
        $req->bindValue('name', $this->name, PDO::PARAM_STR);
        $req->bindValue('email', $this->email, PDO::PARAM_STR);

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
        $req = $this->bdd->prepare('DELETE FROM user WHERE id=:id');
        $req->bindValue('id', $this->id);
        $req->execute();
    }

    public static function getAll($user_id = null)
    {
        $model = self::getInstance();
        if (!is_null($user_id))
            $req = $model->bdd->prepare('SELECT * FROM user WHERE id =' .$user_id);
        else
            $req = $model->bdd->prepare('SELECT * FROM user');
        $req->execute();
        $users = array();
        while ($row = $req->fetch()) {
            $user = new UserModel($row['id']);
            $users[] = $user;
        }
        return $users;
    }

    public static function getUserByArticle($id_article){
        $model = self::getInstance();
        $req = $model->bdd->prepare('SELECT u.id, name FROM user u INNER JOIN article a on u.id = a.id_user WHERE a.id =' .$id_article);
        $req -> execute();
        $row = $req->fetch();

        $user = new UserModel($row['id']);

        return $user;
    }
}