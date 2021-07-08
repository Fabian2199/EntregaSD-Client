const express = require('express')
const cors = require('cors');
const app = express()
const port = 3000

const products =[
	{product:'carro', price:'40000'},
	{product:'tv', price:'5000'}
];

app.use(cors())
app.use(express.json())
app.use(express.urlencoded())


app.get('/products', (req, res) => {
    
    res.send(products)
})

app.post('/products/add', (req, res) => {
	products.push({product:req.body.product , price: req.body.price})
	res.send("agregado")
   
})

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`)
})




