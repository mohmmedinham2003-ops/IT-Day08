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

const customerList = [];


function btnAddCustomerOnAction() {
    let customer = {
        id: document.getElementById("txtCustomerId").value,
        name: document.getElementById("txtCustomerName").value,
        age: document.getElementById("txtCustomerAge").value,
        address: document.getElementById("txtCustomerAddress").value
    }
    console.log(customer);

    customerList.push(customer);

    console.log(customerList);

    localStorage.setItem("customerList", JSON.stringify(customerList));

    // alert("add customer")

}

function btnSearchByIdOnAction() {
    alert("search customer")
}

function btnDeleteByIdOnAction() {
    alert("delete customer");
    let customer = {
        id: document.getElementById("txtCustomerId").value,
        name: document.getElementById("txtCustomerName").value,
        age: document.getElementById("txtCustomerAge").value,
        address: document.getElementById("txtCustomerAddress").value
    }

    localStorage.removeItem("customerList[id]");
}

function btnUpdateByIdOnAction() {
    //alert("update customer");
    let customer = {
        id: document.getElementById("txtCustomerId").value,
        name: document.getElementById("txtCustomerName").value,
        age: document.getElementById("txtCustomerAge").value,
        address: document.getElementById("txtCustomerAddress").value
    }
    console.log(customer);

    customerList.push(customer);

    console.log(customerList);

    localStorage.setItem("customerList", JSON.stringify(customerList));
}

function btnClearStorageOnAction() {
    localStorage.clear();
}

function btnLoadTableOnAction() {
    alert("load table");

    letTableList = document.getElementById("tblLoad");

    let body = "";

    customerList.forEach(element => {
        body += `
         <tr>
            <td>${element.id}</td>
            <td>${element.name}</td>
            <td>${element.age}</td>
            <td>${element.address}</td>
        </tr>
        
        `
    });


    tblLoad.innerHTML = body;
    console.log(tblLoad);


}