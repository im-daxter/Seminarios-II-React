import { useState } from 'react' 
import useFilmes from './hooks/useFilmes.js'
import useNotas from './hooks/useNotas.js'
import usePesquisa from './hooks/usePesquisa.js'
import Cabecalho from "./components/Cabecalho"
import Busca from './components/Busca.jsx'
import Filme from "./components/Filme"

const titulos = [
  'The Godfather',
  'Fight Club',
  'Indiana Jones and the Last Crusade',
  'A Bronx Tale',
  'White Chicks',
]

export default function App() {
  const { filmes, erro, carregando } = useFilmes(titulos)
  const { resultados, pesquisando, erroBusca, pesquisar } = usePesquisa()
  const [ busca, setBuscar ] = useState('')

  const lista = resultados ?? filmes
  const { notas, avaliar, avaliados, media } = useNotas(lista) 

  function limpar() {
    setBuscar('')
    pesquisar('')
  }

  return (
    <>
      <Cabecalho avaliados={avaliados} total={filmes.length} media={media} />
      <Busca
        valor={busca}
        onMudar={setBuscar} 
        onBuscar={() => pesquisar(busca)}
        onLimpar={limpar}
        buscando={pesquisando}
      />
      {erro && <p>{erro}</p>}
      {erroBusca && <p>{erroBusca}</p>}
      {carregando && <p className="carregando">Carregando filmes...</p>}
      {resultados && resultados.length === 0 && (
        <p className="vazio">Nenhum filme encontrado.</p>
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
          />
        ))}
      </main>
    </>
  )
}