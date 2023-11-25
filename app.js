// As a merchant, when I click on the notification bell, I see a dropdown panel that shows me an empty list of notifications since I have none yet. When I click on the notification bell again, this dropdown panel is closed.




let notif = document.getElementById("notif");
let alerts = document.getElementById("alerts");


notif.addEventListener("click", function() {
    alerts.classList.toggle("hidden");
})

// As a merchant, when I click on the name of my store Davii Collections, or on my profile image placeholder DC on the far right of the topbar menu, I see a menu with a list of menu items as specified by the Figma design. Clicking on this button again closes the menu. Finally, when I click on any of the menu items in this menu, I am redirected toadmin.shopify.com


let dcDropdown = document.getElementById("dcDropdown");
let dcButton = document.getElementById("dcButton");
let dcButton2 = document.getElementById("dcButton2");

dcButton.addEventListener("click", function() {
    dcDropdown.classList.toggle("hidden")
    
})

dcButton2.addEventListener("click", function() {
    dcDropdown.classList.toggle("hidden")
});


// As a merchant, when I click on the dismiss button of the trial callout, the trial callout is immediately removed from the page.

let closed = document.getElementById("close");
let extend = document.getElementById("extended");

closed.addEventListener("click", function(){
    extend.classList.add("hidden");
})

// As a merchant, when I click the "Arrow Up" icon on the top right of the Setup guide card, it closes the card. When I click again, it reopens the card.


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



// As a merchant, when I click on any of the 5 onboarding steps, it expands the panel, showing the content of the onboarding step, and closes the previously opened one. When I click on an opened onboarding step, nothing happens.

let acc = document.getElementsByClassName("accordionItems");
let oneBottom = document.getElementsByClassName("abottom");
let oneBottomImg = document.getElementsByClassName("abottom-img");

for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener('click', function(){

        for (let j = 0; j < oneBottom.length; j++) {
            oneBottom[j].classList.remove('active');
        }
        oneBottom[i].classList.add('active')

        for (let k = 0; k < oneBottomImg.length; k++) {
            oneBottomImg[k].classList.remove('active');
        }

        oneBottomImg[i].classList.add('active')
    });
  }



// As a merchant, when I click on the circle checkbox (empty) on the left side of an onboarding step title, it marks that step as completed, and expands the next incomplete step. If I click again, it marks the step as incomplete. As I mark steps as completed or incomplete, I see the onboarding progress bar showing the correct progress.



  

 

