async function getData() {
    const url = `http://localhost:3000/api/products`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const data = await response.json();
      console.log(data);
      showData (data)


    } catch (error) {
      console.error(error.message);
    }
  }

  getData()

  function showData (products) {
    let container = document.getElementById(`product-container`)
    console.log(products);
    
    products.forEach(function (ele) {
        let product = document.createElement("div");
        let productImg = document.createElement("img");
        let productTitle = document.createElement("h3");
        let productDescription = document.createElement("p");
        let productPrice = document.createElement("p");
        product.classList.add("product-card");
        productPrice.classList.add("price")
        productImg.src = `${ele.image}`
        productTitle.innerText = `${ele.name}`
        productDescription.innerText = `${ele.description}`
        productPrice.innerText = `${ele.price}`
        product.appendChild(productImg)
        product.appendChild(productTitle)
        product.appendChild(productDescription)
        product.appendChild(productPrice)
        container.appendChild(product)
    })
  }