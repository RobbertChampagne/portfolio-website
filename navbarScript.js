window.addEventListener("load", loaded);


function loaded(){

    function disableScroll() {
        // Get the current page scroll position
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      
            // if any scroll is attempted, set this to the previous value
            window.onscroll = function() {
                window.scrollTo(scrollLeft, scrollTop);
            };
    }
      
    function enableScroll() {
        window.onscroll = function() {};
    }


    function showOrHideNavbar(){
        let navbarDiv = document.getElementById("navbarDiv");
        let navbarFill = document.getElementById("navbarFill");

        let usedClass = navbarDiv.getAttribute("class");
        
        if(usedClass === "hide"){
            navbarDiv.setAttribute("class", "show");
            navbarFill.setAttribute("class", "show");
            
            disableScroll();
            

        }else{
            navbarDiv.setAttribute("class", "hide");
            navbarFill.setAttribute("class", "hide");
            
            enableScroll();
            
        }
    }

    document.getElementById("hamburgerMenu").addEventListener("click", showOrHideNavbar);
    document.getElementById("navbarFill").addEventListener("click", showOrHideNavbar);

 
}