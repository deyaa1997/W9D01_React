import React from "react" ; 


const ListItem = ({todoList , id})=>{
    return(
        <>
        
        <ul>
        <li>{todoList}</li>
        </ul>
        </>
    )
}

export default ListItem