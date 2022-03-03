import {
    Routes,
    Route,
  } from "react-router-dom";

import App from './App';
import Dashboard from './Pages/Dashboard'
import Test from './Pages/Test'
import Test2 from './Pages/Test2'
import DocDetails from './Pages/DocDetails'

function Router() {
    return ( 
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/" element={<Dashboard />}/>
            <Route path="test" element={<Test />} />
            <Route path="test2" element={<Test2 />} />
            <Route path="/doc-details/:id" element={<DocDetails />}/>
          </Route>
        </Routes>
     );
}

export default Router;