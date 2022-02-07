import './App.css';
import logo from './logo.svg';
import Navbar from './components/Navbar'
import Content from './components/Content'
import Navigation from './components/Navigation'

function App() {
  return (
    <div className="App">
    <div class="d-flex" id="wrapper">
    <Navbar/>
    <div id="page-content-wrapper">
        <Navigation/>
        <Content/>
    </div>
</div>
    </div>
  );
}

export default App;
