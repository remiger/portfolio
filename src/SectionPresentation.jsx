import './SectionPresentation.scss';
import SousTitre from './SousTitre';


export default function SectionPresentation(props){
    return (
        <section className="SectionPresentation">
            <SousTitre nomsection={props.nomsection} />

        </section>
    );
}