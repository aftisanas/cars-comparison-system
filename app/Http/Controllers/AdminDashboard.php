<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class AdminDashboard extends Controller
{
    public function index()
    {
        return Inertia::render('AdminDashboard', ['user' => Auth::user()]);
    }

    
}
