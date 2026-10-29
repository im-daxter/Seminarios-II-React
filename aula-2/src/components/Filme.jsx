import Avaliacao from "./Avaliacao";

export default function Filme({ titulo, ano, imagem, nota, onAvaliar }) {
    
    const caminho = new URL(`../assets/${imagem}`, import.meta.url).href
        
    return (
        <article className="filme">
            <img src={caminho} alt={`Pôster de ${titulo}`} width="160" />
            <h2>{titulo}</h2>
            <p>{ano}</p>
            <Avaliacao nota={nota} onAvaliar={onAvaliar} />
        </article>
    )
}