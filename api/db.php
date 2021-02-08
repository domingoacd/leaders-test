<?php 
    class DB {
        private $host;
        private $db;
        private $user;
        private $password;
        private $charset;

        public function __construct() {
            $this->host = 'localhost';
            $this->db = 'leaders_groups';
            $this->user = 'root';
            $this->password = '12345';
            $this->charset = 'utf8mb4';
        }

        function connect() {
            try {
                $connection = 'mysql:host='.$this->host.';dbname='.$this->db.';charset='.$this->charset;
                $options = [
                    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
                    PDO::ATTR_EMULATE_PREPARES   => false,
                ];

                $pdo = new PDO($connection, $this->user, $this->password);

                return $pdo;
            } catch (PDOEception $e) {
                print_r('Error at creating DB connection: '.$e->getMessage());
            }
        }
    }
?>