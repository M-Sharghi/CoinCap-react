import styled from "styled-components";

let List_Transition=styled.div`
    transform: translateY(-140px)
    `;

let FirstRow=styled.div`
    text-align: left;
    border-bottom: 1px solid #ccc;
    background-color: rgb(236, 239, 241);
    border-radius: 4px;
    padding-left: 32px;
    padding-top: 12px;
    padding-bottom:12px;
    font-size: 14px;


    & span {
        width: 100%;
    }
`;


let OtherRow=styled.div`
    text-align: left;
    border-bottom: 1px solid #ccc;
    padding-left: 32px;
    padding-top: 16px;
    padding-bottom:16px;
    font-size: 14px;
    background-color: #fff;

    & span {
        width: 100%;
        }

        & img {
            width: 32px;
            padding-right: 4px;
            }

`;

let NameCol=styled.span`
    padding-right: 128px;
`;


let FirstNameCol=styled.span`
    padding-right: 164px;
`;

export { List_Transition, FirstRow, OtherRow, NameCol, FirstNameCol };