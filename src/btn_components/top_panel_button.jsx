import React, { Component } from "react";
import styled from "styled-components";

const TopPanelButton = styled.button`
  color: white;
  font-family: Arial;
  font-size: 14px;
  padding: 8px 14px;
  border: 2px solid white;
  outline: none;
  cursor: pointer;
  border-radius: 5px;
  background-color: transparent;
  z-index: 10;
  margin-right: 6px;
  &:hover {
    background-color: lightgray;
    color: black;
  }
`;

class MyTopPanelButton extends Component {
  // constructor(props){
  //     super(props);
  // }

  // Inicjalizacja komponentów

  render() {
    function userFunction(msg) {
      console.log(`przycisk ${msg} został kliknięty`);
    }
    const { label } = this.props;
    return (
      <TopPanelButton
        onClick={() => {
          userFunction(this.props.label);
        }}
      >
        {label}
      </TopPanelButton>
    );
  }
}

export default MyTopPanelButton;
