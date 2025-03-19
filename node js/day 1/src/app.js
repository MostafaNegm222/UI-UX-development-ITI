const fs = require('fs');
const path = require('path');

const basePath = './'; 
const downloadsPath = path.join(basePath, 'download');

if (!fs.existsSync(downloadsPath)) {
    fs.mkdirSync(downloadsPath);
}

fs.readdir(basePath, (err, files) => {
    if (err) {
        console.error('Error reading the directory:', err);
        return;
    }

    files.forEach(file => {
        const ext = path.extname(file).substring(1).toLowerCase(); 
        if (ext && ext !== 'js') { 
            const folderPath = path.join(downloadsPath, ext);
            if (!fs.existsSync(folderPath)) {
                fs.mkdirSync(folderPath);
            }

            const oldPath = path.join(basePath, file);
            const newPath = path.join(folderPath, file);

            fs.rename(oldPath, newPath, (err) => {
                if (err) {
                    console.error(`Error moving file ${file}:`, err);
                } else {
                    console.log(`Moved ${file} to ${folderPath}`);
                }
            });
        }
    });
});

// var fs = require("fs") ;
// console.log(fs.readFileSync("./download/file.txt", "utf-8"));

