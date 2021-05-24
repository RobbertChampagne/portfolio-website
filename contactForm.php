<?php
    //DOES NOT WORK UNTIL YOU HOST THE WEBSITE (EMAIL FORWARDING TO GMAIL)
    //message send or error
    $msg = '';
    $msgClass = '';

    //check for submit
    if(isset($_POST['sendEmail'])){

        //get form data
        $name = filter_var($_POST['name'], FILTER_SANITIZE_SPECIAL_CHARS);
        $email = filter_var($_POST['email'], FILTER_SANITIZE_SPECIAL_CHARS); //This filter is used to escape "<>& and characters with ASCII value below 32
        $email = filter_var($email, FILTER_SANITIZE_EMAIL); //remove all illegal characters from the $email variable
        $topic = filter_var($_POST['topic'], FILTER_SANITIZE_SPECIAL_CHARS);
        $message = filter_var($_POST['message'], FILTER_SANITIZE_SPECIAL_CHARS);
        
        $mailTo = "robbert.champagne1@gmail.com";
        $headers = "From: ". $email;
        $txt = "You have received an e-mail from ".$name.".\n\n".$message; 

        //check required fields
        if(!empty($email) && !empty($name) && !empty($message) && !empty($message)){
            if(filter_var($email, FILTER_VALIDATE_EMAIL) === false){ //email not valid
                $msg = 'Pleas use a valid email';
                $msgClass = 'red';
            }else{ 
                if(mail($mailTo, $topic, $txt, $headers)){
                    $msg = 'Email is sent';
                    $msgClass = 'green';
                }else{
                    $msg = 'Your email was not sent';
                    $msgClass = 'red';
                }
            }
        }else{
            $msg = 'Pleas fill in all fields';
            $msgClass = 'red';
        }

    }

?>