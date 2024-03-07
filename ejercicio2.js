const fs = require('fs');
 
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

  readline.question('¿Que quieres poner en el texto? ', texto => {
    
    fs.writeFile('archivo.txt', texto, (err) => { 
        if (err) throw err; 
        console.log('Archivo escrito correctamente'); 
      });
    
    console.log(`Se escribio esto: ${texto}`);
    readline.close();
  });
 
  
/*const num = prompt("Introduzca texto para el archivo") const datos = prompt("Introduzca texto para el archivo") alert("hi"); import { writeFile } from 'fs';*/




