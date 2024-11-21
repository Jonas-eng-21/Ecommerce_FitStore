import { useState } from "react";
import {
  Checkbox,
  DropdownArrow,
  Label,
  MenuContainer,
  MenuItem,
  MenuLink,
  MenuList,
  SubMenu,
  SubMenuItem,
  SubMenuLink,
  CartButtonWrapper, // Importando o estilo do botão de carrinho
} from "./style";
import { FaShoppingCart } from "react-icons/fa"; // Usando um ícone para o carrinho

export default function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const updateMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <MenuContainer isOpen={isMenuOpen}>
      <Checkbox type="checkbox" id="responsive-menu" onClick={updateMenu} />
      <Label htmlFor="responsive-menu"></Label>
      <MenuList>
        <MenuItem>
          <MenuLink href="#">Home</MenuLink>
        </MenuItem>
        <MenuItem>
          <DropdownArrow href="#">Products</DropdownArrow>
          <SubMenu>
            <SubMenuItem>
              <SubMenuLink href="#">Products 1</SubMenuLink>
            </SubMenuItem>
            <SubMenuItem>
              <SubMenuLink href="#">Products 2</SubMenuLink>
            </SubMenuItem>
            <SubMenuItem>
              <SubMenuLink href="#">Products 3</SubMenuLink>
            </SubMenuItem>
            <SubMenuItem>
              <SubMenuLink href="#">Products 4</SubMenuLink>
            </SubMenuItem>
          </SubMenu>
        </MenuItem>
        <MenuItem>
          <MenuLink href="#">About</MenuLink>
        </MenuItem>
        <MenuItem>
          <DropdownArrow href="#">Services</DropdownArrow>
          <SubMenu>
            <SubMenuItem>
              <SubMenuLink href="#">Services 1</SubMenuLink>
            </SubMenuItem>
            <SubMenuItem>
              <SubMenuLink href="#">Services 2</SubMenuLink>
            </SubMenuItem>
            <SubMenuItem>
              <SubMenuLink href="#">Services 3</SubMenuLink>
            </SubMenuItem>
          </SubMenu>
        </MenuItem>
        <MenuItem>
          <MenuLink href="#">Contact Us</MenuLink>
        </MenuItem>
        <MenuItem>
          <CartButtonWrapper>
            <FaShoppingCart size={24} /> {/* Ícone do carrinho */}
          </CartButtonWrapper>
        </MenuItem>
      </MenuList>
    </MenuContainer>
  );
}
