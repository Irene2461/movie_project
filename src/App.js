
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom';
import Detail from './pages/Detail/Detail';
import Homes from './pages/Homes/Homes';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import HomeTemplate from './Templates/HomeTemplates/HomeTemplate';
import UserTemplate from './Templates/UserTemplates/UserTemplate';
// Thu vien giup chuyen huong trang
import {createBrowserHistory} from 'history'
import Checkout from './pages/Checkout/Checkout';
import Loading from './Component/Loading/Loading';
import { AdminTemplate } from './Templates/AdminTemplate/AdminTemplate';
import AdminPage from './pages/AdminPage/AdminPage';
import QuanLyPhim from './pages/AdminPage/QuanLyPhim/QuanLyPhim';
import ThemPhim from './pages/AdminPage/QuanLyPhim/ThemPhim';
import ThemLichChieu from './pages/AdminPage/QuanLyLichChieu/ThemLichChieu';
import UserAccount from './pages/UserAccount/UserAccount';
import UserHistory from './pages/UserAccount/UserHistory/UserHistory';
import Search from './pages/Search/Search';

export const history = createBrowserHistory();


function App() {
  return (
    <Router history ={history}>
    <Loading/>
      <Switch>
        <HomeTemplate exact path="/home" component={Homes}/>
        <UserTemplate exact path="/login" component={Login}/>
        <HomeTemplate exact path="/timkiem/:id" component={Search}/>
        <HomeTemplate exact path="/detail/:postId" component={Detail} />
        <UserTemplate exact path="/register" component={Register} />
        <HomeTemplate exact path="/checkout/:id" component={Checkout}/>
        <HomeTemplate exact path="/useraccount/:id" component={UserAccount}/>
        <AdminTemplate exact path="/admin" component={AdminPage}/>
        <AdminTemplate exact path="/admin/films" component={QuanLyPhim}/>
        <AdminTemplate exact path="/admin/addfilm" component={ThemPhim}/>
        <AdminTemplate exact path="/admin/addlichchieu" component={ThemLichChieu} />
        <HomeTemplate component={Homes}/>
      </Switch>
    </Router>

  );
}

export default App;
