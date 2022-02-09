import './ListeProduits.css';

export default function ListeProduits() {
    let a = 5;
    let b = a^4;
    return (
        <section className="ListeProduits">
            <h2>Nos produits</h2>
            <div>
                
                <article>Produit 2</article>
                <article>Produit 3</article>
                <article>Produit 4</article>
                <article>Produit 5</article>
            </div>
        </section>
    );
}