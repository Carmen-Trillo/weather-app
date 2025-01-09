import Linkedin from '../assets/linkedin.png';
import '../App.css';

export default function Footer() {
    return (
        <div id='footer'>
            <div id='social'>
                <a title="linkedin" href="https://www.linkedin.com/in/carmentrillonavarro/" target="_blank"><img src={Linkedin} alt="linkedin"/></a>
                <p id='autor'>Carmen Trillo Navarro</p>
            </div>
            <div>
                <p id='copyright'>©Copyright <strong>Weather-App 2025</strong>. Todos los derechos reservados</p>
            </div>
        </div>
    )
}