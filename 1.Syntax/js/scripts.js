/* eslint-disable no-magic-numbers */
/* eslint-disable no-lone-blocks */

// Oefening 1 – Console meldingen
console.log('\n%c=== Console meldingen ===', 'color: #0c0'); 
{
  console.log("Console opdracht zegt: test");
  console.warn("Console opdracht zegt: let op");
  console.error("Console opdracht zegt: fout");
}

// Oefening 2 – Console opmaak
console.log('\n%c=== Console opmaak ===', 'color: #0c0');
{
    // vul hier aan
    console.log("%cDit is rood", "color: red;");
    console.log ("%cDit is 24px groot", "font-size: 24px;");
    console.log("%cDit is blauw op geel met padding",  "color: blue; background-color: yellow; padding: 5px;");
    console.log("Deze bericht bevat een %cpaars%c woord", "color: #ff00ff;" , '');

}

// Oefening 3 – Variabelen
console.log('\n%c=== Variabelen ===', 'color: #0c0');
{
    // vul hier aan
    const vak = "DWD";
    let punten = 8;
    const MAX_PUNTEN = 20;
    const onderMaximum = MAX_PUNTEN - punten;
    console.log(`Vak: ${vak}; score: ${punten}; dit is ${onderMaximum} onder het maximum`);
}

// Oefening 4 – String interpolatie
console.log('\n%c=== String interpolatie ===', 'color: #0c0');
{
    // vul hier aan
     const product = 'bananen';
   const aantal = 9;
   const stukprijs = 0.35;

   console.log(`Ik koop ${aantal} ${product} voor ${aantal * stukprijs} euro.`);

   const basis = 6;
   const hoogte = 4;

   console.log(
      `Een driehoek met basis ${basis} m en hoogte ${hoogte} m heeft oppervlakte ${basis * hoogte / 2} m².`
   );
    // ...
}

// Oefening 5 – Multiline strings
console.log('\n%c=== Multiline strings ===', 'color: #0c0');
{
    // vul hier aan
       const naam = 'Yasmin Al-Hassan';
   const telefoon = '012 34 56 78';

   const kaartje = `
+------------------+
| Contact          |
|                  |
| ${naam} |
| ${telefoon} |
+------------------+
`;

   console.log(kaartje);
    // ...
}

// Oefening 6 – Speciale waarden
console.log('\n%c=== Speciale waarden ===', 'color: #0c0');
{
    // vul hier aan
    
   let test;
   console.log(test); // undefined

   
   let b = null;
   console.log(b); // null

   
   console.log(parseInt('twaalf')); // NaN

   
   console.log(Math.pow(10, 10000)); // Infinity
    // ...
}

// Oefening 7 – Arrays
console.log('\n%c=== Arrays ===', 'color: #0c0');
{
    // vul hier aan
     
    const vakken = ['Javascript', 'HTML', 'CSS'];

   
   console.log(`Tweede element: ${vakken[1]}`);

   
   vakken.push('PHP');

   
   console.log(`Lengte: ${vakken.length}`);

   
   const verwijderd = vakken.pop();
   console.log(`Verwijderd: ${verwijderd}`);
    // ...
}

// Oefening 8 – Objecten
console.log('\n%c=== Objecten ===', 'color: #0c0');
{
    // vul hier aan
       const auto = {
      merk: 'Toyota',
      model: 'Corolla',
      jaar: 2022,
      prijs: 25000
   };

   
   console.log(`Auto: ${auto.merk} ${auto.model}`);

   
   auto.kleur = 'blauw';

   
   console.log(auto);
    // ...
}

// Oefening 9 – Datatypes
console.log('\n%c=== Datatypes ===', 'color: #0c0');
{
    // vul hier aan
     
   const prijs = 19.99;

   
   const product = 'laptop';

   
   const inStock = true;

   
   const person = { naam: 'Jan' };

   
   console.log(`prijs is van type: ${typeof prijs}`);
   console.log(`product is van type: ${typeof product}`);
   console.log(`inStock is van type: ${typeof inStock}`);
   console.log(`person is van type: ${typeof person}`);

    // ...
}

// Oefening 10 – Type conversie
console.log('\n%c=== Type conversie ===', 'color: #0c0');
{
    // vul hier aan
    
   const input1 = '25.2';

   
   const input2 = '17';

    
   const som = parseFloat(input1) + parseInt(input2);
   console.log(`Som: ${som}`);

   
   let resultaat = 100;
   resultaat = resultaat.toString();

   
   console.log(`Type van resultaat: ${typeof resultaat}`);
    // ...
}

// Oefening 11 – String methodes
console.log('\n%c=== String methodes ===', 'color: #0c0');
{
    // vul hier aan
      
   const email = '  Student@Odisee.BE  ';

   console.log(`Origineel: "${email}"`);

   
   const trimmed = email.trim();
   console.log(`Na trim: "${trimmed}"`);

   
   const lower = trimmed.toLowerCase();
   console.log(`Kleine letters: "${lower}"`);

   
   const isOdisee = lower.includes('odisee.be');
   console.log(`Is Odisee email: ${isOdisee}`);
    // ...
}

// Oefening 12 – Array methodes
console.log('\n%c=== Array methodes ===', 'color: #0c0');
{
    // vul hier aan
    
   let woorden = [' appel ', 'banaan', 'citroen ', ' avocado', 'peer'];

   
   woorden = woorden.map(w => w.trim().toUpperCase());
   console.log('Getrimd en hoofdletters:', woorden);

   
   console.log(`Bevat 'BANAAN': ${woorden.includes('BANAAN')}`);

   
   const eersteMetC = woorden.find(w => w.startsWith('C'));
   console.log(`Eerste woord dat begint met C: ${eersteMetC}`);

   
   const aantal = woorden
      .map(w => w.length)
      .filter(l => l >= 6)
      .length;

   console.log(`Aantal woorden met 6 of meer letters: ${aantal}`);
    // ...
}

// Oefening 13 – Selecties
console.log('\n%c=== Selecties ===', 'color: #0c0');
{
    // vul hier aan
    
   const temperatuur = 18;

   
   if (temperatuur < 0) {
      console.log('Vrieskou!');
   } else if (temperatuur < 15) {
      console.log('Koud weer');
   } else if (temperatuur < 25) {
      console.log('Aangenaam weer');
   } else {
      console.log('Warm weer');
   }
    // ...
}

// Oefening 14 – Iteraties
console.log('\n%c=== Iteraties ===', 'color: #0c0');
{
    // vul hier aan
      
   for (let i = 1; i <= 5; i++) {
      console.log(`waarde is ${i}`);
   }

   
   let n = 1;

   do {
      if (n ** 3 > 100) {
         console.log(`de derde macht van ${n} is groter dan 100`);
         break;
      }
      n++;
   } while (true);
    // ...
}

// Oefening 15 – For-of en forEach
console.log('\n%c=== For-of en forEach ===', 'color: #0c0');
{
    // vul hier aan
      
   const vakken = ['HTML', 'CSS', 'JavaScript'];

   
   console.log('For-of:');
   for (const vak of vakken) {
      console.log(vak);
   }

   
   console.log('\nForEach met volgnummer:');
   vakken.forEach((vak, index) => {
      console.log(`${index + 1}. ${vak}`);
   });
    // ...
}

// Oefening 16 – Functies
console.log('\n%c=== Functies ===', 'color: #0c0');
{
    // vul hier aan
     
   function berekenBTW(prijs) {
      return prijs * 0.21;
   }

   
   const isVolwassen = leeftijd => leeftijd >= 18;

   
   function herhaal(tekst, aantal) {
      return tekst.repeat(aantal);
   }

   
   console.log(`BTW van €100: €${berekenBTW(100)}`);
   console.log(`Is 20 jaar volwassen? ${isVolwassen(20)}`);
   console.log(`Is 15 jaar volwassen? ${isVolwassen(15)}`);
   console.log(`Herhaal 'ha' 3x: ${herhaal('ha', 3)}`);
}
    // ...


// Oefening 17 – Math
console.log('\n%c=== Math ===', 'color: #0c0');
{
    // vul hier aan
      
   const wortel = Math.sqrt(1234);
   console.log(`Wortel van 1234 afgerond: ${Math.round(wortel)}`);

   
   const randomGetal = Math.ceil(Math.random() * 100);
   console.log(`Willekeurig getal tussen 1 en 100: ${randomGetal}`);
}
    // ...

// Oefening 18 – Spread operator
console.log('\n%c=== Spread operator ===', 'color: #0c0');
{
    // vul hier aan
     
   const getal = '2587';
   const hoogste = Math.max(...getal);
   console.log(`Hoogste cijfer: ${hoogste}`);

   
   let vakken = ['HTML', 'CSS', 'JavaScript'];

   
   vakken = [...vakken, 'PHP', 'JSON'];

   console.log(vakken);
    // ...
}

