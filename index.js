document.addEventListener("DOMContentLoaded", () => {
  const form1 = document.querySelector("#by-name") 
  form1.addEventListener("submit", (e) => {
      e.preventDefault();
      let searchText = e.target.children[0].value;
      if (searchText) {
        fetch(`https://pokeapi.co/api/v2/pokemon/${searchText}/`)
          .then(response => response.json())
          .then(data => {
            console.log(data)
          })
          .catch(error => console.log(error))
      } else {
        console.log("Please enter a search term.");
      }
      form1.reset();
  })
  });

    const poke_container = document.getElementById("poke_container");
    const pokemon_number = 150;
    
    const colors = {
      fire: '#FDDFDF',
      grass: '#DEFDE0', 
      electric: '#FCF7DE',
      water: '#DEF3FD',
      ground: '#f4e7da',
      rock: '#d5d5d4',
      fairy: '#fceaff',
      poison: '#98d7d5',
      bug: '#f8d5a3',
      dragon: '#97b3e6',
      psychic: '#eaeda1',
      flying: '#F5F5F5',
      fighting: '#E6E0D4',
      normal: '#F5F5F5'
    };
    
    main_types = Object.keys(colors);
    
    const fetchPokemon = async () => {
      for (let i = 1; i <= pokemon_number; i++) {
        await getPokemon(i);
      }
    };
    
    const getPokemon = async(id) => {
      const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
      const res = await fetch(url);
      const pokemon = await res.json();
      if (pokemon) {
        return pokemon;
      } else {
        throw new Error("Pokemon not found");
      }
    }
    fetchPokemon();
    
    function createPokemonCard(pokemon) {
      const pokemonEl = document.createElement("div");
      pokemonEl.classList.add("pokemon");
      
    const poke_types = pokemon.types.map(el => el.type.name);
    const type = main_types.find(
      type => poke_types.indexOf(type) > -1
    );
      
    const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1); 
      
    const color = colors[type];
      
     pokemonEl.style.backgroundColor = color;
    
      const pokeInnerHTML = `
        <div class="img-container">
        <img src="https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png" />
        </div>
        <div class="info">
        <span class="number">#${pokemon.id.toString().padStart(3, '0')}</span>
        <h3>${name}</h3>
        <small class="type">Type: <span>${type}</span></small>
        </div>
      `;
    
      pokemonEl.innerHTML = pokeInnerHTML;
    
      poke_container.appendChild(pokemonEl);
    } {

}

    