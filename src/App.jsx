import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Home from "./module-8_less-1/pages/Home/Home";
import Login from "./module-8_less-1/pages/Login/Login";
import Register from "./module-8_less-1/pages/Register/Register";
import Todos from "./module-8_less-1/pages/Todos/Todos";
import NotFound from "./module-8_less-1/pages/NotFound/NotFound";
import LayOut from "./LayOut";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LayOut />}>
          <Route path="/" element={<Home />} />
          <Route path="/todos" element={<Todos />} />
        </Route>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/register" element={<Register />} />


      </Routes>
    </>
  );
}

export default App;
