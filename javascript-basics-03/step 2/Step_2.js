document.querySelectorAll("a").forEach(element => {
    element.onclick=(e)=>{
        if(e.target.id=="hide"){
            document.querySelector("div").style="color:transparent;"
        }
        else if(e.target.id=="show"){
            document.querySelector("div").style="color:black"
        }
    }
});