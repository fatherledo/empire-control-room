import { useEffect, useState } from 'react';
import { supabase } from '../utils/supabaseClient';
import BotModal from '../components/BotModal';

interface Bot {
  id: number;
  nombre: string;
  descripcion: string;
  categoria: string;
  funcion: string;
}

export default function Home() {
  const [bots, setBots] = useState<Bot[]>([]);
  const [selectedBot, setSelectedBot] = useState<Bot | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    async function fetchBots() {
      const { data, error } = await supabase
        .from('bots_estrategicos')
        .select('*')
        .order('id', { ascending: true });

      if (error) {
        console.error('Error fetching bots:', error);
      } else {
        setBots(data || []);
      }
    }

    fetchBots();
  }, []);

  return (
    <div
      style={{
        backgroundColor: '#000',
        color: '#0f0',
        fontFamily: 'Courier New, Courier, monospace',
        padding: '2rem',
      }}
    >
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
        🔥 Empire Control Room: Bots Estratégicos
      </h1>
      <table
        style={{
          width: '100%',
          borderCollapse: 'collapse',
          border: '1px solid #0f0',
        }}
      >
        <thead>
          <tr>
            <th style={thStyle}>ID</th>
            <th style={thStyle}>Nombre</th>
            <th style={thStyle}>Descripción</th>
            <th style={thStyle}>Categoría</th>
            <th style={thStyle}>Función</th>
          </tr>
        </thead>
        <tbody>
          {bots.map((bot) => (
            <tr key={bot.id}>
              <td style={tdStyle}>{bot.id}</td>
              <td
                style={{
                  ...tdStyle,
                  cursor: 'pointer',
                  textDecoration: 'underline',
                  color: '#0f0',
                }}
                onClick={() => {
                  setSelectedBot(bot);
                  setIsModalOpen(true);
                }}
              >
                {bot.nombre}
              </td>
              <td style={tdStyle}>{bot.descripcion}</td>
              <td style={tdStyle}>{bot.categoria}</td>
              <td style={tdStyle}>{bot.funcion}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <BotModal
        bot={selectedBot}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}

const thStyle = {
  border: '1px solid #0f0',
  padding: '0.5rem',
  backgroundColor: '#111',
  color: '#0f0',
  fontWeight: 'bold',
};

const tdStyle = {
  border: '1px solid #0f0',
  padding: '0.5rem',
};
