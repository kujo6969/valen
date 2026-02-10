import "./App.css";
import NoButton from "./components/NoButton";
import YesButton from "./components/YesButton";

function App() {
  return (
    <div className="flex flex-row">
      <YesButton />
      <NoButton />
    </div>
  );
}

export default App;
