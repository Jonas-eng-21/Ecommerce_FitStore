import React from "react";
import { StyledButton } from "./style";

interface ButtonProps {
  text: string;
  onClick?: () => void;
}

const ButtonRegister: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <StyledButton onClick={onClick}>
      <span className="circle1"></span>
      <span className="circle2"></span>
      <span className="circle3"></span>
      <span className="circle4"></span>
      <span className="circle5"></span>
      <span className="text">{text}</span>
    </StyledButton>
  );
};

export default ButtonRegister;
