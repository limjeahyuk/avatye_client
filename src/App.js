
import { Route, Routes } from 'react-router-dom';
import './App.css'
import Fame from './pages/fame/Fram';
import Headers from './components/UI/header/Headers';
import KakaoCallback from './pages/callback/KakaoCallback';
import EmailJoin from './pages/login/EmailJoin';
import EmailLogin from './pages/login/EmailLogin';
import Join from './pages/login/Join';
import Login from './pages/login/Login';
import Main from './pages/main/Main';
import Management from './pages/post/project-editor/Management';
import ProjectEditor from './pages/post/project-editor/ProjectEditor';
import Start from './pages/post/start/Start';
import Mypage from './pages/user/Mypage'

const App = () => {

  return (
    <div className="App">
      <Headers />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/login' element={<Login />} />
        <Route path='/join' element={<Join />} />
        <Route path='/login/email' element={<EmailLogin />} />
        <Route path='/join/email' element={<EmailJoin />} />
        <Route path='/start' element={<Start />} />
        <Route path='/project-editor/start' element={<ProjectEditor />} />
        <Route path='/project-editor/management' element={<Management />} />
        <Route path='/kakao/callback' element={<KakaoCallback /> } />
        <Route path='/mypage' element={<Mypage/>} />
        <Route path='/fame' element={<Fame/>} />
      </Routes>
    </div>
  );
}

export default App;
