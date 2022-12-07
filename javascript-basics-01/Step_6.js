document.getElementById("validate").onclick=function(){
    num1=document.getElementById("first_number").value;
    num2=document.getElementById("second_number").value;
    div=num1/num2;
    rem=num1%num2;
    alert(num1 +"/"+num2+"="+div+"\nAnd the remainder is: "+ rem);
}