import { Route, Routes } from 'react-router-dom';
import './App.css'
import Headers from './components/UI/header/Headers';
import Main from './pages/main/Main';

const App = () => {
  return (
    <div className="App">
      <Headers />
      <Routes>
        <Route path='/' element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
