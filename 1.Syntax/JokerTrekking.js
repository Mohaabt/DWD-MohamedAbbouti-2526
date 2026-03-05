const AANTAL_SPELERS = 10000;
const MIN = 1000;
const MAX = 9999;


function genereerGetal() {
   return Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;
}


   function aantalGelijkeCijfers(a, b) {

   if (a === b) return 4;
   if (a % 1000 === b % 1000) return 3;
   if (a % 100 === b % 100) return 2;
   if (a % 10 === b % 10) return 1;

   return 0;
}


console.log('%c// trekking', 'color:magenta; font-size:16px;');

const trekking = genereerGetal();

console.log('%cgetrokken getal: ' + trekking,
   'color:yellow; font-weight:bold;'
);

console.log('');


console.log('%c// gokken', 'color:magenta; font-size:16px;');
console.log('aantal iteraties: ' + AANTAL_SPELERS);

console.log('');

let juist0 = 0;
let juist1 = 0;
let juist2 = 0;
let juist3 = 0;
let juist4 = 0;

let totaleWinst = 0;

for (let i = 0; i < AANTAL_SPELERS; i++) {

   const spelerGetal = genereerGetal();

   const juist = aantalGelijkeCijfers(trekking, spelerGetal);

   if (juist === 0) {
      juist0++;
   }

   if (juist === 1) {
      juist1++;
      totaleWinst += 2.5;
   }

   if (juist === 2) {
      juist2++;
      totaleWinst += 10;
   }

   if (juist === 3) {
      juist3++;
      totaleWinst += 100;
   }

   if (juist === 4) {
      juist4++;
      totaleWinst += 500;
   }

}


console.log('%c// resultaten', 'color:magenta; font-size:16px;');

console.log(`0 juist: ${juist0}`);
console.log(`1 juist: ${juist1}`);
console.log(`2 juist: ${juist2}`);
console.log(`3 juist: ${juist3}`);
console.log(`4 juist: ${juist4}`);

const gemiddelde = totaleWinst / AANTAL_SPELERS;

console.log('%cgemiddelde winst: €' + gemiddelde.toFixed(3),
   'color:green; font-weight:bold; font-size:16px;'
);
