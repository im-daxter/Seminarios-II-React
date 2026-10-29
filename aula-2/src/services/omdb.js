const chave = import.meta.env.VITE_OMDB_KEY

export function buscarFilme(titulo) {
    console.log(chave)
    const url = `https://www.omdbapi.com/?t=${encodeURIComponent(titulo)}&type=movie&apikey=${chave}`
    console.log(url)

    return fetch(url)
        .then((resposta) => resposta.json())
        .then((dados) => {
            if (dados.Response === 'False') {
                throw new Error(dados.Error)
            }

            return {
                id: dados.imdbID,
                titulo: dados.Title,
                ano: dados.Year,
                imagem: dados.Poster,
            }
        })
}