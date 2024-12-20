import styled from 'styled-components';

export const Container = styled.div`
    font-family: Arial, sans-serif;
    background-color: #f5f5f5;
    color: #ffffff;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
`;

export const Navbar = styled.nav`
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
    align-items: center;
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

            &:hover {
                background-color: #555;
            }
        }
    }
`;


export const HeroSection = styled.section`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 3rem;
    background-color: #6e6e6e;

    h1 {
        font-size: 2.5rem;
        margin-bottom: 1.25rem;
        color: #ffffff;
    }

    h2 {
        font-size: 2rem;
        margin-top: 1.5rem;
        color: #ffffff;
    }

    p {
        font-size: 1.1rem;
        margin-bottom: 1.25rem;
        color: #ffffff;
    }

    ul {
        list-style-type: none;
        padding-left: 0;
        li {
            font-size: 1.1rem;
            color: #ffffff;
            margin-bottom: 0.5rem;
        }
    }

    img {
        max-width: 100%;
        height: auto;
        border-radius: 10px;
        margin-top: 2rem;
    }

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

export const Footer = styled.footer`
    padding: 1.25rem;
    text-align: center;
    font-size: 0.9rem;
    background-color: #6e6e6e;
    color: #ffffff;

    a {
        text-decoration: none;
        color: #a0ceff;

        &:hover {
            text-decoration: underline;
        }
    }
`;
