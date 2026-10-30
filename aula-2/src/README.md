# Aula 5: projeto final

Parte do código final da aula 4 (`aula4/3-src-meus-filmes/`) e acrescenta o **visual final**: as **estrelas** e o **CSS completo**.

Antes de rodar, veja no `README.md` da pasta `aula5` como colocar a chave no arquivo `.env`.

## O que mudou no código

- Novo arquivo `components/Estrelas.jsx`: recebe a `nota` e desenha 5 estrelas (`★`). Cada estrela cuja posição é menor ou igual à nota ganha a classe `acesa`. Também tem um texto para leitores de tela ("Nota 4 de 5" ou "Sem nota").
- `components/Avaliacao.jsx`: importa o `Estrelas` e mostra `<Estrelas nota={nota} />` acima da barra de nota.
- `App.jsx`:
  - o `<Cabecalho />`, o `<Abas />` e o `<Busca />` ficam dentro de um `<header className="topo">`;
  - a mensagem de erro da pesquisa ganha a classe `erro`.
- `index.css`: é **substituído** pelo arquivo completo, que o professor entrega pronto (o aluno só cola). Ele tem:
  - as cores em variáveis no começo do arquivo (para trocar o visual em um lugar só), com tema escuro e tema claro automático, conforme o computador do aluno;
  - o topo com título em degradê, resumo em destaque, abas em formato de pílula e campo de busca com ícone e botões;
  - a lista de filmes em grade, que ajusta o número de colunas à largura da tela;
  - os cards com pôster, efeito ao passar o mouse e borda dourada nos filmes que estão na minha lista;
  - as estrelas acesas com brilho dourado e a barra de nota personalizada;
  - o botão de adicionar (`+`) e de remover (`✓`) da minha lista, que fica vermelho ao passar o mouse sobre um filme já adicionado;
  - as mensagens de carregando, de nenhum resultado, de lista vazia e de erro;
  - ajustes para celular e para quem prefere menos movimento.
- Todo o resto (`hooks/`, `services/`, `Abas.jsx`, `Busca.jsx`, `Cabecalho.jsx`, `Filme.jsx` e o `main.jsx`) continua igual ao da aula 4.

## O que mudou na tela

- Visual novo: tema escuro (ou claro, conforme o computador), cards em grade com pôster e layout adaptado ao celular.
- Cada filme mostra 5 estrelas acima da barra de nota. Sem nota, ficam cinzas. Ao mexer na barra, as estrelas se acendem até a nota escolhida: nota 4 acende 4 estrelas.
- O comportamento é o mesmo da aula 4: pesquisa, Minha lista e notas salvas no navegador.
