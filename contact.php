<?php include('contactForm.php'); ?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="contactStyle.css" >
    <link rel="stylesheet" type="text/css" href="navbarStyle.css" >
    <script type="text/javascript" src="navbarScript.js"></script>

    <title>Contact</title>
</head>
<body id="body">

    <?php include "navbar.php"; ?>

    <div id="container">  

        <h2 id="contactTitel">Contact me</h2>

        <form id="form" action="contact.php" method="post">
            <input type="text" name="name"  placeholder="Name" class="inputfields" value="<?php echo isset($_POST['name']) ? $name : ''; ?>">
            <input type="text" name="email" placeholder="Email" class="inputfields" value="<?php echo isset($_POST['email']) ? $email : ''; ?>">
            <input type="text" name="topic" placeholder="Topic" class="inputfields" value="<?php echo isset($_POST['topic']) ? $topic : ''; ?>">
            <textarea type="text" name="message" rows="10" placeholder="Message" id="messageBox" class="inputfields" ><?php echo isset($_POST['message']) ? $message : ''; ?></textarea>
            <button type="submit" id="submitButton" name="sendEmail">Send</button>

            <?php if($msg != ''): ?> <!--show oke or error message after clicking button-->          
                <div id="errorDiv" class="<?php echo $msgClass; ?>"> <?php echo $msg; ?>  </div>
            <?php endif; ?>
        </form>

        <h2 id="socialTitel">Or let's get social!</h2>
        
        <a id="facebook" class="socialmediaLinks" href="https://www.facebook.com/robbert.champagne.1/"><img class="socialmediaIcons" src="images\socialmediaicons\facebook.png"></a>
        <a id="instagram" class="socialmediaLinks" href="https://www.linkedin.com/in/robbert-champagne-4565311a2/"><img class="socialmediaIcons" src="images\socialmediaicons\linkedin.png"></a>
        <a id="linkedin" class="socialmediaLinks" href="https://www.instagram.com/robbertchampagne/"><img class="socialmediaIcons" src="images\socialmediaicons\instagram.png"></a>
        <a id="github" class="socialmediaLinks" href="https://github.com/RobbertChampagne"><img class="socialmediaIcons" src="images\socialmediaicons\github.png"></a>

        <img id="mapImg" src="images\map2.JPG" alt="">
    </div>

</body>

</html>