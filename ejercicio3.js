const fs = require('fs');


const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

  readline.question('¿Que carpeta quieres crear para copiar alli archivo.txt? ', texto => {
    
    fs.mkdir(texto, (err) => {
        if (err) throw err; 
        console.log('Directorio creado correctamente'); 
    });
    
    console.log(`Se creó esta carpeta: ${texto}.`);
    readline.close();
  });


const path = require('path');

const sourceFilePath = './archivo.txt';
const destinationDirectory = './Copia';

// Check if the source file exists
fs.access(sourceFilePath, fs.constants.F_OK, (err) => {
    if (err) {
        console.error(`Source file ${sourceFilePath} does not exist`);
        return;
    }

    // Check if the destination directory exists
    fs.access(destinationDirectory, fs.constants.F_OK, (err) => {
        if (err) {
            console.error(`Destination directory ${destinationDirectory} does not exist`);
            return;
        }

        // Extract file name from the source file path
        const fileName = path.basename(sourceFilePath);

        // Construct the destination file path
        const destinationFilePath = path.join(destinationDirectory, fileName);

        // Copy the file
        fs.copyFile(sourceFilePath, destinationFilePath, (err) => {
            if (err) {
                console.error('Error copying file:', err);
                return;
            }
            console.log(`File ${sourceFilePath} copied to ${destinationFilePath} successfully.`);
        });
    });
});
/*
fs.mkdir('holaNodejs', (err) => {
  if (err) throw err; 
  console.log('Directorio creado correctamente'); 
});*/
