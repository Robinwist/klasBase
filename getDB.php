<?php

$mysqli = new mysqli('127.0.0.1', 'root','' , 'klasBase');

if ($mysqli->connect_errno) {
    echo "Failed to connect to MySQL:
    (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
}

$column = isset($_GET['collumn']);
$gid = isset($_GET['Gid']);

$result = $mysqli->query("SELECT * FROM $column, $gid ");

while($data = $result->fetch_assoc()){
    echo $data['collumn'];
    echo $gid['Gid'];
}