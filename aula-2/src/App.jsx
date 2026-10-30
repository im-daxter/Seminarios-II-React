import useFilmes from './hooks/useFilmes.js'
import useNotas from './hooks/useNotas.js'
import Cabecalho from "./components/Cabecalho"
import Filme from "./components/Filme"

const titulos = [
  'The Godfather',
  'Fight Club',
  'Indiana Jones and the Last Crusade',
  'Indiana Jones and the Temple of Doom',
  'A Bronx Tale',
]

export default function App() {
  const { filmes, erro, carregando } = useFilmes(titulos)
  const { notas, avaliar, avaliados, media } = useNotas()

  return (
    <>
    
      <Cabecalho avaliados={avaliados} total={filmes.length} media={media} />
      {erro && <p>{erro}</p>}
      {carregando && <p className="carregando">Carregando filmes...</p>}

      <main className="lista">
        {filmes.map((filme) => (
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
