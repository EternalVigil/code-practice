const maximumD3 = 3;
const maximumD20 = 20;
let diceRolls = [];
let crypto  = require('crypto');
const max = 20;
const min = 1;

for(let n = 0; n < max; n++) {
console.log((crypto.randomBytes(1).toJSON().data[0] % 20) + 1);
}
/*
for (let n = 0; n < 10; n++) {
	let randomCryptoNum = Math.floor(crypto.randomBytes(1).toJSON().data - (max - min)) + 1;
	console.log(randomCryptoNum);
}


for (let i = 0; i < 20; i++) {
    let rollD20 = Math.floor(Math.random() * Math.floor(maximumD20)) + 1;
    diceRolls.push(rollD20);
}

console.log(diceRolls);
*/