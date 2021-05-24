window.addEventListener("load", loaded);

function loaded(){

    let filterButtons = document.getElementsByClassName("projectChoiceButtons");
    
    for(let button of filterButtons){
        button.addEventListener("click", chooseFilter);
    }

    function chooseFilter(event){
        //CHANGE COLOR OF CHOOSEN FILTERBUTTON
        let clickedButton = event.target;
        
        for(let button of filterButtons){
            button.style.backgroundColor = "white" ;
            button.style.color = "grey" ;
        }

        clickedButton.style.backgroundColor = "#4b6cc1" ;
        clickedButton.style.color = "white" ;

        //SHOW CHOOSEN PROJECTS
        let choosenProject = event.target.value;

        let projects = document.getElementsByClassName("projectSquare");
        
        for(let project of projects){

            let projectValue = project.getAttribute("value");

            if(choosenProject === "pythonFilter"){

                if( projectValue === "phpFilter"){
                    project.style.display = "none";
                }else{
                    project.style.display = "block";
                }

            }else if(choosenProject === "phpFilter"){

                if(projectValue === "pythonFilter"){
                    project.style.display = "none";
                }else{
                    project.style.display = "block";
                }

            }else{
                project.style.display = "block";
            }

        }

    }
    
};
