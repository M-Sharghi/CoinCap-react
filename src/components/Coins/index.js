import numbro from "numbro";
import {Header_Container} from "./styles";
import {Link} from "react-router-dom";

function Coins(props) {
    return (
      <Header_Container>
        <div className="flex auto">
          <div>
            <h2>{props.coin.rank}</h2>
            <h6>RANK</h6>
            </div>
          <div>
            <h2>{props.coin.name}</h2>
            <h5>{numbro(props.coin.priceUsd).formatCurrency('$0,0.00')} {numbro(props.coin.changePercent24Hr).format('3a')}%</h5 >
            <br /><br />
          </div>
          <div>
            <h5>Market Cap</h5>
            <h4>{numbro(props.coin.marketCapUsd).formatCurrency('($ 0.00 a)')}</h4>
            <Link to="#"><h4>Website</h4></Link>
          </div>
          <div>
            <h5>Volume(24Hr)</h5>
            <h4>{numbro(props.coin.volumeUsd24Hr).formatCurrency('($ 0.00 a)')}</h4>
            <Link to="#"><h4>Explorer</h4></Link>
          </div>
          <div>
            <h5>Supply</h5>
            <h4>{numbro(props.coin.supply).format('4a')} {props.coin.symbol}</h4>
            <br /><br />
          </div>
        </div>       
      </Header_Container>
    );
  }
  
  export default Coins;
