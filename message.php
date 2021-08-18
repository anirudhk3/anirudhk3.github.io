<?php
//lets get all form values
$name = htmlspecialchars($_POST['name']);
$email = htmlspecialchars($_POST['email']);
$phone = htmlspecialchars($_POST['phone']);
$message = htmlspecialchars($_POST['message']);

if(!empty($email) && !empty($message)){ //if email and message is not empty
 if(filter_var($email, FILTER_VALIDATE_EMAIL)){ //if user entered email is valid
   $receiver = "kumarcricket901@gmail.com"; //email receiver email address
   $subject = "From: $name <$email>"; //subject of email.
   //merge all user values inside body variable.   
   $body = "Name: $name\nEmail: $email\nPhone: $phone\n\nMessage: $message\n\nRegards, \n$name";
   $sender = "From: $email"; //sender email
   if (mail($receiver, $subject, $body, $sender)) { //mail() is a inbuilt php function to send mail
      echo "Your message has been sent";
  } else { 
  echo "Sorry, failed to send your message!";
  } 
}else { 
     echo " Enter a valid email address!";
}
}else{
  echo "Email and password field is required!";
}
?>