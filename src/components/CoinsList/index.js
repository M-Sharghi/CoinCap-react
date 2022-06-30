  import numbro from "numbro";
  import { FirstRow, OtherRow, FirstNameCol, NameCol } from "./styles";
  import { Link } from "react-router-dom";


  function CoinsList(props) {
    return (
      <div>
        <FirstRow className="flex auto">
            <span>Rank</span>
            <FirstNameCol>Name</FirstNameCol>
            <span>Price</span>
            <span>Market Cap</span>
            <span>VWAP (24Hr)</span>
            <span>Supply</span>
            <span>Volume (24Hr)</span>
            <span>Change (24Hr)</span>
        </FirstRow>
        {props.list.map((item) => {
          let image= item.vwap24Hr!==null?numbro(item.vwap24Hr).formatCurrency('$0,0.00'):"-";
          return (
            <OtherRow className="flex auto">
              <span>{item.rank}</span>
              <img src={`https://assets.coincap.io/assets/icons/${item.symbol.toLowerCase()}@2x.png`} />
              <NameCol><Link to={`/coins/${item.id}`}>{item.name}</Link></NameCol>
              <span>{numbro(item.priceUsd).formatCurrency('$0,0.00')}</span>
              <span>{numbro(item.marketCapUsd).formatCurrency('($ 0.00 a)')}</span>
              <span>{image}</span>
              <span>{numbro(item.supply).format('4a')}</span>
              <span>{numbro(item.volumeUsd24Hr).formatCurrency('($ 0.00 a)')}</span>
              <span>{numbro(item.changePercent24Hr).format('3a')}%</span>
            </OtherRow>
          );
        })}
      </div>
    );
    }
    
    export default CoinsList;
  