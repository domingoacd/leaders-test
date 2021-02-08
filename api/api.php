<?php 
    include_once 'group.php';

    class Api {
        function getAllGroups() {
            $group = new Group();
            $allGroups = array();
            $allGroups["data"] = array();

            $result = $group->getGroups();

            if ($result->rowCount() > 0) {
                while($row = $result->fetch(PDO::FETCH_ASSOC)) {
                     $item = array(
                         'id' => $row['id'],
                         'name' => $row['name'],
                         'description' => $row['description']
                     );
                     
                     array_push($allGroups["data"], $item);
                }

                $this->sendResult($allGroups);
            } else {
                $this->error('There are no groups created yet.');
            }
        }

        function getGroupById($id) {
            $group = new Group();
            $allGroups = array();
            $allGroups["data"] = array();

            $result = $group->getGroupById($id);

            if ($result->rowCount() > 0) {

                $row = $result->fetch();
                
                $item = array(
                    'id' => $row['id'],
                    'name' => $row['name'],
                    'description' => $row['description']
                );
                
                array_push($allGroups["data"], $item);
                

                $this->sendResult($allGroups);
            } else {
                $this->error('There are no groups created yet.');
            }
        }
        
        function addNewGroup($newGroup) {
            $group = new Group();

            $response = $group->postNewGroup($newGroup);
            $this->success('Group added successfully');
        }

        function sendResult($resultArray) {
            echo json_encode($resultArray);
        }

        function success($message) {
            echo json_encode(array('message' => $message, 'status' => 'ok'));
        }

        function error($message) {
            echo json_encode(array('message' => $message, 'status' => 'error'));
        }
    }
?>