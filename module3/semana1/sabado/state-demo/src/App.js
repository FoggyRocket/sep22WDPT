import "./App.css";
import { EmptyMessage, FormGuest } from "./components";
function App() {

  return (
    <div className="App">

      <div className="section-guest">
        <FormGuest/>
        <div className="section-list">
          <EmptyMessage/>
        </div>
      </div>
    </div>
  );
}

export default App;
