//npm shit

// for local installation
// npm install <packageName>

// for global installation
//npm install -g <packageName>


// in installing dependencies some dependencies migth require it to install other dependecies call "transative dependecies", these are run by that dependecy but wont show in your package.json file
const _ = require('lodash');

const items = [1,[2,[3,[4]]]];
const newItems = _.flattenDeep(items);

console.log(newItems);