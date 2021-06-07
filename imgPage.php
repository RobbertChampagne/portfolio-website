<?php
    //get so this page knows what image was clicked
    $image = $_GET["image"];
    $project = $_GET["project"];

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="navbarStyle.css" >
    <link rel="stylesheet" type="text/css" href="portfolioStyle.css" >
    <script type="text/javascript" src="portfolioScript.js"></script>

    <title>Image</title>
</head>
<body>

    <div id="container" value=<?php echo $project ?>>
        <img id="selectedImage" value=<?php echo $image ?> src="" alt="">
    </div>

</body>
</html>