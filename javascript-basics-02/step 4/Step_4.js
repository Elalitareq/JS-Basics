document.querySelector("button").onclick=()=>{
    
    if(confirm("Are you sure:")==true){
        document.querySelectorAll("input").forEach(g => {g.value=null
            
        });
    }
    else{
        alert("please be sure next time")
    }
}