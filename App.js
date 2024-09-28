import {BrowserRouter,Routes,Route} from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Menu from './pages/Menu'
import Pagenotfound from './pages/Pagenotfound'
function App(){
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/About' element={<About/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/Menu' element={<Menu/>}/>
        <Route path='*' element={<Pagenotfound/>}/>
        
</Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
