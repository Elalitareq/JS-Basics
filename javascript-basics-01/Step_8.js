document.getElementById("validate").onclick=function(){
    age=document.getElementById("age").value;
    if(age>18){
        alert("You are over 18")
    }
    else if(age<=0){
        alert("not a valid age")
    }
    else{
        alert("You are under 18")
    }
}