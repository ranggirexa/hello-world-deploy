const express  = require("express");
const app = express()
const port = 3000
app.use(express.json())

app.get('health-check', (request, response) => {
    response.json({
        message:'Health check sucess'
    })
})

app.listen(port, () =>{
  console.log(`server running at port ${port}`);  
})