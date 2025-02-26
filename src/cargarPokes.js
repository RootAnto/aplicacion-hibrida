window.onload = () => {
const rutaGETPokemons = "https://pokeapi.co/api/v2/pokemon/ditto";
    const axios = require("axios");
    (async function getPokemons(){
        const pokemons = await axios.get(rutaGETPokemons)
        console.log(pokemons)
    })
}