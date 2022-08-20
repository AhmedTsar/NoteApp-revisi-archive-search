import styled from "styled-components";

export const Board  = styled.div`
    border: 2px solid #aaa;
    border-radius: 2px;
    overflow: hidden;
    display: flex;
    flex-direction: column;


    h3 {
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        margin-bottom: 4px;
        color: #5DDAE0;
    }

    span {
        font-size: 12px;
        margin-bottom: 8px;
        color: #E3FFEF;
    }

    p {
        font-size: 14px;
        color: #FFE4C6;
    }
`
export const Content = styled.div`
    padding: 12px;
    flex: 1;
    background-color: #1A4E5F;
`