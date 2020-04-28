console.log("Listo");

var url = 'https://pokeapi.co/api/v2/pokemon/'




function filterByGenPkmn(num1, num2){
    for(num1; num1<=num2; num1++){
        let element = document.getElementById("ajaxPokemon");
        let collection = document.querySelector(".collection");
        element.innerHTML = '';
        
        url = `https://pokeapi.co/api/v2/pokemon/${num1}`;
        //console.log(url);
        
        fetch(url)
        .then(response => response.json())
        .then(data => {
        console.log(data.types[0].type.name);
        
        element.innerHTML += `
        <li><img src='${data.sprites.front_default}'/> | ${data.name}</li>
        `;
        })
        .catch(err => console.log(err));
    }
}

function filterByTypePkmn(type) {
    for(let i=0; i<493; i++) {
        let element = document.getElementById("ajaxPokemon");
        element.innerHTML = '';
        url = `https://pokeapi.co/api/v2/pokemon/${i}`;

        fetch(url)
        .then(response => response.json())
        .then(data => {
            if(data.types[0].type.name == type || data.types[1].type.name == type) {
                element.innerHTML += `
                <li><img src='${data.sprites.front_default}'/>| ${data.name}</li>
                
                `;
            }
        })
        .catch(err => console.log(err));
    }
}