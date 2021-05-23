import React from "react" ; 



const ListItem = ({todoList , id})=>{
    const logId = () => {
        console.log(id);
      };
    return(
        <>
        <li>{todoList}</li>
        <button onClick={logId}>click</button>
        </>
    )
}

export default ListItem