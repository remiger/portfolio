import './ListeTravaux.scss';
import lesTravaux from './data/projets.json';
import Travail from './Travail';

export default function ListeTravaux(props){
    return (
        <div className="ListeTravaux">
            {props.travaux.map(travail => <Travail key={travail.key} titre={travail.titre} langages={travail.langages} image={travail.image} resume={travail.resume} lien={travail.lien} date={travail.date}/>)}
        </div>
    );
}