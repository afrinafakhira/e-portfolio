const searchInput =
document.getElementById("searchInput");

if(searchInput){

searchInput.addEventListener("keyup",()=>{

let filter =
searchInput.value.toLowerCase();

let posts =
document.querySelectorAll(".post");

posts.forEach(post=>{

let text =
post.innerText.toLowerCase();

post.style.display =
text.includes(filter)
? "block"
: "none";

});

});

}

const form =
document.getElementById("contactForm");

if(form){

form.addEventListener("submit",(e)=>{

e.preventDefault();

alert("Message Sent!");

});

}
