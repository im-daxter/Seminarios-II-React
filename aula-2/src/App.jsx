import { useState } from 'react'
import usePesquisa from './hooks/usePesquisa.js'
import useMinhaLista from './hooks/useMinhaLista.js'
import useNotas from './hooks/useNotas.js'
import Cabecalho from './components/Cabecalho.jsx'
import Abas from './components/Abas.jsx'
import Busca from './components/Busca.jsx'
import Filme from './components/Filme.jsx'

export default function App() {
  const { resultados, pesquisando, erroBusca, pesquisar } = usePesquisa()
  const { minhaLista, estaNaLista, alternar } = useMinhaLista()
  const [busca, setBusca] = useState('')
  const [aba, setAba] = useState('pesquisa')

  const naPesquisa = aba === 'pesquisa'
  const lista = naPesquisa ? resultados ?? [] : minhaLista
  const { notas, avaliar, avaliados, media } = useNotas(lista)

  function limpar() {
    setBusca('')
    pesquisar('')
  }

  return (
    <>
      <header className="topo">
        <Cabecalho avaliados={avaliados} total={lista.length} media={media} />
        <Abas atual={aba} onMudar={setAba} quantidade={minhaLista.length} />
        {naPesquisa && (
          <Busca
            valor={busca}
            onMudar={setBusca}
            onBuscar={() => pesquisar(busca)}
            onLimpar={limpar}
            buscando={pesquisando}
          />
        )}
      </header>
      {naPesquisa && erroBusca && <p className="erro">{erroBusca}</p>}
      {naPesquisa && !resultados && (
        <p className="vazio">Busque um filme pelo título (em inglês) para começar.</p>
      )}
      {naPesquisa && resultados && resultados.length === 0 && (
        <p className="vazio">Nenhum filme encontrado.</p>
      )}
      {!naPesquisa && minhaLista.length === 0 && (
        <p className="vazio">Sua lista está vazia. Adicione filmes pela pesquisa.</p>
      )}

      <main className="lista">
        {lista.map((filme) => (
          <Filme
            key={filme.id}
            titulo={filme.titulo}
            ano={filme.ano}
            imagem={filme.imagem}
            nota={notas[filme.id]}
            onAvaliar={(nota) => avaliar(filme.id, nota)}
            naLista={estaNaLista(filme.id)}
            onAlternarLista={() => alternar(filme)}
          />
        ))}
      </main>
    </>
  )
}
