const congrats = document.getElementById("absolute");
const submitButton = document.getElementById("submit");


function simba(){
  submitButton.addEventListener("click",function(){
  congrats.classList.add("active");
});
}