const fs=require('fs');
fs.readFile('data.txt','utf8' ,(err,data)=>{
 if(err){
    console.error(err);
    return;
 }
 console.log(data);
});
fs.writeFile('data.txt','Hello World',(err)=>{
    if(err) console.error(err);
    else console.log('File written');
});
fs.appendFile('data.txt','\nNew line',(err)=>{
    if(err) console.error(err);
    else console.log('File Written');
});

fs.appendFile('data.txt','\nNew line', (err)=>{
    if(err) console.error(err);
});
    const fs= require('fs').promises;
    const fs=require('fs').promises;
    fs.readFile('data.txt','utf8')
    .then(data=>console.log(data))
    .catch(err=> console.error(err));   

    fs.appendFile('data.txt','Hello from Promises')
    .then(()=> console.log('Written'))
    .catch(err=> console.error(err));

    fs.appendFile('data.txt','\nMore data')
    .then(()=> console.log('Appended'));

    fs.unlink('data.txt')
    .then(()=> console.log('Deleted'));

    fs.access('data.txt')
    .then(()=> console.log('Exists'))
    .catch(()=> console.log('Does not exist'));

    const fs=require ('fs').promises;
    async function readFile() {
        async function readFile(){
            try{
                const data = await fs.readFile('data.txt','utf8');
                console.log(data);
            }
            catch(err){
                console.error(err);
            }
        }
        readFile();
        async function writeFile(){
            try{
                await fs.writeFile('data.txt','Async Await Example');
                console.log('File Written');
            }
            catch(err){
                console.error(err);
        }
    }
    async function appendFile(){
        await fs.appendFile('data.txt','\nAppending...');
    }
    async function deleteFile(){
        await fs.unlink('data.txt');
    }
    const fs= require('fs').promises;
    async function fileOps(){
        try{
            await fs.writtenFile('user.txt','John');
            const data=await fs.readFile('user.txt','utf8');
            console.log('Read:',data);
            await fs.appendFile('user.txt','\nDoe');
            await fs.unlink('user.txt');
        }
        catch(err){
            console.error(err);
        }
    }
    fileOps();
}