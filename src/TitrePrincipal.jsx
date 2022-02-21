import './TitrePrincipal.scss';
import Image from './Image';

export default function TitrePrincipal(){

    return (
        <section className="TitrePrincipal">
            <h1>Rémi Gervais</h1>
            <Image nom={"profil"} link="" infoimg="C'est moi! Pour en apprendre plus sur mes projets, continuez plus bas!" />
            <div className="TitrePrincipal__Introduction">
                <p>Après plusieurs années d'études en différents domaines, c'est en Web que j'ai trouvé ce que j'aime faire. J'ai toujours eu un penchant pour l'informatique, et c'est tout récemment que j'ai trouvé ma branche préférée.</p>
                <p>Je suis encore aux études et toujours ouvert d'esprit pour des nouvelles connaissances. J'ai hâte de débuter le long voyage du Web qui se trouve devant moi.</p>
            </div>
        </section>
    );
}