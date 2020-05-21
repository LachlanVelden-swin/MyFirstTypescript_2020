export class Todo {
    title: string;
    completed: boolean = false;

    constructor(pTitle: string) {
        this.title = pTitle;
    }

}


export class TodoElement {
    todo: Todo;
    element: HTMLElement | null = null;
    private root: HTMLElement | null = null;

    constructor(pTodo: Todo){
        this.todo = pTodo;
    }

    private deleteClicked() {
        console.log(this.root, this.element)
        if(this.element == null || this.root == null) return;
        this.root?.removeChild(this.element);
        
    }

    spawn(root: HTMLElement) {
        this.root = root;
        this.element = document.createElement("div");
        this.element.appendChild(document.createTextNode(this.todo.title))
        this.element.appendChild(document.createElement("br"))
        this.element.appendChild(document.createTextNode(this.todo.completed ? "True" : "False"))
        let button = document.createElement("button");
        button.appendChild(document.createTextNode("Delete"));
        button.onclick = () => this.deleteClicked();

        this.element.appendChild(button);
        root.appendChild(this.element);
        
    }

}