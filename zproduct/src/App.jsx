import {Routes, Route} from "react-router-dom"

import HomePage from "./pages/Home";
import BookPage from "./pages/Book";
import PackagesPage from "./pages/Packages";
import Header from "./pages/Header";

function App() {
  return (
    <div className="App">
     <Header/>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/book" element={<BookPage />} />
        <Route path="/packages" element={<PackagesPage />} />
      </Routes>
    </div>
  );
}

export default App;
