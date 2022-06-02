function reveal()
{
     var reveals = document.querySelectorAll(".reveal");
     for(var i = 0; i < reveals.length; i++)
     {
          var windowHeight = window.innerHeight;
          var elementTop = reveals[i].getBoundingClientRect().top;
          var elementVisible = 150;
          if(elementTop < windowHeight - elementVisible)
          {
               reveals[i].classList.add("active");
          }
          else
          {
               reveals[i].classList.remove("active");
          }
     }
}

window.addEventListener("scroll", reveal);

const change = src => {
     document.getElementById("main").src = src
}

function getModal(event)
{
     var modal = document.getElementById("myModal");
     modal.style.display = "block";
     document.getElementById("modalImg").setAttribute('src', event.target.getAttribute("src"));
}

function closeModal(event)
{
     const modal = document.getElementById("myModal");
     modal.style.display = "none";
}

function getActiveImg()
{
     var active = document.getElementById("main");
     var activeGallery = document.getElementsByClassName("imgInGallery");

}

function addBorder(id) {
     var x = document.getElementsByClassName("galleryImg");
     for(i = 0; i < x.length; i++)
     {
          x.item(i).style.transition = "500ms";
          x.item(i).style.border = "1px solid transparent";
          x.item(i).style.backgroundColor = "var(--primaryFlexBackground)";
     }
     id.style.border = "1px solid black";
     id.style.transition = "500ms";
     id.style.backgroundColor = "var(--customOrange)";
   }