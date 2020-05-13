// A house price estimator
let volumeInMeters=8*10*10;
let gardenSizeInM2=100;
let peterHousePrice=2500000;

let housePrice= volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;

console.log(housePrice);
if (housePrice > peterHousePrice) {
    console.log('peter is paying to much');
} else {
    console.log('peter is paying to little');
}
//Julai house estimator
let volumeInMeter=5*11*8;
let gardenSizeInM=70;
let juliaHousePrice=1000000;

let houseCost= volumeInMeter * 2.5 * 1000 + gardenSizeInM * 300;


console.log(houseCost);
if (houseCost > juliaHousePrice) {
    console.log('Julia is paying to much');
} else {
    console.log('Julia is paying to little');
}