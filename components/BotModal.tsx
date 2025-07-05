import React from 'react';

interface Bot {
  id: number;
  nombre: string;
  descripcion: string;
  categoria: string;
  funcion: string;
}

interface BotModalProps {
  bot: Bot | null;
  isOpen: boolean;
  onClose: () => void;
}

const BotModal: React.FC<BotModalProps> = ({ bot, isOpen, onClose }) => {
  if (!isOpen || !bot) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
      }}
    >
      <div
        style={{
          backgroundColor: '#111',
          color: '#0f0',
          padding: '2rem',
          border: '2px solid #0f0',
          borderRadius: '8px',
          maxWidth: '500px',
          width: '90%',
        }}
      >
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{bot.nombre}</h2>
        <p>
          <strong>Descripción:</strong> {bot.descripcion}
        </p>
        <p>
          <strong>Categoría:</strong> {bot.categoria}
        </p>
        <p>
          <strong>Función:</strong> {bot.funcion}
        </p>
        <button
          type="button"
          style={{
            marginTop: '1rem',
            backgroundColor: '#0f0',
            color: '#000',
            padding: '0.5rem 1rem',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
          onClick={onClose}
        >
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default BotModal;
