import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NumberToComponents from "./problems/give-number-get-component/NumberToComponents";
import JsNumberToComponents from "./problems/js/NumberToComponents";
import Nav from "./components/navbar/Nav";
import AllCountries from "./problems/js/AllCountries";
import ConstructorPrototype from "./problems/js/ConstructorPrototype";

function App() {
  return (
    <div className="p-4">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/number-to-components" element={<NumberToComponents />} />
        <Route path="/js/all-countries" element={<AllCountries />} />
        <Route
          path="/js/number-to-components"
          element={<JsNumberToComponents />}
        />
        <Route
          path="/js/constructor-prototype"
          element={<ConstructorPrototype />}
        />
      </Routes>
    </div>
  );
}

export default App;
