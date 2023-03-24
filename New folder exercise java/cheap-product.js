let store = [
    {
        item:"Corn Flakes",
        price:2.5,
    },
    {
         item:"Milk",
        price:1.2,
    },
    {
         item:"Chocolate",
        price:0.8,
    }

];
function getProductName(product){
    return product.item;
}

const cheapProducts = store.filter((product) => product.price < 2);
const cheapProductNames = cheapProducts.map(getProductName);
const allProductNames =store.map(getProductName);
console.log(cheapProductNames);
console.log(allProductNames);
console.log(cheapProducts);