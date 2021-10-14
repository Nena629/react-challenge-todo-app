import React, { useState } from 'react'
import ClassComp from './Components/ClassComp'

function App() {
  const [show, setShow] = useState(true)
  return (
    <div>
      {show !== true ? <ClassComp/> : null}
      <button onClick={()=>setShow(!show)}> {show!==true ?'delete':'creer'} component</button>
    </div>
    
    
  )
}

export default App