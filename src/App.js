import "./App.css";
import { Header, Footer } from "./components/Wrappers/index.jsx";
import Books from "./components/Books/Books";


function App() {
  return (
    <>
      <Header />
      <Books />
      <Footer />
    </>
  );
}

export default App;
