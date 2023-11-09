

var isClicked = {};
var favoritesPopup = document.getElementById("favoritesPopup");
var favoritesMessage = document.getElementById("favoritesMessage");



function toggleIcon(iconId) {

   var iconElement = document.getElementById(iconId);


  if (!isClicked[iconId]) {
    iconElement.classList.remove("fa-regular");
    iconElement.classList.add("fa-solid", "fa-heart", "icon-red");
    isClicked[iconId] = true;
    favoritesMessage.textContent = "Added to Favorites";
  } else {
    iconElement.classList.remove("fa-solid", "fa-heart", "icon-red");
    iconElement.classList.add("fa-regular", "fa-heart");
    isClicked[iconId] = false;
    favoritesMessage.textContent = "Removed from Favorites";
  }

  favoritesPopup.classList.add("visible");
  setTimeout(function() {
    favoritesPopup.classList.remove("visible");
  }, 2000);
}

let Pcart = document.querySelector(".p-cart")


let num = 0

let sep = document.querySelectorAll(".sep")

sep.forEach((Element) =>{

   

      
      Element.addEventListener("click" , ()=>{
         if(Element.classList.contains("fa-solid", "fa-heart", "icon-red")){

            num++
            Pcart.innerHTML = num
         }
         else if(Element.classList.contains("fa-regular", "fa-heart")){
            num--
            Pcart.innerHTML = num
         }
      })
   

})




let menu = document.querySelector('#menu-btn');
let navbarLinks = document.querySelector('.header .navbar .links');

menu.onclick = () => {
   menu.classList.toggle('fa-times');
   navbarLinks.classList.toggle('active');
}

window.onscroll = () => {
   menu.classList.remove('fa-times');
   navbarLinks.classList.remove('active');

   if (window.scrollY > 60) {
      document.querySelector('.header .navbar').classList.add('active');
   } else {
      document.querySelector('.header .navbar').classList.remove('active');
   }
}


let name = localStorage.getItem("name") ? localStorage.getItem("name") : "";
let email = localStorage.getItem("email");
// console.log(id);

document.querySelector("#userName").innerHTML = name;
document.querySelector("#userEmail").innerHTML = email;
document.querySelector("#userId").innerHTML = id;
document.querySelector("#userNumber").innerHTML = number;
if (name == "") {
   alert("U need to login first");
   window.location.href = "./signIn.html";
}
function Logout() {
   localStorage.removeItem("name");
   localStorage.removeItem("email");
   window.location.href = "./signIn.html";
}





