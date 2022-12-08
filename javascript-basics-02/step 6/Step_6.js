let x=document.querySelectorAll("img").length
document.querySelector("body").onmouseover = function () {
    for (let i =0; i <x; i++) {
        document.querySelectorAll("img")[i].onmouseover=()=>{
        a=document.querySelectorAll("img")[i].src=`images/image${i+1}_2.jpg`;
        document.querySelectorAll("img")[i].src=a}
        document.querySelectorAll("img")[i].onmouseleave=()=>{
        a=document.querySelectorAll("img")[i].src=`images/image${i+1}.jpg`;
        document.querySelectorAll("img")[i].src=a}
    }
}