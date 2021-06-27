import React, { useState, useEffect, createContext } from 'react';
import Navbar from '../Navbar';
import Card from '../Card';
import Search from '../Search/Search';
import { getPokemon, getAllPokemon } from '../../services/pokemon';
import './App.css';
export const PokemonContext = createContext();

function App() {
  const [pokemonData, setPokemonData] = useState([])
  const [nextUrl, setNextUrl] = useState('');
  const [prevUrl, setPrevUrl] = useState('');
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState('')
  const [dataSearh, setDataSearch] = useState([])
  const initialURL = 'https://pokeapi.co/api/v2/pokemon'
  const [state, setState] = useState({
    results: []
  });
  useEffect(() => {
    async function fetchData() {
      let response = await getAllPokemon(initialURL)
      setNextUrl(response.next);
      setPrevUrl(response.previous);
      await loadPokemon(response.results);
      setLoading(false);
    }
    fetchData();
  }, [])

  const next = async () => {
    setLoading(true);
    let data = await getAllPokemon(nextUrl);
    await loadPokemon(data.results);
    setNextUrl(data.next);
    setPrevUrl(data.previous);
    setLoading(false);
  }

  const prev = async () => {
    if (!prevUrl) return;
    setLoading(true);
    let data = await getAllPokemon(prevUrl);
    await loadPokemon(data.results);
    setNextUrl(data.next);
    setPrevUrl(data.previous);
    setLoading(false);
  }

  const loadPokemon = async (data) => {
    let _pokemonData = await Promise.all(data.map(async pokemon => {
      let pokemonRecord = await getPokemon(pokemon)
      return pokemonRecord
    }))
    setPokemonData(_pokemonData);
    setDataSearch(_pokemonData)
  }
  useEffect(() => {
    const dataSearch = pokemonData.filter((item) => item.name.includes(searchText))
    setDataSearch([...dataSearch])
  }, [searchText])
  const [namePokemon, setNamePokemon] = useState('')
  return (
    <>
      <Navbar
      />
      <div>
        {loading ? <h1 style={{ textAlign: 'center' }}>Loading...</h1> : (
          <>
            <div className="grid-container">
              <Search
                searchText={searchText}
                setSearchText={setSearchText}
              />
            </div>
            <div className="grid-container">
              {dataSearh.map((pokemon, i) => {
                return (
                  <>
                    <Card
                      key={i}
                      index={i}
                      pokemon={pokemon}
                      namePokemon={namePokemon}
                      setNamePokemon={setNamePokemon}
                      setPokemonData={setPokemonData}
                      pokemonData={pokemonData}
                    />
                  </>
                )
              })}
            </div>
            <div className="btn">
              <button onClick={prev}>Prev</button>
              <button onClick={next}>Next</button>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default App;
