// console.log("Hii");

// // localStorage.clear()

// // localStorage.setItem("name","ranil");
// // localStorage.setItem("name","wimal");
// // localStorage.setItem("name1","kamal");


// // localStorage.removeItem("name1");

// // let custName = localStorage.getItem("name");

// // console.log(custName);
// // --------------------------------------------------

// // localStorage.clear();


// localStorage.setItem("name","Ranil");
// localStorage.setItem("name1","Wimal");
// localStorage.setItem("name2","Kumal");
// localStorage.setItem("name3","Nimal");
// localStorage.setItem("name4","Oumal");

// localStorage.removeItem("name1");

// let cusName = localStorage.getItem("name3");
// console.log(cusName);

//localStorage.clear();



// // let customer ={
// //     name:"kamal",
// //     age:12,
// //     isActive:true
// // }

// // let stringCustomer = JSON.stringify(customer);

// // localStorage.setItem("customer",stringCustomer);

// // let retCustomer = localStorage.getItem("customer");

// // let jsonCustoemr = JSON.parse(retCustomer);

// // console.log(jsonCustoemr.name);

// // console.log(customer);

//localStorage.clear();


// let customer={
//     name:"Kamal",
//     age : 12,
//     isActive : true 

// }

// let stringCustomer = JSON.stringify(customer);
// localStorage.setItem("customer",stringCustomer);

// let retCustomer = localStorage.getItem("customer");

// let jsonCustomer = JSON.parse(retCustomer);

// console.log(jsonCustomer);

// console.log(customer);

//localStorage.clear();


//const customerList = JSON.parse(localStorage.getItem("customerList"));
function btnAddCustomerOnAction() {
  let customerList = JSON.parse(localStorage.getItem("customerList"));
 let customer = {
         id: document.getElementById("txtCustomerId").value,
         name: document.getElementById("txtCustomerName").value,
         age: document.getElementById("txtCustomerAge").value,
         address: document.getElementById("txtCustomerAddress").value
     }
     console.log(customer);

     customerList.push(customer);

     localStorage.setItem("customerList", JSON.stringify(customerList));
     btnLoadTableOnAction();

      alert("add customer")
 }

function btnSearchByIdOnAction(){
    let customerList = JSON.parse(localStorage.getItem("customerList"));

    let customerId = document.getElementById("txtCustomerId").value;

   let customer =  customerList.find(customer =>{
        return customer.id===document.getElementById("txtCustomerId").value;
    });

    document.getElementById().value = customer.name;
    document.getElementById().value = customer.name;
    document.getElementById().value = customer.name;

}

 function btnDeleteByIdOnAction() {
    let customerList = JSON.parse(localStorage.getItem("customerList"));

    customerList.findIndex(customer =>{
        return customer.id === customerId;

    })

 localStorage.setItem("customerList", JSON.stringify(customerList));
 console.log(customerList);
 }


 function btnClearStorageOnAction() {
 localStorage.clear();
}

function btnUpdateByIdOnAction() {

 let customerList = JSON.parse(localStorage.getItem("customerList"));

  let customer = customerList.find(customer => {
        return customer.id === document.getElementById("txtCustomerId").value
    });


    document.getElementById("txtCustomerName").value = customer.name;
    document.getElementById("txtCustomerAge").value = customer.age;
    document.getElementById("txtCustomerAddress").value = customer.address;

    localStorage.setItem("customerList",JSON.stringify(customerList));

    alert("search customer")
 }


function btnLoadTableOnAction(){
    let customerList = JSON.parse(localStorage.getItem("customerList"));

    let body = `
     <tr>
          <th>ID</th>
      <th>Name</th>
           <th>Age</th>
           <th>Address</th>
       </tr>
    `;

    customerList.array.forEach(element => {
          body+=`
               <tr>
                <td>${element.id}</td>
              <td>${element.name}</td>
             <td>${element.age}</td>
            <td>${element.address}</td>
            </tr>
        `
    });

    document.getElementById("tblCustomer").innerHTML = body;

    console.log(body);
    

}
// // ---------------------------------------------------

// // const customerList = JSON.parse(localStorage.getItem("customerList"));

// // function btnAddCustomerOnAction() {
// //     //  let customerList = JSON.parse(localStorage.getItem("customerList"));
// //     let customer = {
// //         id: document.getElementById("txtCustomerId").value,
// //         name: document.getElementById("txtCustomerName").value,
// //         age: document.getElementById("txtCustomerAge").value,
// //         address: document.getElementById("txtCustomerAddress").value
// //     }
// //     console.log(customer);

// //     customerList.push(customer);

// //     localStorage.setItem("customerList", JSON.stringify(customerList));
// //     btnLoadTableOnAction();

// //     // alert("add customer")
// // }

// function btnSearchByIdOnAction() {
//     let customerList = JSON.parse(localStorage.getItem("customerList"));

//     let customer = customerList.find(customer => {
//         return customer.id === document.getElementById("txtCustomerId").value
//     });


//     document.getElementById("txtCustomerName").value = customer.name;
//     document.getElementById("txtCustomerAge").value = customer.age;
//     document.getElementById("txtCustomerAddress").value = customer.address;


//     // alert("search customer")
// }

// function btnDeleteByIdOnAction() {
//     let customerList = JSON.parse(localStorage.getItem("customerList"));

//     let customerId = document.getElementById("txtCustomerId").value;

//     let index = customerList.findIndex(customer =>{
//         return customer.id === customerId;
//     })

//     customerList.splice(index,1);

//     localStorage.setItem("customerList", JSON.stringify(customerList));

//     console.log(customerList);
// }


// function btnUpdateByIdOnAction() {
//     alert("update customer");
// }

// function btnClearStorageOnAction() {
//     localStorage.clear();
// }

// function btnLoadTableOnAction() {
//     let customerList = JSON.parse(localStorage.getItem("customerList"));

//     let body = `
//       <tr>
//             <th>ID</th>
//             <th>Name</th>
//             <th>Age</th>
//             <th>Address</th>
//         </tr>
//     `;
//     customerList.forEach(element => {
//         body+=`
//                 <tr>
//             <td>${element.id}</td>
//             <td>${element.name}</td>
//             <td>${element.age}</td>
//             <td>${element.address}</td>
//         </tr>
//         `
//     });

//     document.getElementById("tblCustomer").innerHTML=body;

//     console.log(body);


// }



// -------------------------------------------------------------------------------------

// const apiKey = "fa66d55bfb24497380e85722243011"

// const baseUrl = "http://api.weatherapi.com/v1"

// fetch(`${baseUrl}/current.json?key=${apiKey}&q=panadura`).then(res => res.json()).then(data => {
//     // console.log(data);

//     document.getElementById("contentSection").innerHTML = `
//                 <div>
//                 <h1>${data.current.condition.text}</h1>
//                 <h1>${data.location.name}</h1>
//                 <img src="${data.current.condition.icon}" alt>
//                 <p>${data.location.country}</p>
//                 <p>${data.current.temp_c}</p>
//             </div>
//     `

// })

// function btnSearchOnAction() {
//     let txtUserSearchValue = document.getElementById("txtSearch").value;
//     console.log("Log 01");
    
//     fetch(`${baseUrl}/current.json?key=${apiKey}&q=${txtUserSearchValue}`).then(res => res.json()).then(data => {
//         console.log(data);
//         console.log("Log 02");

//         document.getElementById("contentSection").innerHTML = `
//                 <div>
//                 <h1>${data.current.condition.text}</h1>
//                 <h1>${data.location.name}</h1>
//                 <img src="${data.current.condition.icon}" alt>
//                 <p>${data.location.country}</p>
//                 <p>${data.current.temp_c}</p>
//             </div>
//     `

//     })
//     console.log("Log 03");

// }

// navigator.geolocation.getCurrentPosition((position) => {
//     console.log(position);
//     console.log(position.coords.latitude);
//     console.log(position.coords.longitude);


// });



// setTimeout(() => {
//     console.log("Negitinawa...");
//     setTimeout(() => {
//        console.log("Munasodanawa...");
//         setTimeout(() => {
//            console.log("badu list hadanawa");
//             setTimeout(() => {
//                 console.log("edumak dagannawa...");
//                 setTimeout(() => {
//                     console.log("Kadeta yanawa...");
//                     setTimeout(() => {
//                         console.log("Yaluwath ekka kathakaranawa.. ");
//                         setTimeout(() => {
//                             console.log("kadeta awa....");

//                             setTimeout(() => {
//                                 console.log("polime innawa....");

//                                 setTimeout(() => {
//                                     console.log("bill karanawaaa..");

//                                     setTimeout(() => {
//                                         console.log("gedara enawaaa...");

//                                         setTimeout(() => {
//                                             console.log("ammata badu tika denawa");

//                                             setTimeout(() => {
//                                                 console.log("END....");
//                                             }, 2000);
                                            
//                                         }, 5000);
                                        
//                                     }, 10000);
                                    
//                                 }, 5000);
                                
//                             }, 9000);
                            
//                         }, 5000);
                        
//                     }, 6000);
                    
//                 }, 50000);
                
//             }, 7500);
//         }, 8000);
//     }, 10000);
// }, 5000);


// // console.log();