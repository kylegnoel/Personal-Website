<?php
    $name = $_POST['name'];
    $visior_email = $_POST['email'];
    $message = $_POST['message'];

    $email_from = 'leong16@purdue.edu';

    $email_subject = "New Message";

    $email_body = "User name: $name.\n".
                    "User email: $visior_email.\n".
                    "User message: $message.\n";

    $to = "leong16@purdue.edu";

    $headers = "From: $email_from \r\n";

    $headers .= "Reply-To: $visior_email \r\n";

    mail($to, $email_subject, $email_body, $headers);

    header("Location: index.html");
?>