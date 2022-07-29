import Pokemon from '../../assets/1.png';
import './style.css'

export function CardInfo() {
    return (
        <div class="info">
            <div className="left">
                <span className="name">Nome: Bulbassauro</span>
                <p>PokeDex: 50</p>
                <p>Peso: 20kg</p>
            </div>
            <div className="right">
                <img src={Pokemon} alt="Pokemon" />
            </div>
        </div>
    )
}
