
import { Route, Routes } from 'react-router-dom';
import './App.css'
import Fame from './pages/fame/Fram';
import New from './pages/new/New';
import Headers from './components/ui/header/Headers';
import KakaoCallback from './pages/callback/KakaoCallback';
import EmailJoin from './pages/login/email/EmailJoin';
import EmailLogin from './pages/login/email/EmailLogin';
import Join from './pages/login/Join';
import Login from './pages/login/Login';
import Main from './pages/main/Main';
import ProjectEditor from './pages/post/project-editor/ProjectEditor';
import Start from './pages/post/start/Start';
import Mypage from './pages/user/Mypage'
import Footer from './components/ui/Footer';
//프로젝트 기본 정보 만들기
import CreateProject from './pages/post/project-editor/CreateProject';
import Otherpage from './pages/others/Otherpage';
import Deadline from './pages/deadline/Deadline';
import Tobe from './pages/tobe/Tobe';
import Detail from './pages/detail/Detail';
import HeartList from './pages/heartlist/HeartList';

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
        <Route path='/kakao/callback' element={<KakaoCallback /> } />
        <Route path='/mypage' element={<Mypage/>} />
        <Route path='/u/:params' element={<Otherpage/>} />
        <Route path='/fame' element={<Fame/>} />
        <Route path='/new' element={<New/>} />
        <Route path='/tobe' element={<Tobe/>} />
        <Route path='/deadline' element={<Deadline/>} />
        <Route path='/project-editor/create' element={<CreateProject />} />
        <Route path='/detail' element={<Detail/>} />
        <Route path='/heartprojects' element={<HeartList/>} />
        {/* path '/:sadasdsad' */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
