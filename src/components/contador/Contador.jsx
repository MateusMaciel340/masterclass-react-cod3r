import React, { Component } from "react";
import "./Contador.css";

import Display from "./Display";
import PassoForm from "./PassoForm";
import Botoes from "./Botoes";

class Contador extends Component{

    state = {
        passo: this.props.passo || 1, valor: this.props.valor || 0
    }

    incrementar = () =>{
        this.setState({
            valor: this.state.valor + this.state.passo
        })
    }

    descrementar = () =>{
        this.setState({
            valor: this.state.valor - this.state.passo
        })
    }

    mudarPasso = (novoPasso) =>{
        this.setState({
            passo: novoPasso
        })
    }

    render(){
        return(
            <div className="Contador">
                <h2>Contador</h2>
                
                <PassoForm passo={this.state.passo}
                    onPassoChange={this.mudarPasso}/>

                <Display valor={this.state.valor} />

                <Botoes OnIncrementar={this.incrementar} 
                    onDecrementar={this.descrementar}/>
            </div>
        )
    }
}

export default Contador;