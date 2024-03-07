/*const fs = require('fs'); 
fs.readFile('archivo.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data); 
});*/
const fs = require('fs');

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

  readline.question('¿Que archivo quieres leer? ', texto => {
    
    fs.readFile(texto, 'utf8', (err, data) => { 
    console.log(`Se leyó este archivo: ${texto} y dice esto: `);
    if (err) throw err;
    console.log(data);
    });
    
    readline.close();
  });