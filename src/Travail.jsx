import Image from './Image';
import './Travail.scss';
import TexteDefaut from './TexteDefaut';

export default function Travail(props){
    return (
        <div className="Travail">
            <h3>{props.titre}</h3>
            <Image nom={props.image} />
            <div>
                {props.resume}
                <ul>
                    {props.langages.map(l => <TexteDefaut desc={l.langages} />)}
                </ul>
            </div>
            {props.lien}<br/>
            <div>
                {props.date}
            </div>
        </div>
    );
}