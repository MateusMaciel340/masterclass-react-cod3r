import React from "react";

function FilhoDireta(props){
    return(
        <div>
            <p>{props.children} - {props.sobrenome}</p>
        </div>
    )
}

export default FilhoDireta;