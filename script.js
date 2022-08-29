let navCover = document.querySelector(".navCover")
let primaryNL = navCover.nextElementSibling;

let navToggle = navCover.previousElementSibling
                        .addEventListener("click", e =>{
                            navCover.classList.toggle("active")
                            primaryNL.classList.toggle("active")
                        })

let closeBtn = primaryNL.querySelector(".closeBtn")
                        .addEventListener("click", e =>{
                            navCover.classList.remove("active")
                            primaryNL.classList.remove("active")
                        })