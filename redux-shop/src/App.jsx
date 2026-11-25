
import { useState } from 'react';
import './App.css'

function App(){


const [count, setCount] = useState(0);

  function handleAdd() {
    setCount(count + 1);
  }

  function handleSub() {
    setCount(count - 1);
  }

  function handleReset(){
    setCount(0);
  }
  return(
    <div className='App'>
      <div className='box'>
        <p>{count}</p>
        <button className='add' onClick={handleAdd}>Add</button>
        <button className='sub' onClick={handleSub}>Subtract</button>
        <button className='reset' onClick={handleReset}>Reset</button>
      </div>
    </div>
  )
}

export default App
