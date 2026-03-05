
function isCorrectPassword(pw) {
   if (pw.length < 9) return false;
   if (pw.includes('@')) return false;
   if (pw === 'password') return false;
   return true;
}


const passwords = [
   'klepketo',
   'test',
   'Azerty123',
   'rogier@work',
   'password',
   'MisterNasty12',
   'pwnz0red'
];


console.log('Alle paswoorden:');

for (let i = 0; i < passwords.length; i++) {
   console.log(`${i + 1}. ${passwords[i]}`);
}


const welOk = [];
const nietOk = [];


for (const pw of passwords) {
   if (isCorrectPassword(pw)) {
      welOk.push(pw);
   } else {
      nietOk.push(pw);
   }
}


console.log('');
console.log(`Ok: ${welOk.join(', ')}`);
console.log(`Niet ok: ${nietOk.join(', ')}`);
