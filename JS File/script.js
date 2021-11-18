
// ================== Start List Icon Effect ==================
// Calling the Icon That Will be Clicked
let icon = document.querySelector(".icon");
// List of Content that have 'display:none'
let listAppearing = document.getElementById("list-appearing");

let header = document.getElementById("header");


icon.addEventListener("click",
() => {
    listAppearing.classList.toggle("active");
}



)


// ================== End List Icon Effect ==================





//  ========== Start Testimonial  ========== 
// Calling the HTML Elements


// Call the slides as an array and set up its length
let mySlides = Array.from(
    document.querySelectorAll(".mySlides .slideContainer")
);
let mySlidesLength=mySlides.length;
console.log(mySlides);

// Call more-content in testimonial section to add the inputs in
let moreContent = document.querySelector(".testimonial .more-content");

// Set Current slide number
currentSlide = 1;



// Make a custom radio input
    let myUL = document.createElement("ul");
    myUL.setAttribute("class", "ulForm");


for (let i = 1; i <= mySlidesLength; i++) {

    let myLI = document.createElement("li");
    myLI.setAttribute("class", "List No." + i);
    myLI.setAttribute("my-index", i);
    myUL.appendChild(myLI);

}
moreContent.appendChild(myUL);



    // Make a function to set the current position of the <ul>
    let newUL = document.querySelector(".ulForm");

    function check() {
    
    removing();

    // set the current quote
    mySlides[currentSlide - 1].classList.add("active");



    // Set the current index
    newUL.children[currentSlide - 1].classList.add("active");



}

function removing(){

    
    mySlides.forEach( quote => {
        quote.classList.remove('active');
    });

    let newUL= Array.from(document.querySelectorAll('.ulForm li'));
    newUL.forEach(  list => {
        list.classList.remove('active');
    });;


}

check();



//  ========== End Testimonial  ========== 
// ========== Start Click on lists of <ul> to change to the current index ========== 

// Call lists of <ul>
let myLI = Array.from(document.querySelectorAll(".ulForm li"));

for (let i = 0; i < myLI.length; i++) {

    myLI[i].onclick= () => {
    currentSlide = parseInt(myLI[i].getAttribute("my-index"));
    check();

    }


}

// ========== End Click on lists of <ul> to change to the current index ========== 
// Start Auto increament for the index

setInterval(() => {
        if (currentSlide == mySlidesLength) {
        currentSlide=1;
        check()
    } else {
        currentSlide++;
        check()
    }
}, 4500);



// End Auto increament for the index