import './links.css';
import { useState, useEffect } from 'react'
import { FiArrowLeft, FiLink, FiTrash, FiAlertTriangle } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { getLinks, deleteLink } from '../../services/storeLinks'
import LinkItem from '../../components/LinkItem';
import Alert from '../../components/Alert';

function Links() {

    const [myLinks, setMyLinks] = useState([]);
    const [data, setData] = useState({});
    const [showModal, setShowModal] = useState(false);

    const [emptyList, setEmptyList] = useState(false);


    useEffect(() => {
        async function loadLinks() {
            const result = await getLinks('@encurtaLink');
            if (result.length === 0) {
                setEmptyList(true);
            }
            console.log('Passou aqui...')

            setMyLinks(result);

        }

        loadLinks();
    }, []);

    function handleOpenLink(link) {
        setData(link)
        setShowModal(true)

    }

    async function handleDelete(linkId) {
        const result = await deleteLink(myLinks, linkId);
        if (result.length === 0) {
            setEmptyList(true);
            setShowModal(false);
        }

        setMyLinks(result);

    }

    return (
        <div className="links-container">
            <div className="links-header">
                <Link to="/">
                    <FiArrowLeft size={38} color="#FFF" />
                </Link>
                <h1>Meus Links</h1>
            </div>

            {emptyList && (
                <div className="empty-links-item">
                    <FiAlertTriangle size={50} color="#FFF"></FiAlertTriangle>
                    <h2 className="empty-text">Sua lista de Links está vázia!</h2>
                </div>
            )}

            {myLinks.map(link => (
                <div key={link.id} className="links-item">
                    <button className="link"
                        onClick={() => handleOpenLink(link)}>
                        <FiLink size={18} color="#FFF" />
                        {link.long_url}
                    </button>


                    <button className="link-delete" onClick={() => handleDelete(link.id)}>
                        <FiTrash size={28} color="#FF5454" />
                    </button>
                </div>
            ))}


            {showModal && (
                <LinkItem
                    closeModal={() => setShowModal(false)}
                    content={data}
                />

            )}
        </div>
    );
}

export default Links;