import Home from './components/Home';
import "antd/dist/antd.css";
import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Login from './components/LoginComponent';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/login' exact element={<Login/>}/>
        </Routes>

    </BrowserRouter>
    </div>
  );
}

export default App;
