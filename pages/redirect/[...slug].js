import { useEffect } from 'react';

console.log('rodando o slug');

const RedirectPage = () => {
  useEffect(() => {
    // Suponha que você já tenha o linkName de alguma forma
    const linkName = 'aeeecarraaaaaaalhooo';

    // Faça uma chamada para o seu endpoint da API para obter os detalhes do link
    fetch(`/api/get-link?link_name=${linkName}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Falha ao buscar os detalhes do link');
        }
        return response.json();
      })
      .then(data => {
        // Construa a URL do WhatsApp com os dados obtidos
        const whatsappUrl = `https://api.whatsapp.com/send?phone=${data.phone_number}&text=${encodeURIComponent(data.message)}`;
        // Redirecione a janela para a URL do WhatsApp
        window.location.href = whatsappUrl;
      })
      .catch(error => {
        console.error('Erro ao redirecionar:', error);
      });
  }, []);

  // Exiba algo na tela enquanto o redirecionamento está em processo
  return <p>Redirecionando para o WhatsApp...</p>;
};

export default RedirectPage;
