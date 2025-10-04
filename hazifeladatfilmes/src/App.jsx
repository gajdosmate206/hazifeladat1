import { Routes, Route, Link } from "react-router-dom";
import Fooldal from "./Fooldal";
import Konyvkereso from "./Konyvkereso";
import Filmkereso from "./Filmkereso";

function App() {

  return (
    <>
     <div>
      <nav style={{ marginBottom: "20px"}}>
        <Link to="/">Nyitólap</Link>
        <Link to="/konyvkereso">Könyv Kereső</Link>
        <Link to="/filmkereso">Film Kereső</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Fooldal />} />
        <Route path="/konyvkereso" element={<Konyvkereso />}/>
        <Route path="/filmkereso" element={<Filmkereso />}/>
      </Routes>
     </div>
    </>
  )
}

export default App
