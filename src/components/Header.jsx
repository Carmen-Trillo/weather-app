import elTiempo from '../assets/eltiempo.jpg';
import '../App.css';

export default function Footer() {
    return (
        <div id='header'>
            <img src={elTiempo} alt="El Tiempo" class="imgHeader"  style={{ width: '95vw', height: '30vh', objectFit: 'cover' }} />
        </div>
    )
}