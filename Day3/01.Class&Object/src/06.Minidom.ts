abstract class UIElement {
    constructor(protected id: string){};
    abstract render(): string;
}

class Input extends UIElement {

    constructor(
        id: string,
        private type: string,
        private name: string,
        private placeholder: string,
    ){
        super(id);
    }

    render(){
        return `<input
        id="${this.id}"
        type="${this.type}"
        name="${this.name}"
        placeholder="${this.placeholder}"
        >`;
    }
}


class Button extends UIElement {
    constructor(
        id: string,
        private label: string,
    ){
        super(id)
    }

    render(){
        return `<button id="${this.id}">${this.label}</button>`;
    }
}

class Form extends UIElement {

    private children: UIElement[] = []
    appendChild(child: UIElement){
        this.children.push(child)
    }

    render() {
        
        const html = this.children.map(child => child.render()).join("\n ")
        // console.log(html);
        return `<form id="${this.id}" style="border: 1px solid #ccc; padding: 20px; display: flex; flex-direction: column; max-width: 300px; border-radius: 25px; gap: 5px;">\n ${html} \n</form>`  //${label}
    }
}

const formElement = new Form("Login-Form")
const emailInput = new Input("email", "email", "email", "Enter your E-mail");
const firstNameInput = new Input("name", "name", "name", "Enter your First Name");
const lastNameInput = new Input("name", "name", "name", "Enter your Last Name");

const passInput = new Input("pass", "password", "password", "Enter your Password");
const button = new Button("submit-btn", "Submit");


formElement.appendChild(firstNameInput);
formElement.appendChild(lastNameInput);
formElement.appendChild(emailInput);
formElement.appendChild(passInput);
formElement.appendChild(button);

console.log(emailInput.render());
console.log(passInput.render());
console.log(button.render());

console.log(formElement.render());
const rootElement = document.getElementById("root");
if(rootElement){
    rootElement.innerHTML = formElement.render();
}