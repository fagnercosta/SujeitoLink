
import { FiLink } from 'react-icons/fi';
import './home.css';

import Menu from '../components/Menu';
function Home() {
    return (
        <div className="container-home">
            <div className="logo">
                <img src="/logo.png" alt="Logo" />
                <h1>SujeitoLink</h1>
                <span>Cole seu link para encurtar</span>
            </div>

            <div className="area-input">
                <div>
                    <FiLink size={24} color="#FFF" />
                    <input
                        type="text"
                        placeholder="Cole seu link aqui..."
                        name="link"
                    />
                </div>

                <button>Gerar Link</button>


            </div>

            <Menu></Menu>
        </div>


    );
}

export default Home;