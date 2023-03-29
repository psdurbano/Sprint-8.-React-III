import styled from "styled-components";

export const FrameStarShips = styled.div`
  background-image: url("https://wallpaperaccess.com/full/17493.jpg");
  background-size: cover;
  background-position: center;
  color: whitesmoke;
  border: 1px solid whitesmoke;
  width: -webkit-fill-available;
  height: auto;
  background: #000000;
  border: solid 4px #333;
  box-shadow: -5px 5px #333;
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
  font-family: "Orbitron", sans-serif;
  font-size: 15px;
  justify-self: stretch;
  align-self: stretch;
  grid-area: tx1;
`;

export const StyledImage = styled.img`
  justify-self: stretch;
  align-self: center;
  grid-area: img;
`;
