# Aula 5 - Avaliador de Filmes (projeto final)

Rodar:

```
npm install
npm run dev
```

Abra o endereço que aparecer (normalmente http://localhost:5173).

Assim como na aula 4, o projeto busca os filmes na API da OMDb e precisa da chave no arquivo `.env`.

## Chave da OMDb

Use a mesma chave da aula 4. Se o projeto da aula 4 já tem o `.env`, copie o arquivo para a pasta `aula5`. Se não, crie o `.env` a partir do exemplo e cole a chave:

```
copy .env.example .env
```

O passo a passo para conseguir a chave, e o limite de requisições, estão no `README.md` da pasta `aula4` e no `.env.example`. O `.env` não vai para o GitHub.

## Projeto final (`1-src-final/`)

É o código final da aula 4 (`aula4/3-src-meus-filmes/`) com as **estrelas** e o **CSS completo**. A pesquisa, a **Minha lista** e as notas salvas no navegador já vêm da aula 4:

- `components/Estrelas.jsx` - estrelas acesas conforme a nota (novo)
- `components/Avaliacao.jsx` - mostra as estrelas acima da barra de nota
- `App.jsx` - agrupa título, abas e busca em um `<header className="topo">` e dá a classe `erro` à mensagem de erro
- `index.css` - o CSS completo, com o visual final
- o resto (`hooks/`, `services/`, `Abas.jsx`, `Busca.jsx`, `Cabecalho.jsx`, `Filme.jsx`) - igual ao da aula 4

O `1-src-final/README.md` lista tudo o que mudou em relação à aula 4.

O `index.html` aponta para a pasta no `<script>`: `src="/1-src-final/main.jsx"`.

## Onde ficam os dados

A **Minha lista** e as notas ficam salvas no próprio navegador (`localStorage`), não em um servidor. Elas continuam depois de recarregar a página, mas só existem naquele navegador e naquele computador, e somem se os dados do navegador forem apagados.
