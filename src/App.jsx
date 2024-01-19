import { useState } from "react";
import "./App.css";
import TopPanelContainer from "./cnt_components/top_panel";
import Headerpanel from "./cnt_components/header_panel";
import MainPanel from "./cnt_components/main_panel";
import NewComponent from "./stany/setstate_test";

function App() {
  return (
    <>
      <TopPanelContainer />
      <Headerpanel />
      <MainPanel />
      <NewComponent />
    </>
  );
}

export default App;
