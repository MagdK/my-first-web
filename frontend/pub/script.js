function pageContent(todos) {
    let myStr = "";

    for(let todo of todos) {
        myStr = myStr.concat(
            `
            <div>
                <h1>${todo.accessibility}</h1>
                <p>${todo.activity}</p>
            </div>
            `
        )
    }
    return myStr
};

async function fetchTodo() {
    const todoData = await fetch(`http://127.0.01:9000/json/data.json`);

    return todoData.json();
};

async function loadEvent() {
    const todos = await fetchTodo();

    const rootElement = document.getElementById('root');
    rootElement.innerHTML = pageContent(todos.list)
}

window.addEventListener('load', loadEvent);