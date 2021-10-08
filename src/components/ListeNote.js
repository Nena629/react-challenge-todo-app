import React from 'react'
import ItemNote from './ItemNote'

const ListeNote = ({list}) => {

    return (
        <div>
            <ul>
               {/*List of itemNote*/} 
            {list.map((note) => (
                   <ItemNote 
                   title={note.content}
                   key= {note.id}
                    />
            )
            )}
            
    
            </ul>
        </div>

    )
}

export default ListeNote
