import './Image.scss';

export default function Image(props){
    return (
        <div className="Image">
            <a href={props.lien} rel="noreferrer" target="_blank">
                <img src={"images/" + props.nom + ".jpg"} alt=""/>
            </a>
            
        </div>
    );
}