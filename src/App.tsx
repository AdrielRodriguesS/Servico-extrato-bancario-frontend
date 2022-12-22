import Header from './components/Header/header'
import Footer from './components/Footer/footer'
import Body from './components/Body/transacoes'

function App() {

  return (
    <>
    <Header />
    <main>
        <section id="body">
          <div className="container">
            <Body />
          </div>
        </section>
    </main>
    <Footer />    
    </>
  )
}

export default App
