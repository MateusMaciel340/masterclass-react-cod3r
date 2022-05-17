import "./style/index.css";

import Primeiro from "./components/Primeiro";
import ComParametro from "./components/ComParametro";
import ComFilhos from "./components/ComFilhos";
import Card from "./components/layout/Card";
import Repeticao from "./components/Repeticao";
import Condicional from "./components/Condicional";
import CondicionalComIf from "./components/Condicional";

function App() {
  return (
      <div className="App">
        <Card titulo="#06 - Componente Condicional v2">
            <CondicionalComIf numero={11}></CondicionalComIf>
        </Card>
        <Card titulo="#05 - Componente Condicional v1">
            <Condicional numero={10}></Condicional>
        </Card>
        <Card titulo="#04 - Componente Repetição">
            <Repeticao></Repeticao>
        </Card>
        <Card titulo="#03 - Componente com Filhos">
            <ComFilhos>
                <ul>
                    <li>Ana</li>
                    <li>Bia</li>
                    <li>Carlos</li>
                    <li>Daniel</li>
                </ul>
            </ComFilhos>
        </Card>
        <Card titulo="#02 - Componente com Parâmetro">
            <ComParametro titulo="Esse é o título"
            subtitulo="Esse é o subtitulo"></ComParametro>
        </Card>
        <Card titulo="#01 - Primeiro Componente">
            <Primeiro/>
        </Card>
      </div>
  );
}

export default App;
