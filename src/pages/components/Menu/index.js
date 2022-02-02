import './menu.css';
import { BsYoutube, BsInstagram } from 'react-icons/bs';
import { Link } from 'react-router-dom';


function Menu() {
    return (
        <div className="menu">
            <a className="social" href="https://www.youtube.com/c/sujeitoprogramador">
                <BsYoutube size={24} color="#FFF"></BsYoutube>
            </a>

            <a className="social" href="https://www.instagram.com/sujeitoprogramador">
                <BsInstagram size={24} color="#FFF"></BsInstagram>
            </a>
            <Link className="menu-item" to="/links">Meus Links</Link>
        </div>
    );
}

export default Menu;