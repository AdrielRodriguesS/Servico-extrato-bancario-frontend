import bank from '../../assets/img/bank.jpg'
import './styles.css'

function Header() {
    return (
      <header>
        <div className="logo-container">
          <img className="img"src={bank} alt="Banco" />
          <h1>Extrato Bancario</h1>
        </div>
      </header>
    )
  }

  export default Header;