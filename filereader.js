const fs = require('fs');

process.on('message',(msg)=>{
    console.log(msg);
    fs.readFile(msg,'utf8',function(err,data){
        if(err) throw err;
        process.send(data);
    });
});