import { useState } from "react";

function App() {
  // === MISSÃO 1 + DESAFIO EXTRA (Contador com Meta) ===
  const [contador, setContador] = useState(0);

  function aumentar() {
    setContador((valorAnterior) => {
      // Para na meta 10
      if (valorAnterior >= 10) {
        return 10;
      }
      return valorAnterior + 1;
    });
  }

  function diminuir() {
    setContador((valorAnterior) => (valorAnterior > 0 ? valorAnterior - 1 : 0));
  }

  function zerar() {
    setContador(0);
  }

  // === MISSÃO 2 (Aviso Booleano) ===
  const [visivel, setVisivel] = useState(false);

  // === MISSÃO 3 + DESAFIO FINAL (Cartão de Boas-Vindas) ===
  const [nome, setNome] = useState("");
  const [mostrarSaudacao, setMostrarSaudacao] = useState(true);

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      {/* Seção 1: Contador com Meta */}
      <h2>Contador</h2>
      <p>Valor atual: {contador}</p>
      {contador === 10 && <p style={{ color: "green", fontWeight: "bold" }}>Meta atingida!</p>}
      
      <button onClick={aumentar}>Aumentar</button>
      <button onClick={diminuir}>Voltar um</button>
      <button onClick={zerar}>Zerar</button>

      <hr />

      {/* Seção 2: Mostrar / Esconder Aviso */}
      <h2>Aviso</h2>
      <button onClick={() => setVisivel(!visivel)}>
        Alternar aviso
      </button>
      {visivel && <p>O aviso está visível.</p>}

      <hr />

      {/* Seção 3 & Desafio Final: Cartão de Boas-Vindas */}
      <h2>Cartão de Boas-Vindas</h2>
      <input
        type="text"
        value={nome}
        onChange={(evento) => setNome(evento.target.value)}
        placeholder="Digite seu nome"
      />
      
      <button onClick={() => setMostrarSaudacao(!mostrarSaudacao)}>
        {mostrarSaudacao ? "Esconder Saudação" : "Mostrar Saudação"}
      </button>

      {mostrarSaudacao && (
        <p>Olá, {nome || "visitante"}!</p>
      )}
    </div>
  );
}

export default App;