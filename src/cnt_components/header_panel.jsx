import React, { Component } from "react";
import styled from "styled-components";
import ZstLogoImageComponent from "../images_component/logo_zst";

const HeaderCntPanel = styled.div`
  margin: 0;
  padding: 20px;
  width: 100%;
  height: auto;
  background-color: firebrick;
  text-align: center;
`;

class Headerpanel extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <HeaderCntPanel>
        <ZstLogoImageComponent />
      </HeaderCntPanel>
    );
  }
}

export default Headerpanel;
