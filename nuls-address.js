const nuls = require('./node_modules/nuls-sdk-js/index');

let chainId = 1; //链ID 1:NULS主网 2：NULS测试网 3以上其他链
let passWord = "";
let prefix = "NULS"; //链前缀
let suffix = "pol"; //需要生成的地址后缀

//创建地址
setInterval(() => {
let newAddress = nuls.newAddress(chainId, passWord, prefix);
let lans = newAddress.address.slice(-suffix.length).toLowerCase();
if (lans === suffix) {
  console.log(newAddress);
}
}, 50);
