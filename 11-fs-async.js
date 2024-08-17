const {readFile, writeFile} = require('fs');
console.log('start');
readFile('./content/first.txt','utf8', (err,result)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log(result);
    const first = result;

    readFile('./content/second.txt', 'utf8', (err, result)=>{
        if(err){
            console.log(err);
            return;
        }
        console.log(result);
        const second = result;

        writeFile('./content/result-async.txt',`heres the result: ${first}, ${second}`,{flag:'a'},(err,result)=>{
            if(err){
                console.log(err);
                return;
            }
            console.log('end');
        });
    })
})
console.log('start again');