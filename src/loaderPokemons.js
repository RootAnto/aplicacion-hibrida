const axios = require("axios");
const {ipcRenderer} = require("electron")
window.onload = async () => {
    const btnVolver = document.getElementById("volver"); 
    const pokemonsImg = document.getElementById("fotoPkm");    
    const pokemonsNombre = document.getElementById("nombre");
    const pokemonsPesoAltura = document.getElementById("pesoAltura");

    const pokemonsImg2 = document.getElementById("fotoPkm2");    
    const pokemonsNombre2 = document.getElementById("nombre2");
    const pokemonsPesoAltura2 = document.getElementById("pesoAltura2");

    const pokemonsImg3 = document.getElementById("fotoPkm3");    
    const pokemonsNombre3 = document.getElementById("nombre3");
    const pokemonsPesoAltura3 = document.getElementById("pesoAltura3");

    const rutaGETCharmander = "https://pokeapi.co/api/v2/pokemon/charmander";
    async function getCharmander(){
        const pokemons = await axios.get(rutaGETCharmander);
        //console.log(pokemons.data);        
        pokemonsImg.setAttribute("src",pokemons.data.sprites.front_default);
        pokemonsNombre.innerText = pokemons.data.name;
        pokemonsPesoAltura.innerText = "Altura:" + pokemons.data.height + " Peso:" + pokemons.data.weight;         
    }
    await getCharmander();

    const rutaGETCharmeleon = "https://pokeapi.co/api/v2/pokemon/charmeleon";
    async function getCharmeleon(){
        const pokemons = await axios.get(rutaGETCharmeleon);
        //console.log(pokemons.data);        
        pokemonsImg2.setAttribute("src",pokemons.data.sprites.front_default);
        pokemonsNombre2.innerText = pokemons.data.name;
        pokemonsPesoAltura2.innerText = "Altura:" + pokemons.data.height + " Peso:" + pokemons.data.weight;         
    }
    await getCharmeleon();

    const rutaGETCharizard = "https://pokeapi.co/api/v2/pokemon/charizard";
    async function getCharizard(){
        const pokemons = await axios.get(rutaGETCharizard);
        //console.log(pokemons.data);        
        pokemonsImg3.setAttribute("src",pokemons.data.sprites.front_default);
        pokemonsNombre3.innerText = pokemons.data.name;
        pokemonsPesoAltura3.innerText = "Altura:" + pokemons.data.height + " Peso:" + pokemons.data.weight;         
    }
    await getCharizard();
    
    btnVolver.onclick = goInicio;

    function goInicio(){
        ipcRenderer.send("navigate-to-inicio")
    }

}