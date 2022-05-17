import "./style/index.css";

import Primeiro from "./components/Primeiro";
import ComParametro from "./components/ComParametro";

function App() {
  return (
      <>
        <Primeiro/>
        <ComParametro titulo="Esse é o título"
            subtitulo="Esse é o subtitulo"></ComParametro>
        <ComParametro titulo="Opa"
            subtitulo="Epa"></ComParametro>
      </>
  );
}

export default App;
