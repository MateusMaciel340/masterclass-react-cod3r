import React from "react";

function Botoes(props){
    return(
        <div>
            <button onClick={props.OnIncrementar}>+</button>
            <button onClick={props.OnDescrementar}>-</button>
        </div>
    )
}

export default Botoes;