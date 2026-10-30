const chave = import.meta.env.VITE_OMDB_KEY

export function pesquisarFilmes(texto) {
  const url = `https://www.omdbapi.com/?s=${encodeURIComponent(texto)}&type=movie&apikey=${chave}`

  return fetch(url)
    .then((resposta) => resposta.json())
    .then((dados) => {
      if (dados.Response === 'False') {
        if (dados.Error === 'Movie not found!') {
          return []
        }
        throw new Error(dados.Error)
      }

      return dados.Search.map((filme) => ({
        id: filme.imdbID,
        titulo: filme.Title,
        ano: filme.Year,
        imagem: filme.Poster,
      }))
    })
}
