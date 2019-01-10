<?php

class AccueilController extends Controller{

	public function index(){

	    //liste des types :
        $types = TypeModel::getAll();

        //on envoie la liste des types à la vue
        $this->set(array('types'=>$types));

		$this->render('index');
	}

	public function liste(){
	    if(isset($_GET['id_type'])){
            $type = new TypeModel($_GET['id_type']);
            $livres = LivreModel::getAllByType($_GET['id_type']);

            //je peux envoyer plusieurs variables d'un coup à la vue :
            $this->set(array(
                'type'=> $type,
                'livres'=> $livres,
            ));

            $this->render('detail');
        }else{
	        header('Location: '.WEBROOT);
        }
    }
}