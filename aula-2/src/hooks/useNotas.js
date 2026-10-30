import useArmazenado from './useArmazenado.js'

export default function useNotas(filmes) {
  const [notas, setNotas] = useArmazenado('avaliador-notas', {})

  function avaliar(id, nota) {
    setNotas({ ...notas, [id]: nota })
  }

  const lista = filmes.filter((filme) => notas[filme.id]).map((filme) => notas[filme.id])
  const avaliados = lista.length
  const soma = lista.reduce((total, nota) => total + nota, 0)
  const media = avaliados > 0 ? soma / avaliados : 0

  return { notas, avaliar, avaliados, media }
}
