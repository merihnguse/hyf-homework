// A house price estimator
let volumeInMeters=8*10*10;
let gardenSizeInM2=100;
let peterHousePrice=2500000;
let juliaHousePrice=1000000;

let housePrice= volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;

console.log(housePrice);
if (housePrice > peterHousePrice) {
    console.log('peter is paying to much');
} else {
    console.log('peter is paying to little');
}