import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Rating from "./routes/Rating";
import Downloads from "./routes/Downlaods";
import Likes from "./routes/Likes";
import Navigation from "./components/Navigation";
import Detail from "./routes/Details";
import "./App.css";

function App() {
  return (
    <HashRouter>
      <Navigation/>
      <Route path="/" exact={true} component={Downloads} />
      <Route path="/rating" component={Rating} />
      <Route path="/likes" component={Likes} />
      <Route path="/movie/:id" component={Detail}/>
    </HashRouter>
  );
}

export default App;