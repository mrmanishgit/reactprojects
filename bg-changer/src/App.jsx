import { useState } from 'react'
import './App.css'
import ColorPicker from './ColorPicker'

function App() {
  const [color, setColor] = useState('#ffffff');
  function change(){
    const back_color = "#"+Math.round(Math.random()*10000000).toString(16);
    setColor(back_color);
    console.log(back_color);
  }
  
  return (
    <div className='app' style={{background: color}}>
      <button onClick={change}>Click</button>
      <ColorPicker/>
    </div>
  )
}

export default App