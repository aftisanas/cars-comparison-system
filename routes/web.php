<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AdminDashboard;
use App\Http\Controllers\MailingController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Admin\CarController;
use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\Admin\AccessoryController;
use App\Http\Controllers\Admin\ComparisonSystemController;
use App\Http\Controllers\EnquiryController;
use App\Http\Controllers\FeedbackController;
use Illuminate\Support\Facades\Auth;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Home/Index', ['user' => auth()->user()]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';

Route::get('/about', function(){
    return Inertia::render('About', ['user' => Auth::user()]);
});

Route::get('/admin-dashboard', [AdminDashboard::class, 'index'])->name('admin-dashboard');

Route::resource('/cars', CarController::class);

Route::get('/users-list', [UserController::class, 'index']);

Route::resource('/accessories', AccessoryController::class);

Route::get('/faq', function() {
    return Inertia::render('Home/ComparisonFAQ', ['user' => auth()->user()]);
})->name('faq');

Route::get('/compare', [ComparisonSystemController::class, 'index'])->name('compare');
Route::get('/get-rapport/{compare_id}', [ComparisonSystemController::class, 'getRapport']);

Route::get('/contact-us', [MailingController::class, 'index'])->name('contact');
Route::post('/send-mail', [MailingController::class, 'sendMail']);

Route::get('/feedbacks', [FeedbackController::class, 'index']);
Route::post('/store-feedback', [FeedbackController::class, 'store']);

Route::get('/enquiries', [EnquiryController::class, 'index']);
Route::post('/reply-enquiry', [EnquiryController::class, 'ReplyEnquiry']);
