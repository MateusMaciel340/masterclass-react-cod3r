import "./Card.css";
import React from "react";

function Card(props){
    return(
        <div className="Card">
            <div className="Content">
                {props.children}
            </div>
            <div className="Footer">
                {props.titulo}
            </div>
        </div>
    );
}

export default Card;