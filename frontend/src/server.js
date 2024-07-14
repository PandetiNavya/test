const express = require  ('express');
const path = require  ('path');

const app=express();

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'));
});

app.get('/api/users',(req,res)=>{
    const users=[{
        id:'123',
        name:'shaun',
    },{
        id:'234',
        name:'Bob',
    },
{
    id:'345',
    name:'Sue',
}];

res.json(users);
})

app.listen(8080,()=>{
    console.log('server is listening on port 8080');
});