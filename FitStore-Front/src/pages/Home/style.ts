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
            //color: #7d8895;
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

    p {
        font-size: 1rem;
        color: #666;
        margin: 0;
    }

    button {
        padding: 0.5rem 1rem;
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
    justify-content: center;
    align-items: top;
    padding: 3rem;
    background-color: #6e6e6e;

    h1 {
        font-size: 2.5rem;
        margin-bottom: 1.25rem;
        color: #ffffff;
    }

    p {
        font-size: 1.1rem;
        margin-bottom: 1.25rem;
        color: #ffffff;
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

export const CallToAction = styled.button`
    padding: 0.75rem 1.25rem;
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
    padding: 1.25rem;
    text-align: center;
    background-color: #6e6e6e;
    border-top: 1px solid #ffffff;

    .logos {
        display: flex;
        justify-content: center;
        gap: 2rem;
        margin-top: 1rem;

        a{
            display: inline-block;
            padding: 0.5rem;
             background-color: #ffffff;
            border-radius: 5px;
            transition: transform 0.3s ease;
            
            &:hover {
                transform: scale(1.1);
            }
        }

        span {
            padding: 10px;
            background-color: #ffffff;
            border-radius: 5px;
        }
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