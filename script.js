//randomly generates 7 Pokemon sprites and names

const checkAlert = async function () {
  let pokeId1 = Math.floor(Math.random() * 700);
  let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeId1}`);
  const pokeSprite = response.data.sprites.front_default;


  let spriteLayer = document.querySelector('#sprite-layer');
  let pokemonImg = document.createElement("div");
  pokemonImg.classList.add("pokeId1");
  spriteLayer.appendChild(pokemonImg);
  pokemonImg.innerHTML = `<img src="${pokeSprite}">`

  let list = document.querySelector("#list");
  let findList = document.createElement("ul");
  let findListItem = document.createElement("li");
  let pokeName = response.data.name;
  list.appendChild(findList);
  findList.appendChild(findListItem);
  findListItem.innerHTML = pokeName;

  // pokemon2
  let pokeId2 = Math.floor(Math.random() * 700);
  let response2 = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeId2}`);
  const pokeSprite2 = response2.data.sprites.front_default;


  let pokemonImg2 = document.createElement("div");
  pokemonImg2.classList.add("pokeId2");
  spriteLayer.appendChild(pokemonImg2);
  pokemonImg2.innerHTML = `<img src="${pokeSprite2}">`

  let findListItem2 = document.createElement("li");
  let pokeName2 = response2.data.name;
  findList.appendChild(findListItem2);
  findListItem2.innerHTML = pokeName2;

  // pokemon3
  let pokeId3 = Math.floor(Math.random() * 700);
  let response3 = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeId3}`);
  const pokeSprite3 = response3.data.sprites.front_default;


  let pokemonImg3 = document.createElement("div");
  pokemonImg3.classList.add("pokeId3");
  spriteLayer.appendChild(pokemonImg3);
  pokemonImg3.innerHTML = `<img src="${pokeSprite3}">`

  let findListItem3 = document.createElement("li");
  let pokeName3 = response3.data.name;
  findList.appendChild(findListItem3);
  findListItem3.innerHTML = pokeName3;

  // pokemon4
  let pokeId4 = Math.floor(Math.random() * 700);
  let response4 = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeId4}`);
  const pokeSprite4 = response4.data.sprites.front_default;


  let pokemonImg4 = document.createElement("div");
  pokemonImg4.classList.add("pokeId4");
  spriteLayer.appendChild(pokemonImg4);
  pokemonImg4.innerHTML = `<img src="${pokeSprite4}">`

  let findListItem4 = document.createElement("li");
  let pokeName4 = response4.data.name;
  findList.appendChild(findListItem4);
  findListItem4.innerHTML = pokeName4;
  // pokemon5
  let pokeId5 = Math.floor(Math.random() * 700);
  let response5 = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeId5}`);
  const pokeSprite5 = response5.data.sprites.front_default;


  let pokemonImg5 = document.createElement("div");
  pokemonImg5.classList.add("pokeId5");
  spriteLayer.appendChild(pokemonImg5);
  pokemonImg5.innerHTML = `<img src="${pokeSprite5}">`

  let findListItem5 = document.createElement("li");
  let pokeName5 = response5.data.name;
  findList.appendChild(findListItem5);
  findListItem5.innerHTML = pokeName5;

  // pokemon6
  let pokeId6 = Math.floor(Math.random() * 700);
  let response6 = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeId6}`);
  const pokeSprite6 = response6.data.sprites.front_default;


  let pokemonImg6 = document.createElement("div");
  pokemonImg6.classList.add("pokeId6");
  spriteLayer.appendChild(pokemonImg6);
  pokemonImg6.innerHTML = `<img src="${pokeSprite6}">`

  let findListItem6 = document.createElement("li");
  let pokeName6 = response6.data.name;
  findList.appendChild(findListItem6);
  findListItem6.innerHTML = pokeName6;
  // pokemon7
  let pokeId7 = Math.floor(Math.random() * 700);
  let response7 = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeId7}`);
  const pokeSprite7 = response7.data.sprites.front_default;

  let pokemonImg7 = document.createElement("div");
  pokemonImg7.classList.add("pokeId7");
  spriteLayer.appendChild(pokemonImg7);
  pokemonImg7.innerHTML = `<img src="${pokeSprite7}">`

  let findListItem7 = document.createElement("li");
  let pokeName7 = response7.data.name;
  findList.appendChild(findListItem7);
  findListItem7.innerHTML = pokeName7;

  //SCORE
  let pokeId1Button = document.querySelector(".pokeId1");
  let score = 0;
  pokeId1Button.addEventListener('click', async () => {
    score++;
    console.log(score);

  });

  let pokeId2Button = document.querySelector(".pokeId2");
  pokeId2Button.addEventListener('click', async () => {
    score++

    console.log(score, "poke clicked");
  });

  let pokeId3Button = document.querySelector(".pokeId3");
  pokeId3Button.addEventListener('click', async () => {
    score++
    console.log(score, "poke clicked");
  });

  let pokeId4Button = document.querySelector(".pokeId4");
  pokeId4Button.addEventListener('click', async () => {
    score++
    console.log(score, "poke clicked");
  });

  let pokeId5Button = document.querySelector(".pokeId5");
  pokeId5Button.addEventListener('click', async () => {
    score++
    console.log(score, "poke clicked");
  });

  let pokeId6Button = document.querySelector(".pokeId6");
  pokeId6Button.addEventListener('click', async () => {
    score++
    console.log(score, "poke clicked");
  });

  let pokeId7Button = document.querySelector(".pokeId7");
  pokeId7Button.addEventListener('click', async () => {
    score++
    console.log(score, "poke clicked");
  });

  // window.addEventListener('click', (event) => {
  //   let newPokemonClass = document.querySelectorAll('div');
  //   newPokemonClass.className += '.pokemonAll';
  //   // console.log('clicked', event.path[0])
  //   checkAlert(newPokemonClass).innerHTML.remove()
  // });

}
checkAlert()





// const duckShot = () => {
//   pokeId.classLast.add("shot")
//   const blastClean = () => {
//     body.removeChild(duckDiv)
//   }
//   checkWinner();
// }

