import './Image.scss';

export default function Image(props){
    return (
        <div className="Image">

            <div className="Image-inner">
                <div className="Image-front">
                    <a href={props.lien} rel="noreferrer" target="_blank">
                        <img src={"images/" + props.nom + ".jpg"} alt=""/>
                    </a>
                </div>
                <div className="Image-back">
                    <a href={props.lien} rel="noreferrer" target="_blank">
                        {props.infoimg}
                    </a>
                </div>
            </div>
        </div>
    );
}