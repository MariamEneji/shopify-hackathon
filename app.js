let notif = document.getElementById("notif");
let alerts = document.getElementById("alerts");


notif.addEventListener("click", function() {
    alerts.classList.toggle("hidden");
})


let dcDropdown = document.getElementById("dcDropdown");
let dcButton = document.getElementById("dcButton");
let dcButton2 = document.getElementById("dcButton2");

dcButton.addEventListener("click", function() {
    dcDropdown.classList.toggle("hidden")
    
})

dcButton2.addEventListener("click", function() {
    dcDropdown.classList.toggle("hidden")
});

let closed = document.getElementById("close");
let extend = document.getElementById("extended");

closed.addEventListener("click", function(){
    extend.classList.add("hidden");
})


let accordion1btn = document.getElementById('accordion1btn')
let accordion1btn1 = document.getElementById('accordion1btn1')
let accordion1 = document.getElementById('accordionOne')


accordion1btn.addEventListener("click", function() {
    accordion1.classList.add('active')
    accordion1btn.classList.toggle('hidden')
    accordion1btn1.classList.toggle('hidden')
})

accordion1btn1.addEventListener("click", function() {
    accordion1.classList.remove('active')
    accordion1btn1.classList.toggle('hidden')
    accordion1btn.classList.toggle('hidden')
})


let acc = document.getElementsByClassName("accordionItems");
let oneBottom = document.getElementsByClassName("abottom");

for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener('click', function(){

        for (let j = 0; j < oneBottom.length; j++) {
            oneBottom[j].classList.remove('active');
        }
        oneBottom[i].classList.add('active')
    });
  }




  

 

