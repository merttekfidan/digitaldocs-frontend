import {Outlet} from 'react-router-dom'
import './App.css';
import Main from './Layouts/Main'




function App() {
  return (
    <div className="App">
      <Main>
        <Outlet/>
      </Main>
    </div>
  );
}

export default App;
