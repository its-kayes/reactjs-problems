import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NumberToComponents from "./problems/give-number-get-component/NumberToComponents";
import JsNumberToComponents from "./problems/give-number-get-component/js/NumberToComponents";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/number-to-components" element={<NumberToComponents />} />
        <Route
          path="/js/number-to-components"
          element={<JsNumberToComponents />}
        />
      </Routes>
    </div>
  );
}

export default App;
