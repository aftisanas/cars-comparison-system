<?php

namespace App\Http\Controllers;

use App\Mail\EnquiryMail;
use App\Models\Inquiry;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail as mail;
use Inertia\Inertia;

class EnquiryController extends Controller
{
    public function sendEnquiry(Request $request)
    {
        if (Auth::check()) {
            Inquiry::create([
                'name' => Auth::user()->name,
                'email' => Auth::user()->email,
                'message' => $request->message 
            ]);

            return redirect()->back();
        } else {
            Inquiry::create($request->all());

            return redirect()->back();
        }
    }

    public function index()
    {
        return Inertia::render('Admin/EnquiriesList', [
            'enquiries' => Inquiry::paginate(20),
            'user' => Auth::user()
        ]);
    }

    public function ReplyEnquiry(Request $request)
    {
        $user = User::where('email', $request->email)->first();

        $data = ['name' => $user->name, 'reply' => $request->reply];

        mail::to($request->email)->send(new EnquiryMail($data));
        return redirect()->back();
    }
}
