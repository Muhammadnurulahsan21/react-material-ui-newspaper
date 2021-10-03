import { Button, } from "@mui/material";
import "./App.css";
import Newspaper from "./components/news-paper/Newspaper";

function App() {
  return (
    <div className="App">
      <Button variant="text">Hello</Button>
      <Button variant="contained">Material</Button>
      <Button variant="outlined">UI</Button>
      <div className="news">
        <Newspaper></Newspaper>
      </div>
    </div>
  );
}

export default App;
