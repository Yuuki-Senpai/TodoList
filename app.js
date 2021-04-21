const inputTodo =document.querySelector('.inputTodo');


const createElement = function(text,type){
    let content = document.createTextNode(text);
    let element = document.createElement(type);
    element.appendChild(content);
    return element;
};

const createTodo = function(text){
    let checkbox = createElement('☐','button');
    let crossMark = createElement('❌','button');
    let textTodo = createElement(text,'div');
    let todo = createElement('','div');
    todo.appendChild(textTodo);
    todo.appendChild(checkbox);
    todo.appendChild(crossMark);
    todo.classList.add('todo');
    crossMark.classList.add('delete');
    checkbox.classList.add('checkbox');
    inputTodo.insertAdjacentElement("afterend",todo);
    crossMark.addEventListener("click",()=>todo.remove());
    checkbox.addEventListener("click",()=>{
        textTodo.classList.toggle('strikethrought');
        checkbox.innerText=== '☐' ? checkbox.innerText= '☑️' : checkbox.innerText='☐';
    })
}

inputTodo.addEventListener('keyup', ({key}) => {
    if (key === "Enter") {
        createTodo(inputTodo.value);
    }
});

