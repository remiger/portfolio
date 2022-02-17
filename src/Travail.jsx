import Image from './Image';
import './Travail.scss';
import TexteDefaut from './TexteDefaut';

export default function Travail(props){
    console.log(props.langages);
    return (
        <div className="Travail">
            <h2>{props.titre}</h2>
            <Image nom={props.image} lien={props.lien}/>
            <div>
                {props.resume}
                <h3>Liste des outils/langages utilisés</h3>
                <ul>
                    {props.langages.map(langage => <li>{langage}</li>)}
                </ul>
            </div>
            <div>
                {props.date}
            </div>
        </div>
    );
}