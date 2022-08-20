import styled from "styled-components";

export const Input = styled.form`
    margin: 0 auto;
    max-width: 500px;
    margin-bottom: 48px;

    input {
    border: 1px solid #aaa;
    display: block;
    width: 100%;
    background-color: #FFE4C6;
    ::placeholder,
    ::-webkit-text-placeholder {
        font-weight: bold;
        color: #1A4E5F;
    }
    }

    textarea {
    border: 1px solid #aaa;
    display: block;
    margin-top: 3px;
    margin-bottom: 3px;
    width: 100%;
    background-color: #FFE4C6;
    ::placeholder,
    ::-webkit-text-placeholder {
        min-height: 175px;
        color: #1A4E5F;
    }
    }

    button {
    display: block;
    width: 100%;
    padding: 8px;
    background-color: #1A4E5F;
    font-family: 'Inter', sans-serif;
    color: white;
    border: 1px solid #aaa;
    border-radius: 4px;
    font-weight: bold;
    cursor: pointer;
    &:hover {
      color: #aaa;
    }
    }
`