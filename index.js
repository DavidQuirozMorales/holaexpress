const express = require('express')

const app = express()

app.get('/', (request, response) => {
    response.send("Hello world from Express!")
    

})

/*
*
*FUNCIONALIDAD
*
*/
//http://localhost:3001
app.listen(3000, () =>{
    console.log('listening on port 3000')
})