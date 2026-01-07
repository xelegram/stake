<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: GET, POST");
header("Content-Type: application/json");

// archivo donde se guardan los valores
$dataFile = "pools.dat";

// si no existe se crea
if (!file_exists($dataFile)) {
    file_put_contents($dataFile, json_encode([
        "totalBalance" => 250000000,
        "weeklyEarnings" => 1250000,
        "totalStaked" => 220000000,
        "rewardsEarned" => 18500000,
        "activePools" => 4,
        "nextPayout" => "Fri, 22:00",
        "totalDeposits" => 260000000
    ], JSON_PRETTY_PRINT));
}

// Leer valores actuales
$data = json_decode(file_get_contents($dataFile), true);

// Generadores de valores aleatorios
$incrementOptions = [1312, 131, 13, 423, 12];

$increase = $incrementOptions[array_rand($incrementOptions)];

// Actualizar datos
$data["totalBalance"] += $increase;
$data["weeklyEarnings"] += rand(500, 2500);
$data["totalStaked"] += $increase;
$data["rewardsEarned"] += rand(200, 900);
$data["activePools"] = 4; 
$data["totalDeposits"] += $increase;

// Guardar de nuevo
file_put_contents($dataFile, json_encode($data, JSON_PRETTY_PRINT));

// devolver al navegador
echo json_encode($data);
?>
