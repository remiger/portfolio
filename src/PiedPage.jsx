import './PiedPage.scss';
import piedpage from './data/entetes.json';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function PiedPage() {
    return (
        <footer id={piedpage.map(id => id.idfooter)} className="PiedPage">
            <h1>Pour me contacter</h1>
            <div className="PiedPage__CV">
                <a href="https://ca.linkedin.com/in/r%C3%A9mi-gervais-24a6a9180" rel="noreferrer" target="_blank" >
                    <LinkedInIcon sx={{ fontSize: 45 }} />
                </a>
                <a href="https://github.com/remiger" rel="noreferrer" target="_blank">
                    <GitHubIcon sx={{ fontSize: 40 }} />
                </a>
                <a href="pdf/CV_Remi_Gervais.pdf" rel="noreferrer" target="_blank">
                    <button>Télécharger mon CV</button>
                </a>
            </div>
            <div>&copy;{new Date().getFullYear()} - Rémi Gervais</div>
        </footer>
    );
}