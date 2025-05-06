// Estrutura de dados: array de notícias
let noticias = [
    { id: 1, titulo: "Notícia 1", conteudo: "Conteúdo da Notícia 1" },
    { id: 2, titulo: "Notícia 2", conteudo: "Conteúdo da Notícia 2" },
    { id: 3, titulo: "Notícia 3", conteudo: "Conteúdo da Notícia 3" }
  ];
  
  let historico = []; // Pilha de navegação
  let indiceAtual = 0;
  
  // Exibir a notícia atual
  function exibirNoticia() {
    const noticia = noticias[indiceAtual];
    if (!noticia) return;
    document.getElementById("titulo").innerText = `${noticia.titulo} (ID: ${noticia.id})`;
    document.getElementById("conteudo").innerText = noticia.conteudo;
    historico.push(indiceAtual);
  }
  
  // Navegação
  function proxima() {
    if (indiceAtual < noticias.length - 1) {
      historico.push(indiceAtual);
      indiceAtual++;
      exibirNoticia();
    }
  }
  
  function anterior() {
    if (indiceAtual > 0) {
      historico.push(indiceAtual);
      indiceAtual--;
      exibirNoticia();
    }
  }
  
  function voltar() {
    historico.pop(); // Descarta a atual
    const anterior = historico.pop(); // Pega a anterior
    if (anterior !== undefined) {
      indiceAtual = anterior;
      exibirNoticia();
    }
  }
  
  // Adicionar nova notícia
  function adicionarNoticia() {
    const titulo = document.getElementById("novoTitulo").value;
    const conteudo = document.getElementById("novoConteudo").value;
    if (titulo && conteudo) {
      const novoId = noticias.length > 0 ? noticias[noticias.length - 1].id + 1 : 1;
      noticias.push({ id: novoId, titulo, conteudo });
      alert("Notícia adicionada!");
      document.getElementById("novoTitulo").value = "";
      document.getElementById("novoConteudo").value = "";
    } else {
      alert("Preencha título e conteúdo!");
    }
  }
  
  // Remover notícia por ID
  function removerNoticia() {
    const id = parseInt(document.getElementById("removerId").value);
    const index = noticias.findIndex(n => n.id === id);
    if (index !== -1) {
      noticias.splice(index, 1);
      alert(`Notícia ID ${id} removida!`);
      if (indiceAtual >= noticias.length) {
        indiceAtual = noticias.length - 1;
      }
      exibirNoticia();
    } else {
      alert("ID não encontrado!");
    }
  }
  
  // Inicializar a primeira notícia
  window.onload = exibirNoticia;
  