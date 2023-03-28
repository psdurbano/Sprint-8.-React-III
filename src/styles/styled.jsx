import styled from "styled-components";

export const FrameStarShips = styled.button`
  border: 1px solid whitesmoke;
  cursor: pointer;
  color: whitesmoke;
  background-color: #151515;
  border-radius: 0.2rem;
  margin: 2px;
  display: flex;
  justify-content: left;
  padding-left: 1rem;
  height: 60%;
  width: -webkit-fill-available;
  flex-direction: column;
  margin: 25px;
`;

export const InfoShips = styled.div`
  background-color: #151515;
  border-radius: 0.2rem;
  margin: 2px;
  display: flex;
  justify-content: center;
  padding-left: 1rem;
  align-items: center;
  height: 700px;
  width: auto;
  flex-direction: column;
`;

export const TextPrimary = styled.div`
  font-family: "Orbitron", sans-serif;
  display: flex;
  font-size: 15px;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
`;

export const TextSecondary = styled.div`
  font-family: "Orbitron", sans-serif;
  display: flex;
  font-size: 12px;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
`;

export const CloseButton = styled.button`
  font-size: 10px;
  font-weight: bold;
  color: white;
  border-color: white;
  border-radius: 60px;
  background-color: #151515;
  margin: 8px;
`;

export const image = styled.img`
  width: 20%;
  top: 3.5rem;
  right: 5rem;
  display: flex;
  gap: 1.5rem;
`;
