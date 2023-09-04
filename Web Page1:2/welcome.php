<?php


// creat connection
$admin = "root";
$nlocal = "localhost";
$pasword = "";
$connect = new mysqli($nlocal, $admin, $pasword);

// check connection 

if ( $connect -> connect_error) {
    die ("connection failed" . $connect -> connect_error);
}
echo "connection success <br>";

// creat database

$sql ="create database Jumia";
if( $connect -> query($sql) === true ) 
{
    echo "Database created successfully";
}
else {
    echo "error creating database" . $connect -> error ;
}




?>