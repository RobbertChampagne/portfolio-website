<?php
    //get so this page knows what project was clicked
    $project = $_GET["project"];

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="navbarStyle.css" >
    <link rel="stylesheet" type="text/css" href="selectedProjectStyle.css" >
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script type="text/javascript" src="navbarScript.js"></script>
    <script type="text/javascript" src="selectedProjectScript.js"></script>

    <title>Selected Project</title>
</head>
<body id="body">

    <?php include "navbar.php"; ?>

    <a href="portfolio.php"><img id="back" src="images\back.png" alt=""></a>

    <div id="container" value=<?php echo $project ?>>
        
        <div id="textSquare"></div>

        <img id="leftUpImg" class="hideLeftSlide" src="" alt=""></div>
        
        <img id="rightImg" class="hideRightSlide" src="" alt=""></div>
        
        <img id="leftLowerImg" class="hideLeftSlide" src="" alt=""></div>
      
    </div>

    <div id="imageBg" ></div>

</body>


</html>