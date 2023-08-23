const primaryContainer1 = document.querySelectorAll(".primary-color");
const primaryContainer2 = document.querySelectorAll(".primary-background");

const secondaryContainer1 = document.querySelectorAll(".secondary-color");
const secondaryContainer2 = document.querySelectorAll(".secondary-background");

const thirdContainer1 = document.querySelectorAll(".third-color");
const thirdContainer2 = document.querySelectorAll(".third-background");


const primaryColor = document.getElementById("primaryColor");
const secondaryColor = document.getElementById("secondaryColor");
const thirdColor = document.getElementById("thirdColor");

primaryColor.addEventListener('input', function() {

    const selectedColor = primaryColor.value;

    primaryContainer1.forEach(div => {
        div.style.color = selectedColor;
      });

    primaryContainer2.forEach(div => {
        div.style.backgroundColor = selectedColor;
      });
  
});

secondaryColor.addEventListener('input', function() {

    const selectedColor = secondaryColor.value;

    secondaryContainer1.forEach(div => {
        div.style.color = selectedColor;
      });

    secondaryContainer2.forEach(div => {
        div.style.backgroundColor = selectedColor;
      });
  
});

thirdColor.addEventListener('input', function() {

    const selectedColor = thirdColor.value;

    thirdContainer1.forEach(div => {
        div.style.color = selectedColor;
      });

    thirdContainer2.forEach(div => {
        div.style.backgroundColor = selectedColor;
      });
  
});