import './App.css';
import MyComponent from './components/MyComponent';
import {useState} from 'react';
import Title from './components/Title';

function App() {
  const n = 9;
  const m = 11;
  const [name] = useState("Marcos");
  const redTitle = true;
  return (
    <div className="App">
      <h1>React com CSS</h1>
      <MyComponent/>
      <p style={{color: 'blue', padding: "25px"}}>Componente 3</p>
      <h2 style={n < 10 ? {color: "purple"} : {color: "pink"}}>CSS Dinâmico</h2>
      <h2 style={m < 10 ? {color: "purple"} : {color: "pink"}}>CSS Dinâmico</h2>
      <h2 style={name === "Matheus" ? {color: "green"} : {color: "red"}}>{name}</h2>
      <h2 className={redTitle ? "red-title" : "title"}>Este título vai ter classe dinâmica</h2>
      <Title/>
    </div>
  );
}

export default App;
