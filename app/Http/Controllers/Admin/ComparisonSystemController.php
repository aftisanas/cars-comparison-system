<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Brand;
use App\Models\Car;
use App\Models\Comparison;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class ComparisonSystemController extends Controller
{
    public function index()
    {
        $carsImage = Brand::pluck('image');
        $brands = Brand::pluck('name');
        $images = [];

        foreach ($carsImage as $image) {
            $images[] = asset("images/logos/$image");
        }

        $brandImagePairs = [];

        for ($i = 0; $i < count($brands); $i++) {
            $brandImagePairs[] = [
                'brand' => $brands[$i],
                'image' => $images[$i]
            ];
        }
        
        return Inertia::render('Comparison/CompareTool', [
            'user' => auth()->user(),
            'brandData' => $brandImagePairs
        ]);
    }

    // public function makes($year)
    // {
    //     $makes = Car::where('year', $year)->distinct()->pluck('make');
    //     return response()->json($makes);
    // }
    
    public function models($brand)
    {
        // Fetch brand ID and name
        $brandData = Brand::where('name', $brand)->first();

        if (!$brandData) {
            return response()->json(['error' => 'Brand not found'], 404);
        }

        $brand_id = $brandData->id;
        $brand_name = $brandData->name;

        // Fetch distinct models and corresponding images
        $models = Car::where('brand_id', $brand_id)->distinct()->pluck('model');
        $modelsImage = Car::where('brand_id', $brand_id)->distinct()->pluck('image');

        // Replace spaces in the brand name with dashes
        $brand_name = str_replace(' ', '-', $brand_name);

        // Create image URLs
        $images = [];

        foreach ($modelsImage as $image) {
            $images[] = asset("images/models/$brand_name/$image");
        }

        // Pair models with their images
        $ModelsImagePairs = [];

        for ($i = 0; $i < count($models); $i++) {
            $ModelsImagePairs[] = [
                'model' => $models[$i],
                'image' => $images[$i]
            ];
        }

        return response()->json($ModelsImagePairs);
    }


    public function compare(Request $request) 
    {
        $brand = Brand::where('name', $request->brand)->first();

        $brand_name = str_replace(' ', '-', $brand->name);

        $car = Car::where('brand_id', $brand->id)
        ->where('model', $request->model)
        ->first();
    
        if ($car) {
            $image_url = asset("images/models/$brand_name/$car->image");
            $car->image_url = $image_url;
        }
    
        
        return response()->json($car);
    }

    public function store(Request $request)
    {
        $data = $request->all();
        
        $comparison = Comparison::create([
            'first_car' => $data[0]['id'],
            'second_car' => $data[1]['id'],
            'third_car' => $data[2]['id'] ?? null,
            'fourth_car' => $data[3]['id'] ?? null,
            'user_id'=> $data[4]
        ]);

        return response()->json($comparison);
    }

    public function getRapport($compare_id)
    {
        $compare = Comparison::findOrFail($compare_id);

        $firstCar = Car::find($compare['first_car']);
        $secondCar = Car::find($compare['second_car']);
        $thirdCar = Car::find($compare['third_car']);
        $fourthCar = Car::find($compare['fourth_car']);

        $data = [];

    }
}