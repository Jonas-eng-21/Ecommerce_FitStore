import styled from "styled-components";

export const Container = styled.div`
    font-family: Arial, sans-serif;
    background-color: #6e6e6e;
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

export const ContactForm = styled.div`
    width: 90%;
    max-width: 600px;
    margin: 2rem auto;
    background-color: #f5f5f5;
    border-radius: 8px;
    padding: 2rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

    h1 {
        font-size: 2rem;
        margin-bottom: 1rem;
        color: #1e293b;
    }

    p {
        margin-bottom: 1.5rem;
        color: #000;
    }

    form {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        label {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            font-size: 1rem;
            color: #1e293b;
        }

        input, textarea {
            width: 100%;
            padding: 0.75rem;
            border: 1px solid #e2e8f0;
            border-radius: 25px;
            font-size: 1rem;
            color: #333;
            resize: none;

            &:focus {
                border-color: #38bdf8;
                outline: none;
                box-shadow: 0 0 0 2px rgba(56, 189, 248, 0.3);
            }
        }

        button {
            background-color: #000;
            color: #fff;
            border: none;
            padding: 0.75rem;
            border-radius: 25px;
            font-size: 1rem;
            cursor: pointer;

            &:hover {
                background-color: #6e6e6e;
            }
        }
    }
`;

export const Footer = styled.footer`
    width: 100%;
    padding: 1rem;
    text-align: center;
    background-color: ##6e6e6e;
    color: #fff;

    p {
        color: #f5f5f5;
        font-size: 0.875rem;

        a {
            color: #38bdf8;
            text-decoration: none;

            &:hover {
                text-decoration: underline;
            }
        }
    }
`;
