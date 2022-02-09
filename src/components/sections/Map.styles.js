import styled from "styled-components";
import breakpoints from "../../assets/styles/breakpoints";

export const MapStyles = styled.header`
  grid-column: full-start / full-end;
  max-height: 70rem;
  overflow: hidden;
  position: relative;
  background: #000;
  @media only screen and ${breakpoints.device.m} {
    min-height: 50vh;
  }
`;
