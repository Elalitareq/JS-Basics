document.querySelector("body").appendChild(document.createElement("div"))
document.getElementById("name").onkeyup=()=>{
i_text=document.getElementById("name").value;
document.querySelector("div").innerHTML=i_text
}