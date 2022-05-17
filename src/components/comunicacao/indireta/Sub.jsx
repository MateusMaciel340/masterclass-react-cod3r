import React from "react";

function Sub(props){

    function acao(){
        props.onClicar(Math.random(), "Gerado");
    }

    return(
        <div>
            <button onClick={acao}>Alterar</button>
        </div>
    )
}

export default Sub;