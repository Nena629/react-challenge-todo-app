import React, { useState } from 'react'
import FuncComp from './Components/FuncComp'

function App() {
  const [show, setShow] = useState(true)
  
  return (
    <div>
      {show === true ? <FuncComp/> : null}
      <button onClick={()=>setShow(!show)}> 
      {show === true ?'delete':'creer'} component</button>
    </div>
    
  )
}

export default App