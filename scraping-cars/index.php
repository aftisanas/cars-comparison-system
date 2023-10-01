<?php

use Symfony\Component\DomCrawler\Crawler;

require 'vendor/autoload.php';

// $carBrandsPage = file_get_contents("https://www.cars-data.com/en/car-brands-cars-logos.html");

// $crawler = new Crawler($carBrandsPage);

// /********** get the cars brands data from $carBrandsPage **********/

// $models = $crawler->filter('.models .col-2 a')->each(function(Crawler $link) : array {
//     $image = $link->filter('img')->first()->attr('src');
//     $url = $link->attr('href');

//     return [
//         'name' => $link->text(),
//         'image' => $image,
//         'url' => $url
//     ];
// });

// file_put_contents('./data/brands/list.json', json_encode($models));

// dump('scraping the data and saving it to list.json: Done!!');

/*********** **********/
// $models = json_decode(file_get_contents('./data/brands/list.json'), true);

// foreach ($models as $key => $model) {
//     $name = $model['name'];
//     $imageUrl = $model['image'];

//     $imageFileName = basename($imageUrl);

//     copy($imageUrl, "./data/brands/logos/$imageFileName");

//     $models[$key]['image'] = $imageFileName;

//     dump("Downloading... the $name model's image: [$imageUrl]...");
// }

// dump("Image downloading : DONE !");

// file_put_contents('./data/brands/list.json', json_encode($models));

// dump("Saving to list.json : DONE !");

/////////////////////////////////////////////////////////////////////////////////////////////////

// $brands = json_decode(file_get_contents('./data/brands/list.json'), true);;

// $allModels = [];

// foreach ($brands as $brand) {
//     $carModelsPage = file_get_contents($brand['url']);

//     $crawler = new Crawler($carModelsPage);

//     /********** get the cars models data from $carModelsPage **********/
//     $models = $crawler->filter('.models .col-4 a')->each(function (Crawler $link) {
//         $url = $link->attr('href');
//         $image = $link->filter('picture img')->first()->attr('src');

//         $imageUrl = 'https://www.cars-data.com' . $image;

//         return [
//             'name' => $link->text(),
//             'url' => $url,
//             'image' => $imageUrl
//         ];
//     });
//     $allModels[$brand['name']] = $models;

// }

// file_put_contents('./data/models/modelsList.json', json_encode($allModels));

// dump('scraping the data and saving it to modelsList.json: Done!!');

/********** get the images and rename the image in all_models.json **********/
$models = json_decode(file_get_contents('./data/models/modelsList.json'), true);

foreach ($models as $brand => $model) {
    foreach ($model as $itemKey => $itemValue) {
        $name = $itemValue['name'];
        $imageUrl = $itemValue['image'];

        $imageFileName = basename($imageUrl);

        $brandDirectory = "./data/models/images/$brand/";

        if (!is_dir($brandDirectory)) {
            mkdir($brandDirectory, 0777, true);
        }

        copy($imageUrl, "./data/models/images/$brand/$imageFileName");

        $models[$brand][$itemKey]['image'] = $imageFileName;
    }
}

file_put_contents('./data/models/modelsList.json', json_encode($models));
dump('scraping the data and saving it to images folder: Done!!');

?>