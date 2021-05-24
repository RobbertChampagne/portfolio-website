window.addEventListener("load", loaded);


function loaded(){
 
    //SHOW TEXT FIRST
    let count = 0;
    let timer = setInterval(tick, 1500);
    function tick(){
        if(count === 0){
            count++;
            let content = "a programmer";
            createTxt(content);
        }else if(count === 1){
            count++;
            let content = "a developer";
            createTxt(content);
        }else if(count === 2){
            count++;
            let content = "a coder";
            createTxt(content);
        }else{
            let content = "Robbert";
            createTxt(content);
            clearInterval(timer);
        }
    }
    
    //create a new h7 element so fadein works again everytime
    function createTxt(content){
        let iam = document.getElementById("iam");

        iam.textContent = content;

        if(content === "Robbert"){
            iam.style.color = "#4b6cc1";
        }

    }

}