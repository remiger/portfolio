import ListeTravaux from './ListeTravaux';
import './SectionPresentation.scss';
import SousTitre from './SousTitre';


export default function SectionPresentation(props){
    return (
        <section className="SectionPresentation" id={props.nomsection}>
            <SousTitre nomsection={props.nomsection} />
            <h4>
                {props.description}
            </h4>
            <ListeTravaux travaux={props.travaux}/> 
        </section>
    );
}