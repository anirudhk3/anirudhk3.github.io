<?php
//variable setting
$name = $_REQUEST['name'];
$email = $_REQUEST['Email'];
$message = $_REQUEST['Message'];
 
?>

//check input fields
if(empty($name) || empty($email) || empty($message))
{
	echo "Please fill all the fields";
}
else
{
	mail("anirudh.kumar0109@gmail.com", "Anirudh Kumar Message", $message, "From: $name < $email>");
	echo "<script type='text/javascript'>alert('your message sent successfully');
	window.history.log(-1);
	</script>";
}
?>
