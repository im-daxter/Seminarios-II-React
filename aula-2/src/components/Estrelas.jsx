export default function Estrelas({ nota }) {
  return (
    <div className="estrelas" role="img" aria-label={nota ? `Nota ${nota} de 5` : 'Sem nota'}>
      {[1, 2, 3, 4, 5].map((numero) => (
        <span key={numero} className={numero <= nota ? 'estrela acesa' : 'estrela'} aria-hidden="true">
          ★
        </span>
      ))}
    </div>
  )
}
