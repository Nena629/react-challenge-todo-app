import React from 'react'

const Text = ({title,onDeleteTextList,id}) => {
    return (
        <div style={{border:".5px solid",width:"fit-content",margin:"10px auto"}}>
            <p> {title} </p>
            <button onClick={()=>onDeleteTextList(id)}>delete</button>
        </div>
    )
}

export default Text