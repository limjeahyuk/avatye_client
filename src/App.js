
import { Route, Routes } from 'react-router-dom';
import './App.css'
import Headers from './components/UI/header/Headers';
import Join from './pages/Login/Join';
import Login from './pages/Login/Login';
import Main from './pages/main/Main';

const App = () => {

  return (
    <div className="App">
      <Headers />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/login' element={<Login />} />
        <Route path='/join' element={<Join />} />
      </Routes>
    </div>
  );
}

export default App;
