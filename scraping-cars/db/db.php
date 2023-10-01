<?php

use Illuminate\Database\Capsule\Manager as Capsule;

require './vendor/autoload.php';

$capsule = new Capsule;

$capsule->addConnection([
    'driver'    => 'mysql',
    'host'      => "localhost",
    'database'  => "demo",
    'username'  => "root",
    'password'  => "",
]);

$capsule->setAsGlobal();
$capsule->bootEloquent();


// $brands = json_decode(file_get_contents('./list_copy.json'), true);
$carsSpecs = json_decode(file_get_contents('C:/laragon/www/scraping-cars/data/finalData.json'), true);

foreach ($carsSpecs as $brand => $models) {
    $brand_id = Capsule::table('brands')->where('name', '=', $brand)->value('id');

    foreach ($models as $model) {
        // dump(gettype($model['content']['Price']));
        // die();
        preg_match('/([\d.]+)([^\d]+)/', $model['content']['Price'], $matches);
        preg_match('/([\d.]+)([^\d]+)/', $model['content']['Cylinders'], $matchesC);

        $price = isset($model['content']['Price']) ? $model['content']['Price'] : (isset($matches[1]) ? $matches[1] : null);
        $cylinder = isset($model['content']['Cylinders']) ? $model['content']['Cylinders'] : (isset($matchesC[1]) ? $matchesC[1] : null);

        if ($price !== null && !is_numeric($price)) {
            $price = "40.400"; // Set $price to null if it's not a valid numeric value
        }

        Capsule::table('cars')->insert([
            'model' => $model['name'],
            'image' => $model['image'],
            'price' => $price,
            'body_type' => $model['content']['Body Type'],
            'transmission' => $model['content']['Transmission'],
            'number_of_seats' => $model['content']['Number Of Seats'],
            'segment' => $model['content']['Segment'],
            'introduction' => $model['content']['Introduction'],
            'end' => $model['content']['End'],
            'fuel_type' => $model['content']['Fuel Type'],
            'cylinders' => $cylinder,
            'mileage' => random_int(5000, 300000),
            'brand_id' => $brand_id,
            'user_id' => 1,
        ]);
    }
}

dump('cars inserted successful!!!');