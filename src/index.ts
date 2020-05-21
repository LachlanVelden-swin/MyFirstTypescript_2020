import { Todo, TodoElement } from "./todo";

let todoContainer = document.getElementById("todoContainer") as HTMLDivElement | null;

let todos: TodoElement[] = [];

let myButton = document.getElementById("myButton") as HTMLButtonElement | null;
if (myButton == null || todoContainer == null) {
    alert("Button not found.");
} else {
    
    myButton.onclick = function () {
        if(myButton == null || todoContainer == null) return;
        let todo = new Todo("Example Title");
        let todoElement = new TodoElement(todo);
        todoElement.spawn(todoContainer);
        todos.push(todoElement);
        todo.completed = true;
        

        console.log(todos);
    }
}