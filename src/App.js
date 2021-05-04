import React, { Component } from 'react';
import { CardList } from './components/CardList';
import {Input} from './components/Input';
import './App.css';


class App extends Component {
  state = { 
    monsters:[],
    searchField : ""
   }


  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=> response.json()).then(data => this.setState({monsters: data}))
  } 
  render() { 
    const {monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(el => 
      el.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Monsters Roledex</h1>
        <Input placeholder="search monsters" changeFunction={el=> this.setState({searchField: el.target.value})} />
        <CardList monsters={filteredMonsters} />
      </div>
      
     );
  }
}
 
export default App;