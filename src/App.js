
import './App.css';
import { useState } from 'react';
import New from './components/New';
function App() {
  const[mode,setMode]=useState('white');
  const set=()=>{
    if(mode==='white'){
      setMode('black');
      document.body.style.background='black';
      document.body.style.color='white';
    }
    else{
      setMode('white');
      document.body.style.background='white';
      document.body.style.color='black';
    }
  }
  return (
    <div className="App">
      <button onClick={set} type='button'>click me</button>
      <New styl={{mode}}/>
    </div>
  );
}
export default App;
