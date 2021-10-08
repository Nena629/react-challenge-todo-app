import React from 'react'
import Text from './Text'

const ListText = ({list , onDeleteTextApp}) => {
    

    return (
        <div>
            {
                list.map(txt=>(
                <Text 
                    key={txt.id}
                    id={txt.id}
                    title={txt.content}
                    onDeleteTextList={onDeleteTextApp}/>
                ))
            }
        </div>
    )
}

export default ListText