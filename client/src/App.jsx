import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { Add } from "./pages/Add";
import { Edit } from "./pages/Edit";
import { Detail } from "./pages/Detail";

const App = () => {
  return (
    <>
      <Header />
      <div className="main">
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/add"} element={<Add />} />
          <Route path={"/edit/:id"} element={<Edit />} />
          <Route path={"/details/:id"} element={<Detail />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
