<?php

// $dataFromJs = json_decode(stripslashes($_POST));
// $dataFromJs = json_decode(array_key_first($_POST));
$dataFromJs = json_decode(file_get_contents('php://input'), true);

$mail = $dataFromJs['mail'];
$todos = $dataFromJs['todos'];

// header('Content-Type: application/json; charset=utf-8');
// echo json_encode($mail);
// echo json_encode($_POST);

// $mail = $_POST[];
$msg = $todos;

// use wordwrap() if lines are longer than 70 characters
$msg = wordwrap($msg,70);

// send email
$sended = mail('bpoborowski@gmail.com',"My subject",$msg); // chuj Ci w dupe zmien zmienną!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
echo json_encode(["isSended"=>$sended]);
?>