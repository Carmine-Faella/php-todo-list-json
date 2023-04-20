<?php

$toDoList = [
    [
        'name'=>'Html',
        'make'=> false
    ],
    [
        'name'=>'CSS',
        'make'=> true
    ],
    [
        'name'=>'VueJs',
        'make'=> false
    ],
    [
        'name'=>'Axios',
        'make'=> true
    ],
    [
        'name'=>'PHP',
        'make'=> false
    ],
];

if(isset($_POST['toDoItem'])){
    $toDoList[] = $_POST['toDoItem'];
}

header('Content-Type: application/json');
echo json_encode($toDoList);

?>