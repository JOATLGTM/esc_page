import NavBar from './NavBar'
import './App.css';
import Description from './Description'
import Product from './Product'

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="containers">
        <div>
          <Product/>
        </div>
        <div>
          <Description />
        </div>
      </div>
    </div>
  );
}

export default App;
