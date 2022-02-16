import './PiedPage.scss';
import piedpage from './data/entetes.json';

export default function PiedPage() {
    return (
        <footer id={piedpage.map(id => id.idfooter)} className="PiedPage">
            &copy;{new Date().getFullYear()} - TIM Maisonneuve - Tous droits réservés
        </footer>
    );
}