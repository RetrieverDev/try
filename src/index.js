import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { render } from "react-dom";
import App from "./App";

const rootElement = document.getElementById("root");
const DATA_URL =
  "https://raw.githubusercontent.com/visgl/deck.gl-data/master/examples/3d-heatmap/heatmap-data.csv"; // eslint-disabl

require("d3-request").csv(DATA_URL, (error, response) => {
  if (!error) {
    const data = response.map((d) => [Number(d.lng), Number(d.lat)]);
    render(<App data={data} />, rootElement);
  }
});
