// smooth scroll for navbar

document.querySelectorAll("nav a").forEach(link=>{
link.addEventListener("click",function(e){
e.preventDefault()

document.querySelector(this.getAttribute("href")).scrollIntoView({
behavior:"smooth"
})
})
})

// button alert

document.getElementById("contactBtn").addEventListener("click",function(){
alert("Thanks for visiting my portfolio!")
})