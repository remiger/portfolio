import './ListeProduits.css';
import Produit from './Produit';

export default function ListeProduits() {
    let a = 5;
    let b = a^4;
    return (
        <section className="ListeProduits">
            <h2>Nos produits</h2>
            <div className="produits">
                <Produit/>
                <Produit/>
                <Produit/>
                <Produit/>
                <Produit/>
                
            </div>
        </section>
    );
}