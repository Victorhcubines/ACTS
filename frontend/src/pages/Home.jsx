import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [denuncias, setDenuncias] = useState([]);

  useEffect(() => {
    axios.get('/api/denuncias/recentes')
      .then(res => setDenuncias(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <header style={{display: 'flex', alignItems: 'center'}}>
        <img src="/ACTS 2.png" alt="Logo ACTS" style={{height: '60px'}} />
        <h1>A.C.T.S. - Denúncias Recentes</h1>
      </header>

      <main>
        {denuncias.length === 0 && <p>Carregando denúncias...</p>}
        <ul>
          {denuncias.map(d => (
            <li key={d.id}>
              <strong>{d.tipo}</strong> - {d.endereco} - {new Date(d.data).toLocaleDateString()}
              <p>{d.descricao}</p>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

