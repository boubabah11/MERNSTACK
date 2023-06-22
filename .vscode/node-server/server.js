const express = require('express')

const app = express()//express application

const cors = require('cors');//importing for setting cross origin request headers to true

console.log(__dirname) // path till directory where the file is
console.log(__filename) // complete file path with name

//creating sub application - mounting, path mount
const admin = express(); //new admin application for admin requests
const adminRouter = require("./routes/adminRoute");

const userApp = express();
const userRouter = require("./routes/userRouter");

const prodApp = express();
const prodRouter = require("./routes/productRouter")

const cartApp = express();
const cartRouter = require("./routes/cartRouter")

//adding cors as middleware to top level of API so that cors is set to true on all endpoint
app.use(cors());

//to serve static files from the server we can use static middleware to configure our express application
app.use('/static', express.static('public'))

//json middle-ware for setting request content type to json in body
app.use(express.json({limit:'2mb', extended:false})); 

/*app.get('/user', (req, res) => {
    console.log(req.url)
    console.log(req.query)
    res.json({
        name : "Jason"
    })
})

//two ways to send the information in get method
//query string
app.get("/qstring",(req, res)=>{ //http://localhost:9000/qstring?name=Garrick&age=25
    let qs = req.query['name']; //req.query is the way to read data passed in url
    console.log(qs)
    if (qs) {
        res.send(qs + req.query['age'])    
    } else {
        res.send("No query string present!!!")    
    }
    
})

//route param
app.get("/rparam/:id",(req, res)=>{ //http://localhost:9000/userinfo/25
    let routeParam = req.params['id']; //req.params is the way to read data passed in url
    console.log(routeParam)
    if (routeParam) {
        res.send(`ID in route is ${routeParam} `)    
    } else {
        res.send("No route param present!!!")    
    }
    
})


//to match any method name - get, put, post, delete and patch
//app.all('/info', (req, res) => {
    //console.log(req)
    //res.send(JSON.stringify(req.rawHeaders))
   // res.sendFile(__dirname+"/public/index.html")
//})

// app.get('/public/welcome.js', (req, res) => {
//     res.sendFile(__dirname+"/public/welcome.js")
// })

// app.post('/info', (req, res) => {
//     res.sendFile(__dirname+"/index.html")
// })

app.get('/html', (req, res) => {
    res.send("<h1>Application Running Through Nodemon</h1>")
})
*/
//application mounting
app.use('/admin',admin);
admin.use("/",adminRouter);

app.use("/user",userApp);
userApp.use("/",userRouter);//localhost:9000/user/api/signinupuser

app.use("/product",prodApp);
prodApp.use("/",prodRouter);//localhost:9000/product/api/

app.use("/cart", cartApp);
cartApp.use("/", cartRouter);

// admin.get('/', (req, res)=>{
//     res.send("Hello Admin System!!!!")
// })

app.get('/', function (req, res) {
    res.send('Hello World from Express')
})

// app.get('*', function (req, res) {
//     res.send('API you"re looking for is still in progress....')
// })

app.get('/user', function (req, res)
{
    console.log(req.url)
    console,log(req.query)
    res.json(
        {
            name : "Boubacar"
        })
})

app.get('/html', function (req, res)
{
    res.send("<h1> Application Running Through nodemon</h1>")
})

app.get('/', function (req, res)
{
    res.send('Hello World from Express')
})

//////////////////////////////////////////////////////////////////////////////////////////////////////
//Task 
//create student static for static middle ware
app.use('/static', express.static('public')) // http://localhost:9000/student

app.get('/student', (req, res) => 
{
    console.log(req.url)
    console.log(req.query)
    res.json(
        {
            name : "Boubacar"
        })
})
//read student info using query string and route param

// query string
app.get("/qstring", (req, res) => //http://localhost:9000/qstring?student=BAH
{
    let qs = req.query['student']; //req.query is the way to read data passed in url
    console.log(qs)
    if (qs) 
    {
        res.send(qs)    
    } else 
    {
        res.send("No query string present!!!")    
    }
})

// route param
app.get("/rparam/:id", (req, res) => // http://localhost:9000/rparam/Boubacar
{
    let routeParam = req.params['id'];
    console.log(routeParam)

    if (routeParam) 
    {
        res.send(`ID in route is ${routeParam} `)    
    } else {
        res.send("No route param present!!!")    
    }

})
app.listen(9000)//localhost:9000(database)
console.log("Express is listening at : localhost:9000");

//create student router and app to serve request coming with studentinfo to serve


//practice the things covered in session