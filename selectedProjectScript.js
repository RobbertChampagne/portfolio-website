window.addEventListener("load", loaded);

function loaded(){

    let imageEnlarged = false; //is image showing

    //enlarged image default css settings
    let imageWidth;
    let imageZIndex;
    

    //let games = {getValue: "games", title: "Games Platform", desc: "Simple game platform where games can be displayed.", sec_desc: "register/login, highscores.", third_desc:"HTML, CSS, JAVASCRIPT, PHP, SQL", img_one: "images/games/highscore.png", img_two: "images/games/register.png", img_three: "images/games/gamesoverview.png", link:"https://github.com/RobbertChampagne/simple_games_website"};
    let imageCollector = {getValue: "imageCollector", title: "Image Collector", desc: "Simple GUi to download images from Instagram.", sec_desc: "login/save user credentials in DB.", third_desc:"PYTHON, TKINTER, SELENIUM, SQLITE", img_one: "images/image_collector/fileviewer.png", img_two: "images/image_collector/inlog.png", img_three: "images/image_collector/search.png", link:"https://github.com/RobbertChampagne/tkinter_instagram_image_collector_gui"};
    let newsArticleCollector = {getValue: "newsArticleCollector", title: "News Article Collector", desc: "Simple GUi to get the search link of news articles.", sec_desc: "", third_desc:"PYTHON, TKINTER, SELENIUM", img_one: "images/news_article_collector/output.png", img_two: "images/news_article_collector/search_article_1.png", img_three: "images/news_article_collector/search_article.png", link:"https://github.com/RobbertChampagne/News_Article_Web_Scraper"};
    let weightTracker = {getValue: "weightTracker", title: "Weight Tracker", desc: "Simple GUi to track weight.", sec_desc: "", third_desc:"PYTHON, TKINTER, MATPLOTLIB", img_one: "images/weight_tracker/pic3.png", img_two: "images/weight_tracker/pic2.png", img_three: "images/weight_tracker/pic4.png", link:"https://github.com/RobbertChampagne/weight_tracker_app"};
    let webshop = {getValue: "webshop", title: "Webshop", desc: "Standard webshop.", sec_desc: "register/login, place orders, ...", third_desc:"PHP, HTML, CSS, JAVASCRIPT, SQLITE", img_one: "images/webshop/article.png", img_two: "images/webshop/cart.png", img_three: "images/webshop/shop.png", link:"https://github.com/RobbertChampagne/donut_webshop"};
    
    let projects = [/*games, */imageCollector, newsArticleCollector, weightTracker, webshop];

    let value = document.getElementById("container").getAttribute("value");

    //what project to show
    for(let project of projects){
        if(project.getValue === value){
            //LOAD CONTENT
            //img
            let img_one = document.getElementById("img_one");
            img_one.setAttribute("src", project.img_one);
            img_one.addEventListener("click", enlargeImageWhenClickedOn);

            let img_two  = document.getElementById("img_two");
            img_two.setAttribute("src", project.img_two);
            img_two.addEventListener("click", enlargeImageWhenClickedOn);

            let img_three = document.getElementById("img_three");
            img_three.setAttribute("src", project.img_three);
            img_three.addEventListener("click", enlargeImageWhenClickedOn);
            
            //description
            let description = document.getElementById("textSquare");
    
            let title = document.createElement("h2");
            title.textContent = project.title;
            description.appendChild(title);
    
            desc = document.createElement("h4");
            desc.textContent = project.desc;
            desc.style.color = "lightgray";
            description.appendChild(desc);
    
            sec_desc = document.createElement("p");
            sec_desc.textContent = project.sec_desc;
            sec_desc.style.color = "lightgray";
            description.appendChild(sec_desc);
            
            third_desc = document.createElement("p");
            third_desc.textContent = project.third_desc;
            third_desc.style.color = "lightgray";
            third_desc.setAttribute("id", "languageDesc");
            description.appendChild(third_desc);
    
            //wesitelink
            link = document.createElement("a");
            link.textContent = "GITHUB";
            link.setAttribute("href", project.link );
            link.setAttribute("id", "githubButton" );
            description.appendChild(link);
    
        }
    }


    //when image is showing larger when clicked disable/enable scroll
    function disableScroll() {
        // Get the current page scroll position
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
            // if any scroll is attempted, set this to the previous value
            window.onscroll = function() {
                window.scrollTo(scrollLeft, scrollTop);
            };
    }
      
    function enableScroll() {
        window.onscroll = function() {};
    }

    
    //show image larger when clicked
    function enlargeImageWhenClickedOn(event){

        if(!imageEnlarged){ //when no image is showing
            
            imageEnlarged = true;

            //save image default css settings    
            let image = window.getComputedStyle(event.target);

            imageWidth = event.target.width + "px";
            imageZIndex = event.target.style.zIndex;

            //move image to center
            let windowWidth = document.getElementsByTagName("body").offsetWidth;
            event.target.style.width = windowWidth + "px";
            //event.target.style.marginLeft = "-3%";
           // event.target.style.marginTop = "50%";
            event.target.style.zIndex = "4";

            //add image background to cover rest of window
            let imageBg = document.getElementById("imageBg");
            imageBg.setAttribute("class", "showImageBg");
            imageBg.style.display = "block";

            disableScroll();

        }else if(imageEnlarged){ //when image is showing

            imageEnlarged = false;

            //move image back to dafault css settings
            event.target.style.width = imageWidth;
            event.target.style.marginLeft = imageMarginLeft;
            event.target.style.zIndex = imageZIndex;
            event.target.style.marginTop = imageMarginTop;

            //remove image background 
            imageBg.setAttribute("class", "hideImageBg");
            imageBg.style.display = "none";

            enableScroll();

        }

    }

}