import './Entete.scss';
import Nav from './Nav';
import lesSections from './data/projets.json';
import entetes from './data/entetes.json';

export default function Entete() {
    return (
        <header className="Entete">
            <nav>
                {entetes.map(a => <Nav nomsection={a.idheader}/>)}
                {lesSections.map(a => <Nav nomsection={a.nomsection}/>)}
                {entetes.map(a => <Nav nomsection={a.idfooter}/>)}
            </nav>
        </header>
    );
}