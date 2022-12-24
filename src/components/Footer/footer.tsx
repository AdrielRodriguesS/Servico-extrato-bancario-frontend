import github from '../../assets/img/GitHub.jpg'
import './style.css'


function Footer() {
    return (
        <footer>
            <div className="footer_divider"></div>
            <p className="footer_copy"> 
                <a className="footer_link" href="https://github.com/AdrielRodriguesS" target="_blank">
                <img className="img"src={github} alt="github" /></a>
                <a className='footer_name'
                href="https://www.linkedin.com/in/adriel-rodrigues-70706551/" target="_blank"> Adriel Rodrigues / 2022</a>
            </p>
        </footer>
    )
    
}
  export default Footer;