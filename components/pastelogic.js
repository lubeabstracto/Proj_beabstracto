import DOMPurify from 'dompurify';

export const handlePaste = (html) => {
  const sanitizedHtml = DOMPurify.sanitize(html); // Limpa o HTML
  const parser = new DOMParser();
  const doc = parser.parseFromString(sanitizedHtml, 'text/html');

  // Remove estilos inline e atributos desnecessários
  const elements = doc.body.querySelectorAll('*');
  elements.forEach(el => {
    el.removeAttribute('style');
    el.removeAttribute('class');
    el.removeAttribute('id');
    // Adicione mais atributos a serem removidos se necessário
  });

// Processamento de imagens
const images = doc.querySelectorAll('img');
images.forEach(img => {
  // Cria uma figura para cada imagem
  const figure = doc.createElement('figure');
  figure.className = 'rounded-xl bg-gray-900/5 p-4 ring-1 ring-inset ring-gray-900/10 lg:rounded-2xl';
  const imgHTML = `<img class="aspect-video rounded-xl bg-gray-50 object-scale-down" src="${img.src}" alt="${img.alt || ''}" />`;
  figure.innerHTML = imgHTML;

  // Cria tags <br> para inserção antes e depois da <figure>
  const brBefore = doc.createElement('br');
  const brAfter = doc.createElement('br');

  // Insere a tag <br> antes da figura
  img.parentNode.insertBefore(brBefore, img);
  // Insere a figura no lugar da imagem original
  img.replaceWith(figure);
  // Insere a tag <br> depois da figura
  figure.parentNode.insertBefore(brAfter, figure.nextSibling);
});


  

// Processamento de itens da lista
const listItems = doc.querySelectorAll('li');
listItems.forEach(li => {
  // Primeiro, processa as imagens dentro do <li>
  const liImages = li.querySelectorAll('img');
  liImages.forEach(img => {
    // ... (código existente para processamento de imagens)
  });

  // Processa os elementos <a> dentro de <li>
  const anchors = Array.from(li.querySelectorAll('a'));
  anchors.forEach(a => {
    // Extrai o texto de todos os elementos <font> dentro do <a>
    const fontTexts = Array.from(a.querySelectorAll('font')).map(font => font.textContent);
    // Remove os elementos <font> uma vez que seu texto já foi extraído
    a.querySelectorAll('font').forEach(font => font.remove());
    // Define o texto do âncora como a concatenação dos textos dos elementos <font>
    a.textContent = fontTexts.join('');
    // Adiciona classes do Tailwind
    a.className = 'text-brand-tertiary underline';
  });

  // Se o <li> não contiver imagens, adiciona o bullet manualmente
  if (liImages.length === 0 && li.textContent.trim() === '') {
    // Se o <li> está vazio (sem texto), adiciona um bullet
    li.textContent = '• ';
  }
  // Adiciona classes do Tailwind ao <li>
  li.className = 'mt-2 text-font-color-dark';
});

  const processListItems = (li) => {
    // Obtém todos os elementos âncora dentro do <li>
    const anchors = Array.from(li.querySelectorAll('a'));
  
    // Adiciona classes do Tailwind ao <li>
    li.className = 'mt-2 text-font-color-dark';
  
    // Remove todos os filhos do <li> enquanto preserva os âncoras
    while (li.firstChild) {
      li.removeChild(li.firstChild);
    }
  
    // Adiciona um bullet e recria o conteúdo de texto e âncoras
    const bulletText = document.createTextNode('• ');
    li.appendChild(bulletText);
  
    anchors.forEach((anchor, index) => {
      li.appendChild(anchor); // Reinsere o âncora
      // Se não for o último âncora, adiciona um espaço depois dele
      if (index < anchors.length - 1) {
        li.appendChild(document.createTextNode(' '));
      }
    });
  
    // Se não houver âncoras, adiciona o texto original do li
    if (anchors.length === 0) {
      li.textContent += li.textContent.trim();
    }
  };
  
  const navigation = [];

  const titles = doc.querySelectorAll('h1, h2');
  titles.forEach(title => {
    const newTitle = doc.createElement('h2');
  
    // Normaliza o título para remover acentos e transforma em minúsculas
    let sanitizedText = title.textContent.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    // Substitui espaços por hífens e remove caracteres especiais não alfanuméricos
    let anchorId = sanitizedText.replace(/\s+/g, '-').replace(/[^a-z0-9\-]/g, '');
  
    newTitle.className = 'mt-4 px-2 py-2 text-2xl font-bold tracking-tight text-font-color-light w-full bg-brand-primary rounded-lg';
    newTitle.textContent = title.textContent;
    newTitle.id = anchorId; // Define o id da âncora no título, já normalizado
    title.replaceWith(newTitle);
  });
  

  titles.forEach((title, index) => {
    // Normaliza o título removendo acentos e transformando em minúsculas
    let sanitizedText = title.textContent.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    // Substitui espaços e caracteres especiais por hífens
    let anchorId = sanitizedText
      .replace(/\s+/g, '-')
      .replace(/[^a-z0-9-]/g, '');
  
    // Cria o objeto de navegação para este título
    const navItem = {
      name: title.textContent.trim(),
      href: `#${anchorId}`,
      current: index === 0
    };
  
    navigation.push(navItem);
  
    title.id = anchorId; // Adiciona o id ao título
  });
  
  // Para visualizar a saída ou usá-la em outro lugar
  console.log(JSON.stringify(navigation, null, 2));

  
  // Processamento de subtítulos
  const subtitles = doc.querySelectorAll('h3, h4, h5, h6');
  subtitles.forEach(subtitle => {
    const newSubtitle = doc.createElement('h3'); // Cria um novo elemento h3 para os subtítulos
    newSubtitle.className = 'text-subheading-4 font-semibold text-font-color-dark'; // Adiciona classes do Tailwind para estilizar como subtítulo
    newSubtitle.textContent = subtitle.textContent; // Define o texto do subtítulo
    subtitle.replaceWith(newSubtitle); // Substitui o subtítulo pelo novo elemento h3
  });

  // Processamento de parágrafos
  const paragraphs = doc.querySelectorAll('p, font, span');
  paragraphs.forEach(p => {
    p.className = 'mt-2 text-font-color-dark';
  });



  // Limpeza profunda e normalização de texto
const cleanAndNormalizeText = (element) => {
    const childNodes = Array.from(element.childNodes);
    let textContent = '';
  
    childNodes.forEach(node => {
      if (node.nodeType === Node.TEXT_NODE) {
        textContent += node.textContent.replace(/\s+/g, ' ').trim(); // Normaliza espaços
      } else if (node.nodeType === Node.ELEMENT_NODE) {
        textContent += cleanAndNormalizeText(node); // Recursão para elementos filho
      }
    });
  
    return textContent;
  };
  
// Função para extrair e limpar o texto de um elemento
const extractCleanText = (element) => {
    let text = '';
    if (element.childNodes.length > 0) {
      Array.from(element.childNodes).forEach(child => {
        if (child.nodeType === Node.TEXT_NODE) {
          text += child.textContent;
        } else if (child.nodeType === Node.ELEMENT_NODE && child.tagName.toLowerCase() !== 'font') {
          text += extractCleanText(child);
        }
      });
    } else {
      text = element.textContent;
    }
    return text.replace(/\s+/g, ' ').trim();
  };
  
  const links = doc.querySelectorAll('a');
  links.forEach(a => {
    // Extrai e limpa o texto
    let cleanText = extractCleanText(a);
    
    // Remove todos os filhos do elemento <a>
    while (a.firstChild) {
      a.removeChild(a.firstChild);
    }
    
    // Verifica se o texto extraído não é uma duplicação
    if (a.textContent.trim() !== cleanText) {
      a.textContent = cleanText;
    }
    
    // Adiciona classes do Tailwind
    a.className = 'text-brand-tertiary underline';
  });
  

  // Função para identificar e remover texto duplicado
const removeDuplicateText = (text) => {
  const halfIndex = Math.ceil(text.length / 2);
  const firstHalf = text.substr(0, halfIndex);
  const secondHalf = text.substr(halfIndex);

  // Verifica se a segunda metade do texto começa com a primeira metade
  if (secondHalf.startsWith(firstHalf)) {
    return firstHalf.trim(); // Retorna apenas a primeira metade
  }
  return text.trim(); // Retorna o texto original caso não haja duplicação
};

// Processamento dos links (tags <a>) depois de todo o processamento
const processLinks = (document) => {
  const links = document.querySelectorAll('a');
  links.forEach(a => {
    const text = a.textContent || a.innerText;
    const cleanText = removeDuplicateText(text);
    
    // Limpa o conteúdo do elemento <a> e aplica o texto limpo
    a.textContent = cleanText;

    // Aplica as classes do Tailwind
    a.className = 'text-brand-tertiary underline';
  });
};


// Função para adicionar bullets nos itens da lista
const addBulletsToListItems = (document) => {
  const listItems = document.querySelectorAll('li:not(:empty)');
  listItems.forEach(li => {
    // Verifica se o item da lista não é um título e não está vazio
    if (!li.querySelector('h1, h2, h3, h4, h5, h6') && li.textContent.trim()) {
      // Verifica se o texto do item da lista não começa já com um bullet
      if (!li.textContent.trim().startsWith('•')) {
        const bullet = document.createTextNode('• ');
        li.insertBefore(bullet, li.firstChild); // Adiciona o bullet no início do <li>
      }
      li.className = 'mt-2 text-font-color-dark'; // Adiciona classes do Tailwind
    }
  });
};
// Após todo o processamento, chame a função processLinks
addBulletsToListItems(doc);

// Após todo o processamento, chame a função processLinks
processLinks(doc);


  // Retorna o HTML limpo
  let finalHtml = doc.body.innerHTML;

  // Auto-fechamento de tags para JSX
  finalHtml = finalHtml.replace(/<img([^>]+)>/gi, '<img$1 />');
  finalHtml = finalHtml.replace(/<br\s*\/?>/gi, '<br />');

  return finalHtml;
};
