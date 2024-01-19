import React, { Component } from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: grey;
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
  padding: 1rem;
  border-bottom: 1px solid grey;
`;
const CourseContainer = styled.div`
  text-align: center;
  width: 20%;
  background-color: transparent;
  overflow: hidden;
  border-radius: 10px;
  transition:
    transform 0.3s,
    box-shadow 0.3s;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 0 10px rgb(0, 60, 255, 0.5);
  }
  color: #fffddd;
`;
const StyledH = styled.h3`
  text-align: center;
  text-transform: uppercase;
  padding-top: 0.5rem;
  font-weight: 300;
`;
const StyledP = styled.p`
  text-align: center;
  font-size: 110%;
  font-weight: 300;
`;
const StyledImg = styled.img`
  width: 100%;
`;
const StyledHr = styled.hr`
  margin: 0.5rem 0;
  height: 1px;
  border: none;
  background-color: crimson;
  border-radius: 6px;
`;

class MainPanel extends Component {
  render() {
    const headers = ["podcasty", "kursy video", "dokumentacja", "marketing"];
    const desc = [
      "Posłuchaj odcinków podcastu ZstWebTraining",
      "Obejrzyj odcinki wideo ZstWebTraining",
      "Przeczytaj dokumentację ZstWebTraining",
      "Przejdź do marketingu ZstWebTraining",
    ];
    const imgs = [
      "https://media.licdn.com/dms/image/D5612AQF5dzNpoyFeUQ/article-cover_image-shrink_600_2000/0/1676264014077?e=2147483647&v=beta&t=jkylON9HByJxqNViVZZBEsTmBe7rm-Q_4zjYVn41Duk",
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSxsw7_AehHfaUj7kj9KFK0tCGcklSv8-_XA2zH5TNtIJM3pc5I",
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ0W7dLONCld2rHwi4nZI6yeiALz-b4A6_uqLkXhUKcRN6YV8np",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEHbniyDTyF8rwbZrGssT3NamGWCDPRw4nou-RauBc3abuq25Z",
    ];

    return (
      <>
        <MainContainer>
          {headers.map((content, idx) => (
            <CourseContainer>
              <StyledH>{headers[idx]}</StyledH>
              <StyledHr />
              <StyledImg src={imgs[idx]} width="200px" height="130px" />
              <StyledP>{desc[idx]}</StyledP>
            </CourseContainer>
          ))}
        </MainContainer>
      </>
    );
  }
}

export default MainPanel;
