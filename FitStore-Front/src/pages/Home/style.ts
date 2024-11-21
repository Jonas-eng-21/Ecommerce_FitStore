import styled from 'styled-components';

export const Container = styled.div`
    font-family: Arial, sans-serif;
    background-color: #f5f5f5;
    color: #ffffff;
`;

export const Navbar = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 30px;
    background-color: #ffffff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Logo = styled.h1`
    font-size: 1.8rem;
    font-weight: bold;
    color: #333;
`;

export const NavLinks = styled.div`
    display: flex;
    gap: 30px;

    a {
        font-size: 1rem;
        font-weight: bold;
        color: #555;
        text-decoration: none;

        &:hover {
            color: #7d8895;
        }
    }
`;

export const NavActions = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;

    p {
        font-size: 0.9rem;
        color: #666;
        margin: 0;
    }

    button {
        padding: 8px 15px;
        font-size: 0.9rem;
        border: none;
        border-radius: 5px;
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
    justify-content: space-between;
    align-items: center;
    padding: 50px;
    background-color: #6e6e6e;

    h1 {
        font-size: 2.5rem;
        margin-bottom: 20px;
        color: #ffffff;
    }

    p {
        font-size: 1.1rem;
        margin-bottom: 20px;
        color: #ffffff;
    }

    img {
        max-width: 50%;
        border-radius: 10px;
    }
`;

export const CallToAction = styled.button`
    padding: 12px 20px;
    font-size: 1rem;
    color: #6e6e6e;
    background-color: #ffffff;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
    color: #ffffff;
    background-color: #555
    }
`;

export const SocialProof = styled.div`
    padding: 20px;
    text-align: center;
    background-color: #6e6e6e;
    border-top: 1px solid #ffffff;

    .logos {
        display: flex;
        justify-content: center;
        gap: 20px;
        margin-top: 20px;

        span {
            padding: 10px;
            background-color: #ffffff;
            border-radius: 5px;
        }
    }
`;

export const Footer = styled.footer`
    padding: 20px;
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