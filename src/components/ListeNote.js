import React from 'react'
import ItemNote from './ItemNote'

const ListeNote = ({list,onDeleteNoteApp}) => {

    return (
        <div>
            <ul>
               {/*List of itemNote*/} 
            {list.map((note) => (
                   <ItemNote 
                   title={note.content}
                   id={note.id}
                   key= {note.id}
                   onDeleteListNote={onDeleteNoteApp}
                    />
            )
            )}
            
    
            </ul>
        </div>

    )
}

export default ListeNote
