import React, { Component } from "react";
import "./App.css";

import { CardList } from "./components/card-list/card-list.component";
import {SearchBox} from './components/search-box/search-box.component'
class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [
        /* 
       {
         name:'Frankestein',
         id:'1'
       },
       {
         name:'Freddy Krugger',
         id:'2'
       },
       {
         name: 'Predator',
         id:'3'
       } */
      ],
      searchfield: ""
    };

    //this.handleChange=this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(user => this.setState({ monsters: user }));
  }

  handleChange = e =>{
    this.setState({ searchfield: e.target.value })
   }

  render() {
   const {monsters,searchfield}=this.state;

   const filteredMonsters=monsters.filter(monster=>monster.name.toLowerCase().includes(searchfield.toLowerCase()));

   

    return (
      <div className="App">
<h1>Monsters Rolodex</h1>
        <SearchBox
        placeholder="Seach Monsters"
        handleChange={this.handleChange}
        ></SearchBox>
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
  }
}

/* function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>This is changed by Taranpreet</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
} */

export default App;
