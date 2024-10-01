const circles = document.querySelectorAll(".circle");
const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

let currentActive = 1;

next.addEventListener("click", () => {
    if(currentActive == circles.length) return;

    currentActive++;
    circles[currentActive-1].classList.add("active");
    progress.style.width = (currentActive - 1) / (circles.length - 1) * 100 + '%';

    buttonUpdate();
})

prev.addEventListener("click", () => {
    if(currentActive == 0) return;

    currentActive--;
    circles[currentActive].classList.remove("active")
    progress.style.width = (currentActive - 1) / (circles.length - 1) * 100 + '%';

    buttonUpdate();
})

function buttonUpdate() {
    if(currentActive === 1) {
        prev.disabled = true;
    } else if(currentActive === 4) {
        next.disabled = true;
    } else {
        prev.disabled = false;
        next.disabled = false;
    }
}