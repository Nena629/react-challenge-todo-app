import React, { useState } from 'react'
import ListText from './components/ListText'
import AddText from './components/AddText'


const App = () => {
  const [Texts, setTexts] = useState([
    { id: 1, content: "Text 1 😄" },
    { id: 2, content: "Text 2 😄" },
    { id: 3, content: "Text 3 😄" }
  ])
  //copieTexts
  const [copieTexts, setCopieTexts] = useState([
    { id: 1, content: "Text 1 😄" },
    { id: 2, content: "Text 2 😄" },
    { id: 3, content: "Text 3 😄" }
  ])



  //add text
  const addNewText = (newText) => {

    if (newText !== "") {
      setTexts([...Texts, { id: Math.random() * 100, content: newText }])
      setCopieTexts([...Texts, newText])
    }

  }

  //delete text
  const deleteTextById = (textId) => {
    //are you sure 
    if (window.confirm("Are you sure ?") === false) return

    // alert(textId)
    let newList = [...Texts]
    //suppression fel copie 
    newList = newList.filter((t) => t.id !== textId)
    //update state
    setTexts([...newList])
    setCopieTexts([...newList])
  }

  const filterText = (e) => {

    let input_value = e.target.value;

    if (input_value === "") {
      setTexts([...copieTexts])
    }
    else {
      let newList = Texts.filter((t) => t.content.includes(input_value))
      setTexts([...newList])
    }

  }
  return (
    <div style={{ textAlign: "center" }}>

      <h1>Liste de Text Application </h1>
      {/* ADD text */}
      <AddText addListText={addNewText} />


      {/* Delete text */}
      <input onChange={filterText} placeholder="filter by title" type="search" />
      <ListText list={Texts} onDeleteTextApp={deleteTextById} />
    </div>
  )
}

export default App;