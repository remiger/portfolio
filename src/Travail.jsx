import Image from './Image';
import './Travail.scss';
import TexteDefaut from './TexteDefaut';

export default function Travail(props){
    console.log(props.langages);
    return (
        <div className="Travail">
            <h3>{props.titre}</h3>
            <Image nom={props.image} lien={props.lien}/>
            <div>
                {props.resume}
                <ul>
                    {props.langages.map(langage => <li>{langage}</li>)}
                </ul>
            </div>
            {props.lien}<br/>
            <div>
                {props.date}
            </div>
        </div>
    );
}