<?php 
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
    header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
    include_once 'api.php';
    $api = new Api();

    if(isset($_GET['id'])) {
        $id = $_GET['id'];  
        
        if(is_numeric($id)) {
            $api->getGroupById($id);
        } else {
            $api->error('Error, the parameter received for ID must be a number');
        } 
    } else {
        $api->getAllGroups();
    }
?>