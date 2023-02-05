
function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Leer más";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "No quería saber tanto";
      moreText.style.display = "inline";
    }
  }

/** 
document.querySelector(".hide").addEventListener("click", () => {
  div.classList.add("div_hide");
});

document.querySelector(".show").addEventListener("click", () => {
  div.classList.remove("div_hide");
});
 
  const div = document.querySelector("div");
*/
