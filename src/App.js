import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import HomePage from './Pages/HomePage';
import ViewPage from './Pages/ViewPage';
import CreatePage from './Pages/CreatePage';
import DeletePage from './Pages/DeletePage';
import UpdatePage from './Pages/UpdatePage';
function App() {
  return (
    <BrowserRouter>
    <NavBar/>
    
    <Routes>
      <Route path='/' element={<HomePage></HomePage>}></Route>
      <Route path='/view' element={<ViewPage></ViewPage>}></Route>
      <Route path='/create' element={<CreatePage></CreatePage>}></Route>
      <Route path='/delete' element={<DeletePage></DeletePage>}></Route>
      <Route path='/update' element={<UpdatePage></UpdatePage>}></Route>
    </Routes>
    </BrowserRouter>
      
      
       
    
  );
}

export default App;
