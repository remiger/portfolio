import './TexteDefaut.scss';

export default function TexteDefaut(props){
    return (
        <p className="TexteDefaut">
            {props.desc}
        </p>
    );
}