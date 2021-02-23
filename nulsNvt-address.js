
//todo 待完善
const nuls = require('./node_modules/nuls-sdk-js/index');
let chainId = 1; //链ID 1:NULS主网 2：NULS测试网 3以上其他链
let passWord = "";
let suffix = "pol"; //需要生成的地址后缀
let nulsPrefix = "NULS"; //链前缀
let nvtPrefix = "NERVE"; //链前缀

let nulsNewAddress = nuls.newAddress(chainId, passWord, nulsPrefix);
console.log(nulsNewAddress);
const nerve = require('./node_modules/nerve-sdk-js/index');
/*let nvtNewAddress = nerve.newAddress(chainId, passWord, nvtPrefix);
console.log(nvtNewAddress);*/

//创建地址
/*setInterval(() => {
let nulsNewAddress = nuls.newAddress(chainId, passWord, nulsPrefix);
console.log(nulsNewAddress);
let nvtNewAddress = nerve.newAddress(chainId, passWord, nvtPrefix);
console.log(nvtNewAddress);
let nulsLans = nulsNewAddress.address.slice(-suffix.length).toLowerCase();
let nvtLans = nvtNewAddress.address.slice(-suffix.length).toLowerCase();

if (nulsLans === nulsPrefix) {
  console.log(nulsNewAddress);
}

if ( nvtLans ===nvtPrefix) {
  console.log(nvtNewAddress);
}

}, 500);*/
