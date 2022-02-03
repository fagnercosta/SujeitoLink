
import { useState } from 'react'
import { FiLink } from 'react-icons/fi';
import './home.css';

import Menu from '../../components/Menu';
import LinkItem from '../../components/LinkItem';
function Home() {

    const [link, setLink] = useState('');
    const [showModal, setShowModal] = useState(false);

    function handleShortLInk() {
        setShowModal(true)
    }

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
                        value={link}
                        onChange={(e) => { setLink(e.target.value) }}
                    />
                </div>

                <button onClick={handleShortLInk}>Gerar Link</button>


            </div>

            <Menu></Menu>

            {showModal && (<LinkItem closeModal={() => setShowModal(false)} />)}
        </div>


    );
}

export default Home;