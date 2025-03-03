import Footer from './components/Footer'
import Navbar from './components/Navbar'
import ProductContainer from './components/ProductContainer'
import ServiceContainer from './components/ServiceContainer'
import { Topbar } from './components/Topbar'

function App() {
  return (
    <>
      <Topbar />
      <Navbar />
      <ProductContainer />
      <ServiceContainer />
      <Footer />
    </>
  )
}

export default App
