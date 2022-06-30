
export async function get_coins() {
    let response = await fetch("https://api.coincap.io/v2/assets");
    let body = await response.json();
    let data = body.data;
  
    return data;
  }
  
  export async function get_coin(id) {
    let response = await fetch(`https://api.coincap.io/v2/assets/${id}`);
    let body = await response.json();
    let data = body.data;
  
    return data;
  }
  
  export async function get_Exchanges() {
    let response = await fetch("https://api.coincap.io/v2/exchanges");
    let body = await response.json();
    let data = body.data;
  
    return data;
  }


  export async function get_chart(id) {
    let response = await fetch(`https://api.coincap.io/v2/assets/${id}/history?interval=d1`);
    let body = await response.json();
    let data = body.data;
  
    return data;
  }
  