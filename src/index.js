import React from "react";
import { render } from "react-dom";
import {BrowserRouter, Match, Miss} from "react-router";
import StorePicker from "./components/StorePicker"
import NotFound from "./components/NotFound"
import App from "./components/App"
import "./css/style.css"

const Root = () => {
  return (
    <BrowserRouter>
    <div>
      <Match exactly pattern="/" component={StorePicker} />
      <Match pattern="/store/:storeId" component={App} />
      <Miss component={NotFound}/>
      </div>
    </BrowserRouter>
    )
}

render(<Root />, document.querySelector("#main"));
