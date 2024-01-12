import React, { Component } from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: cadetblue;
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
  padding: 1rem;
  font-family: Arial, Helvetica, sans-serif;
`;
const CourseContainer = styled.div`
  width: 20%;
  background-color: transparent;
  color: #fff;
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
`;

class MainPanel extends Component {
  render() {
    const headers = ["podcasty", "kursy video", "dokumentacja", "marketing"];
    const desc = [
      "Listen to episodes of the ZstWebTraining podcast",
      "Watch the episodes of the ZstWebTraining videos",
      "Read the ZstWebTraining documentation",
      "Go to the ZstWebTraining marketing",
    ];
    const imgs = [
      "https://media.istockphoto.com/id/537331500/pl/zdj%C4%99cie/programowanie-kodu-t%C5%82o-technologii-tle-oprogramowania-roz.jpg?s=612x612&w=0&k=20&c=NOAmUkJRDj8K6fzGAgAcMQ4xl9GbLa2GM2v2RjrknCA=",
      "https://media.istockphoto.com/id/1255928059/pl/zdj%C4%99cie/m%C5%82oda-kaukaska-kobieta-programista-w-okularach-pisze-kod-programu-na-laptopie.jpg?s=612x612&w=0&k=20&c=PkvYKf9nWa7DLa2YI8E6L_x2DutUR05ksZg8jP9s458=",
      "https://media.istockphoto.com/id/1842519003/pl/zdj%C4%99cie/zbli%C5%BCenie-na-m%C4%99%C5%BCczyzn%C4%99-brokera-finansowego-wskazuj%C4%85cego-monitor-komputera-podczas-analizy.jpg?s=612x612&w=0&k=20&c=-tI6M1KaxYm-Oq_LiVU_RLfpqRGkCSwP4DCV4_er9bg=",
      "https://media.istockphoto.com/id/1398785215/pl/zdj%C4%99cie/m%C5%82oda-azjatka-programistka-in%C5%BCynier-oprogramowania-wsparcie-it-w-okularach-ci%C4%99%C5%BCko-pracuj%C4%85ca.jpg?s=612x612&w=0&k=20&c=7LgfOIide1QGDwLRAaNHQqJeq1E_RiEC9ARR6q3gHIA=",
      "https://media.istockphoto.com/id/1842518999/pl/zdj%C4%99cie/zbli%C5%BCenie-na-m%C4%99%C5%BCczyzn%C4%99-brokera-finansowego-korzystaj%C4%85cego-z-technologii-podczas-analizy.jpg?s=612x612&w=0&k=20&c=KfhBjcIEatBhWrQs7Ya1q-8yOf-ZZ2oXu_IH-iTl9GQ=",
    ];

    return (
      <>
        <MainContainer>
          {headers.map((content, idx) => (
            <CourseContainer>
              <StyledH>{headers[idx]}</StyledH>
              <StyledHr />
              <StyledImg src={imgs[idx]} />
              <StyledP>{desc[idx]}</StyledP>
            </CourseContainer>
          ))}
        </MainContainer>
      </>
    );
  }
}

export default MainPanel;
