import { useState } from 'react'

export default function useNotas() {
  const [notas, setNotas] = useState({})

  function avaliar(id, nota) {
    setNotas({ ...notas, [id]: nota })
  }

  const lista = Object.values(notas)
  const avaliados = lista.length
  const soma = lista.reduce((total, nota) => total + nota, 0)
  const media = avaliados > 0 ? soma / avaliados : 0

  return { notas, avaliar, avaliados, media }
}