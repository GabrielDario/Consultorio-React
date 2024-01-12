import { Fragment, useState } from "react";
import "./styles.css";
const App = () => {
  const [pacientes, setPacientes] = useState([]);
  const [atendido, setAtendido] = useState("");
  const [nome, setNome] = useState("");

  const novoPaciente = (e) => {
    e.preventDefault();
    setPacientes([...pacientes, nome]);
    setNome("");
  };

  const novoUrgente = () => {
    setPacientes([nome, ...pacientes]);
    setNome("");
  };
  const atenderPaciente = () => {
    if (!pacientes.length) {
      alert("Não há pacientes na fila de espera...");
      return;
    }
    setAtendido(pacientes[0]);
    setPacientes(pacientes.slice(1));
  };
  return (
    <Fragment>
      <h1>Consultório Odontológico</h1>
      <form onSubmit={novoPaciente}>
        <p>
          Paciente:
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
            autoFocus
          />
          <input type="submit" value="Adicionar" />
          <input type="button" value="Urgência" onClick={novoUrgente} />
          <input type="button" value="Atender" onClick={atenderPaciente} />
        </p>
      </form>
      <h3>
        Em Atendimento:
        <span className="fonte-azul">{atendido}</span>
        <pre>{pacientes.map((paciente) => paciente + "\n")}</pre>
      </h3>
    </Fragment>
  );
};
export default App;
