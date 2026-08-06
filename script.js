const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:0.15
});

hiddenElements.forEach(el=>observer.observe(el));

// Smooth navbar shadow

const nav = document.querySelector("nav");

window.addEventListener("scroll",()=>{

if(window.scrollY>40){

nav.style.boxShadow="0 8px 25px rgba(255,45,149,.25)";

}else{

nav.style.boxShadow="none";

}

});
