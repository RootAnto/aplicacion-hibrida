const axios = require("axios");
const {ipcRenderer} = require("electron")
window.onload = async () => {
    const btnVolver = document.getElementById("volver"); 
    const pokemonsImg = document.getElementById("fotoPkm");    
    const pokemonsNombre = document.getElementById("nombre");
    const pokemonsPesoAltura = document.getElementById("pesoAltura");
    const rutaGETPokemons = "https://pokeapi.co/api/v2/pokemon/ditto"
    async function getPokemons(){
        const pokemons = await axios.get(rutaGETPokemons);
        console.log(pokemons.data);        
        pokemonsImg.setAttribute("src",pokemons.data.sprites.front_default);
        pokemonsNombre.innerText = pokemons.data.name;
        pokemonsPesoAltura.innerText = pokemons.data.height + "" + pokemons.data.weight;         
    }
    await getPokemons();
    
    btnVolver.onclick = goInicio;

    function goInicio(){
        ipcRenderer.send("navigate-to-inicio")
    }

}