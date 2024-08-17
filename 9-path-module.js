const path = require('path')


console.log(path.sep)

const filePath = path.join('/content','subfolder','test')
console.log(filePath)

const base = path.basename(filePath);
console.log(base)


//this one is actually kinda goated because the directory is relative to the system environment of that specific computer
const abbsolute = path.resolve(__dirname, 'content', 'subfolder','text');
console.log(abbsolute)
