import bank from '../../assets/img/bank.jpg'
import './styles.css'

function Header() {
    return (
      <header>
        <div className="logo-container">
          <img className="img"src={bank} alt="Banco" />
          <h1>Extrato Bancario</h1>
          <p>
            Desenvolvido por
            <a className='link' href="https://www.linkedin.com/in/adriel-rodrigues-70706551/" target="_blank"> Adriel Rodrigues</a>
          </p>
        </div>
      </header>
    )
  }

  export default Header;