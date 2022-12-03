import React from "react";
import HubungiKamiForm from "./HubungiKamiForm";
import Pokemon from "./Pokemon";

class Main extends React.Component {
    
  render() {
    const listPokemon = [
      {
        name: "pikachu",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
        introduction:
          "The href attribute is required for an anchor to be keyboard accessible. Provide a valid, navigable address as the href value. If you cannot provide an href, but still need the element to resemble a link, use a button",
      },
      {
        name: "bulbasaur",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
        introduction:
          "The href attribute is required for an anchor to be keyboard accessible. Provide a valid, navigable address as the href value. If you cannot provide an href, but still need the element to resemble a link, use a button",
      },
      {
        name: "blastoise",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png",
        introduction:
          "The href attribute is required for an anchor to be keyboard accessible. Provide a valid, navigable address as the href value. If you cannot provide an href, but still need the element to resemble a link, use a button",
      },
      {
        name: "charmander",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
        introduction:
          "The href attribute is required for an anchor to be keyboard accessible. Provide a valid, navigable address as the href value. If you cannot provide an href, but still need the element to resemble a link, use a button",
      },
    ];

    return (
      <div className="main-wrapper">
        <div className="main">
          <div className="hello-container">
            <h1>Hello, Pokemon hunter</h1>
            <h2>Selamat datang di dunia Pokemon</h2>
          </div>
          <div className="pokemon-container">
            <h3>List Pokemon</h3>
            <div className="list-card">
              {listPokemon.map((pokemon, index) => {
                return (
                  <Pokemon key={index} name={pokemon.name} image={pokemon.image} introduction={pokemon.introduction} />
                );
              })}
            </div>
          </div>
          <div className="hubungiKami-container">
            <h2>Hubungi Kami</h2>
            <HubungiKamiForm />
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
