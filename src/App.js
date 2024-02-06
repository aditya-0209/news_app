import EveryNews from './pages/EveryNews';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TopHeadline from './pages/TopHeadline';
import Sources from './pages/sources';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TopHeadline />} />
        <Route path="/everything" element={<EveryNews />} />
        <Route path='/source' element={<Sources/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
  