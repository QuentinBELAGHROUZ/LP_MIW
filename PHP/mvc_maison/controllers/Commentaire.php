<?php

class CommentaireController extends Controller{
    public function index()
    {
        /* $this->set(array('TEST'=>'test'));
         $this->render('index');
         echo 'Article';  */

        /*  $articles = ArticleModel::getAll();
          $this->set(array("articles" => $articles));
          $this->render('index');*/

       $commentaires = CommentaireModel::getComsByArticles(1);
        $this->set(array("commentaires" => $commentaires));
        $this->render('index');
    }
}