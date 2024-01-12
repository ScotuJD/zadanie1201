import { useState } from "react";
import "./App.css";
import TopPanelContainer from "./cnt_components/top_panel";
import Headerpanel from "./cnt_components/header_panel";
import MainPanel from "./cnt_components/main_panel";

function App() {
  return (
    <>
      <TopPanelContainer />
      <Headerpanel />
      <MainPanel />
    </>
  );
}

export default App;
