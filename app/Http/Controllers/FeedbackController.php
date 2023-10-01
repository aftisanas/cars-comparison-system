<?php

namespace App\Http\Controllers;

use App\Models\Feedback;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class FeedbackController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/FeedbackList', [
            'feedbacks' => Feedback::paginate(20),
            'user' => Auth::user()
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string',
            'email' => 'required|string|email',
            'message' => 'required|string',
        ]);

        $data = $request->all();
        $data['user_id'] = Auth::user()->id;

        Feedback::create($data);

        return redirect()->back();
    }
}