<?php

require './vendor/autoload.php';

// $tableData = json_decode(file_get_contents('./data/tables_data.json'), true);
// $modelsList = json_decode(file_get_contents('./data/models/modelsList.json'), true);

// $groupedData = [];

// foreach ($modelsList as $brand => $modelList) {
//     foreach ($modelList as $key => $model) {
//         $modelContent = [];
//         foreach ($tableData as $data) {
//             if (str_starts_with($data['name'], $model['name'])) {
//                 $modelContent[] = $data['content'];
//             }
//         }
//         $modelsList[$brand][$key]['content'] = $modelContent;
//     }
// }

// file_put_contents('./data/groupedData.json', json_encode($modelsList, JSON_PRETTY_PRINT));

// dump('grouped successful');

// $data = json_decode(file_get_contents('./data/groupedData.json'), true);

// $transformedData = [];

// foreach ($data as $brand => $models) {
//     foreach ($models as $model) {
//         $transformedModel = [
//             "name" => $model["name"],
//             "url" => $model["url"],
//             "image" => $model["image"],
//             "content" => [],
//         ];

//         foreach ($model["content"] as $content) {
//             // Split content by newline
//             $lines = explode("\n", $content);

//             foreach ($lines as $line) {
//                 // Split line by ":"
//                 $parts = explode(":", $line, 2);

//                 // Trim key and value
//                 $key = trim($parts[0]);
//                 $value = trim($parts[1]);

//                 // Check if key already exists, if not, add it
//                 if (!array_key_exists($key, $transformedModel["content"])) {
//                     $transformedModel["content"][$key] = $value;
//                 }
//             }
//         }

//         $transformedData[$brand][] = $transformedModel;
//     }
// }

// // Convert to indexed array if needed
// $transformedData = array_values($transformedData);

// file_put_contents('./data/transformedData.json', json_encode($transformedData, JSON_PRETTY_PRINT));

// dump('transformation successful');

// $data = json_decode(file_get_contents('./data/transformedData.json'), true);

// $splitData = [];

// foreach ($data as $brandModels) {
//     foreach ($brandModels as $model) {
//         $content = $model['content'];

//         // Initialize an array to hold the properties
//         $splitContent = [];

//         foreach ($content as $property) {
//             // Split each property into key and value
//             list($key, $value) = explode(':', $property, 2);

//             // Trim excess whitespace
//             $key = trim($key);
//             $value = trim($value);

//             // Add to splitContent array
//             $splitContent[$key] = $value;
//         }

//         // Add the split content to the model data
//         $model['content'] = $splitContent;

//         $splitData[] = $model;
//     }
// }

// // Convert to indexed array if needed
// $splitData = array_values($splitData);

// file_put_contents('./data/splitData.json', json_encode($splitData, JSON_PRETTY_PRINT));

// dump('splitting successful');   

$data = json_decode(file_get_contents('./data/groupedData.json'), true);

$finalData = [];

foreach ($data as $brand => $models) {
    foreach ($models as $model) {
        $content = $model['content'];

        foreach ($content as $value) {
            
            $parts = explode ("/n", $value);
            
            array_shift($parts);

            foreach ($parts as $part) {
                $part = trim($part);
                list($key, $part) = explode(":", $part);
                $key = trim($key);
                $part = trim($part);
                $contentInfo[$key] = $part;
            }
            unset($contentInfo[""]);

            // dump($contentInfo);
            // die();
        }

        $transformedContent = [
            'name' => $model['name'],
            'url' => $model['url'],
            'image' => $model['image'],
            'content' => $contentInfo
        ];

        $finalData[$brand][] = $transformedContent;
    }
}

file_put_contents('./data/finalData.json', json_encode($finalData, JSON_PRETTY_PRINT));

echo 'Transformation successful';