<?php 
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
    header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
    header("Content-Type: application/json");
    include_once 'api.php';

    if ($_SERVER['REQUEST_METHOD'] == 'POST' ) {
        $_POST = json_decode(file_get_contents('php://input'), true);

        if (isset($_POST['name']) && isset($_POST['description'])) {
            $api = new Api();
            $newGroup = array(
                'name' => $_POST['name'],
                'description' => $_POST['description']
            );

            $api->addNewGroup($newGroup);
         } else {
            $api->error('Error, not enough parameters '. $_POST['name']);
        }   
    }
?>