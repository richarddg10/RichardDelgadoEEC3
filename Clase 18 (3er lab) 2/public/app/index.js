import dataPosts from "./dataPosts.js";
import dataPersonalProfile from "./dataPersonalProfile.js";
import dataSugerencias from "./dataSugerencias.js";
import "./components/index.js";
import { Variablesprofile } from "./components/personalProfile/personalProfile.js";
import { Variablessugerencias } from "./components/sugerencias/sugerencias.js";
import { Variablespost } from "./components/post/myPost.js";
class MyContainer extends HTMLElement {
    constructor() {
        super();
        this.historias = [];
        this.personalProfile = [];
        this.sugerencias = [];
        this.myPost = [];
        this.contador = [];
        this.upMenu = [];
        this.attachShadow({ mode: "open" });
        const menuArriba = this.ownerDocument.createElement("up-menu");
        this.upMenu.push(menuArriba);
        const nuevaHistoria = this.ownerDocument.createElement("my-historias");
        this.historias.push(nuevaHistoria);
        dataPersonalProfile.forEach((perfilPersonal) => {
            const miPerfil = this.ownerDocument.createElement("personal-profile");
            miPerfil.setAttribute(Variablesprofile.username, perfilPersonal.username);
            miPerfil.setAttribute(Variablesprofile.profilephoto, perfilPersonal.profilephoto);
            miPerfil.setAttribute(Variablesprofile.nombrecompleto, perfilPersonal.nombrecompleto);
            miPerfil.setAttribute(Variablesprofile.opcioncambiar, perfilPersonal.opcioncambiar);
            this.personalProfile.push(miPerfil);
        });
        dataSugerencias.forEach((nuevasSugerencias) => {
            const miSugerencias = this.ownerDocument.createElement("my-sugerencias");
            miSugerencias.setAttribute(Variablessugerencias.username, nuevasSugerencias.username);
            miSugerencias.setAttribute(Variablessugerencias.profilephoto, nuevasSugerencias.profilephoto);
            miSugerencias.setAttribute(Variablessugerencias.userinfo, nuevasSugerencias.userinfo);
            miSugerencias.setAttribute(Variablessugerencias.opcionseguir, nuevasSugerencias.opcionseguir);
            this.sugerencias.push(miSugerencias);
        });
        dataPosts.forEach((user) => {
            const profileCard = this.ownerDocument.createElement("my-post");
            profileCard.setAttribute(Variablespost.username, user.username);
            profileCard.setAttribute(Variablespost.profilephoto, user.profilephoto);
            profileCard.setAttribute(Variablespost.ubicacion, user.ubicacion);
            profileCard.setAttribute(Variablespost.publicacion, user.publicacion);
            profileCard.setAttribute(Variablespost.usernamecomentario, user.usernamecomentario);
            profileCard.setAttribute(Variablespost.micomentario1, user.micomentario1);
            profileCard.setAttribute(Variablespost.micomentario2, user.micomentario2);
            profileCard.setAttribute(Variablespost.fechapublicacion, user.fechapublicacion);
            this.myPost.push(profileCard);
        });
    }
    connectedCallback() {
        this.render();
    }
    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
                <link rel="stylesheet" href="./app/components/sugerencias/stylesSugerencias.css">
                <section class="fondoTitulosSugerencias">
                    <h1 id="tituloSugerencias">Sugerencias para ti</h1>
                    <h1 id="verTodo">Ver Todo</h1>
                </section>
            `;
            this.upMenu.forEach((menu) => {
                var _a;
                (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(menu);
            });
            this.historias.forEach((historias) => {
                var _a;
                (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(historias);
            });
            this.personalProfile.forEach((perfil) => {
                var _a;
                (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(perfil);
            });
            this.sugerencias.forEach((sugeridos) => {
                var _a;
                (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(sugeridos);
            });
            this.myPost.forEach((myPost) => {
                var _a;
                (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(myPost);
            });
        }
    }
}
customElements.define("my-container", MyContainer);
