import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const RedirectPage = () => {
    const router = useRouter();
    const { slug } = router.query; // Deve capturar o "dkdjjdjddjdj" da URL
  
    useEffect(() => {
      if (slug) {
        console.log(`O slug é: ${slug}`); // Isto vai logar o slug no console.
    
        // Aqui vamos fazer a chamada para a API para buscar os dados do banco de dados.
        fetch(`/api/get-link?link_name=${slug}`)
          .then(response => {
            if (!response.ok) {
              throw new Error('Erro ao buscar dados');
            }
            return response.json();
          })
          .then(data => {
            // Neste ponto, você tem acesso ao `phone_number` e `message` de `data`
            console.log('Número de telefone:', data.phone_number);
            console.log('Mensagem:', data.message);
            // Aqui você pode definir o estado ou executar outras ações com os dados recebidos
          })
          .catch(error => {
            console.error('Erro ao realizar a consulta:', error);
          });
      }
    }, [slug]); // Dependências do useEffect - reexecutará se o slug mudar

  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <p>Click the button below to go to the Create Post page.</p>
      <Link href="/createpost">
        <a>
          <button>Create Post</button>
        </a>
      </Link>
    </div>
  );
};

export default RedirectPage;
