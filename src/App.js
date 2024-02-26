import logo from './logo.svg';
import './App.css';
import AddWatch from './components/AddWatch';
import SearchWatch from './components/SearchWatch';
import DeleteWatch from './components/DeleteWatch';
import ViewAll from './components/ViewAll';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<AddWatch/>}/>
        <Route path='/search' element={<SearchWatch/>}/>
        <Route path='/delete' element={<DeleteWatch/>}/>
        <Route path='/view' element={<ViewAll/>}/>
        
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
