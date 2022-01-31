import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Navbar />} exact></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
