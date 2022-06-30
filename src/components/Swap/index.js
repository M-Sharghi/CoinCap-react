import { AssetContainerMain,AssetSwapMain, AssetSwapContainer, AssetSwapHeader, AssetSwapSellContainer, Connect_Wallet, AssetSwapSell, Shuffle } from "./styles";
import {Button} from "../Button/styles";
function Swap() {
    return <div>
              <AssetContainerMain>
                    <AssetSwapMain>
                        <AssetSwapContainer>
                            <AssetSwapHeader>
                                <h2>Swap</h2>
                                <a href="#"><img src="https://dulcet-vacherin-72cd99.netlify.app/pictures/settings-8178.svg" width="15px" /></a>
                            </AssetSwapHeader>
                            <AssetSwapSellContainer>
                                <AssetSwapSell>
                                    <div>
                                        <h3>You Sell</h3>
                                        <div>0</div>
                                    </div>
                                        <label></label>
                                        <select value="ETH">
                                            <option>ETH</option>
                                            <option>BTC</option>
                                            <option>USDT</option>
                                        </select>
                                </AssetSwapSell>
                            </AssetSwapSellContainer>
                            <div><Shuffle src="https://coincap.io/static/icons/shuffle.svg" alt="shuffle"></Shuffle></div>
                            <AssetSwapSellContainer>
                                <AssetSwapSell>
                                    <div>
                                        <h3>You Get</h3>
                                        <div>0</div>
                                    </div>
                                        <label></label>
                                        <select value="Select a token">
                                            <option>ETH</option>
                                            <option>BTC</option>
                                            <option>USDT</option>
                                        </select>
                                </AssetSwapSell>
                            </AssetSwapSellContainer>
                            <Button><Connect_Wallet href="#">Connect Wallet</Connect_Wallet></Button>
                        </AssetSwapContainer> 
                    </AssetSwapMain>
              </AssetContainerMain>
    </div>;
  }
  
  export default Swap;
  