export class CustomButton extends HTMLElement {
    private _colour: string = "";

    set colour(value: string){
        this.setAttribute("colour", value);
        this._colour = value;
        if(this._colour == "danger"){
            this._button.style.backgroundColor = "red";
            this._button.innerHTML = "BAD STUFFF!";
        }else if(this._colour == "warning"){
            this._button.style.backgroundColor = "orange";
        }
        else {
            this._button.style.backgroundColor = "";
        }
    }

    _button: HTMLButtonElement;
    constructor() {
        super();
        this.style.backgroundColor = "red";
        console.log("Created custom button");

        this._button = document.createElement("button");
        this._button.appendChild(document.createTextNode("Hello World"));
        this.appendChild(this._button)
    }

    static get observedAttributes() { return ["colour"]; }

    attributeChangedCallback(name: string, oldValue: string, newValue: string) {
        // name will always be "country" due to observedAttributes
        if(name == "colour"){
            this.colour = newValue;
        }
        console.log(name, oldValue, newValue);
        
        this._updateRendering();
    }

    connectedCallback() {
        this._updateRendering();
    }

    _updateRendering() {
    }
}

