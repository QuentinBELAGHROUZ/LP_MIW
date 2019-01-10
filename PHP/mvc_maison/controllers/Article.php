<?php

class ArticleController extends Controller
{

    public function index()
    {
        /* $this->set(array('TEST'=>'test'));
         $this->render('index');
         echo 'Article';  */

        /*  $articles = ArticleModel::getAll();
          $this->set(array("articles" => $articles));
          $this->render('index');*/

        $articles = ArticleModel::getAll();
        $this->set(array("articles" => $articles));
        $this->render('index');
    }

    public function detail(){
        if(isset($_GET['id_article'])){

            $article = new ArticleModel($_GET['id_article']);
            $commentaires = CommentaireModel::getComsByArticles($_GET['id_article']);
            
            $user = UserModel::getUserByArticle($_GET['id_article']);

            $this->set(array('article'=>$article, 'commentaires'=>$commentaires, 'user'=>$user));
            $this->render('detail');
        }else
            header('Location:'.WEBROOT);
    }

    public function nouveauArticle(){
        if(!empty($_POST)){
            $article = new ArticleModel();
            $article->titre = $_POST['titre'];
            $article->contenu = nl2br($_POST['contenu']);
            $article->id_user = 1;
            $article -> datetime = '2018-10-06 20:35:14';
            $article->save();
            header('location:'.WEBROOT.'article/detail?id_article='.$article->id);
        }
        $this->render('nouveauArticle');

       /* $article = new ArticleModel();
        $article -> titre = 'Nom_Article';
        $article -> contenu = 'Contenu Article';
        $article -> id_user = '1';
        $article -> datetime = '2018-10-06 20:35:14';
        $article -> save();*/
    }

    public function update(){
     if(!empty($_POST)){
         $article = new ArticleModel($_GET['id']);
         $article->titre = $_POST['titre'];
         $article->contenu = nl2br($_POST['contenu']);
         $article->datetime = '2018-10-06 20:35:14';
         $article->save();
         header('location:'.WEBROOT.'article/detail?id_article='.$_GET['id']);
     }
    }

    public function delete(){
        $article = new ArticleModel($_GET['id_article']);
        $article -> delete();
        header('location:'.WEBROOT.'article/index');
    }

}