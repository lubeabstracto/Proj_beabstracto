// MyPasteComponent.jsx
import React, { useState } from 'react';
import { handlePaste } from './pastelogic.js';

const MyPasteComponent = () => {
  const [formattedHtml, setFormattedHtml] = useState(''); // Estado para armazenar o HTML formatado

  const onPaste = (event) => {
    event.preventDefault();
    const html = event.clipboardData.getData('text/html');
    const newHtml = handlePaste(html); // Processa o HTML colado
    setFormattedHtml(newHtml); // Atualiza o estado com o HTML formatado
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(formattedHtml);
      alert('Conteúdo copiado para a área de transferência!');
    } catch (err) {
      console.error('Falha ao copiar: ', err);
      alert('Erro ao copiar conteúdo.');
    }
  };

  return (
    <div>
      <button onClick={copyToClipboard}>Copiar HTML</button>

      <div
        onPaste={onPaste}
        contentEditable="true"
        style={{ minHeight: '200px', border: '1px solid #ccc', margin: '10px 0' }}
        dangerouslySetInnerHTML={{ __html: formattedHtml }} // Renderiza o HTML formatado
      >
        {/* Conteúdo processado será renderizado aqui */}
      </div>
    </div>
  );
};

export default MyPasteComponent;
