<?php

use Symfony\Component\DomCrawler\Crawler;

require 'vendor/autoload.php';

// $models = json_decode(file_get_contents('./data/models/modelsList.json'), true);
// $allModelsLink = [];


// foreach ($models as $modelKey => $modelValue) {
//     foreach ($modelValue as $itemKey => $itemValue) {

//         $carModelsPage = file_get_contents($itemValue['url']);
//         $crawler = new Crawler($carModelsPage);

//         $modelName = $itemValue['name'];

//         $modelsList = $crawler->filter('.models .col-4 a')->first()->each(function (Crawler $link) : array {
//             $url = $link->attr('href');

//             return [
//                 'name' => $link->text(),
//                 'url' => $url
//             ];
//         });

//         $allModelsLink[$modelKey][$modelName] = $modelsList;
//     }
// }

// file_put_contents('./data/models/modelsListLink.json', json_encode($allModelsLink));

// dump('scraping the data and saving it to modelsListLink.json: Done!!');


?>