function pageHeader() {
    return`
        <h2>This is so much fun</h2>
    `
}

function loadEvent() {
    const rootElement = document.getElementById("root");
    rootElement.insertAdjacentHTML("beforeend", pageHeader());
};

window.addEventListener("load", loadEvent);