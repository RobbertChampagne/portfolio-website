<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="portfolioStyle.css" >
    <link rel="stylesheet" type="text/css" href="navbarStyle.css" >
    <script type="text/javascript" src="portfolioScript.js"></script>
    <script type="text/javascript" src="navbarScript.js"></script>

    <title>Portfolio</title>
</head>
<body>
    
    <?php include "navbar.php"; ?>

    <div id="container">

        <h1 id="portfolioTitle">My Portfolio</h1>

        <div id="filterButtons">
            <button id="showAll" value="showAll" class="projectChoiceButtons">Show all</button>
            <button id="php" value="phpFilter" class="projectChoiceButtons">PHP</button>
            <button id="python" value="pythonFilter" class="projectChoiceButtons">Python</button>
        </div>

        <div id="projectContainer">
            <!--<a class="projectSquare" value="phpFilter" href="selectedProject.php?project=games">
                <img class="projectImg" src="images\games\login.png" alt="">
                <h2 class="projectTitle">Games Platform</h2>
                <h4 class="projectDescription">Simple game platform where games can be displayed.</h4>
            </a>-->

            <a class="projectSquare" value="pythonFilter" href="selectedProject.php?project=imageCollector">
                <img class="projectImg" src="images\image_collector\inlog.png" alt="">
                <h2 class="projectTitle">Image Collector</h2>
                <h4 class="projectDescription">Simple GUi to download images from Instagram.</h4>
            </a>

            <a class="projectSquare" value="pythonFilter" href="selectedProject.php?project=newsArticleCollector">
                <img class="projectImg" src="images\news_article_collector\search_article.png" alt="">
                <h2 class="projectTitle">News Article Collector</h2>
                <h4 class="projectDescription">Simple GUi to get the search link of news articles.</h4>
            </a>

            <a class="projectSquare" value="pythonFilter" href="selectedProject.php?project=weightTracker">
                <img class="projectImg" src="images\weight_tracker\pic4.png" alt="">
                <h2 class="projectTitle">Weight Tracker</h2>
                <h4 class="projectDescription">Simple GUi to track weight.</h4>
            </a>
            
            <a class="projectSquare" value="phpFilter" href="selectedProject.php?project=webshop">
                <img class="projectImg" src="images\webshop\shop.png" alt="">
                <h2 class="projectTitle">Webshop</h2>
                <h4 class="projectDescription">Standard webshop.</h4>
            </a>

        </div>
          
    </div>
</body>
</html>