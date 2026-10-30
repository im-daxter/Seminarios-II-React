import useArmazenado from './useArmazenado.js'

export default function useMinhaLista() {
  const [minhaLista, setMinhaLista] = useArmazenado('avaliador-minha-lista', [])

  function estaNaLista(id) {
    return minhaLista.some((filme) => filme.id === id)
  }

  function alternar(filme) {
    if (estaNaLista(filme.id)) {
      setMinhaLista(minhaLista.filter((item) => item.id !== filme.id))
    } else {
      setMinhaLista([...minhaLista, filme])
    }
  }

  return { minhaLista, estaNaLista, alternar }
}
