import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './components/Main';
import Detail from './components/Detail';
import Update from './components/Update';
import AddDream from './components/AddDream';
import About from './components/About';

function App() {

  return(
    <div className='App'>
    <BrowserRouter>
      <Routes>
        <Route element={<Main/>} path='/dream' default/>
        <Route element={<AddDream/>} path='/dream/add' />
        <Route element={<Detail/>} path='/dream/:id'/>
        <Route element={<Update/>} path='dream/edit/:id'/>
        <Route element={<About />} path='/about' />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
