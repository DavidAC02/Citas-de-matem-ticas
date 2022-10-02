import './App.css';
import propiedades from './Valores/propiedades';
import {Testimonio} from "./Componentes/Testimonio.jsx";

function App() {
  const test=[]
  for (let i in propiedades){
    test.push(i)
    }
  return (
    <div className="App">
      <div className="contenedor-principal">
        <h1>Algunas citas interesantes</h1>
        {test.map(
          (i)=>
            <Testimonio
            nombre={propiedades[i].nombre}
            pais={propiedades[i].pais}
            imagen={propiedades[i].imagen}
            cargo={propiedades[i].cargo}
            empresa={propiedades[i].empresa}
            testimonio1={propiedades[i].testimonio1}
            testimonion={propiedades[i].testimonion}
            testimonio2={propiedades[i].testimonio2} />
        )}
      </div>
    </div>
  );
}

export default App;
