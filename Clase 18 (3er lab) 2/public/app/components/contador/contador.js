export var Variablescontador;
(function (Variablescontador) {
    Variablescontador["contar"] = "contar";
})(Variablescontador || (Variablescontador = {}));
class Contador extends HTMLElement {
    constructor() {
        super();
        this.contar = 0;
        this.attachShadow({ mode: "open" });
        this.increaseLikes = this.increaseLikes.bind(this);
    }
    static get observedAttributes() {
        const variab = { contar: null };
        return Object.keys(variab);
    }
    attributeChangedCallback(propName, oldValue, newValue) {
        switch (propName) {
            case Variablescontador.contar:
                this.contar = Number(newValue);
                break;
            default:
        }
        this.render();
        this.addEventListener();
    }
    connectedCallback() {
        this.render();
        this.addEventListener();
    }
    disconnectedCallback() {
        this.removeEventListener();
    }
    addEventListener() {
        if (this.shadowRoot) {
            const button = this.shadowRoot.querySelector("button");
            button === null || button === void 0 ? void 0 : button.addEventListener("click", this.increaseLikes);
        }
    }
    removeEventListener() {
        if (this.shadowRoot) {
            const button = this.shadowRoot.querySelector("button");
            button === null || button === void 0 ? void 0 : button.removeEventListener("click", this.increaseLikes);
        }
    }
    increaseLikes() {
        const likesValue = Number(this.getAttribute("contar"));
        this.setAttribute("contar", String(likesValue + 1));
    }
    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="./styles.css">
            <section class="boton">
            <button id="botonLikes"><image src="./assets/heart.png" width=20px></button>
            <h5 id="cantidadLikes">${this.contar || 0} likes</h5> 
            </section>
            `;
        }
    }
}
customElements.define("my-contador", Contador);
export default Contador;
