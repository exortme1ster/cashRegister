function checkCashRegister(price, cash, cid) {
  let change = cash*100 - price*100;
  let total = 0;
  let vals = [];
  let outputChange = [];
  let cashReturn = {status: "", change: []};

  let tempC = {
    "ONE HUNDRED":10000,
    "TWENTY":2000,
    "TEN":1000,
    "FIVE":500,
    "ONE":100,
    "QUARTER":25,
    "DIME":10,
    "NICKEL":5,
    "PENNY":1
  }
  
  // check if register will be empty
  for(let i = 0; i < cid.length; i++) {
      total += cid[i][1]*100;
  }
  // check if closed
  if((change - total) === 0) {
    cashReturn.status = "CLOSED";
    cashReturn.change = cid;
    return cashReturn;
  }

// reverse the input 
  cid = cid.reverse();
  for(let c of cid) {
    outputChange = [c[0], 0];
    c[1] = c[1] * 100;

    while(change >= tempC[c[0]] && c[1] > 0){
      change -= tempC[c[0]];
      c[1] -= tempC[c[0]];
      outputChange[1] += tempC[c[0]]/100;

    }
    if(outputChange[1] > 0) {
      vals.push(outputChange)
    }
  }

  if(change > 0) {
    cashReturn.status = "INSUFFICIENT_FUNDS";
    return cashReturn;
  }

  cashReturn.status = "OPEN";
  cashReturn.change = vals;
  
  console.log(cashReturn)
  
  
  return cashReturn;
}