function showHome() {
document.getElementById("home-content").style.display = "block";
document.getElementById("about-content").style.display = "none";
document.getElementById("services-content").style.display =
"none";
document.getElementById("perfume-content").style.display =
"none";
document.getElementById("soap-content").style.display =
"none";
document.getElementById("fashion-content").style.display =
"none";
document.getElementById("spices-content").style.display =
"none"; 
}

function showAbout() {
document.getElementById("home-content").style.display = "none";
document.getElementById("about-content").style.display = "block";
document.getElementById("services-content").style.display =
"none";
document.getElementById("perfume-content").style.display =
"none";
document.getElementById("soap-content").style.display =
"none";
document.getElementById("fashion-content").style.display =
"none";
document.getElementById("spices-content").style.display =
"none"; 
}

function showServices() {
document.getElementById("home-content").style.display = "none";
document.getElementById("about-content").style.display = "none";
document.getElementById("services-content").style.display =
"block";
document.getElementById("perfume-content").style.display =
"none";
document.getElementById("soap-content").style.display =
"none";
document.getElementById("fashion-content").style.display =
"none";
document.getElementById("spices-content").style.display =
"none"; 
}

function showPerfume() {
document.getElementById("home-content").style.display = "none";
document.getElementById("about-content").style.display = "none";
document.getElementById("services-content").style.display = "none";
document.getElementById("perfume-content").style.display =
"block";
document.getElementById("soap-content").style.display =
"none";
document.getElementById("fashion-content").style.display =
"none";
document.getElementById("spices-content").style.display =
"none"; 
}

function showSoap() {
document.getElementById("home-content").style.display = "none ";
document.getElementById("about-content").style.display = "none";
document.getElementById("services-content").style.display =
"none";
document.getElementById("perfume-content").style.display =
"none";
document.getElementById("soap-content").style.display =
"block";
document.getElementById("fashion-content").style.display =
"none";
document.getElementById("spices-content").style.display =
"none"; 
}

function showFashion() {
document.getElementById("home-content").style.display = "none ";
document.getElementById("about-content").style.display = "none";
document.getElementById("services-content").style.display =
"none";
document.getElementById("perfume-content").style.display =
"none";
document.getElementById("soap-content").style.display =
"none";
document.getElementById("fashion-content").style.display =
"block";
document.getElementById("spices-content").style.display =
"none"; 
}

function showSpices() {
document.getElementById("home-content").style.display = "none";
document.getElementById("about-content").style.display = "none";
document.getElementById("services-content").style.display =
"none";
document.getElementById("perfume-content").style.display =
"none";
document.getElementById("soap-content").style.display =
"none";
document.getElementById("fashion-content").style.display =
"none";
document.getElementById("spices-content").style.display =
"block"; 
}
function showHide(showForm) {
   let form = document.getElementById(showForm);
   if(form.style.display === "none" )
   {
       form.style.display = "block";
   }
     else {
         form.style.display = "none";
     }
  }