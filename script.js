var overlay=document.querySelector(".overlay")
var popup=document.querySelector(".popup")
var adds=document.getElementById("main")
var cancle=document.getElementById("cancle-")

adds.addEventListener("click", function() {
    overlay.style.display="block"
    popup.style.display="block"
})
cancle.addEventListener("click",function(){
    event.preventDefault()
    overlay.style.display="none"
    popup.style.display="none"
})
var container=document.querySelector(".container")
var new1=document.getElementById("new1")
var new2=document.getElementById("new2")
var new3=document.getElementById("new3")
var addnew=document.getElementById("add-new")

addnew.addEventListener("click", function(event){
    event.preventDefault();
    var div=document.createElement("div")
    div.setAttribute("class" , "books")
   
    div.innerHTML=`<h1>${new1.value}</h1>
    <h3>${new2.value} <h3>   
    <p>${new3.value}</p>
    <button onclick='add(event)'>Delete</button>
    `
    container.append(div)
    overlay.style.display="none"
    popup.style.display="none"

})
function add(event){
    event.target.parentNode.parentNode.remove();
}
function rupesh(){
    event.target.parentNode.remove();
}
