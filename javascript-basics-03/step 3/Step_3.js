red=document.querySelector(".red").onclick=()=>{
    document.getElementById("text").style="color:red;"
}
red=document.querySelector(".green").onclick=()=>{
    document.getElementById("text").style="color:green;"
}
red=document.querySelector(".blue").onclick=()=>{
    document.getElementById("text").style="color:blue;"
}
// or
// this is just a test for different way to approach this
// g=document.querySelectorAll("div .color").forEach(c => {
//     c.onclick=(p)=>{
//         if(p.target.className=="color red"){
//             document.getElementById("text").style="color:red;"
//         }
//         else if(p.target.className=="color green"){
//             document.getElementById("text").style="color:green;"
//         }
//         else if(p.target.className=="color blue"){
//             document.getElementById("text").style="color:blue;"
//         }
//     }

// });