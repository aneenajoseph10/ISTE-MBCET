<?php 
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $form_content="From: $name \n Message: $message";
    $recipient = "aneenajoseph.b20cs1210@mbcet.ac.in";
    $subject = "Contact Form";
    $mailheader = "From: $email \r\n";
    mail($recipient,$subject,$form_content,$mailheader);
    echo "Thank You";  
?>