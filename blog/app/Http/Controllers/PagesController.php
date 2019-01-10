<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PagesController extends Controller
{
    public function test($name = 'toi'){
        return view('test', [
            'name' => $name
        ]);
    }
}
