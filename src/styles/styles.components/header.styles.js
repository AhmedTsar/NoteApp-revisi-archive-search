import styled from "styled-components";

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4px 16px;
    border-bottom: 1px solid #aaa;

    h1 {
        margin: 8px 0;
        flex: 1;
        color: white;
    }
`

export const Search = styled.div`
    @media only screen and (min-width: 800px) {
        input {
    min-width: 230px;
    background-color: #FFE4C6;
    ::placeholder,
    ::-webkit-text-placeholder {
        font-weight: bold;
        color: #1A4E5F;
    }
  }
}
`