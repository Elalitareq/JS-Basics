document.querySelector("button").onclick=()=>{
    a=document.getElementById("password").value;
    b=document.getElementById("confirmation").value;
    if(a!=b){
        document.querySelectorAll("input").forEach(x => {
            x.style="border: red solid 3px;"
        });
    }
}