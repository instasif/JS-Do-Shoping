const cartArray = [];

function display(cartProduct)
{
    let totalPrice = 0;

    const tableBody = document.getElementById('cart-products');
    tableBody.innerText = '';
    //table full set
    for(let i = 0; i < cartProduct.length; i++)
    {
        // console.log(cartArray[i].productName, cartArray[i].productPrice);
        const name = cartArray[i].productName;
        const price = cartArray[i].productPrice;

        //parseInt ken korte hoile bujhlam na oi halar to lage nai
        totalPrice = totalPrice + parseInt(price);

        const tr = document.createElement('tr');
        tr.innerHTML =`
            <th>${i + 1}</th>
            <td>${name}</td>
            <td>${price}</td>
        `;
        tableBody.appendChild(tr);
    }

    const tr = document.createElement('tr');
    tr.innerHTML = `
            <th>2</th>
            <td>Total Price:</td>
            <td>${totalPrice}</td>
    `;
    tableBody.appendChild(tr);
}
function addToCart(element)
{
    /*ninja technique*/
    // console.log(element.parentNode.parentNode.children);
    // console.log(element.parentNode.parentNode.children[0].innerText);
    // console.log(element.parentNode.parentNode.children[1].children[0].innerText);
    const productName = element.parentNode.parentNode.children[0].innerText;
    const productPrice = element.parentNode.parentNode.children[1].children[0].innerText;

    const productObj = {
        productName: productName,
        productPrice: productPrice
    }
    cartArray.push(productObj);

    document.getElementById('total-added-product').innerText = cartArray.length;
    display(cartArray);
}