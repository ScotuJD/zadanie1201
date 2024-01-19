import React from "react";
import styled from "styled-components";
import ZstLogoImageComponent from "../images_component/logo_zst";
import "./header_panel.css";

const HeaderCntPanel = styled.div`
  margin: 0;
  padding: 20px;
  width: 100%;
  height: auto;
  background: linear-gradient(to bottom, #063d15, rgb(0, 60, 255));
  text-align: center;
  border-bottom: 1px solid red;
`;

const HeaderPanelContainer = styled.div`
  transform: scale(1);
  transition: transform 0.7s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const HeaderPanel = () => {
  return (
    <HeaderCntPanel>
      <HeaderPanelContainer>
        <ZstLogoImageComponent />
      </HeaderPanelContainer>
    </HeaderCntPanel>
  );
};

export default HeaderPanel;
