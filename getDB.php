<?php

$mysqli = new mysqli('127.0.0.1', 'root','' , 'klasBase');

if ($mysqli->connect_errno) {
    echo "Failed to connect to MySQL:
    (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
}

$column = $_GET['collumn'];
$gid = isset($_GET['Gid']);

$result = $mysqli->query("SELECT * FROM students");

$data = $result->fetch_assoc();
    echo json_encode($result);

var_dump($result);

