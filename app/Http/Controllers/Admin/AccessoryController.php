<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Accessory;
use App\Models\Car;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AccessoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Admin/AccessoriesList', [
            'accessories' => Accessory::paginate(20),
            'user' => auth()->user(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/CreateAccessory', [
            'cars' => Car::all(),
            'user' => auth()->user()
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        $request->validate([
            'name' => ['required', 'string'],
            'description' => ['required', 'string'],
            'price' => ['required', 'numeric'],
            'car_id' => ['required', 'numeric'],
        ]);

        $data = [
            'name' => $request->name,
            'description' => $request->description,
            'price' => $request->price,
            'car_id' => $request->car_id,
            'user_id' => auth()->user()->id,
        ];

        Accessory::create($data);

        return to_route('accessories.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Accessory $accessory)
    {
        return Inertia::render('Admin/EditAccessory', [
            'cars' => Car::all(),
            'user' => auth()->user(),
            'accessory' => $accessory
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Accessory $accessory)
    {
        $request->validate([
            'name' => ['required', 'string'],
            'description' => ['required', 'string'],
            'price' => ['required', 'numeric'],
            'car_id' => ['required', 'numeric'],
        ]);

        $accessory->update($request->all());

        return to_route('accessories.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Accessory $accessory)
    {
        $accessory->delete();
        return to_route('accessories.index');
    }
}
