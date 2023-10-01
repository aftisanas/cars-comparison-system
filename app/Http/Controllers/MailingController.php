<?php

namespace App\Http\Controllers;

use App\Mail\ContactUsMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail as FacadesMail;
use Inertia\Inertia;

class MailingController extends Controller
{
    public function index()
    {
        return Inertia::render('Home/Contact', ['user' => auth()->user()]);
    }

    public function SendMail(Request $request)
    {
        $data = $request->all();
        $fromAddress = config('mail.from.address');
        FacadesMail::to($fromAddress)->send(new ContactUsMail($data));
        return redirect()->back();
    }
}
