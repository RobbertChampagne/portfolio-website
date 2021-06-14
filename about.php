<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="navbarStyle.css" >
    <link rel="stylesheet" type="text/css" href="aboutStyle.css" >
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script type="text/javascript" src="navbarScript.js"></script>
    <script type="text/javascript" src="aboutScript.js"></script>

    <title>About</title>
</head>
<body>

    <?php include "navbar.php"; ?>

    <div id="container">

        <button id="hamburgerMenu" ><img id="hamburgerMenuImage" src="images\hamburger menu.png" alt=""></button>

        <div id="leftSideSpace"></div>

        <div id="leftSquare">
            <h2 id="TitleAboutMe">About me</h2>                
            <p class="pTextAboutMe">Living, learning, & leveling up one day at a time.</p>
            <p class="pTextAboutMe">I like to code things from scratch, and enjoy bringing ideas to life.</p>
            <p class="pTextAboutMe">I am spending a lot of time trying to perfect what I do and while I’ll never be perfect, I do my best to come close.</p>
            <p class="pTextAboutMe">- If you’ve got a project you’d like to work on with me?</p>
            <p class="pTextAboutMe">- Are you looking to hire? </p>
            <p class="pTextAboutMe">- In search for a business partner for a new startup?</p>
            <p class="pTextAboutMe">Just get in touch and we can </p>
            <button id="getToWorkButton"> <a href="contact.php">get to work!</a></button>
        </div>

        <div id="middleSquare">
            <img src="images\php.png" class="bigDots skill" id="phpDot" alt="">
            <img src="images\python.png" class="bigDots skill" id="pythonDot" alt="">
            <img src="images\javascript.png" class="bigDots skill" id="jsDot" alt="">
            <img src="images\html.png" class="middleDots skill" id="htmlDot" alt="">
            <img src="images\css.png" class="middleDots skill" id="cssDot" alt="">
            <img src="images\sql.png" class="middleDots skill" id="sqlDot" alt="">
            <img src="images\uiux.png" class="middleDots skill" id="uiuxDot" alt="">
            <img src="images\c.png" class="smallDots skill" id="cDot" alt="">
            <img src="images\java.png" class="smallDots skill" id="javaDot" alt="">   
        </div>

        <div id="rightSideSpace"></div>

        <div id="lowerSquare"></div>
              
    </div>

</body>
</html>