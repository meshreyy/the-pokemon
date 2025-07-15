async function fetchData() {


    const category = document.getElementById("category").value;
    const count = parseInt(document.getElementById("count").value);
    // const pokemonList = data.pokemon;

    // <div id="cards"></div>


    // for (let i = 0; i < count; i++) {
    //     const pokemonEntry = pokemonList[i];
    //     const pokemonURL = pokemonEntry.pokemon.url;
    //     renderPokemonCard(pokemonUrl);
    // }


    try {
        const response = await fetch(`https://pokeapi.co/api/v2/type/${category}`);

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        console.log("Pokemon list from category:", data.pokemon);


        const pokemonList = data.pokemon;

        // Clear previous cards
        document.getElementById("cards").innerHTML = "";

        for (let i = 0; i < count; i++) {
            const pokemonUrl = pokemonList[i].pokemon.url;
            renderPokemonCard(pokemonUrl);
        }
    }
   catch (error) {
            console.error("Error fetching data:", error);
        }
    

    }

function sCategory() {
        const inputEl = document.getElementById('category');
        inputEl.id = 'category';
        const value = inputEl.value;
        console.log(value);


    }

    function renderPokemonCard(url) {

        fetch(url)
            .then(res => res.json())
            .then(data => {
                const name = data.name;
                const imgUrl = data.sprites.front_default;

                const card = document.createElement("div");
                card.innerHTML = `<img src="${imgUrl}" /><h3>${name}</h3>`;

                document.getElementById("cards").appendChild(card);
            })
            .catch(err => console.error("Error:", err));
    }


