import './ListeProduits.scss';
import Produit from './Produit';
import lesProduits from './data/produits.json';

export default function ListeProduits() {
    
    return (
        <section id="Web" className="ListeProduits">
            <h2>Nos produits</h2>
            <div className="produits">
                {
                    lesProduits.map(p => <Produit key={p.id} nom={p.nom} prix={p.prix} pid={p.id} />)
                }
            </div>
        </section>
    );
}