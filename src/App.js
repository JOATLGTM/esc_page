import NavBar from './NavBar'
import './App.css';
import Description from './Description'
import Product from './Product'
import Footer from './Footer'

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="containers">
        <div className="padd">
          <Product/>
        </div>
        <div className="padd ing">
          <Description />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
