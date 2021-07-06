import "./App.css";
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { Header, Footer } from "./components/Wrappers/index.jsx";
import Books from "./components/Books/Books";
import SingleBook from "./components/SingleBook/SingleBook";
import EditBook from "./components/EditBook/EditBook";
import CreateBook from "./components/CreateBook/CreateBook";

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Header />
        <main>
          <Switch>
            <Route path="/" exact><Redirect to="/books/read" /></Route>
            <Route path="/books/read" exact component={Books} />
            <Route path="/books/read/:id" exact component={SingleBook} />
            <Route path="/books/edit/:id" exact component={EditBook} />
            <Route path="/books/create" exact component={CreateBook} />
          </Switch>
        </main>

        <Footer />
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
