<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="cvStyle.css" >
    <link rel="stylesheet" type="text/css" href="navbarStyle.css" >
    <script type="text/javascript" src="navbarScript.js"></script>

    <title>CV</title>
</head>
<body id="body">

    <?php include "navbar.php"; ?>
    <button id="hamburgerMenu" ><img id="hamburgerMenuImage" src="images\hamburger menu.png" alt=""></button>

    <div id="container">  
        <img id="cvImg" src="images/cvdocs/cvEng.PNG" alt="" >

        <div id=downloadOverlay>
            <a id="eng" class="downloadButtons" href="images\cvDocs\Robbert_Champagne_EN.docx" download>Download ENG</a>
            <br>
            <a id="ned" class="downloadButtons" href="images\cvDocs\Robbert_Champagne_NL.docx" download>Download NED</a>
        </div>
    </div>

    
</body>

</html>