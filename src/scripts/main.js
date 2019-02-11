// When the user clicks the "Add Employee" button on your form, use the data they entered into the form to build a new employee object in your JavaScript file.
// POST the new employee object to your json-server database.
// When the POST request is complete, get a list of all the employees from the database and print them to the DOM



// New Employee Data Structure
// const newEmployee = {
//     firstName: "",
//     lastName: "",
//     email: "",
//     phoneNumber: "",
//     birthday: "",
//     department: ""
// }

// List String

// const printStirng = () => `<li>${newEmployee.firstName}</li><li>${newEmployee.lastName}</li><li>${newEmployee.email}</li><li>${newEmployee.phoneNumber}</li><li>${newEmployee.birthday}</li><li>${newEmployee.department}</li>`








// Add Event Listener for Save Button

document.querySelector(".save-btn").addEventListener("click", () => {
    
const fName = document.querySelector("#fname-input").value
const LName = document.querySelector("#lname-input").value
const eMail = document.querySelector("#email-input").value
const phoneNum = document.querySelector("#phone-input").value
const bDay = document.querySelector("#bday-input").value
const depart = document.querySelector("#department-input").value


    const newEmployee = {
        firstName: fName,
        lastName: LName,
        email: eMail,
        phoneNumber: phoneNum,
        birthday: bDay,
        department: depart
    }
// console.log(newEmployee)
// fetch("http://localhost:8088/employees", {
// method: "POST",
// headers: {
//     "Content-Type": "application/json"
// },
// body: JSON.stringify(newEmployee)
// }).then(() => {
//     fetch("http://localhost:8088/employees")
//     .then(response => response.json())
//     .then(employees => {
//         document.querySelector(".print-here").innerHTML = ""
//         employees.forEach(employee => {
//             document.querySelector(".print-here").innerHTML += buildHTMLString(employee.firstName, employee.lastName, employee.email, employee.phoneNumber, employee.birthday, employee.department)
            
            
            
            
//         })
// }) 



// })
 createEmployee(newEmployee).then(() => {
     printAllTasks()
 })




  
    // console.log(newEmployee)
})

