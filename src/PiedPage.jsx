import './PiedPage.scss';

export default function PiedPage() {
    return (
        <footer id="PiedPage" className="PiedPage">
            &copy;{new Date().getFullYear()} - TIM Maisonneuve - Tous droits réservés
        </footer>
    );
}