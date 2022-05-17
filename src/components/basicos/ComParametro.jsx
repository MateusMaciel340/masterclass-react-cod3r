import React from "react";

function ComParametro(props){
    // props é somente leitura!!!
    // props.titulo = "Outro título";

    return(
        <div>
            <h3>{props.titulo}</h3>
            <p>{props.subtitulo}</p>
        </div>
    );
}

export default ComParametro;