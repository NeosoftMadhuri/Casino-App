import React from "react";

import Header from "./components/PageHeader/Header";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import {Paper} from '@material-ui/core/Paper'
import { urlAlphabet } from "nanoid";

function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
