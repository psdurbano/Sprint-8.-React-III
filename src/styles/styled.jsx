import styled from "styled-components";

// ShipCard Styles
export const FrameStarShips = styled.div`
  margin: 2%;
  color: whitesmoke;
  width: -webkit-fill-available;
  height: auto;
  background: #000000;
  border: solid 2px #333;
  box-shadow: -2px 2px #333;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  flex-direction: row;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 0.7fr 1.8fr 1fr;
  gap: 0px 0px;
  grid-template-areas:
    "title title title title"
    "img img tx1 tx1"
    "img img tx1 tx1";
  justify-content: start;
  align-content: center;
  justify-items: center;
  align-items: center;
  :hover {
    margin: 10px 10px 0 0;
    box-shadow: 0px 0px #333;
  }
`;

export const Titlestyled = styled.h3`
  font-family: "Orbitron", sans-serif;
  color: whitesmoke;
  justify-self: center;
  align-self: start;
  grid-area: title;
`;

export const StyledText = styled.div`
  justify-self: stretch;
  align-self: stretch;
  grid-area: tx1;
`;

export const StyledImage = styled.img`
  margin: 2%;
  border-top: 2px solid #ffffff;
  border-right: 2px solid #ffffff;
  border-bottom: 2px solid #ffffff;
  border-left: 2px solid #ffffff;
  border-radius: 10%;
  justify-self: stretch;
  align-self: center;
  grid-area: img;
`;

//ShipList Styles

export const StyleStarshipList = styled.div`
  align-items: start;
  padding: 10px;
  flex-direction: column;
  display: flex;
  margin: 2%;
  color: whitesmoke;
  border: 1px solid whitesmoke;
  width: inherit;
  height: inherit;
  background: #000000;
  border: solid 2px #333;
  box-shadow: -2px 2px #333;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  :hover {
    margin: 10px 10px 0 0;
    box-shadow: 0px 0px #333;
  }
`;
