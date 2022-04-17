function pageHeaderHTML() {
    return`
        <h1>My plans for the next 6 months</h1>
    `
}

// FOR OF
// function pageContentHTML(ideas) {
//     let myStr = "";

//     for(let idea of ideas) {
//         myStr = myStr.concat(
//             `
//             <div>
//                 <h2>${idea.activity}</h2>
//                 <p>${idea.type}</p>
//                 <p>${idea.accessibility}</p>
//             </div>
//             `
//         )
//     }
//     return myStr;
// };

// REDUCE
// function pageContent(artists) {
//     return artists.reduce((myStr, {title, photographer, dateCreated}) => {
//         return myStr.concat(
//             `
//             <div>
//                 <h2>${title}</h2>
//                 <p>${photographer}</p>
//                 <p>${dateCreated}</p>
//             </div>
//             `
//         )
//     }, "")
// };

// MAP
function pageContentHTML(ideas) {
    // {activity, type, accessibility}
    return ideas.map(idea => {
        return (
            `
            <div>
                <h2>${idea.activity}</h2>
                <p>${idea.type}</p>
                <p>${idea.accessibility}</p>
            </div>
            `
        )
    }).join("")
};

async function fetchIdeas() {
    const ideaData = await fetch(`http://127.0.0.1:9002/users`);
    return ideaData.json();
};

async function loadEvent() {
    const ideas = await fetchIdeas();

    const rootElement = document.getElementById("root");
    rootElement.insertAdjacentHTML("beforeend", pageHeaderHTML());
    
    rootElement.innerHTML = pageContentHTML(ideas);
};

window.addEventListener("load", loadEvent);