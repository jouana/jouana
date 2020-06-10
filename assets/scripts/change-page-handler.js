function changePageHandler ({ maxSection = 0 }) {
    let currentSection = 1;
    const mainContainer = document.getElementById("jouana--main-container");

    mainContainer.addEventListener("wheel", (e) => {
            e.preventDefault()
            e.stopImmediatePropagation();
            const nextSection = currentSection + (e.deltaY < 0 ? -1 : 1); 
            
            currentSection = nextSection > 0 && nextSection <= maxSection ? nextSection : currentSection;
            
            location.href = `#section${currentSection}`;
        });
    window.addEventListener("keyup", (e) => {
        if (e.key === "ArrowUp" && currentSection > 1) {
            currentSection--;
            location.href = `#section${currentSection}`;
        } else if (e.key === "ArrowDown" && currentSection < maxSection) {
            currentSection++;
            location.href = `#section${currentSection}`;
        }
    });
}