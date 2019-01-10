<?php

class UserController extends Controller{

    public function index(){
        $users = UserModel::getUserByArticle(1);
        $this->set(array("users" => $users));
        $this->render('index');
    }
}