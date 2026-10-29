import useNotas from './hooks/useNotas.js'
import Cabecalho from "./components/Cabecalho"
import Filme from "./components/Filme"

const filmes = [
  { id: 1, titulo: 'Indiana Jones e o Templo Perdido', ano: 1974, imagem: 'indiana_jones.png' },
  { id: 2, titulo: 'De Volta Para o Futuro', ano: 1986, imagem: 'De_Volta_Para_o_Futuro.jpg' },
  { id: 3, titulo: 'O Poderoso Chefão', ano: 1972, imagem: 'o_poderoso_chefao.jpg' },
]

export default function App() {
  const { notas, avaliar, avaliados, media } = useNotas()

  return (
    <>
    
      <Cabecalho avaliados={avaliados} total={filmes.length} media={media} />

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
