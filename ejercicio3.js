const fs = require('fs');


const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

  readline.question('¿Que carpeta quieres crear para copiar allí archivo.txt? ', texto => {
    
    fs.mkdir(texto, (err) => {
        if (err) throw err; 
        console.log('Directorio creado correctamente'); 
    });
    
    console.log(`Se creó esta carpeta: ${texto}.`);
    readline.close();
  


const path = require('path');

const sourceFilePath = './archivo.txt';
const destinationDirectory = `./${texto}`;

// revisar si el archivo existe
fs.access(sourceFilePath, fs.constants.F_OK, (err) => {
    if (err) {
        console.error(`Archivo ${sourceFilePath} no existe`);
        return;
    }

    // revisar si directorio existe
    fs.access(destinationDirectory, fs.constants.F_OK, (err) => {
        if (err) {
            console.error(`Directorio ${destinationDirectory} no existe`);
            return;
        }

        // Extract file name from the source file path
        const fileName = path.basename(sourceFilePath);

        // Construct the destination file path
        const destinationFilePath = path.join(destinationDirectory, fileName);

        // Copy the file
        fs.copyFile(sourceFilePath, destinationFilePath, (err) => {
            if (err) {
                console.error('Error al copiar archivo.txt:', err);
                return;
            }
            console.log(`Archivo ${sourceFilePath} copiado a ${destinationFilePath}.`);
        });
    });
});

});
/*
fs.mkdir('holaNodejs', (err) => {
  if (err) throw err; 
  console.log('Directorio creado correctamente'); 
});*/
