import { CustomButton } from "./components/customButton";

customElements.define("custom-button", CustomButton)

const customButton =  new CustomButton();
customButton.colour = "warning";
document.body.appendChild(customButton);