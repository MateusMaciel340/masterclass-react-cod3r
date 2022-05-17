import React from "react";
import Filho from "./Filho";

function PaiDireta(props){
    return(
        <div>
            <Filho {...props}>João</Filho>
            <Filho sobrenome={props.sobrenome}>Maria</Filho>
            <Filho sobrenome="Silva">Pedro</Filho>
        </div>
    )
}

export default PaiDireta;