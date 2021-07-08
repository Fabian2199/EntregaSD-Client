

var btnSend = document.getElementById("send")
var btnGet = document.getElementById("getP")
btnSend.addEventListener("click", postProduct, false);
btnGet.addEventListener("click", getProducts, false);

function  getProducts () {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://localhost:3000/products", true);
    var table = document.getElementById("product-list")
    table.innerHTML =""
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            const data = JSON.parse(xhttp.responseText)
                for (let index = 0; index < data.length; index++) {
                    var fila =document.createElement("tr");
                    var product =document.createElement("td");
                    product.innerHTML = data[index].product
                    fila.append(product)
                    var price = document.createElement("td")
                    price.innerHTML = data[index].price
                    fila.append(price)
                    var table = document.getElementById("product-list")
                    table.append(fila)
                
                }
           }  
    }
    xhttp.send();
}

function postProduct() {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", 'http://localhost:3000/products/add', true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function() { 
        if (this.readyState == 4 && this.status == 200) {
            
        }    
    }
    var productElement = document.getElementsByName("product")
    var priceElement = document.getElementsByName("price")
    var dato = {product: productElement[0].value , price: priceElement[0].value}
    var table = document.getElementById("product-list")
    table.innerHTML =""
    xhr.send(JSON.stringify(dato))
}