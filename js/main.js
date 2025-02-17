
let menuIcon  = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active');
}

function toggleReadMore() {
    let moreText = document.getElementById("moreText");
    let btnText = document.getElementById("readMoreBtn");

    // Toggle the 'hidden' class instead of modifying display directly
    if (moreText.classList.contains("hidden")) {
        moreText.classList.remove("hidden");
        btnText.innerHTML = "Read Less";
    } else {
        moreText.classList.add("hidden");
        btnText.innerHTML = "Read More";
    }
}
