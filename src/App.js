import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import BooksContainer from './pages/BooksContainer';
import Categories from './pages/Categories';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<BooksContainer />} />
        <Route path="categories" element={<Categories />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
