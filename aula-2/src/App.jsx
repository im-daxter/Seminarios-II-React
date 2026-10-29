import useFilmes from './hooks/useFilmes.js'
import useNotas from './hooks/useNotas.js'
import Cabecalho from "./components/Cabecalho"
import Filme from "./components/Filme"

/*
const filmes = [
  { id: 1, titulo: 'Indiana Jones e o Templo Perdido', ano: 1974, imagem: 'indiana_jones.png' },
  { id: 2, titulo: 'De Volta Para o Futuro', ano: 1986, imagem: 'De_Volta_Para_o_Futuro.jpg' },
  { id: 3, titulo: 'O Poderoso Chefão', ano: 1972, imagem: 'o_poderoso_chefao.jpg' },
]
*/

const titulos = [
  'Interestelar',
  'The Godfather',
  'Fight Club',
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
