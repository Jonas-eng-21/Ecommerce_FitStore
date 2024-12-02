import styled from "styled-components";

export const NavbarContainer = styled.nav`
  display: flex;
  gap: 1.875rem;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.875rem;
  background-color: #ffffff;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.1);
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.25rem;
  }
`;

export const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  a {
    font-size: 1rem;
    font-weight: bold;
    color: #000;
    text-decoration: none;
    &:hover {
      color: #555;
    }
  }
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const NavActions = styled.div`
  display: flex;
  gap: 1rem;

  button {
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
    border: none;
    border-radius: 25px;
    cursor: pointer;
    transition: background-color 0.3s ease, color 0.3s ease;

    &.primary {
      background-color: #000;
      color: #ffffff;
      font-weight: bold;
      border: 1px solid #6e6e6e;
      &:hover {
        background-color: #555;
      }
    }

    &.secondary {
      background-color: #000;
      color: #ffffff;
      font-weight: bold;
      border: 1px solid #6e6e6e;
      display: flex;
      align-items: center;
      gap: 3%;
      &:hover {
        background-color: #555;
      }
    }
  }
`;
