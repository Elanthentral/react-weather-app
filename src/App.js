import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Weather from "./Weather";
import SearchFilter from "./SearchFilter";

function App() {
  return (
    <div className="App">
      <Weather />
      <SearchFilter />
    </div>
  );
}

export default App;
