<?php 
use Symfony\Component\DomCrawler\Crawler;

require 'vendor/autoload.php';

// $brands = json_decode(file_get_contents('./data/models/modelsListLink.json'), true);
// $crawler = new Crawler();

// foreach ($brands as $brand) {
//     foreach ($brand as $models) {
//         foreach ($models as $model) {
//             $modelLink = file_get_contents($model['url']);

//             $modelLink = $crawler->filter('.col-8 .col-6 h3 a')->each(function (Crawler $link) : array {
//                 $url = $link->attr('href');
//                 return [
//                     'url' => $url
//                 ];
//             });

//             if (!empty($modelLink)) {
//                 $modelText = $modelCrawler->filter('.col-6 h3')->first()->text();
//                 dump($modelText);
//                 die();
//             } else {
//                 dump($modelLink);
//                 die();
//             }

//             $carSpecs = file_get_contents($models['url']);

//             $carSpecsLink = $crawler->filter('.col-7 a')->first()->attr('href');

//             $allCarSpecsPage = file_get_contents($carSpecsLink);

//             $carSpecsTables = $crawler->filter('.col-7 table');

//             dump($carSpecsTables);
//             die();
//         }
//     }
// }

$brands = json_decode(file_get_contents('./data/models/modelsListLink.json'), true);

$tablesData = [];

foreach ($brands as $brand) {
    foreach ($brand as $models) {
        foreach ($models as $model) {
            $modelLink = file_get_contents($model['url']);
            $modelCrawler = new Crawler($modelLink);

            $modelLink = $modelCrawler->filter('.col-8 .col-6 h3 a')->first();

            if ($modelLink) {
                $url = $modelLink->attr('href');

                try {
                    $carSpecsPage = file_get_contents($url);
                    $carSpecsCrawler = new Crawler($carSpecsPage);
                    $carSpecsLink = $carSpecsCrawler->filter('.col-7 a')->first();
                    if ($carSpecsLink->count() > 0) {
                        $carSpecsDataPage = file_get_contents($carSpecsLink->attr('href'));
                        $carSpecsDataCrawler = new Crawler($carSpecsDataPage);
                        $carSpecsDataTables = $carSpecsDataCrawler->filter('.col-7 table');
                        $carSpecsDataName = $carSpecsDataCrawler->filter('.col-10 h1')->text();

                        for ($i = 0; $i < min(3, $carSpecsDataTables->count()); $i++) {
                            $tableContent = $carSpecsDataTables->eq($i)->text();
                            $tableContent = str_replace(["\u20ac", "\/", "\:"], ["€", "/", ":"], $tableContent);

                            // Separate key-value pairs
                            $lines = explode(PHP_EOL, $tableContent);
                            $result = [];

                            foreach ($lines as $line) {
                                list($key, $value) = explode(':', $line, 2);
                                $result[trim($key)] = trim($value);
                            }

                            $tablesData[] = [
                                'name' => $carSpecsDataName,
                                'content' => $result
                            ];

                            dump('scraping...');
                        }
                    } else {
                        dump("No car specs link found for URL: $url");
                    }
                } catch (Exception $e) {
                    dump("Error accessing URL: $url");
                    // Handle the exception as needed
                }
            } else {
                dump("No model link found for brand.");
            }
        }
    }
}

$jsonData = json_encode($tablesData, JSON_PRETTY_PRINT);

file_put_contents('./data/tables.json', $jsonData);


// $modelLinks = json_decode(file_get_contents('./data/models/modelsListLink.json'), true);
// $tablesData = json_decode(file_get_contents('./data/tables_data.json'), true);
// $mergedData = [];



// dump('merged successful');