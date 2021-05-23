import React from "react" ; 
import ListItem from "./ListItem";

const List = ({todoArray})=>{
    const propListItem = todoArray.map((elem,i)=>{
        return <ListItem key={i} todoList= {elem.todo} id = {elem.id}/>
      })
    return( <>
    <ul>
        {propListItem}
    </ul>
    </>
    )
}

export default List