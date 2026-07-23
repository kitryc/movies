let index = 0;
const slideRow = document.getElementById("roww");
const totalSlides = slideRow.children.length;
const visibleSlides = 5;
const steps = document.getElementById("num");
let step = Number(steps.value) || 1;

steps.addEventListener("input", () => {
    const x = Number(steps.value);
    step = !isNaN(x) && x > 0 ? x : 1;
});

function moveSlide(direction) {
    index += direction * step;

    if (index < 0) index = 0;
    if (index > totalSlides - visibleSlides) index = totalSlides - visibleSlides;

    const slideWidth = slideRow.children[0].offsetWidth;
    slideRow.style.transform = `translateX(-${index * slideWidth}px)`;
}

document.addEventListener("keydown", function(event) {
    if (event.key.toLowerCase() === "c") {
        steps.value = "";
        steps.dispatchEvent(new Event("input"));
        return;
    }

    if (/^[0-9]$/.test(event.key)) {
        steps.value += event.key;
        steps.dispatchEvent(new Event("input"));
    }

    if (event.key.toLowerCase() == "a") {
        moveSlide(-1);
    }

    if (event.key.toLowerCase() == "d") {
        moveSlide(1);
    }

    if (event.key == "ArrowLeft") {
        moveSlide(-1);
    }

    if (event.key == "ArrowRight") {
        moveSlide(1);
    }
});