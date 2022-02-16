import './ListeProjets.scss';
import lesProjets from './data/projets.json';
import SectionPresentation from './SectionPresentation';

export default function ListeProjets(){
    return (
        <div className="ListeProjets">
            {
                lesProjets.map(projet => <SectionPresentation key={projet.id} description={projet.description} nomsection={projet.nomsection} travaux={projet.travaux}/>)
            }
        </div>
    );
}