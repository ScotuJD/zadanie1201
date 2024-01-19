import React, { Component } from "react";
import styled from "styled-components";

const TopPanelButton = styled.button`
  color: white;
  font-family: Arial;
  font-size: 12px;
  padding: 8px 14px;
  border: 1px solid white;
  outline: none;
  cursor: pointer;
  border-radius: 100px;
  background-color: transparent;
  z-index: 10;
  margin-right: 6px;
  transition:
    background-color 0.5s,
    color 0.5s;

  &:hover {
    background-color: rgb(0, 60, 255, 0.33);
    color: grey;
  }
`;

class MyTopPanelButton extends Component {
  // constructor(props){
  //     super(props);
  // }

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
