const fs = require('fs');
const colors = require('./src/colors');

const files = ['Cinnamon.json'];
// const legacyFiles = ['moonlight.json', 'moonlight-italic.json'];

files.forEach(file => {
    let text = fs.readFileSync(`./src/${file}`, 'utf8');

    Object.entries(colors).forEach(([colorVar, hexStr]) => {
        text = text.replace(new RegExp(`\\${colorVar}`, 'g'), hexStr);
    });

    fs.writeFileSync(`./themes/${file}`, text);
});

// legacyFiles.forEach(legacyFile => {
//   fs.writeFileSync(
//     `./themes/${legacyFile}`,
//     fs.readFileSync(`./src/${legacyFile}`, 'utf8')
//   );
// });