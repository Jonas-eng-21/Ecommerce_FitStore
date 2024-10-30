import styled from 'styled-components'

export const MenuContainer = styled.nav<{ isOpen: boolean }>`
  background: #0099cc;
  height: 46px;
  border-radius: ${(props) => (props.isOpen ? '0' : '10px')};
  border: 3px outset #66566d;
  position: relative;
`;

export const MenuList = styled.ul`
  width: 100%;
  text-align: center;
  margin: 0 auto;
  padding: 0;
  list-style: none;

  @media screen and (max-width: 800px) {
    background: #444444;
    position: absolute;
    top: 100%;
    right: 0;
    left: 0;
    z-index: 3;
    height: auto;
    display: none;
    text-align: left;
  }
`;

export const MenuItem = styled.li`
  display: inline-block;
  position: relative;

  @media screen and (max-width: 800px) {
    display: block;
    float: none;
    width: auto;
  }
`;

export const MenuLink = styled.a`
  display: block;
  line-height: 40px;
  padding: 0 14px;
  text-decoration: none;
  color: #ffffff;
  font-size: 16px;

  &:hover {
    color: #0099cc;
    background: #f2f2f2;
  }
`;

export const DropdownArrow = styled(MenuLink)`
  &::after {
    content: "\\25BE";
    margin-left: 5px;
  }
`;

export const SubMenu = styled.ul`
  height: auto;
  overflow: hidden;
  width: 170px;
  background: #444444;
  position: absolute;
  z-index: 99;
  display: none;
  
  ${MenuItem}:hover & {
    display: block;
  }

  @media screen and (max-width: 800px) {
    width: 100%;
    position: static;

    ${MenuLink} {
      padding-left: 30px;
    }
  }
`;

export const SubMenuItem = styled(MenuItem)`
  display: block;
  text-align: left;
  width: 100%;
`;

export const SubMenuLink = styled(MenuLink)`
  color: #ffffff;
  font-size: 16px;

  &:hover {
    background: #f2f2f2;
    color: #444444;
  }
`;

export const Checkbox = styled.input`
  display: none;
  margin: 0;
  padding: 0;
  height: 46px;
  width: 100%;
  opacity: 0;
  cursor: pointer;

  &:checked ~ ${MenuList} {
    display: block;
  }

  &:checked + label:before {
    content: "\\00d7";
  }

  @media screen and (max-width: 800px) {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    z-index: 4;
  }
`;

export const Label = styled.label`
  display: none;
  line-height: 40px;
  text-align: center;
  position: absolute;
  left: 35px;
  color: #ffffff;

  &::before {
    font-size: 1.6em;
    content: "\\2261";
    margin-left: 20px;
  }

  @media screen and (max-width: 800px) {
    display: block;
  }
`;