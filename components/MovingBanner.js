import React, { useState } from 'react';
import styles from '../styles/MovingBanner.module.css'

export default function MovingBanner() {
  const services = [
    { id: 1, content: 'SEO', href: '#SEO' },
    { id: 2, content: 'Videomaking', href: '#Videomaking' },
    { id: 3, content: 'Facebook ads', href: '#Facebookads' },
    { id: 4, content: 'Planejamento de conteúdo', href: '#PlanejamentoDeConteudo' },
    { id: 5, content: 'Website', href: '#Website' },
    { id: 6, content: 'Logo Design', href: '#LogoDesign' },
    { id: 7, content: 'Identidade visual', href: '#IdentidadeVisual' },
    { id: 8, content: 'Gerenciamento de tráfego', href: '#GerenciamentoDeTrafego' },
    { id: 9, content: 'Fotografia', href: '#Fotografia' },
    { id: 10, content: 'CRM', href: '#CRM' },
    { id: 11, content: 'Desenvolvimento de apps', href: '#DesenvolvimentoDeApps' },
    { id: 12, content: 'Planejamento de conteúdo', href: '#PlanejamentoDeConteudo2' },
    { id: 13, content: 'SEO', href: '#SEO' },
    { id: 14, content: 'Videomaking', href: '#Videomaking' },
    { id: 15, content: 'Facebook ads', href: '#Facebookads' },
    { id: 16, content: 'Planejamento de conteúdo', href: '#PlanejamentoDeConteudo' },
    { id: 17, content: 'Website', href: '#Website' },
    { id: 18, content: 'Logo Design', href: '#LogoDesign' },
    { id: 19, content: 'Identidade visual', href: '#IdentidadeVisual' },
    { id: 20, content: 'Gerenciamento de tráfego', href: '#GerenciamentoDeTrafego' },
    { id: 21, content: 'Fotografia', href: '#Fotografia' },
    { id: 22, content: 'CRM', href: '#CRM' },
    { id: 23, content: 'Desenvolvimento de apps', href: '#DesenvolvimentoDeApps' },
    { id: 24, content: 'Planejamento de conteúdo', href: '#PlanejamentoDeConteudo2' },
    { id: 25, content: 'SEO', href: '#SEO' },
    { id: 26, content: 'Videomaking', href: '#Videomaking' },
    { id: 27, content: 'Facebook ads', href: '#Facebookads' },
    { id: 28, content: 'Planejamento de conteúdo', href: '#PlanejamentoDeConteudo' },
    { id: 29, content: 'Website', href: '#Website' },
    { id: 30, content: 'Logo Design', href: '#LogoDesign' },
    { id: 31, content: 'Identidade visual', href: '#IdentidadeVisual' },
    { id: 32, content: 'Gerenciamento de tráfego', href: '#GerenciamentoDeTrafego' },
    { id: 33, content: 'Fotografia', href: '#Fotografia' },
    { id: 34, content: 'CRM', href: '#CRM' },
    { id: 35, content: 'Desenvolvimento de apps', href: '#DesenvolvimentoDeApps' },
    { id: 36, content: 'Planejamento de conteúdo', href: '#PlanejamentoDeConteudo2' },
  ];

  const [isPaused, setIsPaused] = useState(false);

  return (
    <div className="overflow-hidden relative w-full bg-brand-tertiary py-2.5">
      <div
        className={`${styles.movingBanner} ${isPaused ? styles.bannerPaused : ''}`}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {services.map((service, index) => (
          <a
            key={service.id}
            href={service.href}
            className={`text-white hover:underline inline-block ${styles.movingBannerItem}`}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {index % 2 === 0 ? <strong>{service.content}</strong> : service.content}
          </a>
        ))}
      </div>
    </div>
  );
}
