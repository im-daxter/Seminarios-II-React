export default function Abas({ atual, onMudar, quantidade }) {
  return (
    <nav className="abas">
      <button
        type="button"
        className={atual === 'pesquisa' ? 'aba ativa' : 'aba'}
        onClick={() => onMudar('pesquisa')}
      >
        Pesquisa
      </button>
      <button
        type="button"
        className={atual === 'minhaLista' ? 'aba ativa' : 'aba'}
        onClick={() => onMudar('minhaLista')}
      >
        Minha lista ({quantidade})
      </button>
    </nav>
  )
}
