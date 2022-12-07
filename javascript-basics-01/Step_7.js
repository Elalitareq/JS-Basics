document.getElementById("validate").onclick=function(){
    s_size=document.getElementById("shoe_size").value;
    b_year=document.getElementById("year").value;
    x=(s_size*2+5)*50+(-b_year+1766);
    alert("Result: " +x);
}