import React, { useState } from "react";

function MegaSena(props){

    const [numeros, setNumeros] = useState(Array(props.qtdNumero).fill(0));

    function gerarNumerosNaoContidos(array){
        const min = 1; const max = 60;

        const novoNumero = parseInt(Math.random() * (max - min));

        return array.includes(novoNumero) 
            ? gerarNumerosNaoContidos(array) : novoNumero;
    }

    function gerarNumeros(){
        const novoArray = Array(props.qtdNumero)
            .fill(0)
            .reduce((a, e) => {
                const novoNumero = gerarNumerosNaoContidos(a)
                return [...a, novoNumero]
            }, [])
            .sort((a, b) => a - b)
        setNumeros(novoArray);
    }

    return(
        <div>
            <h3>MegaSena</h3>
            <h4>{numeros.join(" ")}</h4>
            <button onClick={gerarNumeros}>Gerar números</button>
        </div>
    )
}

export default MegaSena;