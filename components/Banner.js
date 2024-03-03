import React, { useState } from 'react';
import { XMarkIcon } from '@heroicons/react/20/solid';
import '../styles/custom.module.css'

export default function Banner() {
  // Estado para controlar a visibilidade do banner
  const [isVisible, setIsVisible] = useState(true);

  // Função para ocultar o banner
  const handleClose = () => {
    setIsVisible(false);
  };

  // Se o banner não estiver visível, não retorna nada
  if (!isVisible) {
    return null;
  }

  return (
    <div className="flex items-center gap-x-6 bg-brand-primary px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
      <p className="text-sm leading-6 text-white">
        <a href="#">
          <strong className="font-semibold">Descontazzo!</strong>
          <svg viewBox="0 0 2 2" className="mx-2 inline h-0.5 w-0.5 fill-current" aria-hidden="true">
            <circle cx={1} cy={1} r={1} />
          </svg>
           – Profissionalize sua marca nas próximas 24h e ganhe R$500,00 de desconto.
           <span aria-hidden="true"></span>
        </a>
      </p>
      <div className="flex flex-1 justify-end">
        <button type="button" className="-m-3 p-3 focus-visible:outline-offset-[-4px]" onClick={handleClose}>
          <span className="sr-only">Dismiss</span>
          <XMarkIcon className="h-5 w-5 text-white" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
