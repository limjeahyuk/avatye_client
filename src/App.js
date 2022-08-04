
import { Route, Routes } from 'react-router-dom';
import './App.css'
import Headers from './components/UI/header/Headers';
import KakaoCallback from './pages/callback/KakaoCallback';
import Join from './pages/Login/Join';
import Login from './pages/Login/Login';
import Main from './pages/main/Main';
import Management from './pages/post/project-editor/Management';
import ProjectEditor from './pages/post/project-editor/ProjectEditor';
import Start from './pages/post/start/Start';

const App = () => {

  return (
    <div className="App">
      <Headers />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/login' element={<Login />} />
        <Route path='/join' element={<Join />} />
        <Route path='/start' element={<Start />} />
        <Route path='/project-editor/start' element={<ProjectEditor />} />
        <Route path='/project-editor/management' element={<Management />} />
        <Route path='/kakao/callback' element={<KakaoCallback /> } />
      </Routes>
    </div>
  );
}

export default App;
