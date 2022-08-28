const fetchPokemon = async (pokemon) => {
    
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    
    console.log(APIResponse);
}

fetchPokemon('150')PAREI NO VÍDEO 33:54;