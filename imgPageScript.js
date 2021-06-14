window.addEventListener("load", loaded);

function loaded(){

    let imageCollector = {getValue: "imageCollector", img_one: "images/image_collector/fileviewer.png", img_two: "images/image_collector/inlog.png", img_three: "images/image_collector/search.png"};
    let newsArticleCollector = {getValue: "newsArticleCollector", img_one: "images/news_article_collector/output.png", img_two: "images/news_article_collector/search_article_1.png", img_three: "images/news_article_collector/search_article.png"};
    let weightTracker = {getValue: "weightTracker", img_one: "images/weight_tracker/pic3.png", img_two: "images/weight_tracker/pic2.png", img_three: "images/weight_tracker/pic4.png"};
    let webshop = {getValue: "webshop", img_one: "images/webshop/article.png", img_two: "images/webshop/cart.png", img_three: "images/webshop/shop.png"};
    let portfolio = {getValue: "portfolio", title: "Portfolio", desc: "Simple portfolio website.", sec_desc: "", third_desc:"PHP, HTML, CSS, JAVASCRIPT", img_one: "images/portfolioimg/index.svg", img_two: "images/portfolioimg/contact.svg", img_three: "images/portfolioimg/projects.svg", link:"https://github.com/RobbertChampagne/portfolio-website"};

    let projects = [imageCollector, newsArticleCollector, weightTracker, webshop, portfolio];

    let projectValue = document.getElementById("container").getAttribute("value");
    let imgValue = document.getElementById("selectedImage").getAttribute("value");

    //what project to show
    for(let project of projects){
        if(project.getValue === projectValue){
            if(imgValue === "img_one"){
                document.getElementById("selectedImage").setAttribute("src", project.img_one);
            }else if(imgValue === "img_two"){
                document.getElementById("selectedImage").setAttribute("src", project.img_two);
            }else{
                document.getElementById("selectedImage").setAttribute("src", project.img_three);
            }
        }
    }

    document.addEventListener("click", goBack);

    function goBack(){
        console.log("goback");
        window.location.href = "selectedProject.php?project=" + projectValue;
    }

    disableScroll();
    
    function disableScroll() {
        // Get the current page scroll position
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
            // if any scroll is attempted, set this to the previous value
            window.onscroll = function() {
                window.scrollTo(scrollLeft, scrollTop);
            };
    }

}