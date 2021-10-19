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
    const rand = Math.floor(Math.random() * 82) + 1;
  const url = `https://swapi.dev/api/people/${rand}`

  fetch(url).then((response) =>response.json()).then(data => {this.setState({
    Name: data.name,
    Height: data.height,
    Homeworld:data.homeworld,
    Movies: data.films,
    loadedcharacter:true
  })
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
      <p><a href={this.state.Homeworld}>Home World</a></p>
      <ul>
          {this.state.Movies.map(movie => {return <li> {movie}</li>})}
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
