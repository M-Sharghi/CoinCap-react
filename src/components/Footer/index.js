import { Footer_Container, FooterImg, Column} from "./styles";

function Footer() {
  return(
  <Footer_Container>
  <div className="flex auto">
    <Column>COINCAP.IO<br /><br />
      <div><a className="aFooter" href="#">Methodology</a></div>
      <div><a className="aFooter" href="#">Support</a></div>
      <div><a className="aFooter" href="#">Our API</a></div>
      <div><a className="aFooter" href="#">Rate Comparison</a></div>
      <div><a className="aFooter" href="#">Careers</a></div>
    </Column>
    <Column>LEGALS<br /><br />
      <div><a className="aFooter" href="#">Terms of Service</a></div>
      <div><a className="aFooter" href="#">Privacy Policy</a></div>
      <br /><br />DISCLAIMER
      <p className="aFooter">Neither ShapeShift AG nor CoinCap are in<br />any way associated with CoinMarketCap,<br />LLC or any of its goods and services.</p>
    </Column>
    <Column>FOLLOW US<br /><br />
      <span><a href="#"><FooterImg src="/icon/twitter.svg" alt="twitter" /></a></span>
      <span><a href="#"><FooterImg src="/icon/facebook.svg" alt="facebook" /></a></span>
    </Column>
    <Column>COINCAP APP AVAILABLE ON<br /><br />
      <div><a href="#"><FooterImg src="/icon/google_play.svg" alt="Google Play" /></a></div>
      <div><a href="#"><FooterImg src="/icon/apple_store.svg" alt="App Store" /></a></div>
    </Column>
  </div>
  </Footer_Container>
)}

export default Footer;
