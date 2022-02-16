import './Nav.scss';

export default function Nav(props){
    return (
        <a className="Nav" href={"#" + props.nomsection}>
            {props.nomsection}
        </a>
    );
}