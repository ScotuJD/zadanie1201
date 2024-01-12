import React, { Component } from "react";
import styled from "styled-components";
import MyTopPanelButton from "../btn_components/top_panel_button";

const StyledTopPanel = styled.div`
  background-color: #063d15;
  width: 100%;
  margin: 0;
  position: sticky;
  top: 0px;
  right: 0px;
  text-align: right;
  padding: 20px;
`;

class TopPanelContainer extends Component {
  // Opcjonalny konstruktor komponentu
  // constructor(props){
  // super(props);
  // }

  //   Inicjalizacja komponentu i zwracanie komponentu

  render() {
    const labels = [
      "Konkurs",
      "ZST Rzeszów",
      "Rejestracja",
      "Logowanie",
      "Info",
    ];

    return (
      <StyledTopPanel>
        {labels.map((label, idx) => (
          <MyTopPanelButton key={idx} label={label} />
        ))}
      </StyledTopPanel>
    );
  }
}

export default TopPanelContainer;
