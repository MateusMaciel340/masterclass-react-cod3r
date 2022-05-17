import React from "react";

import produtos from "../data/produtos";

function Repeticao(){

    function mostrarProdutosListaItem(){
        return produtos.map(produto => {
            return <li key={produto.id}>
                {produto.id} - {produto.nome} - R$ {produto.preco}
            </li>
        })
    }

    return(
        <div>
            <h2>Repetição</h2>
            <ul>
                {mostrarProdutosListaItem()}
            </ul>
        </div>
    );
}

export default Repeticao;