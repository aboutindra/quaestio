const path = require ('path');
const solc = require('solc');
const fs = require('fs-extra');  //Community based module for faster functions

const buildPath = path.resolve(__dirname,'build');
fs.removeSync(buildPath);  //Deletes the build folder

const platformPath = path.resolve(__dirname,'contracts','Platform.sol');
const source = fs.readFileSync(platformPath,'utf8');  //Reads the file in platformPath
var input={
    language:'Solidity',
    sources:{
        'platform.sol':{
            content:source
        }
    },
    settings:{
        outputSelection:{
            '*':{
                '*':['*']
            }
        }
    }
};
console.log(JSON.parse(solc.compile(JSON.stringify(input))));
//const output = solc.compile(source,1).contracts;  //Compiles contracts and stores in output
//fs.ensureDirSync(buildPath);  //Checks if directory exists, if false it creates it
//fs.outputJsonSync(
    //path.resolve(buildPath,contract.replace(':','')+'.json'),   
  //  output[contract]
//);
