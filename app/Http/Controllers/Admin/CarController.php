<?php

namespace App\Http\Controllers\Admin;

use App\Models\Car;
use Inertia\Inertia;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Brand;
use Illuminate\Support\Facades\Auth;

class CarController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        
        return Inertia::render('Admin/CarsList', [
            'cars' => Car::paginate(20),
            'user' => Auth::user(),
            'brands' => Brand::all()
        ]);
    }

    /**
        * Show the form for creating a new resource.
    */
    public function create()
    {
        return Inertia::render('Admin/CreateCar', ['user' => Auth::user()]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // dd($request->all());

        $request->validate([
            'make' => ['required', 'string'],
            'model' => ['required', 'string'],
            'description' => ['required', 'string'],
            'year' => ['required', 'numeric'],
            'price' => ['required', 'numeric'],
            'fuel_type' => ['required', 'string'],
            'transmission' => ['required', 'string'],
            'mileage' => ['required', 'numeric'],
            'engine_size' => ['required', 'numeric'],
            'body_type' => ['required', 'string'],
            'color' => ['required', 'string'],
        ]);

        $image = $request->file('image');
        
        if ($image) {
            $imageName = Str::random(50). '.' . $image->getClientOriginalExtension();

            $image->storeAs('public', $imageName);

            Car::create([
                'make' => $request->make,
                'model' => $request->model,
                'description' => $request->description,
                'year' => $request->year,
                'price' => $request->price,
                'fuel_type' => $request->fuel_type,
                'transmission' => $request->transmission,
                'mileage' => $request->mileage,
                'engine_size' => $request->engine_size,
                'body_type' => $request->body_type,
                'color' => $request->color,
                'image' => $request->image,
                'user_id'=> auth()->user()->id,
            ]);

            return to_route('cars.index');
        } else {
            return to_route('cars.create');
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        dd('this is the show page');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Car $car)
    {
        return Inertia::render('Admin/EditCar', [
            'car' => $car,
            'user' => Auth::user()
        ]); 
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Car $car)
    {
        $request->validate([
            'make' => ['required', 'string'],
            'model' => ['required', 'string'],
            'description' => ['required', 'string'],
            'year' => ['required', 'numeric'],
            'price' => ['required', 'numeric'],
            'fuel_type' => ['required', 'string'],
            'transmission' => ['required', 'string'],
            'mileage' => ['required', 'numeric'],
            'engine_size' => ['required', 'numeric'],
            'body_type' => ['required', 'string'],
            'color' => ['required', 'string'],
        ]);
        
        // $image = $request->file('image');
    
        //     $imageName = Str::random(50). '.' . $image->getClientOriginalExtension();

        //     $image->storeAs('public', $imageName);

            $car->update([
                'make' => $request->make,
                'model' => $request->model,
                'description' => $request->description,
                'year' => $request->year,
                'price' => $request->price,
                'fuel_type' => $request->fuel_type,
                'transmission' => $request->transmission,
                'mileage' => $request->mileage,
                'engine_size' => $request->engine_size,
                'body_type' => $request->body_type,
                'color' => $request->color,
                'image' => $request->image,
                'user_id'=> auth()->user()->id,
            ]);

            return to_route('cars.index')->with('success', 'Car Created successful');
        // } else {
        //     return to_route('cars.edit', ['car', $car->id])->with('error', 'Something is wrong, please try again');
        // }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Car $car)
    {
        $car->delete();
        return to_route('cars.index');
    }
}
