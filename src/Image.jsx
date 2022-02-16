import './Image.scss';

export default function Image(props){
    return (
        <div className="Image">
            <img src={"images/" + props.nom + ".jpg"} alt=""/>
        </div>
    );
}