import styled from "styled-components";

export const StyledButton = styled.button`
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  color: white;
  background-color: #171717;
  padding: 1em 2em;
  border: none;
  border-radius: 0.6rem;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  width: 100%;

  span:not(:nth-child(6)) {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    height: 30px;
    width: 30px;
    background-color: #0c66ed;
    border-radius: 50%;
    transition: 0.6s ease;
  }

  span:nth-child(6) {
    position: relative;
  }

  span:nth-child(1) {
    transform: translate(-3.3em, -4em);
  }

  span:nth-child(2) {
    transform: translate(-6em, 1.3em);
  }

  span:nth-child(3) {
    transform: translate(-0.2em, 1.8em);
  }

  span:nth-child(4) {
    transform: translate(3.5em, 1.4em);
  }

  span:nth-child(5) {
    transform: translate(3.5em, -3.8em);
  }

  &:hover span:not(:nth-child(6)) {
    transform: translate(-50%, -50%) scale(4);
    transition: 1.5s ease;
  }
`;
