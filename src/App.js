// import logo from './logo.svg';
import './App.css';
// import Item from './MyItem';
import React from 'react';

class StarWars extends React.Component{

  constructor(){
    super()
    this.state = {
      Name: null,
      Height: null,
      Homeworld: null,
      Movies: [],
      loadedcharacter: false
    }


  }

  RandomCharacterGenerator(){
  

    this.setState({
      Name: 'Luke',
      Height: 174,
      Homeworld:'Tatooine',
      Movies: ["item 1", "item 2", "item 3"],
      loadedcharacter:true
    })
  }

render() {
  return (
    <div>
    {
      this.state.loadedcharacter && 
      <div>
      <h1>{this.state.Name}</h1>
      <p>{this.state.Height}</p>
      <p>{this.state.Homeworld}</p>
      <ul>
        <li>{this.state.Movies}</li>
      </ul>
      </div>

    }
  

      <button className="btn" onClick={() => this.RandomCharacterGenerator()}>Generate!</button>

    

    </div>
  )
}

}

function App() {
  return (
    <div className="App">
      <header className="App-header">

    <StarWars />
     {/* <Item name="Cat" />
     <Item name="Dog" />
     <Item name="Cow" /> */}

      </header>
    </div>
  );
}

export default App;
