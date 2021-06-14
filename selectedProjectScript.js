window.addEventListener("load", loaded);

function loaded(){

    //let games = {getValue: "games", title: "Games Platform", desc: "Simple game platform where games can be displayed.", sec_desc: "register/login, highscores.", third_desc:"HTML, CSS, JAVASCRIPT, PHP, SQL", img_one: "images/games/highscore.png", img_two: "images/games/register.png", img_three: "images/games/gamesoverview.png", link:"https://github.com/RobbertChampagne/simple_games_website"};
    let imageCollector = {getValue: "imageCollector", title: "Image Collector", desc: "Simple GUi to download images from Instagram.", sec_desc: "login/save user credentials in DB.", third_desc:"PYTHON, TKINTER, SELENIUM, SQLITE", img_one: "images/image_collector/fileviewer.png", img_two: "images/image_collector/inlog.png", img_three: "images/image_collector/search.png", link:"https://github.com/RobbertChampagne/tkinter_instagram_image_collector_gui"};
    let newsArticleCollector = {getValue: "newsArticleCollector", title: "News Article Collector", desc: "Simple GUi to get the search link of news articles.", sec_desc: "", third_desc:"PYTHON, TKINTER, SELENIUM", img_one: "images/news_article_collector/output.png", img_two: "images/news_article_collector/search_article_1.png", img_three: "images/news_article_collector/search_article.png", link:"https://github.com/RobbertChampagne/News_Article_Web_Scraper"};
    let weightTracker = {getValue: "weightTracker", title: "Weight Tracker", desc: "Simple GUi to track weight.", sec_desc: "", third_desc:"PYTHON, TKINTER, MATPLOTLIB", img_one: "images/weight_tracker/pic3.png", img_two: "images/weight_tracker/pic2.png", img_three: "images/weight_tracker/pic4.png", link:"https://github.com/RobbertChampagne/weight_tracker_app"};
    let webshop = {getValue: "webshop", title: "Webshop", desc: "Standard webshop.", sec_desc: "register/login, place orders, ...", third_desc:"PHP, HTML, CSS, JAVASCRIPT, SQLITE", img_one: "images/webshop/article.png", img_two: "images/webshop/cart.png", img_three: "images/webshop/shop.png", link:"https://github.com/RobbertChampagne/donut_webshop"};
    let portfolio = {getValue: "portfolio", title: "Portfolio", desc: "Simple portfolio website.", sec_desc: "", third_desc:"PHP, HTML, CSS, JAVASCRIPT", img_one: "images/portfolioimg/index.svg", img_two: "images/portfolioimg/contact.svg", img_three: "images/portfolioimg/projects.svg", link:"https://github.com/RobbertChampagne/portfolio-website"};
    
    let projects = [/*games, */ imageCollector, newsArticleCollector, weightTracker, webshop, portfolio];

    let value = document.getElementById("container").getAttribute("value");

    //what project to show
    for(let project of projects){
        if(project.getValue === value){
            //LOAD CONTENT
            //img
            let img_one = document.getElementById("img_one");
            img_one.setAttribute("src", project.img_one);

            let img_two  = document.getElementById("img_two");
            img_two.setAttribute("src", project.img_two);

            let img_three = document.getElementById("img_three");
            img_three.setAttribute("src", project.img_three);
            
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

}