window.addEventListener("load", loaded);

function loaded(){

    let imageCollector = {getValue: "imageCollector", img_one: "images/image_collector/fileviewer.png", img_two: "images/image_collector/inlog.png", img_three: "images/image_collector/search.png"};
    let newsArticleCollector = {getValue: "newsArticleCollector", img_one: "images/news_article_collector/output.png", img_two: "images/news_article_collector/search_article_1.png", img_three: "images/news_article_collector/search_article.png"};
    let weightTracker = {getValue: "weightTracker", img_one: "images/weight_tracker/pic3.png", img_two: "images/weight_tracker/pic2.png", img_three: "images/weight_tracker/pic4.png"};
    let webshop = {getValue: "webshop", img_one: "images/webshop/article.png", img_two: "images/webshop/cart.png", img_three: "images/webshop/shop.png"};

    let projects = [/*games, */ imageCollector, newsArticleCollector, weightTracker, webshop];

    let projectValue = document.getElementById("container").getAttribute("value");
    let imgValue = document.getElementById("selectedImage").getAttribute("value");

    //what project to show
    for(let project of projects){
        if(project.getValue === value){
    
            
    
        }
    }

}