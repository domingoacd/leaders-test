<?php 
  include_once 'db.php';

  class Group extends DB{

    function getGroups() {
      try {
        $query = $this->connect()->query('SELECT * FROM groups');

      return $query;
      } catch (\Throwable $th) {
        echo 'Error'.$th;
      }
      
    }

    function getGroupById($id) {
      try {
        $query = $this->connect()->prepare('SELECT * FROM groups WHERE id= :id');
        $query->execute(['id' => $id]);

      return $query;
      } catch (\Throwable $th) {
        echo 'Error '.$th;
      
      }
    }

    function postNewGroup($newGroup) {
      try {
        $query = $this->connect()->prepare('INSERT INTO groups (name, description, members) VALUES (:name, :description, :members)');
        $query->execute(['name' => $newGroup['name'], 'description' => $newGroup['description'], 'members' => 1]);

      return $query;
      } catch (\Throwable $th) {
        echo 'Error '.$th;
      
      }
    }

    public function deleteGroup() {

    }

  }
  
?>