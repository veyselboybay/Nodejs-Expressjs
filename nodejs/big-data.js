const { readFileSync, writeFileSync} = require('fs')

const first = readFileSync('./content/first.txt','utf-8');

for(let i=0;i<10000;i++){
    writeFileSync('./content/first.txt',first,{flag:'a'});
}