import './Produit.css';

export default function Produit() {
    return (
        <article className="Produit">
            <img src="images-produits/prd0002.webp" alt="T-shirt sport GapFit recyclé" />
            <div className="titre">T-shirt sport GapFit recyclé</div> 
            <div className="prix">13.95</div>
            <button>Ajouter au panier</button>
        </article>
    );
}