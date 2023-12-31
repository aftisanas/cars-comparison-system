<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserController extends Controller
{
    public function index()
    {
        // dd('hhh');
        return Inertia::render('Admin/UsersList', [
            'users' => User::paginate(20),
            'user' => auth()->user()
        ]);
    }
}
