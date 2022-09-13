import numbro from "numbro";
import { FirstRow, OtherRow, NameCol } from "../CoinsList/styles";
import {Background} from "./styles";


function Exchange(props) {
    return (
      <Background>
        <FirstRow className="flex auto">
            <span>Rank</span>
            <NameCol>Name</NameCol>
            <span>Trading Pairs</span>
            <span>Volume (24Hr)</span>
            <span>Total (%)</span>
            <span>Status</span>
        </FirstRow>
        {props.list.map((item) => {
            let volumeUsd= item.volumeUsd!==null?numbro(item.volumeUsd).formatCurrency('($ 0.00 a)'):"-";
            let percentTotalVolume= item.percentTotalVolume!==null?numbro(item.percentTotalVolume).format('3a'):"-";
            let socket= item.socket!==null?"🟢":"🔴";
          return (
            <OtherRow className="flex auto">
              <span>{item.rank}</span>
              <NameCol>{item.name}</NameCol>
              <span>{numbro(item.tradingPairs).formatCurrency('$0,0.00')}</span>
              <span>{volumeUsd}</span>
              <span>{percentTotalVolume}%</span>
              <span>{socket}</span>
            </OtherRow>
          );
        })}
      </Background>
    );
  }
  
  export default Exchange;