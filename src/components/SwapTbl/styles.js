import styled from "styled-components";


let AssetContainerMain=styled.div`
    font-size: 12px;
    font-weight: 600;
    // background-color: rgb(236, 239, 241);
    margin-bottom: 128px;
    margin-top: 64px;
`;

let AssetSwapMain=styled.div`
    width: 400px;
    height: 500px;
    margin: 0 auto;
    border-radius: 13px;
    background: rgb(255, 255, 255);
    box-shadow: rgb(0 0 0 / 10%) 0px 0px 9px;
    border: 0px;    
`;

let AssetSwapContainer=styled.div`
    display: flex;
    flex-direction: column;
    padding: 24px;
`;


let AssetSwapHeader=styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

let AssetSwapSellContainer=styled.div`
    background: rgb(249, 249, 249);
    border: 1px solid rgb(236, 239, 241);
    border-radius: 12px;
    margin-bottom: 32px;


        & div{
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 16px;
        }
`;
 let Connect_Wallet=styled.a`
    align-items: center;
    margin: 16px auto;
    padding: 16px 64px;
    font-size: 18px;
    font-weight: 600;
    color: #fff;
 `;

 let AssetSwapSell=styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
 `;

 let Shuffle=styled.img`
    width: 24px;
    margin: 0px 300px 32px 20px;
 `;

export { AssetContainerMain, AssetSwapMain, AssetSwapContainer, AssetSwapHeader, AssetSwapSellContainer, Connect_Wallet, AssetSwapSell, Shuffle };