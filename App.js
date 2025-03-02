const fs = require('fs'); 
fs.readFile('file.txt', 'utf8', function (err, data) { 
if (err) throw err; 
console.log(data); 
}); 

const fs = require('fs'); 
fs.writeFile('file.txt', 'Hello Ravindu!', function (err) { 
  if (err) throw err; 
  console.log('File saved!'); 
}); 