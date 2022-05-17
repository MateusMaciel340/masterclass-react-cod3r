import "./style/index.css";

import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import ComFilhos from "./components/basicos/ComFilhos";
import Card from "./components/layout/Card";
import Repeticao from "./components/basicos/Repeticao";
import Condicional from "./components/basicos/Condicional";
import CondicionalComIf from "./components/basicos/Condicional";

import Pai from "./components/comunicacao/direta/Pai";
import Super from "./components/comunicacao/indireta/Super";

import Input from "./components/form/Input";
import Contador from "./components/contador/Contador";

function App() {
  return (
      <div className="App">
        <h1>Fundamentos React</h1>

        <div className="Cards">
            <Card titulo="#10 - Componente Contador" color="#293E6A">
                <Contador passo={10} valor={100}></Contador>
            </Card>
            <Card titulo="#09 - Componente Input" color="#9C0F5F">
                <Input></Input>
            </Card>
            <Card titulo="#08 - Componente Comunicação Indireta" color="#000">
                <Super></Super>
            </Card>
            <Card titulo="#07 - Componente Comunicação Direta">
                <Pai sobrenome="Freitas"></Pai>
            </Card>
            <Card titulo="#06 - Componente Condicional v2" color="#FA6900">
                <CondicionalComIf numero={11}></CondicionalComIf>
            </Card>
            <Card titulo="#05 - Componente Condicional v1" color="#E94C6F">
                <Condicional numero={10}></Condicional>
            </Card>
            <Card titulo="#04 - Componente Repetição" color="#008BBA">
                <Repeticao></Repeticao>
            </Card>
            <Card titulo="#03 - Componente com Filhos" color="#D96459">
                <ComFilhos>
                    <ul>
                        <li>Ana</li>
                        <li>Bia</li>
                        <li>Carlos</li>
                        <li>Daniel</li>
                    </ul>
                </ComFilhos>
            </Card>
            <Card titulo="#02 - Componente com Parâmetro" color="#FF85CB"> 
                <ComParametro titulo="Esse é o título"
                subtitulo="Esse é o subtitulo"></ComParametro>
            </Card>
            <Card titulo="#01 - Primeiro Componente" color="#92B06A">
                <Primeiro/>
            </Card>
        </div>
      </div>
  );
}

export default App;
