console.log("Hii");

// localStorage.clear()

// localStorage.setItem("name","ranil");
// localStorage.setItem("name","wimal");
// localStorage.setItem("name1","kamal");


// localStorage.removeItem("name1");

// let custName = localStorage.getItem("name");

// console.log(custName);
// --------------------------------------------------

// localStorage.clear();

// let customer ={
//     name:"kamal",
//     age:12,
//     isActive:true
// }

// let stringCustomer = JSON.stringify(customer);

// localStorage.setItem("customer",stringCustomer);

// let retCustomer = localStorage.getItem("customer");

// let jsonCustoemr = JSON.parse(retCustomer);

// console.log(jsonCustoemr.name);

// console.log(customer);

// ---------------------------------------------------

const customerList =[];

function btnAddCustomerOnAction(){
    let customer = {
        id:document.getElementById("txtCustomerId").value,
        name:document.getElementById("txtCustomerName").value,
        age:document.getElementById("txtCustomerAge").value,
        address:document.getElementById("txtCustomerAddress").value
    }
    console.log(customer);

    customerList.push(customer);

    console.log(customerList);
    
    localStorage.setItem("customerList",JSON.stringify(customerList));

    // alert("add customer")
}

function btnSearchByIdOnAction(){
    alert("search customer")
}

function btnDeleteByIdOnAction(){
    alert("delete customer");
}

function btnUpdateByIdOnAction(){
    alert("update customer");
}

function btnClearStorageOnAction(){
    localStorage.clear();
}

function btnLoadTableOnAction(){
    alert("load table");
}