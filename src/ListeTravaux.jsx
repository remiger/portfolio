import './ListeTravaux.scss';
import Travail from './Travail';

export default function ListeTravaux(props){
    return (
        <div className="ListeTravaux">
            {props.travaux.map(travail => <Travail key={travail.key} titre={travail.titre} infoimg={travail.infoimg} langages={travail.langages} image={travail.image} resume={travail.resume} lien={travail.lien} date={travail.date}/>)}
        </div>
    );
}