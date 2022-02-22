import './PiedPage.scss';
import piedpage from './data/entetes.json';
import Image from './Image';

export default function PiedPage() {
    return (
        <footer id={piedpage.map(id => id.idfooter)} className="PiedPage">
            <h1>Pour me contacter</h1>
            <div><Image infoimg="Cliquez pour télécharger mon CV" nom="CV" lien="pdf/CV_Remi_Gervais.pdf"/></div>
            <div>{new Date().getFullYear()} - Rémi Gervais</div>
        </footer>
    );
}