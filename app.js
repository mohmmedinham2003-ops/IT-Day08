// localStorage.setItem("Name0","bimal");

// localStorage.setItem("Name1","kamal");

// localStorage.setItem("Name2","nuwan");
// localStorage.setItem("Name3","ranul");
// localStorage.clear();

// localStorage.setItem("Name4","rahul");

// localStorage.setItem("Name5","bahul");


// //localStorage.removeItem("Name0");
// //localStorage.removeItem("Name2");

// let cusName = localStorage.setItem("Name4");
// console.log(cusName);
localStorage.clear();

//step01------------
let customer = {
    name:"kamal",
    age : 12,
    isActive : true

}

let stringCustomer = JSON.stringify(customer);

localStorage.setItem("customer",stringCustomer);

let retCustomer = localStorage.getItem("customer");

let jsonCustomer = JSON.parse(retCustomer);

console.log(jsonCustomer);


