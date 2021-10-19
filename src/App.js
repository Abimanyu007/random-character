import logo from './logo.svg';
import './App.css';
import Item from './MyItem';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
     <Item name="Cat" />
     <Item name="Dog" />
     <Item name="Cow" />
      </header>
    </div>
  );
}

export default App;
