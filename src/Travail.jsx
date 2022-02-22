import Image from './Image';
import './Travail.scss';

export default function Travail(props){
    console.log(props.langages);
    return (
        <div className="Travail">
            <h3>{props.titre}</h3>
            <Image nom={props.image} lien={props.lien} infoimg={props.infoimg}/>
            <div>
                {props.resume}
                <h4>Liste des outils/langages utilisés</h4>
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