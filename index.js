const jsonServer = require('json-server')
const trackMServer = jsonServer.create()
const router = jsonServer.router('dataBase.json')
const middleware = jsonServer.defaults()
const port = 3001 || process.env.port
trackMServer.use(middleware)

trackMServer.use(jsonServer.bodyParser);

trackMServer.post('/userCred',(req,res)=>{
    const { email, username, password } = req.body
        const newUser = {
        email,
        username,
        password
    }
    
    const db = router.db;
    const userCred = db.get('userCred');
    userCred.push(newUser).write();
    console.log(userCred)
    res.json(newUser);
});



trackMServer.use(router)


trackMServer.listen(port,()=>{
    console.log("TracK M Server is now online, Waiting for request at port 3001");
})