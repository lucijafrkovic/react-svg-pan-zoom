import React from "react";
import { UncontrolledReactSVGPanZoom } from "react-svg-pan-zoom";
import {
  ReactSvgPanZoomLoader,
  SvgLoaderSelectElement,
} from "react-svg-pan-zoom-loader";

function App() {
  const selectors = ["#AB_01_170A", "#AB_01_170B", "#AB_01_106", "#AB_01_166I"];

  return (
    <ReactSvgPanZoomLoader
      src="floorPlanExample2.svg"
      proxy={selectors.map((item) => {
        return (
          <SvgLoaderSelectElement
            selector={item}
            fill={"yellow"}
            onClick={(e) => alert("selector selected " + item)}
          />
        );
      })}
      render={(content) => (
        <UncontrolledReactSVGPanZoom
          onClick={(ev) => {
            console.log(ev.x, ev.y, ev.originalEvent.target);
            console.log(ev.originalEvent.target);
          }}
          toolbarProps={{ position: "none" }}
          miniatureProps={{ position: "none" }}
          background="#ffffff"
          width={"500"}
          height={"500"}
          tool="auto"
        >
          <svg width={1000} height={1000}>
            {content}
          </svg>
        </UncontrolledReactSVGPanZoom>
      )}
    />
  );
}

export default App;
