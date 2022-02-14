import './SousTitre.scss';

export default function SousTitre(props){
    return (
        <div className="SousTitre">
            <h2>{props.nomsection}</h2>
        </div>
    );
}