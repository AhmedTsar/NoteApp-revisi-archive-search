import styled from "styled-components";

export const List = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: minmax(min-content, max-content);
    gap: 16px;
    margin-bottom: 48px;

    @media only screen and (min-width: 500px) {
    grid-template-columns: 1fr 1fr;
  }

@media only screen and (min-width: 800px) {
    grid-template-columns: repeat(3, 1fr);
}

@media only screen and (min-width: 800px) {
    grid-template-columns: repeat(4, 1fr);
}
`