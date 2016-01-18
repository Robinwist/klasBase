<?php

$mysqli = new mysqli('127.0.0.1', 'duckofdoom','koekje1' , 'duckofdoom_kal');

if ($mysqli->connect_errno) {
    echo "Failed to connect to MySQL:
    (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
}

$column = $_GET['collumn'];
$gid = isset($_GET['Gid']);

$result = $mysqli->query("SELECT * FROM students");

$data = $result->fetch_assoc();
    echo json_encode($data);


