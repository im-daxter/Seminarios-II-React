import Avaliacao from './Avaliacao.jsx'

export default function Filme({ titulo, ano, imagem, nota, onAvaliar, naLista, onAlternarLista }) {
  return (
    <article className="filme">
      <img src={imagem} alt={`Pôster de ${titulo}`} width="160" />
      <h2>{titulo}</h2>
      <p>{ano}</p>
      <Avaliacao nota={nota} onAvaliar={onAvaliar} />
      <button
        type="button"
        className={naLista ? 'botao-lista ativo' : 'botao-lista'}
        onClick={onAlternarLista}
      >
        {naLista ? 'Remover da minha lista' : 'Adicionar à minha lista'}
      </button>
    </article>
  )
}
