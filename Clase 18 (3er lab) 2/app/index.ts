import dataPosts from "./dataPosts.js";
import dataPersonalProfile from "./dataPersonalProfile.js";
import dataSugerencias from "./dataSugerencias.js";


import "./components/index.js";
import UpMenu from "./components/upMenu/upMenu.js";
import Historias from "./components/historias/historias.js";
import PersonalProfile, { Variablesprofile } from "./components/personalProfile/personalProfile.js";
import Sugerencias, { Variablessugerencias } from "./components/sugerencias/sugerencias.js";
import MyPost, { Variablespost } from "./components/post/myPost.js";
import Contador from "./components/contador/contador.js";

class MyContainer extends HTMLElement {

    upMenu: UpMenu[] = [];
    historias: Historias[] = [];
    personalProfile: PersonalProfile[] = [];
    sugerencias: Sugerencias[] = [];
    myPost: MyPost[] = [];
    contador: Contador[] = [];

    constructor() {
        super();
        this.attachShadow({ mode:"open" });

        const menuArriba = this.ownerDocument.createElement("up-menu") as UpMenu;
        this.upMenu.push(menuArriba);
        
        const nuevaHistoria = this.ownerDocument.createElement("my-historias") as Historias;
        this.historias.push(nuevaHistoria);

        dataPersonalProfile.forEach((perfilPersonal)=>{
            const miPerfil = this.ownerDocument.createElement("personal-profile") as PersonalProfile;

            miPerfil.setAttribute(Variablesprofile.username, perfilPersonal.username);
            miPerfil.setAttribute(Variablesprofile.profilephoto, perfilPersonal.profilephoto);
            miPerfil.setAttribute(Variablesprofile.nombrecompleto, perfilPersonal.nombrecompleto);
            miPerfil.setAttribute(Variablesprofile.opcioncambiar, perfilPersonal.opcioncambiar);
            this.personalProfile.push(miPerfil);
        });

        dataSugerencias.forEach((nuevasSugerencias)=>{
            const miSugerencias = this.ownerDocument.createElement("my-sugerencias") as Sugerencias;

            miSugerencias.setAttribute(Variablessugerencias.username, nuevasSugerencias.username);
            miSugerencias.setAttribute(Variablessugerencias.profilephoto, nuevasSugerencias.profilephoto);
            miSugerencias.setAttribute(Variablessugerencias.userinfo, nuevasSugerencias.userinfo);
            miSugerencias.setAttribute(Variablessugerencias.opcionseguir, nuevasSugerencias.opcionseguir);
            this.sugerencias.push(miSugerencias);
        });

        dataPosts.forEach((user)=>{
            const profileCard = this.ownerDocument.createElement("my-post") as MyPost;

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

        /* const counter = this.ownerDocument.createElement("my-counter") as Contador;
        counter.button.addEventListener("click",()=>{
            console.log("button clicked");
        });
        this.counters.push(counter);
        */

        //this.myPost = this.ownerDocument.createElement("my-post") as MyPost;
    }

    connectedCallback() {
        this.render();
    }

    render() {

        /* const compts = data.map(({username, ubicacion, publicacion, usernamecomentario, micomentario1, micomentario2, fechapublicacion}) => `
        
        <my-post
        username="${username}"
        ubicacion="${ubicacion}"
        publicacion="${publicacion}"
        usernamecomentario="${usernamecomentario}"
        micomentario1="${micomentario1}"
        micomentario2="${micomentario2}"
        fechapublicacion="${fechapublicacion}"
        ></my-post>

        <my-contador></my-contador>
        <up-menu></up-menu>
        `);
        */

        
        //console.log(compts);
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
                <link rel="stylesheet" href="./app/components/sugerencias/stylesSugerencias.css">
                <section class="fondoTitulosSugerencias">
                    <h1 id="tituloSugerencias">Sugerencias para ti</h1>
                    <h1 id="verTodo">Ver Todo</h1>
                </section>
            `;
            //this.shadowRoot.innerHTML = compts.join("");

            this.upMenu.forEach((menu)=> {
                this.shadowRoot?.appendChild(menu);
            });

            this.historias.forEach((historias)=> {
                this.shadowRoot?.appendChild(historias);
            });

            this.personalProfile.forEach((perfil)=> {
                this.shadowRoot?.appendChild(perfil);
            });

            this.sugerencias.forEach((sugeridos)=> {
                this.shadowRoot?.appendChild(sugeridos);
            });

            this.myPost.forEach((myPost)=> {
                this.shadowRoot?.appendChild(myPost);
            });

            /* this.counters.forEach((counter)=>{
                this.shadowRoot?.appendChild(counter);
            }); */

            
            //this.shadowRoot.appendChild(this.myPost);
        }
    }
}

customElements.define("my-container", MyContainer);