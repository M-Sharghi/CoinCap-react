import numbro from "numbro";

function getMonthName(monthNumber) {
  const date = new Date()
  date.setMonth(monthNumber) // starts with 0, so 0 is January
  return date.toLocaleString('en-EN', { month: "long" })
}

function History(props) {
  let current = new Date();
  let mon_num=current.getMonth();
  let date = `${current.getDate()} ${getMonthName(mon_num)} ${current.getFullYear()}`;
  return (
    <div className="flex auto">
            {/* <div>
            <img src={`https://assets.coincap.io/assets/icons/${props.data.symbol.toLowerCase()}@2x.png`} />
            </div> */}
            <div>
              <h3>{props.data.name}  ({props.data.symbol})</h3>
              <h5>{date}</h5 >
            </div>
            <div>
              <h4>HIGH</h4>
              <h4>LOW</h4>
            </div>
            <div>
              <h4>{numbro(props.data.priceUsd).formatCurrency('$0,0.00')}</h4>
              <h4>{numbro(props.data.priceUsd).formatCurrency('$0,0.00')}</h4>
            </div>
            <div>
              <h4>AVERAGE</h4>
              <h4>CHANGE</h4>
            </div>
            <div>
              <h4>{numbro(props.data.priceUsd).formatCurrency('$0,0.00')}</h4>
              <h4>{numbro(props.data.changePercent24Hr).format('3a')}%</h4>
            </div>
    </div>
  );
  }
  
  export default History;
  

