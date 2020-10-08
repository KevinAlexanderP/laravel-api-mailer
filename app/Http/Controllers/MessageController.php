<?php

namespace App\Http\Controllers;

use App\Mail\MessageReceived;
use Illuminate\Contracts\Mail\Mailable;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class MessageController extends Controller
{
    //
    public function store()
    {

       $message=  request()->validate([
        'name'=> 'required',
        'email'=> ['required', 'email'],
        'subject'=> 'required',
        'content'=> 'required'
        ]);
        
        Mail::to('kennedyisdead13@gmail.com')->send(new MessageReceived($message));
                    return "Email send";
    }
}

// metodo para validar el req , como parametros recibe un array con las reglas que queremos utilizar
