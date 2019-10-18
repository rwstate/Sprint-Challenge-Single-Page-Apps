import React, {useState, useEffect} from "react";
import { Route } from 'react-router-dom';
import axios from "axios";
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage";
import CharacterList from "./components/CharacterList";
import SearchForm from "./components/SearchForm"


export default function App() {
  const [data, setData] = useState("");
  const [query, setQuery] = useState("")

  useEffect(() => {
    if (!query) { 
      axios
        .get("https://rickandmortyapi.com/api/character/")
        .then(res => {console.log(res.data.results);setData(res.data.results)})
        .catch(err => console.log(err))
    } else {
      axios
      .get(`https://rickandmortyapi.com/api/character/?name=${query}`)
      .then(res => {console.log(res.data.results);setData(res.data.results)})
      .catch(err => console.log(err))
    }

  }, [query])

  return (
    <main>
      <Header />
      <SearchForm filter={query} setFilter={setQuery} />
      <Route exact path="/" render={() => <WelcomePage/>}/>
      <Route path="/characters" render={() => 
        <CharacterList characters={data} filter={query} setFilter={setQuery}/>
      }/>
      
    </main>
  );
}
