//FIRST ARROW SLIDE DOWN
document.getElementById("clickableImage").onclick = function () {
    const target = document.getElementById("project-section");
    const targetPosition = target.getBoundingClientRect().top + window.scrollY - 150;

    window.scrollTo({
        top: targetPosition,
        behavior: "smooth"
    });
}

//IMAGE TO VID CHANGE FOR PROJECTS
const previewImages = document.querySelectorAll(".previewImage");

const videoMap = {
    "section-1": "DUWVi5WBugw",  // section-1 video
    "section-2": "e8yu78xJqGo",
    "section-3": "CuJDeyPnrUc",
    "section-4": "dESIXAj6zrM",
    "section-5": "ds75GTA6XdU",
    "section-6": "02yTDpg2zPs",
    "section-7": "KE4EN_Gu0JE",
    "section-8": "rQconRVVy84"
};

previewImages.forEach((img) => {
    const container = img.parentElement;
    const originalHTML = container.innerHTML;

    const text = container.nextElementSibling;
    const originalText = text.innerHTML;

    function showVideo() {
        const category = img.dataset.category;
        const videoId = videoMap[category] || "DEFAULT_VIDEO_ID";

        container.innerHTML = `
            <div class="video-container">
                <iframe width="660" height="415"
                    src="https://www.youtube.com/embed/${videoId}?autoplay=1"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen>
                </iframe>
            </div>
        `;

        // Update text temporarily
        text.innerHTML = "¿Cansado del video? ¡Haz clic aquí para volver!";
        text.style.cursor = "pointer";
        text.style.marginTop="15px";

        // Attach click to go back
        text.onclick = restoreImage;
    }

    function restoreImage() {
        container.innerHTML = originalHTML;   // restore original image
        text.innerHTML = originalText;        // restore original text

        // Re-select the new image and attach click again
        const newImg = container.querySelector(".previewImage");
        newImg.onclick = showVideo;
    }

    // Initial setup
    img.onclick = showVideo;
});