document.addEventListener("DOMContentLoaded", () => {
    const mainImage = document.getElementById("main-display-img");
    const thumbnails = document.querySelectorAll(".thumb");

    thumbnails.forEach(thumb => {
        thumb.addEventListener("click", () => {
            mainImage.src = thumb.src;
            mainImage.alt = thumb.alt;
            
            thumbnails.forEach(t => t.classList.remove("active"));
            thumb.classList.add("active");
        });
    });
});