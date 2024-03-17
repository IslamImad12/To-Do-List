// intialize variable 
let productNameInput = document.getElementById('productName');
let productCategoryInput = document.getElementById('productCategory');
let productDescInput = document.getElementById('productDesc');

let addBtn = document.getElementById('addBtn');
let updateBtn = document.getElementById('updateBtn');
let searchInput = document.getElementById('searchInput')
let ProductContainer = [];
if(localStorage.getItem('products')  != null ) {
    ProductContainer =JSON.parse(localStorage.getItem('products')); 
    displayData(ProductContainer);
}
// addProduct Function
function addProduct()
{
    let Product = {
        name:productNameInput.value,
        category:productCategoryInput.value,
        description:productDescInput.value,
    }
    ProductContainer.push(Product);
    localStorage.setItem('products' ,JSON.stringify(ProductContainer));
    displayProduct(ProductContainer);
    clearProducts();
}
// clear function
function clearProducts() {
    productNameInput.value = '';
    productCategoryInput.value = '';
    productDescInput.value = '';
}
// display function 
function displayProduct(ProductContainer)
{
    let cartona='';
    for (let i = 0; i < ProductContainer.length; i++) {
        cartona+= `
        <tr>
        <td>${ProductContainer[i].name}</td>
        <td>${ProductContainer[i].category}</td>
        <td>${ProductContainer[i].description}</td>
        <td><button class="btn btn-danger" onclick="deleteProduct(${i})">delete</button></td>
        </tr>
        `
        document.getElementById('tableBody').innerHTML = cartona;
    }
}
// delete product
function deleteProduct(productInedx){
    ProductContainer.splice(productInedx,1)
    displayProduct(ProductContainer);
}
// srearch
function searchProducts(term)
{
    let matchedProduct = [];
    for(let i=0;i < ProductContainer.length;i++) {
        if(ProductContainer[i].name.includes(term) === true) {
        matchedProduct.push(ProductContainer[i])
        }
    }
    displayProduct(matchedProduct);
}
searchProducts(searchInput.value)

function setForUpdate(){
    addBtn.classList.replace('d-block','d-none');
    updateBtn.classList.replace('d-none','d-block');
}
// const productNameRegex = /^[a-zA-Z0-9\s]+$/;
if (productNameInput.value.term() === '') {
    alert('Please enter a task title.');
    // return false; // Prevent form submission
}




















