let carts=document.querySelectorAll('.addCart');

let products2 = [
	{
	name: "fresh orange",
	tag:"product1",
	price: 10.99,
	inCart:0
	},
	
	{
	name: "Yellow Flower Bedsheet (Queen Size)",
	tag:"product2",
	price: 65,
	inCart:0
    },
	
	{
	name: "Plain Square Pillow",
	tag:"product1",
	price: 40,
	inCart:0
    },
	
	{
	name: "Pattern Square Pillow",
	tag:"product1",
	price: 20,
	inCart:0
    },
	
	{
	name: "Plain Blanket",
	tag:"product1",
	price: 30,
	inCart:0
    },
	
	{
	name: "Pattern Blanket",
	tag:"product1",
	price: 30,
	inCart:0
    }
];


for(let i=0; i < carts.length; i++){
	carts[i].addEventListener('click', () => {
		cartNumbers(products2[i]);
		totalCost(products2[i]);
	})
}

function onloadCartNumbers(){
	let productNumbers = localStorage.getItem('cartNumbers');
	
	if(productNumbers){
		document.querySelector('.cart span').textContent = productNumbers;
	}
}



function cartNumbers(products2){
	let productNumbers = localStorage.getItem('cartNumbers');
	
	productNumbers = parseInt(productNumbers);
	
	if(productNumbers){
		localStorage.setItem('cartNumbers', productNumbers + 1);
		document.querySelector('.cart span').textContent = productNumbers + 1;
	}
	else{
		localStorage.setItem('cartNumbers', 1);
		document.querySelector('.cart span').textContent = 1;
	}
	
	setItems(products);
}

function setItems(product2){
	let cartItems=localStorage.getItem('productsInCart');
	cartItems = JSON.parse(cartItems);
	
	if(cartItems != null){
		
		if(cartItems[product.tag] == undefined){
			cartItems = {
				...cartItems,
				[product.tag]:product
			}
		}

		cartItems[product.tag].inCart += 1;
	}
	else{
		product.inCart =1;
	
	cartItems = {
		[product.tag]: product
	}
	
	}
	product.inCart = 1;
	localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}


function totalCost(product){
	
	let cartCost = localStorage.getItem('totalCost');
	
	if(cartCost != null){
		cartCost = parseInt(cartCost);
		localStorage.setItem("totalCost", cartCost + product.price);
	}
	else{
	  localStorage.setItem("totalCost",product.price);
	}
	
}

function displayCart(){
	let cartItems = localStorage.getItem("productsInCart");
	cartItems = JSON.parse(cartItems);
	
	let productContainer = document.querySelector(".products2");
	let cartCost = localStorage.getItem('totalCost');
	
	
	if(cartItems && productContainer){
	 productContainer.innerHTML = '';
		Object.values(cartItems).map(item =>{
			productContainer.innerHTML += ` 
			 <div class="product">
				<table>
				<tr>
				 <th><img src="${item.tag}.jpg" class="imgsize cartig"><br></th>
                
					<span>${item.name}</span><br></br>
			</div>

		<th><div class="price"> RM${item.price}.00</div></th>

		<th><div class="quantity">
		<span>${item.inCart}</span>			
		</div></th>
	    	<th><div class="total"> RM${item.inCart * item.price}.00</div></th>
			</tr>
			</table>
			`
		});
		
		productContainer.innerHTML +=`
			<div class="basketTotalContainer">
			
			<h4 class="BasketTotalTitle">
            <table>
			<tr>
            <th>Total Payment</th>
			</h4>
			<th><h4 class="basketTotal">RM${cartCost}.00</h4></th>
			<th><a href="checkout_form.html" class="btn">Checkout</a></th>
			</tr>
       `;
	}
}

onloadCartNumbers();
displayCart();