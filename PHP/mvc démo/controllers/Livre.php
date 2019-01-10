<?php

class LivreController extends Controller{

    public function detail(){
        if(isset($_GET['id_livre'])){
            $livre = new LivreModel($_GET['id_livre']);
            $this->set(array('livre'=>$livre));
            $this->render('detail');
        }else
            header('Location: '.WEBROOT);
    }

    public function creermodifier(){
        if(!empty($_POST)){
            $id_livre  = isset($_GET['id_livre']) && $_GET['id_livre']!=''?$_GET['id_livre']:null;
            $livre = new LivreModel($id_livre);
            $livre->titre = $_POST['titre'];
            $livre->isbn = $_POST['isbn'];
            $livre->nb_pages = $_POST['nb_pages'];
            $livre->resume = $_POST['resume'];
            $livre->id_type = $_POST['id_type'];
            $livre->save();
            $_GET['id_livre'] = $livre->id;
        }

        $id_livre  = isset($_GET['id_livre']) && $_GET['id_livre']!=''?$_GET['id_livre']:null;
        $livre = new LivreModel($id_livre);

        $types = TypeModel::getAll();

        $this->set(array('livre'=>$livre, 'types'=>$types));
        $this->render('creermodifier');
    }

    public function supprimer(){
        if(isset($_GET['id_livre'])){
            $livre = new LivreModel($_GET['id_livre']);
            $id_type=$livre->id_type;
            $livre->delete();
            header('Location: '.WEBROOT.'accueil/liste?id_type='.$id_type);
        }else
            header('Location: '.WEBROOT);
    }
}