const express = require('express');
const cors =  require('cors');
const collegeRoute = require('./routes/collegeRoute/collegeRoute');
const dbConnection = require('./dbConnection/dbConnection');
const app =  express();
const port = process.env.PORT || 5000;


// middleware:
app.use(express.json());
app.use(cors(
    {
        origin:['http://localhost:5173','https://college-corner.web.app']
    }
));

//routes:
 //health route:
 app.get('/',(req,res)=>{
    res.send({message:'college corner server is running'})
 });

 //college data routes:
 app.use('/colleges',collegeRoute)

 //database connection:
 dbConnection()

//global error handler:
app.all("*", (req, res, next) => {
    try {
        const error = new Error(`Your requested URL [${req.url}] is not valid`);
        next(error);
    } catch (error) {
        next(error)
    }
});

app.use((err, req, res, next) => {
    res.send({ Message: err.message })
});


app.listen(port, () => {
    console.log(`app listening on port ${port}`)
})