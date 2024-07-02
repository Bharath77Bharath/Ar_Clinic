<?php
    $name = $_POST['name'];
    $number = $_POST['number'];
    $email = $_POST['email'];
    $date = $_POST['date'];


    //database connection
    $conn = new mysqli('localhost','root','','clinic');
    if($conn -> connect_error){
        die('Connection Failed : '.$conn->connect_error);
    }else{
        $stmt = $conn->prepare("insert into appointments(name, number, email, date) values(?, ?, ?, ?");
        $stmt->bind_param("sisd",$name, $number, $email, $date);
        $stmt->execute();
        echo "Appointment successfully registered!"
        $stmt->close();
        $conn->close();
    }

?>
