<?php

$source_url = __DIR__ . '/data.json';

$json_data = file_get_contents($source_url);

header('Content-Type: application/json');
echo $json_data;